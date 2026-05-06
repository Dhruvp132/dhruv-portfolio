"use client";

import { useEffect, useRef } from "react";

type Dot = {
  x: number;
  y: number;
};

const DOT_SPACING = 32;
const BASE_DOT_RADIUS = 1.1;
const GLOW_RADIUS = 128;
const MAX_DOT_GROWTH = 2.25;
const BASE_DOT_ALPHA = 0.22;
const CORE_GLOW_ALPHA = 0.72;
const OUTER_GLOW_ALPHA = 0.16;
const GLOW_THRESHOLD = 0.05;
const CURSOR_LERP = 0.16;
const GLOW_LERP = 0.12;
const PULSE_SPEED = 0.0028;
const PULSE_MIN = 0.12;
const PULSE_RANGE = 1.08;
const FALLBACK_BASE_DOT_RGB = "96, 72, 62";
const FALLBACK_GLOW_RGB = "245, 102, 57";

const toRgba = (rgb: string, alpha: number) => `rgba(${rgb}, ${alpha})`;

const buildDots = (width: number, height: number) => {
  const columns = Math.ceil(width / DOT_SPACING) + 2;
  const rows = Math.ceil(height / DOT_SPACING) + 2;
  const startX = (width - (columns - 1) * DOT_SPACING) / 2;
  const startY = (height - (rows - 1) * DOT_SPACING) / 2;
  const dots: Dot[] = [];

  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      dots.push({
        x: startX + column * DOT_SPACING,
        y: startY + row * DOT_SPACING,
      });
    }
  }

  return dots;
};

