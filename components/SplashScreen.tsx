"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface SplashScreenProps {
  onComplete?: () => void;
  onFadeOutStart?: () => void;
  duration?: number;
}

export default function SplashScreen({
  onComplete,
  onFadeOutStart,
  duration = 3500,
}: SplashScreenProps) {
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsAnimatingOut(true);
      onFadeOutStart?.();
    }, duration - 1000);

    const completeTimer = setTimeout(() => {
      onComplete?.();
    }, duration);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [duration, onComplete, onFadeOutStart]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center
        transition-all duration-1000 ease-in-out
        ${
          isAnimatingOut
            ? "opacity-0 scale-95 pointer-events-none"
            : "opacity-100 scale-100"
        }
      `}
    >
      <div className="flex items-center justify-center">
        {/* Logo Container with previous split animation */}
        <div className="relative w-24 h-24 md:w-40 md:h-40 lg:w-56 lg:h-56 shrink-0 z-20">
          <motion.div
            className="absolute inset-0"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
          >
            <Image
              src="/logo-updated.png"
              alt="Developers Day Logo Bottom"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
          <motion.div
            className="absolute inset-0"
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
          >
            <Image
              src="/logo-updated.png"
              alt="Developers Day Logo Top"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </div>

        {/* Text Container - expands like original */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "auto", opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
          className="relative overflow-hidden flex items-center z-10"
        >
          <div className="shrink-0">
            <p className="whitespace-nowrap text-lg md:text-2xl lg:text-3xl font-bold tracking-[0.3em] uppercase text-white">
              Developers Day 2026
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

