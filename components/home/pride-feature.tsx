import Link from "next/link";
import { ArrowUpRight, Award, BookmarkCheck } from "lucide-react";
import { achievementsData } from "@/content/achievements";

export function PrideFeature() {
  const previewAchievements = achievementsData.slice(0, 3);

  return (
    <section className="section-padding section-white" aria-labelledby="pride-heading">
      <div className="wrap">
        <div className="section-header-row">
          <div className="section-header-copy">
            <p className="eyebrow">
              <span className="archive-tag tag-terracotta">OUR PRIDE // ACHIEVEMENTS</span>
              <span>·</span>
              <span>Student Distinction</span>
            </p>
            <h2 id="pride-heading">
              Stories of effort, curiosity, and contribution.
            </h2>
            <p className="section-header-sub">
              Honoring verified research contributions, student service initiatives, and cultural
              scholarship by northern students at Quaid-i-Azam University.
            </p>
          </div>
          <Link href="/our-pride" className="text-link">
            Explore All Verified Entries <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="editorial-grid-3">
          {previewAchievements.map((item) => (
            <article key={item.id} className="editorial-card">
              <div className="editorial-card-index">
                <span className="archive-tag tag-teal">{item.field}</span>
                <span style={{ fontSize: "0.72rem", color: "var(--muted)", fontFamily: "var(--mono)" }}>
                  {item.year}
                </span>
              </div>
              <h3 style={{ fontSize: "1.35rem" }}>{item.title}</h3>
              <div style={{ fontSize: "0.82rem", color: "var(--terracotta)", fontWeight: 600, marginBottom: "12px" }}>
                {item.personOrGroup}
              </div>
              <p>{item.description}</p>
              <div className="editorial-card-footer">
                <span style={{ fontSize: "0.76rem", color: "var(--muted)" }}>{item.context}</span>
                <BookmarkCheck size={16} style={{ color: "var(--teal)" }} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
