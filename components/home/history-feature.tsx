import Link from "next/link";
import { ArrowUpRight, History as HistoryIcon } from "lucide-react";
import { historyMilestonesData, historyNarrative } from "@/content/history";

export function HistoryFeature() {
  const previewMilestones = historyMilestonesData.slice(0, 3);

  return (
    <section className="section-padding section-paper" aria-labelledby="history-heading">
      <div className="wrap">
        <div className="editorial-grid-2 history-feature-grid" style={{ alignItems: "flex-start", gap: "clamp(36px, 6vw, 72px)" }}>
          {/* Left Column: Narrative */}
          <div className="history-feature-narrative">
            <p className="eyebrow">
              <span className="archive-tag tag-teal">INSTITUTIONAL MEMORY</span>
              <span>·</span>
              <span>Community History</span>
            </p>
            <h2 id="history-heading" className="history-feature-title">
              The council’s story belongs to its community.
            </h2>
            <p className="history-feature-lead">
              {historyNarrative.intro}
            </p>
            <p className="history-feature-body">
              From early student delegations organizing peer orientation desks to modern digital archiving,
              this institutional narrative honors the memory of students who carried their heritage with
              dignity across decades.
            </p>
            <div className="history-feature-cta">
              <Link href="/history" className="button button-primary">
                Explore Full Archival Timeline <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right Column: Timeline Preview */}
          <div className="history-feature-timeline-col">
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

            <div className="timeline-footer-link">
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
