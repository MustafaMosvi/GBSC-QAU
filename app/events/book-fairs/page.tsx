import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, BookOpen, Library, BookMarked, Sparkles } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";

export const metadata: Metadata = {
  title: "Book Fairs & Literary Culture // GBSC-QAU",
  description:
    "Open-air campus book exhibitions, literary festivals, and reading initiatives organized by the Gilgit-Baltistan Student Council at Quaid-i-Azam University.",
};

export default function BookFairsPage() {
  const pillars = [
    {
      title: "Subsidized Academic & Literary Access",
      description: "Partnering with independent and regional publishers to provide students with high-value books at accessible, non-commercial rates.",
    },
    {
      title: "Mountain Literature & Regional History Stalls",
      description: "Featuring rare regional manuscripts, photographic travelogues, glaciological surveys, and bilingual poetry volumes.",
    },
    {
      title: "Student Book Exchange & Library Donation",
      description: "Facilitating student-to-student book swaps to ensure textbooks and reference volumes circulate freely across graduating cohorts.",
    },
  ];

  return (
    <>
      <Breadcrumbs items={[{ label: "Events", href: "/events" }, { label: "Book Fairs" }]} />

      <header className="page-hero-banner">
        <div className="wrap">
          <p className="eyebrow light">
            <span className="archive-tag tag-dark">LITERARY CULTURE</span>
            <span>·</span>
            <span>Reading & Knowledge Access</span>
          </p>
          <h1>A table full of possible worlds.</h1>
          <p className="lead">
            Book fairs and literary gatherings that encourage reading, intellectual exploration,
            and affordable access to regional, philosophical, and scientific literature.
          </p>
        </div>
      </header>

      <section className="section-padding section-paper">
        <div className="wrap">
          <div className="editorial-grid-2" style={{ alignItems: "center", marginBottom: "64px" }}>
            <div>
              <p className="eyebrow">
                <span className="archive-tag tag-teal">CAMPUS EXHIBITION</span>
              </p>
              <h2 style={{ marginBottom: "20px" }}>Bringing books into the heart of student walkways.</h2>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "var(--charcoal)", marginBottom: "16px" }}>
                GBSC book fairs transform the outdoor promenades of Quaid-i-Azam University into lively literary spaces.
                Under the shade of campus trees, tables are laid with titles spanning philosophy, South Asian history,
                mountain ecology, Urdu literature, and global thought.
              </p>
              <p style={{ color: "var(--muted)", lineHeight: 1.65, marginBottom: "24px" }}>
                Students gather not merely to purchase books, but to pause between lectures, debate ideas,
                and discover regional authors whose works are rarely stocked by commercial bookshops.
              </p>
              <Link href="/events" className="button button-primary">
                Explore Event Calendar <ArrowUpRight size={16} />
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
                src="/images/events/book-fair.jpg"
                alt="Open-air campus book fair at Quaid-i-Azam University with students browsing tables"
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
                PROMENADE BOOK EXHIBITION // QAU CENTRAL WALKWAY
              </div>
            </div>
          </div>

          <div className="editorial-grid-3">
            {pillars.map((item, idx) => (
              <div key={idx} className="editorial-card">
                <div className="editorial-card-index">
                  <span className="archive-tag tag-teal">OBJECTIVE 0{idx + 1}</span>
                  <Library size={16} style={{ color: "var(--teal)" }} />
                </div>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontSize: "0.88rem", color: "var(--muted)", margin: 0 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
