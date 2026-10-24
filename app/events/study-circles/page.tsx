import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, BookOpen, Clock, Users, Sparkles, MessageSquare } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";

export const metadata: Metadata = {
  title: "Study Circles // Academic & Literary Forum",
  description:
    "Student-led reading sessions, critical discourse, and unhurried intellectual inquiry at Quaid-i-Azam University, Islamabad.",
};

export default function StudyCirclesPage() {
  const tracks = [
    {
      title: "Regional Historiography & Decolonial Texts",
      description: "Interrogating British colonial archival accounts against indigenous oral memories and local histories across Gilgit, Baltistan, and Chitral.",
      format: "Bi-weekly Seminar",
    },
    {
      title: "Mountain Ecology, Glaciology & Climate Realities",
      description: "Reading scientific surveys, policy papers, and local community observations on the fragile Karakoram cryosphere.",
      format: "Monthly Panel",
    },
    {
      title: "South Asian Multilingual Poetry & Philosophy",
      description: "Reading classical and contemporary works in Balti, Shina, Urdu, Persian, and English to explore ethical questions and aesthetic thought.",
      format: "Evening Circle",
    },
    {
      title: "Research Methodologies & Scholarly Writing",
      description: "Peer workshops for undergraduate and master's students on developing research questions, qualitative coding, and thesis formulation.",
      format: "Skills Forum",
    },
  ];

  return (
    <>
      <Breadcrumbs items={[{ label: "Events", href: "/events" }, { label: "Study Circles" }]} />

      <header className="page-hero-banner">
        <div className="wrap">
          <p className="eyebrow light">
            <span className="archive-tag tag-dark">ACADEMIC FORUM</span>
            <span>·</span>
            <span>Intellectual Inquiry</span>
          </p>
          <h1>Make room for a good question.</h1>
          <p className="lead">
            The GBSC Study Circle is a student-led space for shared reading, thoughtful discussion,
            and exploring academic and social ideas without needing all the answers first.
          </p>
        </div>
      </header>

      <section className="section-padding section-paper">
        <div className="wrap">
          <div className="editorial-grid-2" style={{ alignItems: "center", marginBottom: "64px" }}>
            <div>
              <p className="eyebrow">
                <span className="archive-tag tag-teal">PEDAGOGICAL PHILOSOPHY</span>
              </p>
              <h2 style={{ marginBottom: "20px" }}>A room where ideas are taken seriously.</h2>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "var(--charcoal)", marginBottom: "16px" }}>
                Higher education too often becomes an exercise in exam preparation and routine memorization.
                The GBSC Study Circle reclaims university life as an intellectual adventure—where students
                from different departments gather to read foundational books, ask fearless questions, and
                sharpen their critical faculties.
              </p>
              <p style={{ color: "var(--muted)", lineHeight: 1.65, marginBottom: "24px" }}>
                There are no grades, no corporate sponsors, and no academic hierarchies. Whether you are
                a first-year undergraduate studying economics or a PhD scholar in physics, your curiosity
                and thoughtful participation are welcomed equally.
              </p>
              <Link href="/contact" className="button button-primary">
                Propose a Study Track <ArrowUpRight size={16} />
              </Link>
            </div>

            <div
              style={{
                position: "relative",
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                border: "1px solid var(--line)",
                boxShadow: "0 12px 32px rgba(0,0,0,0.06)",
              }}
            >
              <Image
                src="/images/events/study-circle.jpg"
                alt="University students around a library table during a study circle"
                width={700}
                height={450}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "16px 20px",
                  background: "linear-gradient(to top, rgba(6,18,29,0.92), transparent)",
                  color: "var(--surface)",
                  fontSize: "0.78rem",
                  fontFamily: "var(--mono)",
                }}
              >
                QAU CENTRAL LIBRARY QUADRANGLE // STUDY CIRCLE ARCHIVE
              </div>
            </div>
          </div>

          {/* Discussion Themes */}
          <div style={{ marginBottom: "64px" }}>
            <div className="section-header-row">
              <div className="section-header-copy">
                <p className="eyebrow">
                  <span className="archive-tag tag-terracotta">THEMATIC STREAMS</span>
                </p>
                <h3>Active Reading Tracks</h3>
                <p className="section-header-sub">
                  Curated thematic tracks facilitated by student coordinators throughout the academic session.
                </p>
              </div>
            </div>

            <div className="editorial-grid-2" style={{ gap: "24px" }}>
              {tracks.map((track, i) => (
                <div key={i} className="editorial-card">
                  <div className="editorial-card-index">
                    <span className="archive-tag tag-teal">TRACK 0{i + 1}</span>
                    <span style={{ fontSize: "0.74rem", color: "var(--muted)" }}>{track.format}</span>
                  </div>
                  <h4 style={{ fontSize: "1.25rem", marginBottom: "8px" }}>{track.title}</h4>
                  <p style={{ fontSize: "0.9rem", color: "var(--muted)", margin: 0 }}>{track.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Session Guidelines */}
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--line)",
              borderRadius: "var(--radius-md)",
              padding: "clamp(28px, 4vw, 40px)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <BookOpen size={20} style={{ color: "var(--teal)" }} />
              <h3 style={{ margin: 0, fontSize: "1.3rem" }}>How to Participate in Study Circles</h3>
            </div>
            <p style={{ color: "var(--muted)", fontSize: "0.92rem", lineHeight: 1.65, maxWidth: "70ch" }}>
              1. Reading materials (excerpts, articles, or chapters) are shared digitally one week before the session.<br />
              2. Every participant is encouraged to read the text in advance and prepare at least one thoughtful question.<br />
              3. Sessions begin with a 10-minute overview by the facilitator, followed by open, egalitarian discussion.<br />
              4. All discussions respect mutual dignity and intellectual honesty.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
