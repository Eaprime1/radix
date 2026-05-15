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
        priority: "High"
      },
      {
        title: "Threat Model Sketch",
        type: "Inline Comment / Doc",
        desc: "A brief table or diagram: what attack surfaces does this repo touch? What does Bandit cover vs. not cover? Even one page closes a major gap reviewers often flag.",
        example: "STRIDE table or simple attack-surface diagram (draw.io, ASCII, Mermaid)",
        priority: "Medium"
      },
      {
        title: "Known False Positives List",
        type: "Attach File",
        desc: "If Bandit flags things that are intentional or safe, document them with rationale. Prevents future contributors from being confused or suppressing warnings blindly.",
        example: ".bandit config or a KNOWN_FP.md file",
        priority: "Medium"
      }
    ]
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
        priority: "High"
      },
      {
        title: "Failure Runbook",
        type: "Inline Doc",
        desc: "What happens when Bandit fails? Who gets paged? Is the PR blocked? A short runbook prevents the workflow from being quietly ignored when it fires.",
        example: "RUNBOOK.md or a section in SECURITY.md",
        priority: "High"
      },
      {
        title: "Environment / Secrets Matrix",
        type: "Attach File",
        desc: "What secrets or env vars does the workflow need? Are there repo-level vs org-level settings required? This is often missed and breaks CI in forks or new environments.",
        example: "Table: Secret Name | Scope | Where Set | Rotation Policy",
        priority: "Medium"
      }
    ]
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
        priority: "Medium"
      },
      {
        title: "Test Evidence Screenshot / Log",
        type: "Attach Image / Log",
        desc: "Did the Bandit workflow actually run successfully in a branch? Attach the Actions log output or a screenshot. Nothing builds trust like 'it works, here's proof.'",
        example: "GitHub Actions run screenshot or exported log",
        priority: "High"
      },
      {
        title: "Linked Issues / Tickets",
        type: "PR Metadata",
        desc: "If this PR closes or references Linear/GitHub issues, link them explicitly. Closes #N syntax auto-closes. Helps reviewers understand the why.",
        example: "Closes #42 or Relates to LINEAR-88",
        priority: "Medium"
      }
    ]
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
        priority: "Low"
      },
      {
        title: "Disclosure Response SLA",
        type: "Inline Doc",
        desc: "Your SECURITY.md guides reporters on how to report — but what's the response commitment? 48 hours? 7 days? Adding this makes the policy actionable and builds trust with external reporters.",
        example: "Add SLA section to SECURITY.md",
        priority: "Medium"
      },
      {
        title: "License / SBOM Note",
        type: "Attach File",
        desc: "If Bandit introduces new dependencies, a brief SBOM or dependency note helps compliance reviews downstream.",
        example: "pip-licenses output or a DEPENDENCIES.md",
        priority: "Low"
      }
    ]
  }
];

const priorityColor = { High: "#e05c2a", Medium: "#2a7ae0", Low: "#6b7280" };