export default function DotFieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointerQuery = window.matchMedia("(hover: none), (pointer: coarse)");

    let frameId = 0;
    let viewportWidth = 0;
    let viewportHeight = 0;
    let dots: Dot[] = [];
    let baseDotRgb = FALLBACK_BASE_DOT_RGB;
    let glowDotRgb = FALLBACK_GLOW_RGB;
    let isStaticMode = false;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let glowTarget = 0;
    let glowCurrent = 0;

    const scheduleFrame = () => {
      if (frameId !== 0) {
        return;
      }

      frameId = window.requestAnimationFrame(renderFrame);
    };

    const syncCanvas = () => {
      viewportWidth = window.innerWidth;
      viewportHeight = window.innerHeight;

      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(viewportWidth * pixelRatio);
      canvas.height = Math.round(viewportHeight * pixelRatio);
      canvas.style.width = `${viewportWidth}px`;
      canvas.style.height = `${viewportHeight}px`;

      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const styles = getComputedStyle(document.documentElement);
      baseDotRgb =
        styles.getPropertyValue("--dot-base-rgb").trim() || FALLBACK_BASE_DOT_RGB;
      glowDotRgb =
        styles.getPropertyValue("--dot-glow-rgb").trim() ||
        styles.getPropertyValue("--accent-primary-rgb").trim() ||
        FALLBACK_GLOW_RGB;

      dots = buildDots(viewportWidth, viewportHeight);

      if (targetX === 0 && targetY === 0) {
        targetX = viewportWidth / 2;
        targetY = viewportHeight / 2;
        currentX = targetX;
        currentY = targetY;
      } else {
        targetX = Math.min(Math.max(targetX, 0), viewportWidth);
        targetY = Math.min(Math.max(targetY, 0), viewportHeight);
        currentX = Math.min(Math.max(currentX, 0), viewportWidth);
        currentY = Math.min(Math.max(currentY, 0), viewportHeight);
      }
    };

    const drawDots = (timestamp: number) => {
      context.clearRect(0, 0, viewportWidth, viewportHeight);
      const pulseProgress = (1 - Math.cos(timestamp * PULSE_SPEED)) / 2;
      const pulse = PULSE_MIN + pulseProgress * PULSE_RANGE;

      for (const dot of dots) {
        let glowIntensity = 0;

        if (!isStaticMode && glowCurrent > 0.001) {
          const dx = dot.x - currentX;
          const dy = dot.y - currentY;
          const distance = Math.hypot(dx, dy);
          const falloff = Math.max(0, 1 - distance / GLOW_RADIUS);

          glowIntensity = falloff * falloff * glowCurrent * pulse;
        }

        if (glowIntensity > GLOW_THRESHOLD) {
          context.beginPath();
          context.fillStyle = toRgba(glowDotRgb, glowIntensity * OUTER_GLOW_ALPHA);
          context.arc(
            dot.x,
            dot.y,
            BASE_DOT_RADIUS + glowIntensity * (MAX_DOT_GROWTH + 2.4),
            0,
            Math.PI * 2,
          );
          context.fill();
        }

        context.beginPath();
        context.fillStyle = toRgba(baseDotRgb, BASE_DOT_ALPHA);
        context.arc(dot.x, dot.y, BASE_DOT_RADIUS, 0, Math.PI * 2);
        context.fill();

        if (glowIntensity > 0.01) {
          context.beginPath();
          context.fillStyle = toRgba(
            glowDotRgb,
            Math.min(0.18 + glowIntensity * CORE_GLOW_ALPHA, 0.9),
          );
          context.arc(
            dot.x,
            dot.y,
            BASE_DOT_RADIUS + glowIntensity * MAX_DOT_GROWTH,
            0,
            Math.PI * 2,
          );
          context.fill();
        }
      }
    };

    function renderFrame(timestamp: number) {
      frameId = 0;

      if (!isStaticMode) {
        currentX += (targetX - currentX) * CURSOR_LERP;
        currentY += (targetY - currentY) * CURSOR_LERP;
        glowCurrent += (glowTarget - glowCurrent) * GLOW_LERP;
      }

      drawDots(timestamp);

      if (isStaticMode) {
        return;
      }

      const cursorSettled =
        Math.abs(targetX - currentX) < 0.35 && Math.abs(targetY - currentY) < 0.35;
      const glowSettled = Math.abs(glowTarget - glowCurrent) < 0.01;

      const pulseActive = glowCurrent > 0.01 || glowTarget > 0.01;

      if (!cursorSettled || !glowSettled || pulseActive) {
        scheduleFrame();
      }
    }

    const drawStaticFrame = () => {
      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
        frameId = 0;
      }

      drawDots(0);
    };

    const updateMode = () => {
      isStaticMode = motionQuery.matches || coarsePointerQuery.matches;

      if (isStaticMode) {
        glowTarget = 0;
        glowCurrent = 0;
        drawStaticFrame();
        return;
      }

      scheduleFrame();
    };

    const handlePointerMove = (event: MouseEvent) => {
      if (isStaticMode) {
        return;
      }

      targetX = event.clientX;
      targetY = event.clientY;
      glowTarget = 1;
      scheduleFrame();
    };

    const handlePointerLeave = () => {
      if (isStaticMode) {
        return;
      }

      glowTarget = 0;
      scheduleFrame();
    };

    const handleMouseOut = (event: MouseEvent) => {
      if (event.relatedTarget === null) {
        handlePointerLeave();
      }
    };

    const handleResize = () => {
      syncCanvas();

      if (isStaticMode) {
        drawStaticFrame();
        return;
      }

      scheduleFrame();
    };

    syncCanvas();
    updateMode();

    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("blur", handlePointerLeave);
    window.addEventListener("resize", handleResize, { passive: true });
    motionQuery.addEventListener("change", updateMode);
    coarsePointerQuery.addEventListener("change", updateMode);

    return () => {
      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("blur", handlePointerLeave);
      window.removeEventListener("resize", handleResize);
      motionQuery.removeEventListener("change", updateMode);
      coarsePointerQuery.removeEventListener("change", updateMode);
    };
  }, []);

  return <canvas ref={canvasRef} className="app-background" aria-hidden="true" />;
}
