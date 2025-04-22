import Image from "next/image";

export const Loading = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <Image
        className="dark:hidden"
        src="/logo.png"
        height={120}
        width={120}
        alt="Logo"
      />
      <Image
        className="hidden dark:block"
        src="/logo-dark.png"
        height={120}
        width={120}
        alt="Logo"
      />
    </div>
  );
};
