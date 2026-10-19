"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AnimationContextType {
  isLoaded: boolean;
  setIsLoaded: (loaded: boolean) => void;
}

const AnimationContext = createContext<AnimationContextType>({
  isLoaded: false,
  setIsLoaded: () => {},
});

export function AnimationProvider({ children }: { children: ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <AnimationContext.Provider value={{ isLoaded, setIsLoaded }}>
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimation() {
  return useContext(AnimationContext);
}
