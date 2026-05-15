import { BOX } from "@/lib/box";

export interface MessageMeta {
  from:    string;
  to:      string;
  subject: string;
  date:    string;
  msgNum?: number;
  total?:  number;
  board?:  string;
  read?:   boolean;
}

interface MessageHeaderProps {
  meta: MessageMeta;
  width?: number;
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="msg-header-row">
      <span className="msg-header-label">{label}:</span>
      <span className="msg-header-value">{value}</span>
    </div>
  );
}

export default function MessageHeader({ meta, width = 78 }: MessageHeaderProps) {
  const b = BOX.single;
  const sep = `${b.tee_l}${"─".repeat(width - 2)}${b.tee_r}`;

  return (
    <div style={{ color: "var(--ansi-blue)", fontFamily: "var(--font-terminal)", lineHeight: 1.2 }}>
      {meta.board && <Row label="Board" value={meta.board} />}
      {meta.msgNum != null && (
        <div className="msg-header-row">
          <span className="msg-header-label">Msg#:</span>
          <span className="msg-header-value">
            {meta.msgNum}{meta.total != null ? ` of ${meta.total}` : ""}
          </span>
          {!meta.read && <span style={{ color: "var(--ansi-bright-green)", marginLeft: "1ch" }}>NEW</span>}
        </div>
      )}
      <Row label="From"  value={meta.from} />
      <Row label="To"    value={meta.to} />
      <Row label="Subj"  value={meta.subject} />
      <Row label="Date"  value={meta.date} />
      <div style={{ color: "var(--ansi-blue)", whiteSpace: "pre", overflow: "hidden" }}>{sep}</div>
    </div>
  );
}
