"use client";

import { useEffect } from "react";

const NEKO_SIZE = 32;
const NEKO_SPEED = 10;
const DODGE_PADDING = 20;
const SPRITE_URL = "/oneko/oneko-dog.gif";
const PRIMARY_FINE_POINTER_QUERY = "(hover: hover) and (pointer: fine)";
const ANY_FINE_POINTER_QUERY = "(any-hover: hover) and (any-pointer: fine)";

const spriteSets = {
  idle: [[-3, -3]],
  alert: [[-7, -3]],
  scratchSelf: [
    [-5, 0],
    [-6, 0],
    [-7, 0],
  ],
  scratchWallN: [
    [0, 0],
    [0, -1],
  ],
  scratchWallS: [
    [-7, -1],
    [-6, -2],
  ],
  scratchWallE: [
    [-2, -2],
    [-2, -3],
  ],
  scratchWallW: [
    [-4, 0],
    [-4, -1],
  ],
  tired: [[-3, -2]],
  sleeping: [
    [-2, 0],
    [-2, -1],
  ],
  N: [
    [-1, -2],
    [-1, -3],
  ],
  NE: [
    [0, -2],
    [0, -3],
  ],
  E: [
    [-3, 0],
    [-3, -1],
  ],
  SE: [
    [-5, -1],
    [-5, -2],
  ],
  S: [
    [-6, -3],
    [-7, -2],
  ],
  SW: [
    [-5, -3],
    [-6, -1],
  ],
  W: [
    [-4, -2],
    [-4, -3],
  ],
  NW: [
    [-1, 0],
    [-1, -1],
  ],
} as const;

type SpriteName = keyof typeof spriteSets;

function pointInRect(px: number, py: number, rect: DOMRect) {
  return px >= rect.left && px <= rect.right && py >= rect.top && py <= rect.bottom;
}

function nearestPointOnRectBoundary(px: number, py: number, rect: DOMRect) {
  const closestX = Math.max(rect.left, Math.min(rect.right, px));
  const closestY = Math.max(rect.top, Math.min(rect.bottom, py));
  const dLeft = px - rect.left;
  const dRight = rect.right - px;
  const dTop = py - rect.top;
  const dBottom = rect.bottom - py;
  const dMin = Math.min(dLeft, dRight, dTop, dBottom);

  if (dMin === dLeft) return { x: rect.left, y: closestY };
  if (dMin === dRight) return { x: rect.right, y: closestY };
  if (dMin === dTop) return { x: closestX, y: rect.top };
  return { x: closestX, y: rect.bottom };
}

function getDodgeRects() {
  return Array.from(document.querySelectorAll("[data-oneko-dodge], #oneko-dodge")).map(
    (element) => {
      const rect = element.getBoundingClientRect();

      return new DOMRect(
        rect.left - DODGE_PADDING,
        rect.top - DODGE_PADDING,
        rect.width + DODGE_PADDING * 2,
        rect.height + DODGE_PADDING * 2,
      );
    },
  );
}

