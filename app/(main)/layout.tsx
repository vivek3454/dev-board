"use client";
export const dynamic = "force-dynamic";

import { SearchCommand } from "@/components/search-command";
import { Spinner } from "@/components/spinner";
import { useConvexAuth } from "convex/react";
import { useRouter } from "next/navigation";
import { Navigation } from "./_components/navigation";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const router = useRouter();

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!isAuthenticated) {
    router.push("/");
    return;
  }

  return (
    <div className="h-full dark:bg-[#1F1F1F] flex">
      <Navigation />
      <main className="flex-1 h-full overflow-y-auto">
        <SearchCommand />
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
