"use client";
import { useState, useEffect, KeyboardEvent } from "react";

interface PromptProps {
  label: string;
  options?: string;
  onSubmit?: (value: string) => void;
  autoFocus?: boolean;
  maxLength?: number;
}

export default function Prompt({ label, options, onSubmit, autoFocus, maxLength = 40 }: PromptProps) {
  const [value, setValue] = useState("");

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit?.(value);
      setValue("");
    }
  };

  return (
    <div className="prompt-line">
      <label className="fg-bright-yellow">{label}</label>
      {options && <span className="fg-white">[{options}]</span>}
      <span className="fg-bright-yellow">:</span>
      <input
        className="prompt-input"
        aria-label={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKey}
        autoFocus={autoFocus}
        maxLength={maxLength}
        spellCheck={false}
        autoComplete="off"
      />
      <span className="cursor" />
    </div>
  );
}

export function MorePrompt({ onContinue, onQuit }: { onContinue: () => void; onQuit: () => void }) {
  useEffect(() => {
    const handler = (e: globalThis.KeyboardEvent) => {
      if (e.key === " " || e.key === "Enter") { e.preventDefault(); onContinue(); }
      if (e.key === "q" || e.key === "Q") onQuit();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onContinue, onQuit]);

  return (
    <div className="prompt-line">
      <span className="fg-bright-yellow">── More? </span>
      <span
        className="fg-bright-cyan"
        style={{ cursor: "pointer" }}
        onClick={onContinue}
      >[Space/Enter]</span>
      <span className="fg-white"> Continue  </span>
      <span
        className="fg-bright-red"
        style={{ cursor: "pointer" }}
        onClick={onQuit}
      >[Q]</span>
      <span className="fg-white"> Quit</span>
    </div>
  );
}
