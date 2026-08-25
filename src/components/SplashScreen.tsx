"use client";

import { useEffect, useState } from "react";

const ENTER_MS = 700;
const HOLD_MS = 2200;
const FADE_MS = 500;

function isAdsTraffic() {
  if (typeof window === "undefined") return false;
  const params = new URLSearchParams(window.location.search);
  if (params.get("gad") === "1") return true;
  if (params.get("gclid")) return true;
  const utm = params.get("utm_medium")?.toLowerCase();
  if (utm === "cpc" || utm === "ppc" || utm === "paid") return true;
  if (params.get("utm_source")?.toLowerCase() === "google") return true;
  return false;
}

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [entered, setEntered] = useState(false);
  const [breathing, setBreathing] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (isAdsTraffic()) {
      setVisible(false);
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    const enterTimer = setTimeout(() => setEntered(true), 30);
    const breatheTimer = setTimeout(() => setBreathing(true), ENTER_MS);
    const fadeTimer = setTimeout(() => setFading(true), HOLD_MS);
    const removeTimer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, HOLD_MS + FADE_MS);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(breatheTimer);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#f7f4ee] transition-opacity duration-500 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <img
        src="/splash-meditation.png"
        alt="Light House"
        width={1330}
        height={1182}
        className={`h-auto w-40 md:w-56 ${
          breathing
            ? "animate-breathe"
            : `transition-all duration-700 ease-out ${entered ? "scale-100 opacity-100" : "scale-90 opacity-0"}`
        }`}
      />
    </div>
  );
}
