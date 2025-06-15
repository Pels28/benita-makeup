"use client";

import { useLenis } from "@studio-freight/react-lenis";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface ParallaxImageProps {
  alt: string;
  src: string;
}

const ParallaxImage = ({ src, alt }: ParallaxImageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const targetY = useRef(0);
  const currentY = useRef(0);

  useLenis(({  }) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
  
    
    // Only apply parallax when section is above viewport
    if (rect.top > 0) {
      targetY.current = 0;
      return;
    }
    
    // Calculate how far above the viewport we are
    const distanceAbove = Math.min(0, rect.top);
    // Apply parallax effect (reduced intensity)
    targetY.current = distanceAbove * 0.15; // Reduced from 0.2 to make it more subtle
  });

  useEffect(() => {
    const animate = () => {
      // Smooth the movement with lerp
      currentY.current += (targetY.current - currentY.current) * 0.1;
      
      if (containerRef.current) {
        containerRef.current.style.transform = `translate3d(0, ${currentY.current}px, 0) scale(1.25)`;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden"
      style={{
        willChange: "transform",
      }}
    >
      <Image
        alt={alt}
        src={src}
        fill
        className="object-cover"
        style={{
          transform: "scale(1.25)",
          willChange: "transform"
        }}
      />
    </div>
  );
};

export default ParallaxImage;