export default function PRGuide() {
  const [active, setActive] = useState("security");
  const [expanded, setExpanded] = useState(null);

  const cat = categories.find(c => c.id === active) || categories[0];

  const handleTabSelect = id => {
    setActive(id);
    setExpanded(null);
  };

  const handleKeyToggle = (event, fn) => {
    if (event.key === "Enter" || event.key === " " || event.key === "Spacebar" || event.code === "Space") {
      event.preventDefault();
      fn();
    }
  };

  const handleTabKeyDown = (event, currentIndex, tabId) => {
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      event.preventDefault();
      const direction = event.key === "ArrowRight" ? 1 : -1;
      const nextIndex = (currentIndex + direction + categories.length) % categories.length;
      const nextTab = categories[nextIndex];
      handleTabSelect(nextTab.id);
      const nextTabElement = document.getElementById(`category-tab-${nextTab.id}`);
      if (nextTabElement) nextTabElement.focus();
      return;
    }

    handleKeyToggle(event, () => handleTabSelect(tabId));
  };

  const getItemDetailsId = (catId, title) => `item-details-${catId}-${title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className="pr-guide-root" style={{
      fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
      background: "#0d1117",
      minHeight: "100vh",
      color: "#c9d1d9",
      padding: "0"
    }}>
      <style>{`
        .pr-guide-root * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; } 
        ::-webkit-scrollbar-track { background: #161b22; }
        ::-webkit-scrollbar-thumb { background: #30363d; border-radius: 3px; }
        .nav-tab { transition: all 0.2s ease; cursor: pointer; }
        .nav-tab:hover { background: #21262d !important; }
        .card { transition: all 0.2s ease; cursor: pointer; }
        .card:hover { border-color: #58a6ff !important; background: #161b22 !important; }
        .expand-btn { transition: transform 0.2s ease; }
        .tag { font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; padding: 2px 8px; border-radius: 3px; font-weight: 600; }
      `}</style>

      {/* Header */}
      <div style={{
        borderBottom: "1px solid #21262d",
        padding: "24px 32px 20px",
        background: "#161b22"
      }}>
        <div style={{ fontSize: 11, color: "#58a6ff", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>
          Pull Request Enhancement Guide
        </div>
        <div style={{
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          fontSize: 22,
          fontWeight: 700,
          color: "#f0f6fc",
          marginBottom: 6
        }}>
          What to Attach / Add to Make This PR Sing
        </div>
        <div style={{ fontSize: 12, color: "#8b949e", maxWidth: 600 }}>
          CI/CD Security Automation · Documentation · Bandit Workflow · SECURITY.md
        </div>
      </div>

      {/* Nav tabs */}
      <div style={{
        display: "flex",
        gap: 4,
        padding: "16px 32px 0",
        borderBottom: "1px solid #21262d",
        background: "#161b22"
      }}
      role="tablist"
      aria-label="PR enhancement categories"
      }}>
        {categories.map((c, index) => (
          <div
            key={c.id}
            className="nav-tab"
            onClick={() => handleTabSelect(c.id)}
            onKeyDown={event => handleTabKeyDown(event, index, c.id)}
            role="tab"
            tabIndex={active === c.id ? 0 : -1}
            aria-selected={active === c.id}
            aria-controls={`category-panel-${c.id}`}
            id={`category-tab-${c.id}`}
            style={{
              padding: "8px 16px",
              borderRadius: "6px 6px 0 0",
              background: active === c.id ? "#0d1117" : "transparent",
              border: active === c.id ? "1px solid #21262d" : "1px solid transparent",
              borderBottom: active === c.id ? "1px solid #0d1117" : "1px solid transparent",
              color: active === c.id ? c.color : "#8b949e",
              fontSize: 12,
              fontWeight: active === c.id ? 600 : 400,
              marginBottom: active === c.id ? "-1px" : 0,
              display: "flex",
              alignItems: "center",
              gap: 6
            }}
          >
            <span>{c.icon}</span>
            <span>{c.label}</span>
          </div>
        ))}
      </div>

      {/* Content */}
      <div
        role="tabpanel"
        id={`category-panel-${cat.id}`}
        aria-labelledby={`category-tab-${cat.id}`}
        style={{ padding: "28px 32px", maxWidth: 900 }}
      >
        <div style={{
          fontSize: 11,
          color: "#8b949e",
          marginBottom: 20,
          display: "flex",
          alignItems: "center",
          gap: 16
        }}>
          <span>Click a card to expand implementation details</span>
          <span style={{ color: "#21262d" }}>|</span>
          {["High", "Medium", "Low"].map(p => (
            <span key={p} style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: priorityColor[p], display: "inline-block" }} />
              <span>{p}</span>
            </span>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {cat.items.map(item => {
            const isOpen = expanded === item.title;
            return (
              <div
                key={item.title}
                className="card"
                onClick={() => setExpanded(isOpen ? null : item.title)}
                onKeyDown={event => handleKeyToggle(event, () => setExpanded(isOpen ? null : item.title))}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                aria-controls={getItemDetailsId(cat.id, item.title)}
                style={{
                  background: isOpen ? "#161b22" : "#0d1117",
                  border: `1px solid ${isOpen ? cat.color + "55" : "#21262d"}`,
                  borderRadius: 8,
                  padding: "16px 20px",
                  userSelect: "auto"
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                      <span style={{ color: "#f0f6fc", fontWeight: 600, fontSize: 14 }}>{item.title}</span>
                      <span className="tag" style={{
                        background: cat.color + "22",
                        color: cat.color,
                        border: `1px solid ${cat.color}44`
                      }}>
                        {item.type}
                      </span>
                      <span className="tag" style={{
                        background: priorityColor[item.priority] + "18",
                        color: priorityColor[item.priority],
                        border: `1px solid ${priorityColor[item.priority]}33`
                      }}>
                        {item.priority}
                      </span>
                    </div>
                    <div style={{ fontSize: 13, color: "#8b949e", lineHeight: 1.6 }}>
                      {item.desc}
                    </div>
                  </div>
                  <div className="expand-btn" style={{
                    transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                    color: "#8b949e",
                    fontSize: 16,
                    flexShrink: 0,
                    marginTop: 2
                  }}>
                    ›
                  </div>
                </div>

                {isOpen && (
                  <div id={getItemDetailsId(cat.id, item.title)} style={{
                    marginTop: 16,
                    padding: "12px 16px",
                    background: "#010409",
                    borderRadius: 6,
                    border: "1px solid #21262d"
                  }}>
                    <div style={{ fontSize: 10, color: "#58a6ff", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>
                      Implementation Example
                    </div>
                    <div style={{
                      fontSize: 12,
                      color: "#7ee787",
                      fontFamily: "inherit",
                      lineHeight: 1.7
                    }}>
                      {item.example}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer summary */}
        <div style={{
          marginTop: 32,
          padding: "16px 20px",
          background: "#161b22",
          border: "1px solid #21262d",
          borderRadius: 8,
          fontSize: 12,
          color: "#8b949e",
          lineHeight: 1.8
        }}>
          <span style={{ color: "#f0f6fc", fontWeight: 600 }}>Quick wins for this PR: </span>
          Attach the Bandit baseline scan output · Add a workflow decision log to the notes README · 
          Include a screenshot of a successful Actions run · Add an SLA to SECURITY.md · 
          Link any related Linear / GitHub issues in the PR description.
        </div>
      </div>
    </div>
  );
}
