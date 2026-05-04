interface StatusBarProps {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
}

function Key({ children }: { children: React.ReactNode }) {
  return <span className="key">{children}</span>;
}

function Sep() {
  return <span className="sep">│</span>;
}

export default function StatusBar({ left, center, right }: StatusBarProps) {
  return (
    <div className="statusbar">
      <span>{left}</span>
      <span>{center}</span>
      <span>{right}</span>
    </div>
  );
}

StatusBar.Key = Key;
StatusBar.Sep = Sep;
