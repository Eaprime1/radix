"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Terminal from "@/components/bbs/Terminal";
import StatusBar from "@/components/bbs/StatusBar";
import BoxPanel from "@/components/bbs/BoxPanel";
import Menu, { MenuItem } from "@/components/bbs/Menu";
import { RadixSplash, NodeInfo, BlockBar } from "@/components/bbs/ANSIArt";
import Prompt from "@/components/bbs/Prompt";
import { SYSINFO } from "@/lib/sysinfo";

const MENU_ITEMS: MenuItem[] = [
  { key: "M", label: "Message Boards" },
  { key: "F", label: "File Areas" },
  { key: "S", label: "System Info" },
  { key: "W", label: "Who's Online" },
  { key: "D", label: "Doors / Games" },
  { key: "U", label: "User Settings" },
  { key: "G", label: "Goodbye / Logoff" },
];

function useTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function MainMenu() {
  const router = useRouter();
  const time = useTime();
  const [log, setLog] = useState<string[]>([]);

  const handleSelect = (item: MenuItem) => {
    const key = item.key.toLowerCase();
    if (key === "m") router.push("/boards");
    else if (key === "f") router.push("/files");
    else if (key === "s") router.push("/system");
    else setLog((l) => [...l, `[${item.key}] ${item.label} — coming soon`]);
  };

  return (
    <Terminal>
      {/* Top status bar */}
      <StatusBar
        left={<><StatusBar.Key>RADIX BBS</StatusBar.Key><StatusBar.Sep />Node 1</>}
        center={<span className="fg-bright-yellow">{SYSINFO.tagline}</span>}
        right={<><StatusBar.Key>{time}</StatusBar.Key><StatusBar.Sep />SysOp: {SYSINFO.sysop}</>}
      />

      {/* Splash */}
      <RadixSplash />
      <BlockBar color="var(--ansi-blue)" />

      {/* Welcome */}
      <div style={{ textAlign: "center", padding: "0.4em 0", fontFamily: "var(--font-terminal)" }}>
        <div className="fg-bright-white glow-white">{SYSINFO.welcome}</div>
        <div className="fg-white" style={{ fontSize: "var(--font-size-sm)" }}>
          {SYSINFO.software} &nbsp;│&nbsp; {SYSINFO.location}
        </div>
      </div>

      <BlockBar color="var(--ansi-blue)" />

      {/* Main menu */}
      <BoxPanel title="MAIN MENU" style="double" width={78}>
        <div style={{ padding: "0.5em 0" }}>
          <Menu items={MENU_ITEMS} columns={2} onSelect={handleSelect} />
        </div>
      </BoxPanel>

      {/* Activity log */}
      {log.length > 0 && (
        <div style={{ padding: "0.3em 1ch" }}>
          {log.slice(-3).map((l, i) => (
            <div key={i} className="fg-bright-black" style={{ fontSize: "var(--font-size-sm)" }}>{l}</div>
          ))}
        </div>
      )}

      {/* Command prompt */}
      <Prompt
        label="Main Board Command"
        options="M F S W D U G ?"
        onSubmit={(v) => {
          const found = MENU_ITEMS.find(i => i.key.toLowerCase() === v.trim().toLowerCase());
          if (found) handleSelect(found);
          else setLog(l => [...l, `Unknown command: ${v}`]);
        }}
        autoFocus
      />

      {/* Bottom status bar */}
      <StatusBar
        left={<>Calls: <StatusBar.Key>1,144</StatusBar.Key></>}
        center={<>Msgs: <StatusBar.Key>412</StatusBar.Key><StatusBar.Sep />Files: <StatusBar.Key>4</StatusBar.Key></>}
        right={<>Time Left: <StatusBar.Key>59 min</StatusBar.Key></>}
      />
    </Terminal>
  );
}
