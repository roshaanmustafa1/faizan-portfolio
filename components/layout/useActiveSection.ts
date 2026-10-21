"use client";

import { useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  let frame = 0;
  const scheduleUpdate = () => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(onChange);
  };

  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate);
  window.addEventListener("hashchange", scheduleUpdate);
  window.addEventListener("popstate", scheduleUpdate);

  return () => {
    cancelAnimationFrame(frame);
    window.removeEventListener("scroll", scheduleUpdate);
    window.removeEventListener("resize", scheduleUpdate);
    window.removeEventListener("hashchange", scheduleUpdate);
    window.removeEventListener("popstate", scheduleUpdate);
  };
}

export function useActiveSection(sectionIds: readonly string[]) {
  return useSyncExternalStore(
    subscribe,
    () => {
      let activeHash = "";
      const atBottom =
        window.scrollY > 0 &&
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && (section.getBoundingClientRect().top <= 120 || atBottom)) {
          activeHash = `#${id}`;
        }
      }

      return activeHash;
    },
    () => "",
  );
}
