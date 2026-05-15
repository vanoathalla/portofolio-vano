"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Don't run on touch-only devices
    if (window.matchMedia("(hover: none)").matches) return;

    let rafId: number;
    // Current rendered position (lerped)
    let cx = -100;
    let cy = -100;
    // Target position (raw mouse)
    let tx = -100;
    let ty = -100;

    const LERP = 0.18; // 0–1: lower = more lag

    const onMouseMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const tick = () => {
      // Lerp toward target
      cx += (tx - cx) * LERP;
      cy += (ty - cy) * LERP;
      cursor.style.transform = `translate(calc(${cx}px - 50%), calc(${cy}px - 50%))`;
      rafId = requestAnimationFrame(tick);
    };

    const onMouseOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, article, [data-cursor-hover]")) {
        cursor.classList.add("hovered");
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, article, [data-cursor-hover]")) {
        cursor.classList.remove("hovered");
      }
    };

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);
    rafId = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <div id="custom-cursor" ref={cursorRef} aria-hidden="true" />;
}
