import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Bell, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { announcementsData } from "@/content/announcements";

export const metadata: Metadata = {
  title: "Announcements & Official Notices // GBSC-QAU",
  description:
    "Official bulletins, admissions orientation notices, and verified council updates from the Gilgit-Baltistan Student Council at Quaid-i-Azam University.",
};

export default function AnnouncementsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Announcements" }]} />

      <header className="page-hero-banner">
        <div className="wrap">
          <p className="eyebrow light">
            <span className="archive-tag tag-dark">OFFICIAL BULLETINS</span>
            <span>·</span>
            <span>Council Notices</span>
          </p>
          <h1>Verified news and campus notices.</h1>
          <p className="lead">
            Stay informed on orientation desks, study circle schedules, cultural festival dates,
            and administrative guidance for students at Quaid-i-Azam University.
          </p>
        </div>
      </header>

      <section className="section-padding section-paper">
        <div className="wrap">
          <div style={{ maxWidth: "860px", marginInline: "auto", display: "flex", flexDirection: "column", gap: "32px" }}>
            {announcementsData.map((item) => (
              <article
                key={item.id}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius-md)",
                  padding: "clamp(24px, 4vw, 36px)",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.03)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px", flexWrap: "wrap", gap: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span className="archive-tag tag-teal">{item.category}</span>
                    {item.date && (
                      <span style={{ fontSize: "0.76rem", color: "var(--muted)", fontFamily: "var(--mono)", display: "flex", alignItems: "center", gap: "4px" }}>
                        <Calendar size={13} /> {item.date}
                      </span>
                    )}
                  </div>

                  <span style={{ fontSize: "0.74rem", color: "var(--teal)", fontFamily: "var(--mono)", display: "flex", alignItems: "center", gap: "4px" }}>
                    <CheckCircle2 size={14} /> VERIFIED NOTICE
                  </span>
                </div>

                <h2 style={{ fontSize: "clamp(1.35rem, 2.2vw, 1.8rem)", marginBottom: "14px", color: "var(--ink)" }}>
                  {item.title}
                </h2>

                <p style={{ fontSize: "1.02rem", color: "var(--charcoal)", lineHeight: 1.65, marginBottom: "18px", fontWeight: 500 }}>
                  {item.summary}
                </p>

                <div style={{ borderTop: "1px solid var(--line-light)", paddingTop: "18px", display: "flex", flexDirection: "column", gap: "12px", color: "var(--muted)", fontSize: "0.92rem", lineHeight: 1.7 }}>
                  {item.content.map((paragraph, idx) => (
                    <p key={idx} style={{ margin: 0 }}>
                      {paragraph}
                    </p>
                  ))}
                </div>

                {item.externalLink && (
                  <div style={{ marginTop: "20px", paddingTop: "14px", borderTop: "1px dashed var(--line)" }}>
                    <Link href={item.externalLink.url} className="button button-primary">
                      {item.externalLink.label} <ArrowUpRight size={15} />
                    </Link>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
