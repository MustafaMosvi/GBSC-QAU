import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Wrench, GraduationCap, FileText, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";

export const metadata: Metadata = {
  title: "Workshops & Seminars // Academic Readying",
  description:
    "Explore practical skills workshops and scholarly seminars hosted by the Gilgit-Baltistan Student Council at Quaid-i-Azam University.",
};

export default function WorkshopsSeminarsPage() {
  const workshops = [
    {
      title: "Graduate Thesis Writing & Literature Reviews",
      focus: "Manuscript structuring, citation standards (APA/Chicago), and academic framing.",
      skills: ["Thesis Outline Design", "Zotero / Mendeley Citation Workflows", "Literature Synthesis"],
    },
    {
      title: "Research Methodology & Data Synthesis",
      focus: "Quantitative and qualitative research design for social science and natural science projects.",
      skills: ["Qualitative Coding", "Statistical Basics in R / Python", "Survey Formulation"],
    },
    {
      title: "Higher Education Fellowships & Applications",
      focus: "Preparing competitive statements of purpose and scholarship packages for master's and doctoral studies.",
      skills: ["Statement of Purpose Writing", "Academic CV Crafting", "Faculty Recommendation Etiquette"],
    },
  ];

  const seminars = [
    {
      title: "The Karakoram Cryosphere & Climate Adaptation",
      speaker: "Visiting Environmental Scientists & QAU Faculty",
      topic: "Glacial dynamics, downstream hydrological impacts, and mountain community resilience.",
    },
    {
      title: "Linguistic Documentation in Northern Pakistan",
      speaker: "Field Linguists & Community Researchers",
      topic: "Preservation strategies for endangered dialects and phonetic transcription methodologies.",
    },
    {
      title: "Economic Geography & Mountain Trade Corridors",
      speaker: "Development Economists & Regional Analysts",
      topic: "Infrastructure investments, local livelihoods, and ecological safeguards in Gilgit-Baltistan.",
    },
  ];

  return (
    <>
      <Breadcrumbs items={[{ label: "Events", href: "/events" }, { label: "Workshops & Seminars" }]} />

      <header className="page-hero-banner">
        <div className="wrap">
          <p className="eyebrow light">
            <span className="archive-tag tag-dark">ACADEMIC DEVELOPMENT</span>
            <span>·</span>
            <span>Skills & Knowledge Exchange</span>
          </p>
          <h1>Skills shared. Ideas in conversation.</h1>
          <p className="lead">
            Bridging classroom theory with practical readiness. Our workshops develop concrete competencies,
            while our scholarly seminars open up regional and global perspectives.
          </p>
        </div>
      </header>

      <section className="section-padding section-paper">
        <div className="wrap">
          {/* Distinct Category 1: Practical Workshops */}
          <div style={{ marginBottom: "72px" }}>
            <div className="section-header-row">
              <div className="section-header-copy">
                <p className="eyebrow">
                  <span className="archive-tag tag-teal">PRACTICAL SKILLS</span>
                  <span>·</span>
                  <span>Hands-on Masterclasses</span>
                </p>
                <h2>Workshops: Practical Academic Competence</h2>
                <p className="section-header-sub">
                  Targeted, interactive sessions focused on research execution, digital tools, and academic writing.
                </p>
              </div>
            </div>

            <div className="editorial-grid-3">
              {workshops.map((w, idx) => (
                <div key={idx} className="editorial-card">
                  <div className="editorial-card-index">
                    <span className="archive-tag tag-teal">SKILL LAB 0{idx + 1}</span>
                    <Wrench size={16} style={{ color: "var(--teal)" }} />
                  </div>
                  <h3 style={{ fontSize: "1.25rem", marginBottom: "8px" }}>{w.title}</h3>
                  <p style={{ fontSize: "0.88rem", color: "var(--muted)", marginBottom: "16px" }}>{w.focus}</p>
                  <div style={{ borderTop: "1px solid var(--line-light)", paddingTop: "12px", marginTop: "auto" }}>
                    <span style={{ fontSize: "0.72rem", color: "var(--charcoal)", fontWeight: 700, textTransform: "uppercase", display: "block", marginBottom: "6px" }}>
                      Competencies Covered:
                    </span>
                    <ul style={{ margin: 0, paddingLeft: "16px", fontSize: "0.82rem", color: "var(--muted)" }}>
                      {w.skills.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Distinct Category 2: Scholarly Seminars */}
          <div>
            <div className="section-header-row">
              <div className="section-header-copy">
                <p className="eyebrow">
                  <span className="archive-tag tag-terracotta">PUBLIC DISCOURSE</span>
                  <span>·</span>
                  <span>Scholarly Exchange</span>
                </p>
                <h2>Seminars: Perspectives & Faculty Dialogues</h2>
                <p className="section-header-sub">
                  Invited talks, public lectures, and panel discussions exploring contemporary questions in science, ecology, and society.
                </p>
              </div>
            </div>

            <div className="editorial-grid-3">
              {seminars.map((s, idx) => (
                <div key={idx} className="editorial-card">
                  <div className="editorial-card-index">
                    <span className="archive-tag tag-terracotta">COLLOQUIUM 0{idx + 1}</span>
                    <GraduationCap size={16} style={{ color: "var(--terracotta)" }} />
                  </div>
                  <h3 style={{ fontSize: "1.25rem", marginBottom: "8px" }}>{s.title}</h3>
                  <div style={{ fontSize: "0.8rem", color: "var(--terracotta)", fontWeight: 600, marginBottom: "12px" }}>
                    Panel: {s.speaker}
                  </div>
                  <p style={{ fontSize: "0.88rem", color: "var(--muted)", margin: 0 }}>{s.topic}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
