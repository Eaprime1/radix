import type { Metadata } from "next";
import "@/styles/globals.css";
import { RouterProvider } from "@/lib/router";

export const metadata: Metadata = {
  title: "RADIX BBS",
  description: "the root beneath the root",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <RouterProvider>
          {children}
        </RouterProvider>
      </body>
    </html>
  );
}
