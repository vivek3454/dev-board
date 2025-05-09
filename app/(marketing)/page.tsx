"use client";
export const dynamic = "force-dynamic";

import { Suspense } from "react";
import { Footer } from "./_components/footer";
import { Heading } from "./_components/heading";
import { Heroes } from "./_components/heroes";

const MarketingPage = () => {
  return (
    <div className="min-h-full flex flex-col dark:bg-[#1F1F1F]">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px6 pb-10">
        <Suspense fallback={<div>Loading...</div>}>
          <Heading />
        </Suspense>
        <Heroes />
      </div>
      <Footer />
    </div>
  );
};

export default MarketingPage;
