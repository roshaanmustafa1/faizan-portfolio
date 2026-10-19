const offsets: Record<string, string> = {
  up: "0 64px",
  down: "0 -48px",
  left: "-80px 0",
  right: "80px 0",
};

export function getEntranceFrames(style: string, reducedMotion: boolean): Keyframe[] {
  if (reducedMotion || style === "fade") return [{ opacity: 0 }, { opacity: 1 }];
  if (style === "zoom") return [{ opacity: 0, scale: "0.9", translate: "0 24px" }, { opacity: 1, scale: "1", translate: "0 0" }];
  if (style === "image-left" || style === "image-right") {
    const fromLeft = style === "image-left";
    return [
      { opacity: 0, translate: fromLeft ? "-56px 0" : "56px 0", clipPath: fromLeft ? "inset(0 65% 0 0)" : "inset(0 0 0 65%)" },
      { opacity: 1, translate: "0 0", clipPath: "inset(0 0 0 0)" },
    ];
  }
  return [{ opacity: 0, translate: offsets[style] ?? offsets.up }, { opacity: 1, translate: "0 0" }];
}

export function getEntranceTiming(duration?: string, delay?: string, reducedMotion = false) {
  const requestedDuration = Number(duration ?? 500);
  return {
    duration: reducedMotion ? 150 : Math.min(1100, Math.max(700, requestedDuration <= 600 ? requestedDuration + 400 : requestedDuration)),
    delay: reducedMotion ? 0 : Math.min(600, Math.max(0, Number(delay ?? 0) * 1.5)),
    easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  };
}
