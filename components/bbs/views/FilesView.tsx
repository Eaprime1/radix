"use client";
import { useState } from "react";
import StatusBar from "@/components/bbs/StatusBar";
import BoxPanel, { HRule } from "@/components/bbs/BoxPanel";
import FileList, { FileEntry } from "@/components/bbs/FileList";
import { SYSINFO } from "@/lib/sysinfo";
import { BbsView } from "@/lib/router";

type FileAction = "download" | "view" | null;

interface Props { navigate: (v: BbsView) => void; }

export default function FilesView({ navigate }: Props) {
  const [selected, setSelected] = useState<FileEntry | null>(null);
  const [action, setAction] = useState<FileAction>(null);

  return (
    <>
      <StatusBar
        left={<><StatusBar.Key>◄ MAIN</StatusBar.Key> <span style={{ cursor: "pointer" }} onClick={() => navigate("menu")}>[ M ]</span></>}
        center={<span className="fg-bright-cyan">FILE AREAS</span>}
        right={<>{SYSINFO.files.length} files</>}
      />

      <BoxPanel title="FILE LIBRARY" style="double" width={78}>
        <FileList files={SYSINFO.files} onSelect={(f) => { setSelected(f); setAction(null); }} />
        <HRule width={78} />
        <div className="prompt-line" style={{ flexWrap: "wrap", gap: "0.5ch" }}>
          {selected !== null ? (
            <>
              <span className="fg-bright-yellow">#{selected.id} {selected.name} — </span>
              <span
                className="fg-bright-green"
                style={{ cursor: "pointer" }}
                onClick={() => setAction("download")}
              >[D] Download</span>
              <span className="fg-white">  </span>
              <span
                className="fg-bright-cyan"
                style={{ cursor: "pointer" }}
                onClick={() => setAction("view")}
              >[V] View info</span>
              {action === "download" && (
                <span className="fg-bright-black"> — transfers active when telegard bridge is live</span>
              )}
              {action === "view" && (
                <span className="fg-white"> — {selected.desc} ({selected.size})</span>
              )}
            </>
          ) : (
            <span className="fg-white">Select a file</span>
          )}
          <span
            className="fg-bright-red"
            style={{ marginLeft: "auto", cursor: "pointer" }}
            onClick={() => navigate("menu")}
          >
            [Q] Back
          </span>
        </div>
      </BoxPanel>

      <StatusBar
        left={<>Total: <StatusBar.Key>496K</StatusBar.Key></>}
        center={<span className="fg-bright-yellow">NEW files marked [NEW]</span>}
        right={<>Ratio: <StatusBar.Key>free</StatusBar.Key></>}
      />
    </>
  );
}
