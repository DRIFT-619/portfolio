"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="font-mono text-m text-muted-foreground hover:text-accent transition-colors mb-8 inline-block"
    >
      ← Back
    </button>
  );
}