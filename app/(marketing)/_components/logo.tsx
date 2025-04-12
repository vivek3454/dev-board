import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image className="dark:hidden" src="/logo.png" height="30" width="30" alt="Logo" />
      <Image className="hidden dark:block" src="/logo-dark.png" height="30" width="30" alt="Logo" />
      <p className={cn("font-semibold", font.className)}>DevBoard</p>
    </div>
  );
};
