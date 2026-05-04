"use client";
import { useRouter } from "next/navigation";
import Terminal from "@/components/bbs/Terminal";
import StatusBar from "@/components/bbs/StatusBar";
import BoxPanel, { HRule } from "@/components/bbs/BoxPanel";
import { RadixSplash, BlockBar } from "@/components/bbs/ANSIArt";
import { SYSINFO } from "@/lib/sysinfo";
import { BOX } from "@/lib/box";

function InfoRow({ label, value, valueColor = "var(--ansi-bright-white)" }: {
  label: string; value: string; valueColor?: string;
}) {
  return (
    <div style={{ display: "flex", gap: "2ch", padding: "0.15em 1ch", fontFamily: "var(--font-terminal)" }}>
      <span style={{ color: "var(--ansi-bright-cyan)", minWidth: "18ch" }}>{label}</span>
      <span style={{ color: valueColor }}>{value}</span>
    </div>
  );
}

export default function SystemPage() {
  const router = useRouter();

  return (
    <Terminal>
      <StatusBar
        left={<><span style={{ cursor: "pointer" }} onClick={() => router.push("/")}>[ M ] MAIN</span></>}
        center={<span className="fg-bright-cyan">SYSTEM INFORMATION</span>}
        right={<span className="fg-bright-green">ONLINE</span>}
      />

      <RadixSplash />
      <BlockBar color="var(--ansi-blue)" />

      <BoxPanel title="SYSTEM INFO" style="double" width={78}>
        <div style={{ padding: "0.4em 0" }}>
          <InfoRow label="BBS Name"     value={SYSINFO.bbsName} valueColor="var(--ansi-bright-yellow)" />
          <InfoRow label="SysOp"        value={SYSINFO.sysop} />
          <InfoRow label="Software"     value={SYSINFO.software} />
          <InfoRow label="Location"     value={SYSINFO.location} valueColor="var(--ansi-bright-magenta)" />
          <InfoRow label="Network"      value={SYSINFO.phone} />
          <InfoRow label="Max Nodes"    value={String(SYSINFO.maxNodes)} />
        </div>
        <HRule width={78} />
        <div style={{ padding: "0.4em 1ch" }}>
          <InfoRow label="Total Boards" value={String(SYSINFO.boards.length)} />
          <InfoRow label="Total Files"  value={String(SYSINFO.files.length)} />
          <InfoRow label="Status"       value="SEEDING" valueColor="var(--ansi-bright-green)" />
        </div>
        <HRule width={78} />
        <div style={{ padding: "0.5em 1ch", color: "var(--ansi-white)", fontFamily: "var(--font-terminal)", lineHeight: 1.5 }}>
          <div className="fg-bright-yellow" style={{ marginBottom: "0.3em" }}>:: ABOUT ::</div>
          <div>
            Radix is the design foundation for the telegard_UNEXUSI BBS engine.
          </div>
          <div style={{ marginTop: "0.3em" }}>
            It establishes the BBS-era visual language: ANSI 16-color tokens,
            CP437 box-drawing primitives, terminal typography, and interactive
            components — menus, message headers, file listings, prompts.
          </div>
          <div style={{ marginTop: "0.3em", color: "var(--ansi-bright-cyan)" }}>
            {BOX.misc.arrow_r} The root beneath the root. &nbsp;♓
          </div>
        </div>
      </BoxPanel>

      <div className="prompt-line">
        <span
          className="fg-bright-cyan"
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/")}
        >
          [Q] Return to Main Menu
        </span>
      </div>

      <StatusBar
        left={<>Build: <StatusBar.Key>0.1.0</StatusBar.Key></>}
        center={<span className="fg-bright-yellow">{SYSINFO.tagline}</span>}
        right={<>Engine: <StatusBar.Key>Next.js 15</StatusBar.Key></>}
      />
    </Terminal>
  );
}
