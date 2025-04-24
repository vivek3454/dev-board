"use client";
export const dynamic = "force-dynamic";

import { Suspense } from "react";
import { Navbar } from "./_components/navbar";

const MarketingLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="h-full dark:bg-[#1F1F1F]">
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
      </Suspense>
      <main className="h-full pt-40">{children}</main>
    </div>
  );
};

export default MarketingLayout;
