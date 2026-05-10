// RADIX ASCII/ANSI art splash — the root beneath the root
export function RadixSplash() {
  return (
    <pre
      className="ansi-art center"
      style={{
        color: "var(--ansi-bright-cyan)",
        textShadow: "var(--glow-cyan)",
        padding: "0.5em 0",
        lineHeight: 1.0,
      }}
    >{`
 ██████╗  █████╗ ██████╗ ██╗██╗  ██╗
 ██╔══██╗██╔══██╗██╔══██╗██║╚██╗██╔╝
 ██████╔╝███████║██║  ██║██║ ╚███╔╝
 ██╔══██╗██╔══██║██║  ██║██║ ██╔██╗
 ██║  ██║██║  ██║██████╔╝██║██╔╝ ██╗
 ╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚═╝╚═╝  ╚═╝`}
    </pre>
  );
}

export function NodeInfo({ node, maxNodes, sysop }: { node: number; maxNodes: number; sysop: string }) {
  return (
    <div style={{ textAlign: "center", fontFamily: "var(--font-terminal)", lineHeight: 1.4 }}>
      <div className="fg-bright-yellow glow-amber">
        ░░ NODE {node} OF {maxNodes} ░░ SYSOP: {sysop} ░░
      </div>
    </div>
  );
}

export function BlockBar({ width = 78, color = "var(--ansi-bright-blue)" }) {
  return (
    <div style={{ color, fontFamily: "var(--font-terminal)", textAlign: "center", lineHeight: 1 }}>
      {"▄".repeat(width)}
    </div>
  );
}

export function ThinBar({ width = 78, color = "var(--ansi-blue)" }) {
  return (
    <div style={{ color, fontFamily: "var(--font-terminal)", lineHeight: 1, padding: "0 0" }}>
      {"─".repeat(width)}
    </div>
  );
}
