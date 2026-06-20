"use client";
import { useEffect } from "react";

export default function SystemRedirect() {
  useEffect(() => { window.location.replace("/#/system"); }, []);
import { useRouter } from "next/navigation";

export default function SystemRedirect() {
  const router = useRouter();
  useEffect(() => { router.replace("/#system"); }, [router]);
  return null;
}
