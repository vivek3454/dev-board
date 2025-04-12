"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const scrolled = useScrollTop({ threshold: 10 });
  return (
    <header
      className={cn(
        "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        <Button className="rounded" variant="ghost">
          Login
        </Button>
        <Button className="rounded">Enter DevBoard</Button>
        <ModeToggle />
      </div>
    </header>
  );
};
