"use client";
import Navigo from "navigo";
import { useState, useEffect, useCallback } from "react";

export type BbsView = "menu" | "boards" | "files" | "system";

let _router: Navigo | null = null;

function getRouter(): Navigo | null {
  if (typeof window === "undefined") return null;
  if (!_router) _router = new Navigo("/", { hash: true });
  return _router;
}

export function useNavigo() {
  const [view, setView] = useState<BbsView>("menu");

  useEffect(() => {
    const r = getRouter();
    if (!r) return;

    r.on({
      "/":        () => setView("menu"),
      "/boards":  () => setView("boards"),
      "/files":   () => setView("files"),
      "/system":  () => setView("system"),
    });

    r.resolve();

    return () => { r.destroy(); _router = null; };
  }, []);

  const navigate = useCallback((dest: BbsView) => {
    const r = getRouter();
    const path = dest === "menu" ? "/" : `/${dest}`;
    r?.navigate(path);
  }, []);

  return { view, navigate };
}
