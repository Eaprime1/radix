"use client";
import { useEffect } from "react";

export default function SystemRedirect() {
  useEffect(() => { window.location.replace("/#/system"); }, []);
  return null;
}
