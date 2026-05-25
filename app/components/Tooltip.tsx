"use client";

import {
  type ReactNode,
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

type TooltipSide = "top" | "right" | "bottom" | "left";

interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  side?: TooltipSide;
  disabled?: boolean;
  className?: string;
}

const OFFSET = 10;
const VIEWPORT_PADDING = 8;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export default function Tooltip({
  content,
  children,
  side = "top",
  disabled = false,
  className = "",
}: TooltipProps) {
  const tooltipId = useId();
  const triggerRef = useRef<HTMLSpanElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const closeTimerRef = useRef<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [resolvedSide, setResolvedSide] = useState<TooltipSide>(side);
  const [position, setPosition] = useState({ left: -9999, top: -9999 });

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  const updatePosition = useCallback(() => {
    const trigger = triggerRef.current;
    const tooltip = tooltipRef.current;

    if (!trigger || !tooltip) return;

    const triggerRect = trigger.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    let nextSide = side;
    let left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
    let top = triggerRect.top - tooltipRect.height - OFFSET;

    if (side === "bottom") {
      top = triggerRect.bottom + OFFSET;
    }

    if (side === "left") {
      left = triggerRect.left - tooltipRect.width - OFFSET;
      top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
    }

    if (side === "right") {
      left = triggerRect.right + OFFSET;
      top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
    }

    if (side === "top" && top < VIEWPORT_PADDING) {
      nextSide = "bottom";
      top = triggerRect.bottom + OFFSET;
    } else if (side === "bottom" && top + tooltipRect.height > window.innerHeight - VIEWPORT_PADDING) {
      nextSide = "top";
      top = triggerRect.top - tooltipRect.height - OFFSET;
    }

    if (side === "left" && left < VIEWPORT_PADDING) {
      nextSide = "right";
      left = triggerRect.right + OFFSET;
    } else if (side === "right" && left + tooltipRect.width > window.innerWidth - VIEWPORT_PADDING) {
      nextSide = "left";
      left = triggerRect.left - tooltipRect.width - OFFSET;
    }

    setResolvedSide(nextSide);
    setPosition({
      left: clamp(left, VIEWPORT_PADDING, window.innerWidth - tooltipRect.width - VIEWPORT_PADDING),
      top: clamp(top, VIEWPORT_PADDING, window.innerHeight - tooltipRect.height - VIEWPORT_PADDING),
    });
  }, [side]);

  useLayoutEffect(() => {
    if (!isOpen) return;

    updatePosition();
    const frameId = window.requestAnimationFrame(updatePosition);

    return () => window.cancelAnimationFrame(frameId);
  }, [isOpen, content, updatePosition]);

  useEffect(() => {
    if (!isOpen) return;

    const handleWindowChange = () => updatePosition();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleWindowChange);
    window.addEventListener("scroll", handleWindowChange, true);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("resize", handleWindowChange);
      window.removeEventListener("scroll", handleWindowChange, true);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, updatePosition]);

  const showTooltip = () => {
    if (disabled || !content) return;

    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    setIsOpen(true);
  };

  const hideTooltip = () => {
    closeTimerRef.current = window.setTimeout(() => {
      setIsOpen(false);
    }, 80);
  };

  const arrowClass =
    resolvedSide === "bottom"
      ? "left-1/2 -top-1 -translate-x-1/2"
      : resolvedSide === "left"
        ? "-right-1 top-1/2 -translate-y-1/2"
        : resolvedSide === "right"
          ? "-left-1 top-1/2 -translate-y-1/2"
          : "left-1/2 -bottom-1 -translate-x-1/2";

  return (
    <span
      ref={triggerRef}
      aria-describedby={isOpen ? tooltipId : undefined}
      className={`inline-flex ${className}`}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocusCapture={showTooltip}
      onBlurCapture={hideTooltip}
    >
      {children}
      {typeof document !== "undefined" && isOpen
        ? createPortal(
            <div
              ref={tooltipRef}
              id={tooltipId}
              role="tooltip"
              data-side={resolvedSide}
              className="pointer-events-none fixed z-[2147483001] max-w-[240px] rounded-lg border border-white/10 bg-zinc-950/95 px-3 py-2 text-xs leading-snug text-zinc-200 opacity-100 shadow-[0_16px_48px_rgba(0,0,0,0.45)] backdrop-blur-md transition-[opacity,transform] duration-150 motion-reduce:transition-none"
              style={{ left: position.left, top: position.top }}
            >
              {content}
              <span
                aria-hidden="true"
                className={`absolute h-2 w-2 rotate-45 border border-white/10 bg-zinc-950/95 ${arrowClass}`}
              />
            </div>,
            document.body,
          )
        : null}
    </span>
  );
}
