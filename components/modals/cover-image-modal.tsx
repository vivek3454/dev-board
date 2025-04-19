"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useCoverImage } from "@/hooks/use-cover-image";
import { useEdgeStore } from "@/lib/edgestore";
import { useMutation } from "convex/react";
import { useParams } from "next/navigation";
import { SingleImageDropzone } from "../upload/single-image";
import { UploaderProvider, UploadFn } from "../upload/uploader-provider";

export const CoverImageModal = () => {
  const { isOpen, onClose, url: coverImageUrl } = useCoverImage();
  const params = useParams();
  const update = useMutation(api.documents.update);
  const { edgestore } = useEdgeStore();

  const uploadFn = async ({
    file,
    onProgressChange,
    signal,
  }: Parameters<UploadFn>[0]) => {
    const res = await edgestore.publicFiles.upload({
      file,
      signal,
      onProgressChange,
      options: {
        replaceTargetUrl: coverImageUrl,
      },
    });

    await update({
      id: params.documentId as Id<"documents">,
      coverImage: res.url,
    });

    onClose();
    return res;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader className="border-b pb-3">
          <DialogTitle className="text-lg font-semibold">
            Cover Image
          </DialogTitle>
        </DialogHeader>
        <UploaderProvider uploadFn={uploadFn} autoUpload>
          <SingleImageDropzone
            // height={200}
            // width={200}
            dropzoneOptions={{
              maxSize: 1024 * 1024 * 5,
            }}
            className="w-full"
          />
        </UploaderProvider>
      </DialogContent>
    </Dialog>
  );
};
