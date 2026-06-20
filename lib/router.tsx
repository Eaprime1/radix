"use client";
import Navigo from "navigo";
import {
  useState,
  useEffect,
  useCallback,
  useContext,
  createContext,
  useRef,
  ReactNode,
} from "react";

export type BbsView = "menu" | "boards" | "files" | "system";

interface RouterContextValue {
  view: BbsView;
  navigate: (dest: BbsView) => void;
}

const RouterContext = createContext<RouterContextValue | null>(null);

export function RouterProvider({ children }: { children: ReactNode }) {
  const [view, setView] = useState<BbsView>("menu");
  const routerRef = useRef<Navigo | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const router = new Navigo("/", { hash: true });
    routerRef.current = router;

    router.on({
      "/":       () => setView("menu"),
      "/boards": () => setView("boards"),
      "/files":  () => setView("files"),
      "/system": () => setView("system"),
    });

    router.resolve();

    return () => {
      router.destroy();
      routerRef.current = null;
    };
  }, []);

  const navigate = useCallback((dest: BbsView) => {
    const path = dest === "menu" ? "/" : `/${dest}`;
    routerRef.current?.navigate(path);
  }, []);

  return (
    <RouterContext.Provider value={{ view, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useNavigo(): RouterContextValue {
  const ctx = useContext(RouterContext);
  if (!ctx) {
    throw new Error("useNavigo must be used within a RouterProvider");
  }
  return ctx;
}
