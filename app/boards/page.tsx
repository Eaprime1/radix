"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Terminal from "@/components/bbs/Terminal";
import StatusBar from "@/components/bbs/StatusBar";
import BoxPanel, { HRule } from "@/components/bbs/BoxPanel";
import MessageHeader, { MessageMeta } from "@/components/bbs/MessageHeader";
import { MorePrompt } from "@/components/bbs/Prompt";
import { SYSINFO } from "@/lib/sysinfo";

const SAMPLE_MESSAGES: (MessageMeta & { body: string })[] = [
  {
    from: "UNEXUSI", to: "ALL", subject: "WELCOME TO RADIX",
    date: "05-04-26 00:00", msgNum: 1, total: 1, board: "GENERAL",
    read: false,
    body:
`This is the shadow layer.

Radix is not the surface — it is what lies beneath every surface.
Every origin has a root that predates it. Every system has a prior system
that gave it form. We are building that prior.

Welcome aboard.

  — UNEXUSI / SysOp`,
  },
  {
    from: "ARCHIVIST", to: "ALL", subject: "ON THE NATURE OF SHADOWS",
    date: "05-04-26 01:33", msgNum: 1, total: 1, board: "PHILOSOPHY",
    read: false,
    body:
`> The shadow is not the absence of light.
> It is the record of what stood between.

A shadow carries the precise shape of its caster.
It is more faithful than a portrait.

The BBS was always a shadow system — running in the margins,
behind phone lines, in the hours after midnight.
We are continuing that tradition.`,
  },
  {
    from: "SYSTEM", to: "ALL", subject: "TELEGARD / RADIX INTEGRATION NOTE",
    date: "05-04-26 03:00", msgNum: 1, total: 1, board: "TECH / SYSTEMS",
    read: true,
    body:
`telegard_UNEXUSI is the engine.
radix is the skin, the bones, the design language.

Next milestone: wire the telegard Python backend to this
Next.js front-end via websocket. Each node = one connection.
Real-time message delivery. Authentic BBS flow.

Status: SEEDING`,
  },
];

export default function BoardsPage() {
  const router = useRouter();
  const [msgIdx, setMsgIdx] = useState(0);
  const [view, setView] = useState<"list" | "read">("list");
  const [selectedBoard, setSelectedBoard] = useState<string | null>(null);

  const boardMessages = selectedBoard
    ? SAMPLE_MESSAGES.filter((m) => m.board === selectedBoard)
    : SAMPLE_MESSAGES;

  const msg = boardMessages[Math.min(msgIdx, boardMessages.length - 1)];

  const openBoard = (boardName: string) => {
    setSelectedBoard(boardName);
    setMsgIdx(0);
    setView("read");
  };

  return (
    <Terminal>
      <StatusBar
        left={<><StatusBar.Key>◄ MAIN</StatusBar.Key> <span style={{cursor:"pointer"}} onClick={() => router.push("/")}>[ M ]</span></>}
        center={<span className="fg-bright-cyan">MESSAGE BOARDS</span>}
        right={<>Msg {msgIdx + 1} of {boardMessages.length}</>}
      />

      {view === "list" ? (
        <BoxPanel title="BOARDS" style="double" width={78}>
          <div style={{ padding: "0.4em 0" }}>
            {SYSINFO.boards.map((b) => (
              <div
                key={b.id}
                className="file-row"
                style={{ cursor: "pointer" }}
                onClick={() => openBoard(b.name)}
              >
                <span className="fg-bright-black" style={{ minWidth: "3ch" }}>{b.id}</span>
                <span className="file-name">{b.name}</span>
                <span className="file-size fg-white">{b.msgs} msgs</span>
                <span className="file-desc fg-bright-green">{b.lastPost}</span>
              </div>
            ))}
          </div>
          <HRule width={78} />
          <div className="prompt-line">
            <span className="fg-bright-yellow">Select a board to read  </span>
            <span
              className="fg-bright-cyan"
              style={{ cursor: "pointer" }}
              onClick={() => router.push("/")}
            >[Q]</span>
            <span className="fg-white"> Quit</span>
          </div>
        </BoxPanel>
      ) : (
        <BoxPanel title={`${msg.board} — MSG ${msg.msgNum} OF ${msg.total}`} style="double" width={78}>
          <MessageHeader meta={msg} />
          <div className="msg-body">
            {msg.body.split("\n").map((line, i) => (
              <div key={i} className={line.startsWith(">") ? "msg-quote" : ""}>
                {line || <br />}
              </div>
            ))}
          </div>
          <HRule width={78} />
          <MorePrompt
            onContinue={() => {
              if (msgIdx < boardMessages.length - 1) setMsgIdx(i => i + 1);
              else setView("list");
            }}
            onQuit={() => setView("list")}
          />
        </BoxPanel>
      )}

      <StatusBar
        left={<>Board: <StatusBar.Key>{view === "read" ? msg.board : "ALL"}</StatusBar.Key></>}
        center={view === "read" ? <span className="fg-bright-green">READING</span> : <span>SELECT BOARD</span>}
        right={<>Unread: <StatusBar.Key>{boardMessages.filter(m => !m.read).length}</StatusBar.Key></>}
      />
    </Terminal>
  );
}
