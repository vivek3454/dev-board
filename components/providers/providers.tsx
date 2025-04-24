"use client";

import { ReactNode, Suspense } from "react";
import { Loading } from "../loading";
import { ConvexClientProvider } from "./convex-provider";
import { EdgeStoreProvider } from "@/lib/edgestore";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "../ui/sonner";
import { ModalProvider } from "./modal-provider";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<Loading />}>
      <ConvexClientProvider>
        <EdgeStoreProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="devboard-theme"
          >
            {children}
            <Toaster position="top-center" />
            <ModalProvider />
          </ThemeProvider>
        </EdgeStoreProvider>
      </ConvexClientProvider>
    </Suspense>
  );
}
