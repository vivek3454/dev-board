"use client";

export const dynamic = "force-dynamic";
// export const fetchCache = "force-no-store";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const DocumentsPage = () => {
  const { user } = useUser();
  const router = useRouter();
  const createDocument = useMutation(api.documents.createDocument);

  const handleCreateDocument = async () => {
    const promise = createDocument({
      title: "Untitled",
    }).then((documentId) => {
      router.push(`/documents/${documentId}`);
    });

    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New note created!",
      error: "Failed to create a new note",
    });
  };

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

      <Button onClick={handleCreateDocument}>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
};

export default DocumentsPage;
