import { Metadata } from "next";
import Link from "next/link";
import { Award, BookmarkCheck, ArrowUpRight, GraduationCap } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { achievementsData, achievementsNarrative } from "@/content/achievements";

export const metadata: Metadata = {
  title: "Our Pride // Student Contributions & Achievements",
  description:
    "Celebrating verified academic distinctions, glaciological research, community service, and cultural preservation by students of Gilgit-Baltistan at QAU.",
};

export default function OurPridePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Our Pride" }]} />

      <header className="page-hero-banner">
        <div className="wrap">
          <p className="eyebrow light">
            <span className="archive-tag tag-dark">STUDENT DISTINCTION</span>
            <span>·</span>
            <span>Community Contributions</span>
          </p>
          <h1>Stories of effort, curiosity, and contribution.</h1>
          <p className="lead">
            {achievementsNarrative.intro}
          </p>
        </div>
      </header>

      <section className="section-padding section-paper">
        <div className="wrap">
          <div className="section-header-row">
            <div className="section-header-copy">
              <p className="eyebrow">
                <span className="archive-tag tag-teal">VERIFIED ARCHIVE</span>
                <span>·</span>
                <span>Contributions</span>
              </p>
              <h2>Honoring Rigor & Public Service</h2>
              <p className="section-header-sub">
                Students and alumni from Gilgit-Baltistan making substantive contributions across natural sciences,
                humanities, social development, and regional preservation.
              </p>
            </div>
            <Link href="/contact" className="button button-secondary">
              Submit a Verified Record <ArrowUpRight size={15} />
            </Link>
          </div>

          <div className="editorial-grid-2" style={{ gap: "28px", marginBottom: "56px" }}>
            {achievementsData.map((item) => (
              <article key={item.id} className="editorial-card" style={{ padding: "32px" }}>
                <div className="editorial-card-index">
                  <span className="archive-tag tag-teal">{item.field}</span>
                  <span style={{ fontSize: "0.74rem", color: "var(--muted)", fontFamily: "var(--mono)" }}>
                    {item.year}
                  </span>
                </div>
                <h3 style={{ fontSize: "1.35rem", marginBottom: "8px" }}>{item.title}</h3>
                <div style={{ fontSize: "0.85rem", color: "var(--terracotta)", fontWeight: 600, marginBottom: "14px" }}>
                  {item.personOrGroup}
                </div>
                <p style={{ fontSize: "0.92rem", color: "var(--charcoal)", lineHeight: 1.65, marginBottom: "20px" }}>
                  {item.description}
                </p>
                <div
                  style={{
                    borderTop: "1px solid var(--line-light)",
                    paddingTop: "14px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "0.76rem",
                    color: "var(--muted)",
                  }}
                >
                  <span>Context: {item.context}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: "4px", color: "var(--teal)" }}>
                    <BookmarkCheck size={14} /> Verified Record
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Submission and Integrity Notice */}
          <div
            style={{
              background: "var(--surface)",
              border: "1px dashed var(--line)",
              borderRadius: "var(--radius-md)",
              padding: "28px 32px",
              textAlign: "center",
              maxWidth: "760px",
              marginInline: "auto",
            }}
          >
            <h4 style={{ margin: "0 0 8px", fontSize: "1.2rem" }}>Submitting Student Achievements for Review</h4>
            <p style={{ margin: "0 auto 20px", fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.6, maxWidth: "60ch" }}>
              {achievementsNarrative.note}
            </p>
            <Link href="/contact" className="button button-primary">
              Propose an Achievement Entry <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
