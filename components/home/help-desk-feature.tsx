import Link from "next/link";
import { ArrowUpRight, Compass, Home, BookOpen, HelpCircle, ShieldAlert } from "lucide-react";
import { helpDeskGuide, helpDeskTopicsData } from "@/content/help-desk";

export function HelpDeskFeature() {
  return (
    <section className="section-padding section-paper" aria-labelledby="help-desk-heading">
      <div className="wrap">
        <div className="section-header-row">
          <div className="section-header-copy">
            <p className="eyebrow">
              <span className="archive-tag tag-teal">STUDENT SUPPORT DESK</span>
              <span>·</span>
              <span>Peer Mentorship</span>
            </p>
            <h2 id="help-desk-heading">
              A place to start when you need a hand.
            </h2>
            <p className="section-header-sub">
              {helpDeskGuide.intro}
            </p>
          </div>
          <Link href="/help-desk" className="text-link">
            Open Help Desk Guide <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* 4 Topic Cards */}
        <div className="editorial-grid-4" style={{ marginBottom: "32px" }}>
          {helpDeskTopicsData.map((topic, index) => (
            <div key={topic.id} className="editorial-card">
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "var(--radius-sm)",
                  background: "var(--teal-pale)",
                  color: "var(--teal)",
                  display: "grid",
                  placeItems: "center",
                  marginBottom: "16px",
                }}
                aria-hidden="true"
              >
                {index === 0 && <Compass size={20} />}
                {index === 1 && <Home size={20} />}
                {index === 2 && <BookOpen size={20} />}
                {index === 3 && <HelpCircle size={20} />}
              </div>
              <h4 style={{ margin: "0 0 8px", fontSize: "1.15rem" }}>{topic.title}</h4>
              <p style={{ fontSize: "0.86rem", color: "var(--muted)", margin: "0 0 16px" }}>
                {topic.description}
              </p>
              <div style={{ marginTop: "auto", fontSize: "0.74rem", color: "var(--terracotta)", fontFamily: "var(--mono)" }}>
                Liaison: {topic.universityOffice?.split(",")[0]}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Notice */}
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--line)",
            borderLeft: "4px solid var(--terracotta)",
            borderRadius: "var(--radius-sm)",
            padding: "16px 20px",
            display: "flex",
            alignItems: "flex-start",
            gap: "14px",
          }}
        >
          <ShieldAlert size={20} style={{ color: "var(--terracotta)", flexShrink: 0, marginTop: "2px" }} />
          <div style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.6 }}>
            <strong>Institutional Scope Notice: </strong>
            GBSC-QAU Help Desk volunteers provide informational navigation and collegiate mentoring. We do not
            exercise administrative authority, resolve fee sanctions, or provide psychiatric therapy.
            All formal petitions must be lodged with official Quaid-i-Azam University offices.
          </div>
        </div>
      </div>
    </section>
  );
}
