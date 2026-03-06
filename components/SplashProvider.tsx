"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SplashScreen from "@/components/SplashScreen";

const SITE_SPLASH_KEY = "devday_site_splash_seen";

export default function SplashProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [showSplash, setShowSplash] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const [isOverlayFadingOut, setIsOverlayFadingOut] = useState(false);

  const handleSplashComplete = () => {
    setShowSplash(false);
    setShowOverlay(false);
  };

  const handleSplashFadeOut = () => {
    setIsOverlayFadingOut(true);
  };

  useEffect(() => {
    if (!pathname) return;

    const storageAvailable = typeof window !== "undefined" && typeof sessionStorage !== "undefined";
    const seen = storageAvailable && sessionStorage.getItem(SITE_SPLASH_KEY) === "1";

    if (seen) {
      setShowSplash(false);
      setShowOverlay(false);
    } else {
      if (storageAvailable) {
        sessionStorage.setItem(SITE_SPLASH_KEY, "1");
      }
      setShowSplash(true);
      setShowOverlay(true);
    }
  }, [pathname]);

  return (
    <>
      {showOverlay && (
        <div
          className={`fixed inset-0 z-[9000] bg-black/75 transition-opacity duration-1000 ease-in-out pointer-events-none ${
            isOverlayFadingOut ? "opacity-0" : "opacity-100"
          }`}
        />
      )}
      {children}
      {showSplash && (
        <SplashScreen
          onComplete={handleSplashComplete}
          onFadeOutStart={handleSplashFadeOut}
          duration={4000}
        />
      )}
    </>
  );
}

