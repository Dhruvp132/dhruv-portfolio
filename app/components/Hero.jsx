"use client";
import { useEffect, useRef, useState } from "react";

const MOBILE_LAYOUT_QUERY = "(max-width: 767px)";
const INTERACTIVE_CURSOR_QUERY = "(min-width: 768px) and (hover: hover) and (pointer: fine)";
const HERO_TITLE = "PRODUCT ENGINEER";
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

export default function Hero() {
  const containerRef = useRef(null);
  const titleBoundsRef = useRef(null);
  const animationFrameRef = useRef(0);
  const tiltRef = useRef({ x: 0, y: 0 });
  const previousPointerRef = useRef(null);
  const interactiveGlowRef = useRef(false);
  const detachOrientationRef = useRef(() => {});
  const requestMotionRef = useRef(async () => {});
  const [isMobileLayout, setIsMobileLayout] = useState(false);
  const [isInteractiveGlowActive, setIsInteractiveGlowActive] = useState(false);
  const [showMotionPrompt, setShowMotionPrompt] = useState(false);
  const [motionPromptState, setMotionPromptState] = useState("idle");

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const mobileQuery = window.matchMedia(MOBILE_LAYOUT_QUERY);
    const interactiveCursorQuery = window.matchMedia(INTERACTIVE_CURSOR_QUERY);
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const setGlow = (x, y) => {
      container.style.setProperty("--glow-x", `${x}px`);
      container.style.setProperty("--glow-y", `${y}px`);
    };

    const setInteractiveGlow = (nextValue) => {
      interactiveGlowRef.current = nextValue;
      setIsInteractiveGlowActive((currentValue) =>
        currentValue === nextValue ? currentValue : nextValue,
      );
    };

    const setAuroraFlow = (x, y) => {
      container.style.setProperty("--aurora-flow-x", x.toFixed(4));
      container.style.setProperty("--aurora-flow-y", y.toFixed(4));
    };

    const setGlowHome = () => {
      const rect = container.getBoundingClientRect();
      setGlow(rect.width / 2, rect.height * 0.42);
    };

    const setTilt = (x, y) => {
      tiltRef.current = { x, y };
      container.style.setProperty("--tilt-x", x.toFixed(4));
      container.style.setProperty("--tilt-y", y.toFixed(4));
    };

    const stopAurora = () => {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = 0;
    };

    const startAurora = () => {
      stopAurora();
      if (!mobileQuery.matches || reducedMotionQuery.matches) return;

      const animate = (time) => {
        const rect = container.getBoundingClientRect();
        const centerX = rect.width * 0.5;
        const centerY = rect.height * 0.42;
        const offsetX =
          Math.sin(time / 1800) * rect.width * 0.16 +
          Math.cos(time / 3300) * rect.width * 0.06 +
          tiltRef.current.x * rect.width * 0.08;
        const offsetY =
          Math.cos(time / 2200) * rect.height * 0.11 +
          Math.sin(time / 2900) * rect.height * 0.05 +
          tiltRef.current.y * rect.height * 0.06;

        setGlow(centerX + offsetX, centerY + offsetY);
        animationFrameRef.current = requestAnimationFrame(animate);
      };

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const detachOrientation = () => {
      detachOrientationRef.current();
      detachOrientationRef.current = () => {};
    };

    const attachOrientation = () => {
      if (!("DeviceOrientationEvent" in window) || reducedMotionQuery.matches) {
        return false;
      }

      detachOrientation();

      const handleOrientation = (event) => {
        const nextX = clamp((event.gamma ?? 0) / 25, -1, 1);
        const nextY = clamp(((event.beta ?? 0) * -1) / 35, -1, 1);
        setTilt(nextX, nextY);
      };

      window.addEventListener("deviceorientation", handleOrientation, true);
      detachOrientationRef.current = () => {
        window.removeEventListener("deviceorientation", handleOrientation, true);
      };

      return true;
    };

    requestMotionRef.current = async () => {
      const OrientationAPI = window.DeviceOrientationEvent;

      if (!OrientationAPI || typeof OrientationAPI.requestPermission !== "function") {
        const enabled = attachOrientation();
        setShowMotionPrompt(false);
        setMotionPromptState(enabled ? "enabled" : "blocked");
        return;
      }

      try {
        const permission = await OrientationAPI.requestPermission();
        const enabled = permission === "granted" && attachOrientation();

        setShowMotionPrompt(!enabled);
        setMotionPromptState(enabled ? "enabled" : "blocked");
      } catch {
        setMotionPromptState("blocked");
      }
    };

    const syncHeroMode = () => {
      const mobile = mobileQuery.matches;
      setIsMobileLayout(mobile);
      container.style.setProperty("--glow-size", mobile ? "340px" : "250px");
      setGlowHome();
      setAuroraFlow(0, 0);
      previousPointerRef.current = null;

      if (!mobile) {
        stopAurora();
        detachOrientation();
        setTilt(0, 0);
        setInteractiveGlow(false);
        setShowMotionPrompt(false);
        setMotionPromptState("idle");
        return;
      }

      if (reducedMotionQuery.matches) {
        stopAurora();
        detachOrientation();
        setTilt(0, 0);
        setShowMotionPrompt(false);
        setMotionPromptState("idle");
        return;
      }

      const needsPermission =
        "DeviceOrientationEvent" in window &&
        typeof window.DeviceOrientationEvent?.requestPermission === "function";

      startAurora();
      if (needsPermission) {
        detachOrientation();
        setMotionPromptState("idle");
        setShowMotionPrompt(true);
        return;
      }

      attachOrientation();
      setShowMotionPrompt(false);
    };

    const handleMouseMove = (event) => {
      if (!interactiveCursorQuery.matches || reducedMotionQuery.matches || mobileQuery.matches) {
        setInteractiveGlow(false);
        setAuroraFlow(0, 0);
        return;
      }

      const containerRect = container.getBoundingClientRect();
      const previousPointer = previousPointerRef.current;
      const deltaX = previousPointer ? clamp((event.clientX - previousPointer.x) / 48, -1, 1) : 0;
      const deltaY = previousPointer ? clamp((event.clientY - previousPointer.y) / 48, -1, 1) : 0;
      const relativeX = clamp(((event.clientX - containerRect.left) / containerRect.width - 0.5) * 2, -1, 1);
      const relativeY = clamp(((event.clientY - containerRect.top) / containerRect.height - 0.5) * 2, -1, 1);

      previousPointerRef.current = { x: event.clientX, y: event.clientY };

      const titleBounds = titleBoundsRef.current?.getBoundingClientRect();
      if (!titleBounds) return;

      const isInsideTitle =
        event.clientX >= titleBounds.left &&
        event.clientX <= titleBounds.right &&
        event.clientY >= titleBounds.top &&
        event.clientY <= titleBounds.bottom;

      const auroraFlowX = clamp(deltaX * 0.72 + relativeX * 0.28, -1, 1);
      const auroraFlowY = clamp(deltaY * 0.72 + relativeY * 0.28, -1, 1);

      if (!isInsideTitle) {
        setInteractiveGlow(false);
        setAuroraFlow(auroraFlowX * 0.4, auroraFlowY * 0.4);
        return;
      }

      setInteractiveGlow(true);
      setAuroraFlow(auroraFlowX, auroraFlowY);
      setGlow(event.clientX - containerRect.left, event.clientY - containerRect.top);
    };

    const handleWindowExit = (event) => {
      if (!event.relatedTarget) {
        setInteractiveGlow(false);
        setAuroraFlow(0, 0);
        previousPointerRef.current = null;
      }
    };

    syncHeroMode();

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleWindowExit);
    window.addEventListener("resize", syncHeroMode);
    mobileQuery.addEventListener("change", syncHeroMode);
    interactiveCursorQuery.addEventListener("change", syncHeroMode);
    reducedMotionQuery.addEventListener("change", syncHeroMode);

    return () => {
      stopAurora();
      detachOrientation();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleWindowExit);
      window.removeEventListener("resize", syncHeroMode);
      mobileQuery.removeEventListener("change", syncHeroMode);
      interactiveCursorQuery.removeEventListener("change", syncHeroMode);
      reducedMotionQuery.removeEventListener("change", syncHeroMode);
    };
  }, []);

  const enableMotionParallax = () => {
    requestMotionRef.current();
  };

  const showCursorGlow = !isMobileLayout && isInteractiveGlowActive;

  return (
    <section
      ref={containerRef}
      className="hero-surface relative mt-16 flex h-[150px] w-full items-center justify-center overflow-hidden"
    >
      <div
        ref={titleBoundsRef}
        className="absolute inset-0 flex items-center justify-center text-center leading-none select-none opacity-0 pointer-events-none"
        aria-hidden="true"
      >
        <h1 className="mb-1 whitespace-nowrap text-[8vw] font-extrabold md:text-[3.6vw] lg:text-[3vw]">
          {HERO_TITLE}
        </h1>
      </div>

      <div className="hero-layer hero-aurora-layer hero-aurora-layer-active" aria-hidden="true">
        <div className="hero-aurora-content absolute inset-0">

          <div
            className={`absolute inset-0 flex items-center justify-center text-center leading-none select-none ${
              isMobileLayout ? "hero-title-stack" : ""
            }`}
          >
            <h1 className="hero-glow-text mb-1 whitespace-nowrap text-[8vw] font-extrabold md:text-[3.6vw] lg:text-[3vw]">
              {HERO_TITLE}
            </h1>
          </div>
        </div>
      </div>

      <div
        className={`hero-layer hero-cursor-layer ${showCursorGlow ? "hero-cursor-layer-active" : ""}`}
        aria-hidden="true"
      >
        <div className="absolute inset-0 flex items-center justify-center text-center leading-none select-none">
          <h1 className="hero-base-text mb-1 whitespace-nowrap text-[8vw] font-extrabold text-white/10 md:text-[3.6vw] lg:text-[3vw]">
            {HERO_TITLE}
          </h1>
        </div>

        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{
            maskImage: `radial-gradient(
              var(--glow-size) circle at var(--glow-x) var(--glow-y),
              white,
              transparent 70%
            )`,
            WebkitMaskImage: `radial-gradient(
              var(--glow-size) circle at var(--glow-x) var(--glow-y),
              white,
              transparent 70%
            )`,
          }}
        >
          <div className="text-center leading-none select-none">
            <h1 className="mb-1 whitespace-nowrap text-[8vw] font-extrabold text-white md:text-[3.6vw] lg:text-[3vw]">
              {HERO_TITLE}
            </h1>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-4 z-20 px-6 text-center">
        <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-white/55 sm:text-[10px] sm:tracking-[0.26em]">
          Engineering scalable software products for modern businesses.
        </p>
      </div>

      {isMobileLayout && showMotionPrompt ? (
        <button
          type="button"
          onClick={enableMotionParallax}
          className="absolute bottom-36 z-30 rounded-full border border-white/10 bg-black/35 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70 backdrop-blur-xl transition hover:border-[var(--accent-primary)] hover:text-white"
        >
          {motionPromptState === "blocked" ? "Tilt access blocked" : "Enable tilt parallax"}
        </button>
      ) : null}

      {/* <div className="absolute bottom-16 w-full flex justify-center z-30">
        <button
          onClick={scrollToContact}
          className="group relative px-10 py-4 rounded-full bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(243,102,57,0.4)]"
        >
          <span
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-300"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(var(--accent-primary-rgb), 0.18), rgba(var(--accent-secondary-rgb), 0.24))",
            }}
          ></span>

          <span className="relative text-white tracking-widest font-semibold">
            GET IN TOUCH →
          </span>
        </button>
      </div> */}
    </section>
  );
}
