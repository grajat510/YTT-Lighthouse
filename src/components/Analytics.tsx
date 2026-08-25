"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function Analytics() {
  useEffect(() => {
    if (!GA_ID) return;

    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_ID);

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest?.("a[data-conversion]") as HTMLAnchorElement | null;
      if (!anchor || !window.gtag) return;
      const conversion = anchor.getAttribute("data-conversion");
      window.gtag("event", "conversion_click", {
        event_category: "engagement",
        event_label: conversion,
        link_url: anchor.href,
      });
      if (conversion === "apply") {
        window.gtag("event", "generate_lead", {
          event_category: "conversion",
          event_label: "apply_form",
        });
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
