/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { createContext, useContext, useEffect, useRef, ReactNode } from 'react';
import Lenis from '@studio-freight/lenis';

// Define Lenis instance type with all needed methods
export type LenisInstance = {
  on: (event: string, handler: (...args: any[]) => void) => void;
  off: (event: string, handler: (...args: any[]) => void) => void;
  raf: (time: number) => void;
  scroll: number;
  destroy: () => void;
  scrollTo: (
    target: number | string | HTMLElement,
    options?: { 
      immediate?: boolean;
      lock?: boolean;
      duration?: number;
      easing?: (t: number) => number;
      onComplete?: () => void;
    }
  ) => void;
} | null;

const LenisContext = createContext<LenisInstance>(null);

export const LenisProvider = ({ children }: { children: ReactNode }) => {
  const lenisRef = useRef<LenisInstance>(null);
  
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    }) as unknown as LenisInstance;
    
    lenisRef.current = lenis;
    
    function raf(time: number) {
      lenis?.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
    
    return () => lenis?.destroy();
  }, []);
  
  return (
    <LenisContext.Provider value={lenisRef.current}>
      {children}
    </LenisContext.Provider>
  );
};

export const useLenis = () => useContext(LenisContext);