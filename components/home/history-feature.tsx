import Link from "next/link";
import { ArrowUpRight, History as HistoryIcon } from "lucide-react";
import { historyMilestonesData, historyNarrative } from "@/content/history";

export function HistoryFeature() {
  const previewMilestones = historyMilestonesData.slice(0, 3);

  return (
    <section className="section-padding section-paper" aria-labelledby="history-heading">
      <div className="wrap">
        <div className="editorial-grid-2" style={{ alignItems: "flex-start", gap: "clamp(36px, 6vw, 72px)" }}>
          {/* Left Column: Narrative */}
          <div style={{ position: "sticky", top: "120px" }}>
            <p className="eyebrow">
              <span className="archive-tag tag-teal">INSTITUTIONAL MEMORY</span>
              <span>·</span>
              <span>Community History</span>
            </p>
            <h2 id="history-heading" style={{ fontSize: "clamp(2.2rem, 3.8vw, 3.2rem)", marginBottom: "20px" }}>
              The council’s story belongs to its community.
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "var(--charcoal)", marginBottom: "18px" }}>
              {historyNarrative.intro}
            </p>
            <p style={{ color: "var(--muted)", lineHeight: 1.65, marginBottom: "28px" }}>
              From early student delegations organizing peer orientation desks to modern digital archiving,
              this institutional narrative honors the memory of students who carried their heritage with
              dignity across decades.
            </p>
            <Link href="/history" className="button button-primary">
              Explore Full Archival Timeline <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Right Column: Timeline Preview */}
          <div>
            <div className="timeline-list">
              {previewMilestones.map((item, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-dot" aria-hidden="true" />
                  <div className="timeline-date">
                    <span>{item.era}</span>
                    <span style={{ margin: "0 6px", opacity: 0.5 }}>·</span>
                    <span>{item.year}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="timeline-significance">
                    <strong>Institutional Significance: </strong>
                    {item.significance}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "28px", paddingLeft: "32px" }}>
              <Link href="/history" className="text-link">
                View all chronological milestones <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
