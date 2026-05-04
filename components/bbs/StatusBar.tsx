import React from "react";

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

function StatusBarFn({ left, center, right }: StatusBarProps) {
  return (
    <div className="statusbar">
      <span>{left}</span>
      <span>{center}</span>
      <span>{right}</span>
    </div>
  );
}

const StatusBar = Object.assign(StatusBarFn, { Key, Sep });
export default StatusBar;
