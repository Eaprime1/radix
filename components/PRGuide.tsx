"use client";
import { useState } from "react";

const categories = [
  {
    id: "security",
    label: "Security Context",
    icon: "🔐",
    color: "#e05c2a",
    items: [
      {
        title: "Bandit Baseline Report",
        type: "Attach File",
        desc: "Run Bandit on the current codebase before merging and attach the JSON/HTML output. Reviewers can see what the scan actually catches — gives the workflow immediate credibility.",
        example: "bandit -r . -f html -o bandit-baseline.html",
        priority: "High",
      },
      {
        title: "Threat Model Sketch",
        type: "Inline Comment / Doc",
        desc: "A brief table or diagram: what attack surfaces does this repo touch? What does Bandit cover vs. not cover? Even one page closes a major gap reviewers often flag.",
        example: "STRIDE table or simple attack-surface diagram (draw.io, ASCII, Mermaid)",
        priority: "Medium",
      },
      {
        title: "Known False Positives List",
        type: "Attach File",
        desc: "If Bandit flags things that are intentional or safe, document them with rationale. Prevents future contributors from being confused or suppressing warnings blindly.",
        example: ".bandit config or a KNOWN_FP.md file",
        priority: "Medium",
      },
    ],
  },
  {
    id: "workflow",
    label: "CI/CD Workflow Docs",
    icon: "⚙️",
    color: "#2a7ae0",
    items: [
      {
        title: "Workflow Decision Log",
        type: "Attach File / Notes README",
        desc: "Why weekly schedule? Why Bandit over Semgrep or Snyk? These decisions belong captured — your new notes/README.md template is the right home for it.",
        example: "decisions.md in .copilot-GitHub/notes/",
        priority: "High",
      },
      {
        title: "Failure Runbook",
        type: "Inline Doc",
        desc: "What happens when Bandit fails? Who gets paged? Is the PR blocked? A short runbook prevents the workflow from being quietly ignored when it fires.",
        example: "RUNBOOK.md or a section in SECURITY.md",
        priority: "High",
      },
      {
        title: "Environment / Secrets Matrix",
        type: "Attach File",
        desc: "What secrets or env vars does the workflow need? Are there repo-level vs org-level settings required? This is often missed and breaks CI in forks or new environments.",
        example: "Table: Secret Name | Scope | Where Set | Rotation Policy",
        priority: "Medium",
      },
    ],
  },
  {
    id: "review",
    label: "Reviewer Support",
    icon: "👁️",
    color: "#2aa05c",
    items: [
      {
        title: "Before/After Diff Summary",
        type: "PR Description Attachment",
        desc: "A human-readable summary of what changed in README.md — not just 'updated README' but specific new sections added, removed ambiguity, etc. Helps async reviewers.",
        example: "Markdown table: Section | Before | After",
        priority: "Medium",
      },
      {
        title: "Test Evidence Screenshot / Log",
        type: "Attach Image / Log",
        desc: "Did the Bandit workflow actually run successfully in a branch? Attach the Actions log output or a screenshot. Nothing builds trust like 'it works, here's proof.'",
        example: "GitHub Actions run screenshot or exported log",
        priority: "High",
      },
      {
        title: "Linked Issues / Tickets",
        type: "PR Metadata",
        desc: "If this PR closes or references Linear/GitHub issues, link them explicitly. Closes #N syntax auto-closes. Helps reviewers understand the why.",
        example: "Closes #42 or Relates to LINEAR-88",
        priority: "Medium",
      },
    ],
  },
  {
    id: "compliance",
    label: "Compliance & Governance",
    icon: "📋",
    color: "#9b2ae0",
    items: [
      {
        title: "SECURITY.md Coverage Matrix",
        type: "Attach File",
        desc: "Map your new SECURITY.md supported versions to actual branches or tags in the repo. Reviewers often can't tell if the policy is aspirational or currently accurate.",
        example: "Table: Version | Support Status | EOL Date | Branch",
        priority: "Low",
      },
      {
        title: "Disclosure Response SLA",
        type: "Inline Doc",
        desc: "Your SECURITY.md guides reporters on how to report — but what's the response commitment? 48 hours? 7 days? Adding this makes the policy actionable and builds trust with external reporters.",
        example: "Add SLA section to SECURITY.md",
        priority: "Medium",
      },
      {
        title: "License / SBOM Note",
        type: "Attach File",
        desc: "If Bandit introduces new dependencies, a brief SBOM or dependency note helps compliance reviews downstream.",
        example: "pip-licenses output or a DEPENDENCIES.md",
        priority: "Low",
      },
    ],
  },
];

const priorityColor: Record<string, string> = {
  High: "#e05c2a",
  Medium: "#2a7ae0",
  Low: "#6b7280",
};

