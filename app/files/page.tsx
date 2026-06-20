"use client";
import { useEffect } from "react";

export default function FilesRedirect() {
  useEffect(() => { window.location.replace("/#/files"); }, []);
import { useRouter } from "next/navigation";

export default function FilesRedirect() {
  const router = useRouter();
  useEffect(() => { router.replace("/#files"); }, [router]);
  return null;
}
