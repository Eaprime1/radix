"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Terminal from "@/components/bbs/Terminal";
import StatusBar from "@/components/bbs/StatusBar";
import BoxPanel, { HRule } from "@/components/bbs/BoxPanel";
import FileList from "@/components/bbs/FileList";
import { SYSINFO } from "@/lib/sysinfo";

export default function FilesPage() {
  const router = useRouter();
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <Terminal>
      <StatusBar
        left={<><span style={{ cursor: "pointer" }} onClick={() => router.push("/")}>[ M ] MAIN</span></>}
        center={<span className="fg-bright-cyan">FILE AREAS</span>}
        right={<>{SYSINFO.files.length} files</>}
      />

      <BoxPanel title="FILE LIBRARY" style="double" width={78}>
        <FileList
          files={SYSINFO.files}
          onSelect={(f) => setSelected(f.id)}
        />
        <HRule width={78} />
        <div className="prompt-line">
          {selected !== null ? (
            <>
              <span className="fg-bright-yellow">File #{selected} selected — </span>
              <span className="fg-bright-green">[D] Download  </span>
              <span className="fg-white">  [V] View info  </span>
            </>
          ) : (
            <span className="fg-white">Select a file to download</span>
          )}
          <span
            className="fg-bright-red"
            style={{ marginLeft: "auto", cursor: "pointer" }}
            onClick={() => router.push("/")}
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
    </Terminal>
  );
}
