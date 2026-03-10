"use client";

import { type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        key={pathname}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="relative will-change-transform overflow-x-hidden"
        exit={{ opacity: 0, y: -18, scale: 0.985 }}
        initial={{ opacity: 0, y: 26, scale: 0.985 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Red sweep bar across top on route change */}
        <motion.div
          key={`${pathname}-bar`}
          animate={{ x: "0%" }}
          className="pointer-events-none absolute left-0 top-0 h-[1px] md:h-[2px] w-full bg-gradient-to-r from-transparent via-red-primary to-transparent"
          exit={{ x: "100%" }}
          initial={{ x: "-100%" }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