export default function OnekoMascot() {
  useEffect(() => {
    const primaryFinePointerQuery = window.matchMedia(PRIMARY_FINE_POINTER_QUERY);
    const anyFinePointerQuery = window.matchMedia(ANY_FINE_POINTER_QUERY);
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const smallViewportQuery = window.matchMedia("(max-width: 767px)");
    const hasFinePointer =
      primaryFinePointerQuery.matches || anyFinePointerQuery.matches;
    const isSmallTouchOnly = smallViewportQuery.matches && !hasFinePointer;

    if (isSmallTouchOnly || reducedMotionQuery.matches || document.getElementById("oneko")) {
      return;
    }

    const nekoEl = document.createElement("div");
    let nekoPosX = 32;
    let nekoPosY = 32;
    let mousePosX = window.innerWidth / 2;
    let mousePosY = window.innerHeight / 2;
    let frameCount = 0;
    let idleTime = 0;
    let idleAnimation: SpriteName | null = null;
    let idleAnimationFrame = 0;
    let forceSleep = false;
    let grabbing = false;
    let grabStop = true;
    let nudge = false;

    const getSprite = (name: SpriteName, frame: number) =>
      spriteSets[name][frame % spriteSets[name].length];

    const setSprite = (name: SpriteName, frame: number) => {
      const sprite = getSprite(name, frame);
      nekoEl.style.backgroundPosition = `${sprite[0] * NEKO_SIZE}px ${
        sprite[1] * NEKO_SIZE
      }px`;
    };

    const resetIdleAnimation = () => {
      idleAnimation = null;
      idleAnimationFrame = 0;
    };

    const moveNeko = (x: number, y: number) => {
      nekoPosX = Math.min(Math.max(16, x), window.innerWidth - 16);
      nekoPosY = Math.min(Math.max(16, y), window.innerHeight - 16);

      const dodgeRects = getDodgeRects();
      for (const rect of dodgeRects) {
        if (pointInRect(nekoPosX, nekoPosY, rect)) {
          const point = nearestPointOnRectBoundary(nekoPosX, nekoPosY, rect);
          nekoPosX = point.x;
          nekoPosY = point.y;
        }
      }

      nekoEl.style.left = `${nekoPosX - 16}px`;
      nekoEl.style.top = `${nekoPosY - 16}px`;
    };

    const idle = () => {
      idleTime += 1;

      if (
        idleTime > 10 &&
        Math.floor(Math.random() * 200) === 0 &&
        idleAnimation === null
      ) {
        const availableIdleAnimations: SpriteName[] = ["sleeping", "scratchSelf"];
        if (nekoPosX < 32) availableIdleAnimations.push("scratchWallW");
        if (nekoPosY < 32) availableIdleAnimations.push("scratchWallN");
        if (nekoPosX > window.innerWidth - 32) availableIdleAnimations.push("scratchWallE");
        if (nekoPosY > window.innerHeight - 32) availableIdleAnimations.push("scratchWallS");
        idleAnimation =
          availableIdleAnimations[
            Math.floor(Math.random() * availableIdleAnimations.length)
          ];
      }

      if (forceSleep) {
        idleAnimation = "sleeping";
      }

      switch (idleAnimation) {
        case "sleeping":
          if (idleAnimationFrame < 8 && nudge && forceSleep) {
            setSprite("idle", 0);
            break;
          }
          if (nudge) {
            nudge = false;
            resetIdleAnimation();
          }
          if (idleAnimationFrame < 8) {
            setSprite("tired", 0);
            break;
          }
          setSprite("sleeping", Math.floor(idleAnimationFrame / 4));
          if (idleAnimationFrame > 192 && !forceSleep) {
            resetIdleAnimation();
          }
          break;
        case "scratchWallN":
        case "scratchWallS":
        case "scratchWallE":
        case "scratchWallW":
        case "scratchSelf":
          setSprite(idleAnimation, idleAnimationFrame);
          if (idleAnimationFrame > 9) {
            resetIdleAnimation();
          }
          break;
        default:
          setSprite("idle", 0);
          return;
      }

      idleAnimationFrame += 1;
    };

    const frame = () => {
      frameCount += 1;

      if (grabbing) {
        if (grabStop) setSprite("alert", 0);
        return;
      }

      const dodgeRects = getDodgeRects();
      let targetX = mousePosX;
      let targetY = mousePosY;

      for (const rect of dodgeRects) {
        if (pointInRect(targetX, targetY, rect)) {
          const point = nearestPointOnRectBoundary(targetX, targetY, rect);
          targetX = point.x;
          targetY = point.y;
          break;
        }
      }

      const diffX = nekoPosX - targetX;
      const diffY = nekoPosY - targetY;
      const distance = Math.sqrt(diffX ** 2 + diffY ** 2);
      const normalizedDistance = distance > 1e-6 ? distance : 1;

      if (forceSleep && Math.abs(diffY) < NEKO_SPEED && Math.abs(diffX) < NEKO_SPEED) {
        moveNeko(mousePosX, mousePosY);
        idle();
        return;
      }

      if ((distance < NEKO_SPEED || distance < 48) && !forceSleep) {
        idle();
        return;
      }

      resetIdleAnimation();

      if (idleTime > 1) {
        setSprite("alert", 0);
        idleTime = Math.min(idleTime, 7);
        idleTime -= 1;
        return;
      }

      let direction = "";
      direction += diffY / normalizedDistance > 0.5 ? "N" : "";
      direction += diffY / normalizedDistance < -0.5 ? "S" : "";
      direction += diffX / normalizedDistance > 0.5 ? "W" : "";
      direction += diffX / normalizedDistance < -0.5 ? "E" : "";

      setSprite((direction || "idle") as SpriteName, frameCount);
      moveNeko(
        nekoPosX - (diffX / normalizedDistance) * NEKO_SPEED,
        nekoPosY - (diffY / normalizedDistance) * NEKO_SPEED,
      );
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (forceSleep) return;
      mousePosX = event.clientX;
      mousePosY = event.clientY;
    };

    const handleResize = () => {
      moveNeko(nekoPosX, nekoPosY);
    };

    const toggleSleep = () => {
      forceSleep = !forceSleep;
      nudge = false;
      if (!forceSleep) {
        resetIdleAnimation();
        return;
      }
      mousePosX = nekoPosX;
      mousePosY = nekoPosY;
    };

    nekoEl.id = "oneko";
    nekoEl.setAttribute("aria-hidden", "true");
    nekoEl.style.width = `${NEKO_SIZE}px`;
    nekoEl.style.height = `${NEKO_SIZE}px`;
    nekoEl.style.position = "fixed";
    nekoEl.style.left = `${nekoPosX - 16}px`;
    nekoEl.style.top = `${nekoPosY - 16}px`;
    nekoEl.style.backgroundImage = `url('${SPRITE_URL}')`;
    nekoEl.style.imageRendering = "pixelated";
    nekoEl.style.zIndex = "99999";
    nekoEl.style.userSelect = "none";
    nekoEl.style.touchAction = "none";
    setSprite("idle", 0);

    document.body.appendChild(nekoEl);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    nekoEl.addEventListener("dblclick", toggleSleep);

    const handleMouseDown = (event: MouseEvent) => {
      if (event.button !== 0) return;

      event.preventDefault();
      grabbing = true;
      nudge = false;

      let startX = event.clientX;
      let startY = event.clientY;
      let startNekoX = nekoPosX;
      let startNekoY = nekoPosY;
      let grabInterval = window.setTimeout(() => {}, 0);

      const handleDrag = (dragEvent: MouseEvent) => {
        const deltaX = dragEvent.clientX - startX;
        const deltaY = dragEvent.clientY - startY;
        const absDeltaX = Math.abs(deltaX);
        const absDeltaY = Math.abs(deltaY);

        if (absDeltaX > absDeltaY && absDeltaX > 10) {
          setSprite(deltaX > 0 ? "scratchWallW" : "scratchWallE", frameCount);
        } else if (absDeltaY > absDeltaX && absDeltaY > 10) {
          setSprite(deltaY > 0 ? "scratchWallN" : "scratchWallS", frameCount);
        }

        if (grabStop || Math.sqrt(deltaX ** 2 + deltaY ** 2) > 10) {
          grabStop = false;
          window.clearTimeout(grabInterval);
          grabInterval = window.setTimeout(() => {
            grabStop = true;
            startX = dragEvent.clientX;
            startY = dragEvent.clientY;
            startNekoX = nekoPosX;
            startNekoY = nekoPosY;
          }, 150);
        }

        moveNeko(startNekoX + dragEvent.clientX - startX, startNekoY + dragEvent.clientY - startY);
      };

      const handleMouseUp = () => {
        grabbing = false;
        nudge = true;
        resetIdleAnimation();
        window.clearTimeout(grabInterval);
        window.removeEventListener("mousemove", handleDrag);
        window.removeEventListener("mouseup", handleMouseUp);
      };

      window.addEventListener("mousemove", handleDrag);
      window.addEventListener("mouseup", handleMouseUp);
    };

    nekoEl.addEventListener("mousedown", handleMouseDown);
    const intervalId = window.setInterval(frame, 100);

    return () => {
      window.clearInterval(intervalId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      nekoEl.removeEventListener("dblclick", toggleSleep);
      nekoEl.removeEventListener("mousedown", handleMouseDown);
      nekoEl.remove();
    };
  }, []);

  return null;
}
