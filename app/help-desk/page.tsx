import { Metadata } from "next";
import Link from "next/link";
import { Compass, Home, BookOpen, HelpCircle, ShieldAlert, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { helpDeskGuide, helpDeskTopicsData } from "@/content/help-desk";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Student Help Desk & Campus Orientation // GBSC-QAU",
  description:
    "Peer mentorship, freshmen campus orientation, hostel application guidance, and university navigation for students from Gilgit-Baltistan at QAU Islamabad.",
};

export default function HelpDeskPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Student Help Desk" }]} />

      <header className="page-hero-banner">
        <div className="wrap">
          <p className="eyebrow light">
            <span className="archive-tag tag-dark">STUDENT WELFARE</span>
            <span>·</span>
            <span>Peer Mentorship</span>
          </p>
          <h1>A place to start when you need a hand.</h1>
          <p className="lead">
            {helpDeskGuide.intro}
          </p>
        </div>
      </header>

      <section className="section-padding section-paper">
        <div className="wrap">
          {/* Institutional Disclaimer Box */}
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--line)",
              borderLeft: "4px solid var(--terracotta)",
              borderRadius: "var(--radius-md)",
              padding: "24px 28px",
              marginBottom: "56px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px", color: "var(--terracotta)", fontWeight: 700 }}>
              <ShieldAlert size={20} />
              <span>Scope & Governance Disclaimer</span>
            </div>
            <p style={{ margin: 0, fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.65 }}>
              {helpDeskGuide.disclaimer}
            </p>
          </div>

          {/* Core Support Areas */}
          <div className="section-header-row">
            <div className="section-header-copy">
              <p className="eyebrow">
                <span className="archive-tag tag-teal">GUIDANCE PILLARS</span>
                <span>·</span>
                <span>Support Domains</span>
              </p>
              <h2>How We Support Students on Campus</h2>
              <p className="section-header-sub">
                Volunteer seniors assisting incoming and enrolled students across key campus areas.
              </p>
            </div>
          </div>

          <div className="editorial-grid-2" style={{ gap: "32px", marginBottom: "64px" }}>
            {helpDeskTopicsData.map((topic, index) => (
              <div key={topic.id} className="editorial-card" style={{ padding: "32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "var(--radius-sm)",
                      background: "var(--teal-pale)",
                      color: "var(--teal)",
                      display: "grid",
                      placeItems: "center",
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  >
                    {index === 0 && <Compass size={22} />}
                    {index === 1 && <Home size={22} />}
                    {index === 2 && <BookOpen size={22} />}
                    {index === 3 && <HelpCircle size={22} />}
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: "1.25rem" }}>{topic.title}</h3>
                    <span style={{ fontSize: "0.74rem", color: "var(--muted)", fontFamily: "var(--mono)" }}>
                      Liaison: {topic.universityOffice}
                    </span>
                  </div>
                </div>

                <p style={{ fontSize: "0.92rem", color: "var(--charcoal)", marginBottom: "16px" }}>
                  {topic.description}
                </p>

                <div style={{ borderTop: "1px solid var(--line-light)", paddingTop: "14px", marginTop: "auto" }}>
                  <span style={{ fontSize: "0.74rem", fontWeight: 700, color: "var(--charcoal)", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "8px" }}>
                    Guidance Areas:
                  </span>
                  <ul style={{ margin: 0, paddingLeft: "18px", fontSize: "0.84rem", color: "var(--muted)", lineHeight: 1.6 }}>
                    {topic.guidelines.map((g, i) => (
                      <li key={i}>{g}</li>
                    ))}
                  </ul>
                </div>

                {topic.disclaimer && (
                  <div style={{ marginTop: "14px", padding: "8px 12px", background: "var(--paper)", borderRadius: "var(--radius-sm)", fontSize: "0.75rem", color: "var(--terracotta)" }}>
                    * {topic.disclaimer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Instructions to reach out */}
          <div
            style={{
              background: "var(--ink)",
              color: "var(--surface)",
              borderRadius: "var(--radius-md)",
              padding: "clamp(36px, 5vw, 56px)",
              display: "grid",
              gridTemplateColumns: "1.2fr 0.8fr",
              gap: "36px",
              alignItems: "center",
            }}
          >
            <div>
              <span className="archive-tag tag-dark" style={{ marginBottom: "12px", display: "inline-block" }}>
                CONNECT WITH A SENIOR MENTOR
              </span>
              <h3 style={{ color: "var(--surface)", fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", marginBottom: "14px" }}>
                Need help navigating your first weeks?
              </h3>
              <p style={{ color: "#d2ded9", fontSize: "0.96rem", lineHeight: 1.65, margin: 0 }}>
                Drop by our informal student desks at the Central Library lawns or send a message through
                our verified form. We will connect you with a senior student in your department.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px", alignItems: "flex-start" }}>
              <Link href="/contact" className="button button-white" style={{ width: "100%", justifyContent: "center" }}>
                Message Help Desk Volunteers <ArrowUpRight size={16} />
              </Link>
              <Link href="/faq" className="button button-outline-light" style={{ width: "100%", justifyContent: "center" }}>
                Read Freshmen FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
