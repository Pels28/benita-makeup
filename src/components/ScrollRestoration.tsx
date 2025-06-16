"use client";

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useLenis } from '@/context/LenisContext';

// Define the scrollTo method type
type LenisScrollTo = (
  target: number | string | HTMLElement,
  options?: { 
    immediate?: boolean;
    lock?: boolean;
    duration?: number;
    easing?: (t: number) => number;
    onComplete?: () => void;
  }
) => void;

export default function ScrollRestoration() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis && typeof lenis.scrollTo === 'function') {
      (lenis.scrollTo as LenisScrollTo)(0, { immediate: true });
    }
  }, [pathname, searchParams, lenis]);

  return null;
}