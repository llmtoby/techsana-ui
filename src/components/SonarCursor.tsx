"use client";

import { useEffect, useRef, useCallback } from "react";

const MAX_RINGS = 5;

export default function SonarCursor() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = useCallback((e: MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;

    // Disabled on touch devices
    if ("ontouchstart" in window) return;

    // Limit active rings
    if (container.childElementCount >= MAX_RINGS) {
      container.firstElementChild?.remove();
    }

    const ring = document.createElement("div");
    ring.style.cssText = `
      position: fixed;
      left: ${e.clientX}px;
      top: ${e.clientY}px;
      width: 20px;
      height: 20px;
      margin-left: -10px;
      margin-top: -10px;
      border-radius: 50%;
      border: 1px solid rgba(63, 208, 255, 0.4);
      pointer-events: none;
      animation: sonar 1s ease-out forwards;
    `;
    container.appendChild(ring);

    ring.addEventListener("animationend", () => ring.remove());
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [handleClick]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[9998]"
    />
  );
}
