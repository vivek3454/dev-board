"use client";

import { useEdgeStore } from "@/lib/edgestore";
import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { useTheme } from "next-themes";

import { createHighlighter } from "@/shiki.bundle";

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
}

const Editor = ({ onChange, initialContent, editable }: EditorProps) => {
  const { resolvedTheme } = useTheme();
  const { edgestore } = useEdgeStore();

  const handleUpload = async (file: File) => {
    const res = await edgestore.publicFiles.upload({
      file,
    });

    return res.url;
  };

  const editor: BlockNoteEditor = useCreateBlockNote({
    codeBlock: {
      defaultLanguage: "javascript",
      supportedLanguages: {
        javascript: { name: "JavaScript", aliases: ["js"] },
        typescript: { name: "TypeScript", aliases: ["ts"] },
        html: { name: "HTML" },
        css: { name: "CSS" },
      },
      createHighlighter: () =>
        createHighlighter({
          themes: ["vitesse-dark", "dracula", "monokai"],
          langs: [],
        }),
    },
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,
    uploadFile: handleUpload,
  });

  const onChangeInEditor = async () => {
    onChange(JSON.stringify(editor.document));
  };

  return (
    <BlockNoteView
      editor={editor}
      editable={editable}
      onChange={onChangeInEditor}
      theme={resolvedTheme === "dark" ? "dark" : "light"}
    />
  );
};

export default Editor;
