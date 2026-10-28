import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, BookOpen, Calendar, Clock, MapPin, UserCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { studyCircleHighlights } from "@/content/study-circles";

export const metadata: Metadata = {
  title: "Study Circles // Academic & Cultural Dialogue",
  description:
    "Student-led discussions, literary circles, and youth peace dialogues organized by the Gilgit-Baltistan Student Council and Literary Society at Quaid-i-Azam University, Islamabad.",
};

export default function StudyCirclesPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Events", href: "/events" }, { label: "Study Circles" }]}
      />
      <header className="page-hero-banner">
        <div className="wrap">
          <p className="eyebrow light">
            <span className="archive-tag tag-dark">ACADEMIC & CULTURAL FORUM</span>
            <span>·</span>
            <span>Intellectual Inquiry</span>
          </p>
          <h1>Make room for a good question.</h1>
          <p className="lead">
            The GBSC Study Circle is a student-led space for critical dialogue,
            literary exploration, and youth-driven community harmony.
          </p>
        </div>
      </header>

      <section className="section-padding section-paper">
        <div className="wrap">
          {studyCircleHighlights.map((record, index) => (
            <article
              key={record.id}
              id={record.slug}
              className="editorial-grid-2"
              style={{
                alignItems: "center",
                marginBottom: "72px",
                paddingBottom: "56px",
                borderBottom:
                  index < studyCircleHighlights.length - 1
                    ? "1px solid var(--line)"
                    : "none",
              }}
            >
              <div>
                <p className="eyebrow">
                  <span className="archive-tag tag-teal">
                    {record.id.includes("bayaak")
                      ? "COMMUNITY & PEACE FELLOWSHIP"
                      : "GBLS INAUGURAL STUDY CIRCLE"}
                  </span>
                </p>
                <h2 style={{ marginBottom: "16px", lineHeight: 1.25 }}>
                  {record.title}
                </h2>

                {record.facilitator && (
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "var(--teal)",
                      fontWeight: 600,
                      fontSize: "0.92rem",
                      marginBottom: "16px",
                    }}
                  >
                    <UserCheck size={16} />
                    <span>{record.facilitator}</span>
                  </p>
                )}

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginBottom: "20px",
                  }}
                >
                  <span
                    className="archive-tag tag-dark"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <Calendar size={13} /> {record.date}
                  </span>
                  {record.time && (
                    <span
                      className="archive-tag tag-dark"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <Clock size={13} /> {record.time}
                    </span>
                  )}
                  {record.venue && (
                    <span
                      className="archive-tag tag-teal"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <MapPin size={13} /> {record.venue}
                    </span>
                  )}
                </div>

                <div
                  style={{
                    fontSize: "0.98rem",
                    lineHeight: 1.7,
                    color: "var(--charcoal)",
                    marginBottom: "28px",
                  }}
                >
                  {record.description.split("\n\n").map((para, i) => (
                    <p key={i} style={{ marginBottom: "14px" }}>
                      {para}
                    </p>
                  ))}
                </div>

                <Link href="/contact" className="button button-primary">
                  Propose a Discussion Topic <ArrowUpRight size={16} />
                </Link>
              </div>

              <div>
                <Image
                  src={record.image}
                  alt={record.imageAlt}
                  width={record.imageWidth}
                  height={record.imageHeight}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--line)",
                    boxShadow: "0 12px 32px rgba(10, 28, 42, 0.08)",
                  }}
                />
              </div>
            </article>
          ))}

          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--line)",
              borderRadius: "var(--radius-md)",
              padding: "clamp(28px, 4vw, 40px)",
              marginTop: "24px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "14px",
              }}
            >
              <BookOpen size={20} style={{ color: "var(--teal)" }} />
              <h3 style={{ margin: 0, fontSize: "1.3rem" }}>
                How to Participate in Study Circles
              </h3>
            </div>
            <p
              style={{
                color: "var(--muted)",
                fontSize: "0.92rem",
                lineHeight: 1.65,
                maxWidth: "70ch",
                margin: 0,
              }}
            >
              Bring your questions, share your perspective, and respect fellow
              participants. Contact the council to ask about future sessions or
              propose a discussion topic.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
