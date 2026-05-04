export interface FileEntry {
  id: number;
  name: string;
  size: string;
  desc: string;
  isNew?: boolean;
}

interface FileListProps {
  files: FileEntry[];
  onSelect?: (file: FileEntry) => void;
}

export default function FileList({ files, onSelect }: FileListProps) {
  return (
    <div>
      {/* Header */}
      <div className="file-row" style={{ color: "var(--ansi-bright-blue)", borderBottom: "1px solid var(--ansi-blue)" }}>
        <span style={{ minWidth: "3ch" }}>#</span>
        <span style={{ minWidth: "22ch" }}>FILENAME</span>
        <span style={{ minWidth: "6ch", textAlign: "right" }}>SIZE</span>
        <span>DESCRIPTION</span>
      </div>
      {files.map((f) => (
        <div
          key={f.id}
          className="file-row"
          onClick={() => onSelect?.(f)}
          style={{ cursor: onSelect ? "pointer" : "default" }}
        >
          <span className="fg-bright-black" style={{ minWidth: "3ch" }}>{f.id}</span>
          <span className="file-name">
            {f.name}
          </span>
          <span className="file-size">{f.size}</span>
          <span className="file-desc">
            {f.isNew && <span className="file-new">[NEW] </span>}
            {f.desc}
          </span>
        </div>
      ))}
    </div>
  );
}
