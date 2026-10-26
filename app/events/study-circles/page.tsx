import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { studyCircleHighlights } from "@/content/study-circles";

export const metadata: Metadata = {
  title: "Study Circles // Academic Discussion",
  description:
    "Student-led discussion on glacier melting, water insecurity, and Gilgit-Baltistan’s climate security at Quaid-i-Azam University, Islamabad.",
};

export default function StudyCirclesPage() {
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
            The GBSC Study Circle is a student-led space for thoughtful discussion and exploring academic,
            environmental, and social ideas.
          </p>
        </div>
      </header>
      <section className="section-padding section-paper">
        <div className="wrap">
          {studyCircleHighlights.map((record) => (
            <article key={record.id} id={record.slug} className="editorial-grid-2" style={{ alignItems: "center", marginBottom: "64px" }}>
              <div>
                <p className="eyebrow"><span className="archive-tag tag-teal">COMPLETED STUDY CIRCLE</span></p>
                <h2 style={{ marginBottom: "20px" }}>{record.title}</h2>
                <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "var(--charcoal)", marginBottom: "16px" }}>{record.summary}</p>
                <p style={{ color: "var(--muted)", lineHeight: 1.65, marginBottom: "8px" }}>{record.date} · {record.time}</p>
                <p style={{ color: "var(--muted)", marginBottom: "24px" }}>{record.venue}</p>
                <Link href="/contact" className="button button-primary">Propose a Discussion Topic <ArrowUpRight size={16} /></Link>
              </div>
              <Image
                src={record.image}
                alt={record.imageAlt}
                width={record.imageWidth}
                height={record.imageHeight}
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ width: "100%", height: "auto", display: "block", borderRadius: "var(--radius-md)", border: "1px solid var(--line)" }}
              />
            </article>
          ))}
          <div style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: "var(--radius-md)", padding: "clamp(28px, 4vw, 40px)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <BookOpen size={20} style={{ color: "var(--teal)" }} />
              <h3 style={{ margin: 0, fontSize: "1.3rem" }}>How to Participate in Study Circles</h3>
            </div>
            <p style={{ color: "var(--muted)", fontSize: "0.92rem", lineHeight: 1.65, maxWidth: "70ch" }}>
              Bring your questions, share your perspective, and respect fellow participants.
              Contact the council to ask about future sessions or propose a discussion topic.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
