"use client";
import { useEffect } from "react";

export default function FilesRedirect() {
  useEffect(() => { window.location.replace("/#files"); }, []);
  return null;
}
