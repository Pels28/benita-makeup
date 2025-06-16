"use client";

import ScrollRestoration from "@/components/ScrollRestoration";
import { LenisProvider } from "@/context/LenisContext";
import { HeroUIProvider } from "@heroui/react";
import { ReactElement, ReactNode, Suspense } from "react";

interface ProviderProps {
  children: ReactNode | ReactElement;
}

const Provider = ({ children }: ProviderProps) => {
  return (
    <Suspense fallback={null}>
      <LenisProvider>
        <ScrollRestoration/>
      <HeroUIProvider>{children}</HeroUIProvider>
      </LenisProvider>
    </Suspense>
  );
};

export default Provider;
