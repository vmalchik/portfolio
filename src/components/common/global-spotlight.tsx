"use client";

import { useEffect, useRef } from "react";

// This component creates a spotlight effect on the screen that follows the mouse cursor.
// It uses a radial gradient to create the spotlight effect and adjusts its position based on mouse movement.
// The spotlight effect is achieved by applying a radial gradient background to a fixed div that covers the entire screen.
// The opacity of the spotlight is animated to create a smooth transition effect.
// The component uses the useRef and useEffect hooks from React to manage the spotlight's position and opacity.
// Adopted from https://ibelick.com/blog/create-modern-spotlight-effect-with-react-css

export const GlobalSpotlight = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spotlight = spotlightRef.current;
    if (!spotlight) return;

    const handleMouseMove = (e: MouseEvent) => {
      spotlight.style.background = `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
      spotlight.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      spotlight.style.opacity = "0";
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500 ease-out mix-blend-lighten"
      style={{
        opacity: 0,
        background: "transparent"
      }}
    />
  );
};
