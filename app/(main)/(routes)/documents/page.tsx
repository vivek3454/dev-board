"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";
import Image from "next/image";

const DocumentsPage = () => {
  const { user } = useUser();

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        className="block dark:hidden"
        src="/file.svg"
        width="300"
        height="300"
        alt="add-document"
      />
      <Image
        className="hidden dark:block"
        src="/file-dark.svg"
        width="300"
        height="300"
        alt="add-document"
      />

      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos;s DevBoard
      </h2>

      <Button>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
};

export default DocumentsPage;