export default function PRGuide() {
  const [active, setActive] = useState("security");
  const [expanded, setExpanded] = useState<string | null>(null);

  const cat = categories.find((c) => c.id === active) ?? categories[0];

  return (
    <div
      style={{
        fontFamily: "var(--font-terminal, 'VT323', monospace)",
        background: "var(--ansi-black, #000)",
        color: "var(--ansi-bright-white, #fff)",
        minHeight: "100vh",
        padding: "1.5rem 1rem",
      }}
    >
      {/* Header */}
      <div
        style={{
          borderBottom: "1px solid var(--ansi-blue, #0000aa)",
          paddingBottom: "0.75rem",
          marginBottom: "1rem",
        }}
      >
        <h1
          style={{
            fontSize: "var(--font-size-xl, 28px)",
            color: "var(--ansi-bright-cyan, #55ffff)",
            textShadow: "var(--glow-cyan, 0 0 6px #55ffff)",
            margin: 0,
            letterSpacing: "0.05em",
          }}
        >
          ── PR DOCUMENTATION GUIDE ──
        </h1>
        <p
          style={{
            color: "var(--ansi-white, #aaa)",
            fontSize: "var(--font-size-sm, 15px)",
            marginTop: "0.3rem",
          }}
        >
          Required context that turns a good PR into a great one.
        </p>
      </div>

      {/* Category tabs */}
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          flexWrap: "wrap",
          marginBottom: "1rem",
        }}
      >
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => {
              setActive(c.id);
              setExpanded(null);
            }}
            style={{
              background: active === c.id ? c.color : "transparent",
              border: `1px solid ${c.color}`,
              color: active === c.id ? "#fff" : c.color,
              fontFamily: "inherit",
              fontSize: "var(--font-size-sm, 15px)",
              padding: "0.25em 0.75em",
              cursor: "pointer",
              borderRadius: "2px",
              transition: "background 0.15s",
            }}
          >
            {c.icon} {c.label}
          </button>
        ))}
      </div>

      {/* Items */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
        {cat.items.map((item) => {
          const key = `${cat.id}-${item.title}`;
          const open = expanded === key;
          return (
            <div
              key={key}
              style={{
                border: `1px solid ${cat.color}`,
                borderRadius: "2px",
                overflow: "hidden",
              }}
            >
              {/* Item header — click to expand */}
              <button
                onClick={() => setExpanded(open ? null : key)}
                style={{
                  width: "100%",
                  background: open ? `${cat.color}22` : "transparent",
                  border: "none",
                  color: "var(--ansi-bright-white, #fff)",
                  fontFamily: "inherit",
                  fontSize: "var(--font-size-base, 18px)",
                  textAlign: "left",
                  padding: "0.5em 1em",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1rem",
                }}
              >
                <span>
                  <span style={{ color: cat.color, marginRight: "0.5ch" }}>
                    {open ? "▼" : "▶"}
                  </span>
                  {item.title}
                </span>
                <span style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
                  <span
                    style={{
                      fontSize: "var(--font-size-sm, 15px)",
                      color: "var(--ansi-white, #aaa)",
                    }}
                  >
                    {item.type}
                  </span>
                  <span
                    style={{
                      fontSize: "var(--font-size-sm, 15px)",
                      color: priorityColor[item.priority],
                      border: `1px solid ${priorityColor[item.priority]}`,
                      padding: "0 0.4em",
                      borderRadius: "2px",
                    }}
                  >
                    {item.priority}
                  </span>
                </span>
              </button>

              {/* Expanded body */}
              {open && (
                <div
                  style={{
                    padding: "0.6em 1.2em 0.8em",
                    borderTop: `1px solid ${cat.color}44`,
                    background: "#0a0a0a",
                  }}
                >
                  <p
                    style={{
                      color: "var(--ansi-bright-white, #fff)",
                      fontSize: "var(--font-size-sm, 15px)",
                      marginBottom: "0.5em",
                      lineHeight: 1.5,
                    }}
                  >
                    {item.desc}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75ch",
                      fontSize: "var(--font-size-sm, 15px)",
                    }}
                  >
                    <span style={{ color: "var(--ansi-bright-cyan, #55ffff)", whiteSpace: "nowrap" }}>
                      example:
                    </span>
                    <code
                      style={{
                        color: "var(--ansi-bright-yellow, #ffff55)",
                        background: "#111",
                        padding: "0.1em 0.4em",
                        borderRadius: "2px",
                        fontFamily: "inherit",
                        wordBreak: "break-all",
                      }}
                    >
                      {item.example}
                    </code>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: "1.5rem",
          borderTop: "1px solid var(--ansi-blue, #0000aa)",
          paddingTop: "0.5rem",
          fontSize: "var(--font-size-sm, 15px)",
          color: "var(--ansi-bright-black, #555)",
          textAlign: "center",
        }}
      >
        RADIX — quality gate for outbound concepts
      </div>
    </div>
  );
}
