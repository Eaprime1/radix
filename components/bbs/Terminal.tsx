"use client";
import { ReactNode } from "react";

interface TerminalProps {
  children: ReactNode;
  crt?: boolean;
  className?: string;
}

export default function Terminal({ children, crt = true, className = "" }: TerminalProps) {
  return (
    <div className={`${crt ? "crt" : ""} ${className}`}>
      <div className="screen">
        {children}
        <div className="terminal-footer">♓</div>
      </div>
    </div>
  );
}
