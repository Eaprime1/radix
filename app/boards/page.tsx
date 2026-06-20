"use client";
import { useEffect } from "react";

export default function BoardsRedirect() {
  useEffect(() => { window.location.replace("/#/boards"); }, []);
import { useRouter } from "next/navigation";

export default function BoardsRedirect() {
  const router = useRouter();
  useEffect(() => { router.replace("/#boards"); }, [router]);
  return null;
}
