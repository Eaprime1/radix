"use client";
import { useEffect } from "react";

export default function BoardsRedirect() {
  useEffect(() => { window.location.replace("/#boards"); }, []);
  return null;
}
