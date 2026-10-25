import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, History as HistoryIcon, Mountain, Feather, Compass, Archive } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { historyMilestonesData, historyNarrative } from "@/content/history";

export const metadata: Metadata = {
  title: "Council History // The Mountain Archive",
  description:
    "Explore the institutional narrative, milestones, and memory of student representation from Gilgit-Baltistan at Quaid-i-Azam University, Islamabad.",
};

export default function HistoryPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Council History" }]} />

      <header className="page-hero-banner">
        <div className="wrap">
          <p className="eyebrow light">
            <span className="archive-tag tag-dark">INSTITUTIONAL MEMORY</span>
            <span>·</span>
            <span>Historical Record</span>
          </p>
          <h1>The council’s story belongs to its community.</h1>
          <p className="lead">
            {historyNarrative.intro}
          </p>
        </div>
      </header>

      <section className="section-padding section-paper">
        <div className="wrap">
          {/* Institutional Narrative Section */}
          <div className="editorial-grid-2" style={{ alignItems: "center", marginBottom: "72px" }}>
            <div>
              <p className="eyebrow">
                <span className="archive-tag tag-teal">ARCHIVAL PERSPECTIVE</span>
              </p>
              <h2 style={{ marginBottom: "20px" }}>Decades of journeys, fellowship, and student voice.</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", color: "var(--charcoal)", fontSize: "1.02rem", lineHeight: 1.7 }}>
                {historyNarrative.paragraphs.map((para, i) => (
                  <p key={i} style={{ margin: 0 }}>
                    {para}
                  </p>
                ))}
              </div>
            </div>

            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius-md)",
                padding: "36px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.03)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <Image
                  src="/images/branding/gbsc-logo.png"
                  alt="GBSC Insignia"
                  width={64}
                  height={84}
                  style={{ objectFit: "contain" }}
                />
                <div>
                  <span className="archive-tag tag-terracotta">MOTIF TAXONOMY</span>
                  <h3 style={{ margin: "4px 0 0", fontSize: "1.2rem" }}>Heraldry of the Council</h3>
                </div>
              </div>

              {historyNarrative.pillars.map((pillar, idx) => (
                <div key={idx} style={{ borderTop: "1px solid var(--line-light)", paddingTop: "14px" }}>
                  <h4 style={{ margin: "0 0 6px", fontSize: "1.05rem" }}>{pillar.title}</h4>
                  <p style={{ margin: 0, fontSize: "0.86rem", color: "var(--muted)", lineHeight: 1.6 }}>
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Chronological Milestone Timeline */}
          <div style={{ maxWidth: "880px", marginInline: "auto" }}>
            <div className="section-header-row" style={{ textAlign: "center", justifyContent: "center", marginBottom: "48px" }}>
              <div>
                <p className="eyebrow" style={{ justifyContent: "center" }}>
                  <span className="archive-tag tag-teal">CHRONOLOGY</span>
                  <span>·</span>
                  <span>Verified Milestones</span>
                </p>
                <h2>Eras of Representation</h2>
                <p className="section-header-sub">
                  Major epochs of student coordination, cultural initiatives, and institutional growth at QAU.
                </p>
              </div>
            </div>

            <div className="timeline-list">
              {historyMilestonesData.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot" aria-hidden="true" />
                  <div className="timeline-date">
                    <span>{item.era}</span>
                    <span style={{ margin: "0 8px", opacity: 0.5 }}>·</span>
                    <span>{item.year}</span>
                  </div>
                  <h3 style={{ fontSize: "1.45rem", marginBottom: "8px" }}>{item.title}</h3>
                  <p style={{ fontSize: "0.95rem", color: "var(--muted)", lineHeight: 1.65, marginBottom: "12px" }}>
                    {item.description}
                  </p>
                  <div className="timeline-significance">
                    <strong>Significance: </strong>{item.significance}
                  </div>
                </div>
              ))}
            </div>

            {/* Archive Contribution Note */}
            <div
              style={{
                marginTop: "64px",
                padding: "24px 28px",
                background: "var(--surface)",
                border: "1px dashed var(--line)",
                borderRadius: "var(--radius-md)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "24px",
                flexWrap: "wrap",
              }}
            >
              <div>
                <h4 style={{ margin: "0 0 6px", fontSize: "1.15rem" }}>Do you possess historical council photographs?</h4>
                <p style={{ margin: 0, fontSize: "0.86rem", color: "var(--muted)" }}>
                  We are documenting oral histories, past event brochures, and photographs from alumni.
                </p>
              </div>
              <Link href="/contact" className="button button-secondary">
                Submit Archival Material <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
