"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas,Documents, & Plans. Unified. Welcome to{" "}
        <span className="underline">DevBoard</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        DevBoard is connected workspace where <br /> better, faster work
        happens.
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}

      {!isLoading && isAuthenticated && (
        <Button asChild className="rounded">
          <Link href="/documents">
            Enter DevBoard
            <ArrowRight className="size-4 ml-2" />
          </Link>
        </Button>
      )}

      {!isLoading && !isAuthenticated && (
        <SignInButton mode="modal">
          <Button className="rounded group" size="sm">
            Get DevBoard free
            <ArrowRight className="size-4 ml-1 group-hover:translate-x-1 transition-transform duration-100" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};
