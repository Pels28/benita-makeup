"use client";

import { HeroUIProvider } from "@heroui/react";
import { ReactElement, ReactNode, Suspense } from "react";

interface ProviderProps {
  children: ReactNode | ReactElement;
}

const Provider = ({ children }: ProviderProps) => {
  return (
    <Suspense fallback={null}>
      <HeroUIProvider>{children}</HeroUIProvider>
    </Suspense>
  );
};

export default Provider;
