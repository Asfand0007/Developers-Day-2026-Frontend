"use client";

import { useEffect, useState } from "react";

export default function AnimatedToggle() {
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsToggled((prev) => !prev);
    }, 1500); // Toggle every 1.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <svg
      fill="none"
      height="48"
      viewBox="0 0 48 48"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        height="17"
        rx="8.5"
        stroke="white"
        strokeWidth="3"
        width="45"
        x="1.5"
        y="15.5"
      />
      <rect
        fill="#141413"
        height="12"
        rx="6"
        style={{
          transition: "x 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        width="12"
        x={isToggled ? "32" : "4"}
        y="18"
      />
    </svg>
  );
}
