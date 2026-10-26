import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { studyCircleHighlights } from "@/content/study-circles";

export function StudyFeature() {
  const studyCircle = studyCircleHighlights[0];

  return (
    <section className="section-padding study-circle-band" aria-labelledby="study-heading">
      <div className="wrap">
        <div className="editorial-grid-2">
          {/* Left Column: Visual & Reading List */}
          <div>
            <div style={{ position: "relative", aspectRatio: "700 / 440", borderRadius: "var(--radius-md)", overflow: "hidden", marginBottom: "24px", border: "1px solid var(--line)", background: "var(--paper)" }}>
              <Image
                src={studyCircle.image}
                alt={studyCircle.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "contain" }}
              />
            </div>

            {/* Reading List Card */}
            <div className="study-reading-list">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                <span className="eyebrow" style={{ margin: 0 }}>
                  <BookOpen size={14} /> Study Circle Highlights
                </span>
                <span className="archive-tag tag-dark">COUNCIL ARCHIVE</span>
              </div>

              {studyCircleHighlights.map((item, idx) => (
                <div key={item.id} className="study-reading-item">
                  <span className="study-reading-code">0{idx + 1}</span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.date}</p>
                  </div>
                  <span style={{ fontSize: "0.75rem", color: "var(--teal)", fontFamily: "var(--mono)" }}>
                    ARCHIVE
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div style={{ paddingLeft: "clamp(0px, 3vw, 24px)" }}>
            <p className="eyebrow">
              <span className="archive-tag tag-teal">INTELLECTUAL LIFE</span>
              <span>·</span>
              <span>The Study Circle</span>
            </p>
            <h2 id="study-heading" style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)", marginBottom: "20px" }}>
              Curiosity grows when it is shared without pretense.
            </h2>
            <p style={{ fontSize: "1.08rem", lineHeight: 1.7, color: "var(--charcoal)", marginBottom: "18px" }}>
              {studyCircle.summary}
            </p>
            <p style={{ color: "var(--muted)", lineHeight: 1.65, marginBottom: "32px" }}>
              {studyCircle.date} · {studyCircle.time} · {studyCircle.venue}
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link href="/events/study-circles" className="button button-primary">
                Explore Study Circles <ArrowUpRight size={16} />
              </Link>
              <Link href="/contact" className="button button-secondary">
                Propose a Reading Topic
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
