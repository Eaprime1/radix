"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BoardsRedirect() {
  const router = useRouter();
  useEffect(() => { router.replace("/#boards"); }, [router]);
  return null;
}
