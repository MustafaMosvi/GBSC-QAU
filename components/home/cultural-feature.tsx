import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Music, Globe, BookMarked } from "lucide-react";
import { poetryEvent } from "@/content/cultural-events";

export function CulturalFeature() {
  const languages = [
    { name: "Balti", family: "Tibetic", region: "Skardu, Ghanche, Shigar, Kharmang" },
    { name: "Shina", family: "Dardic", region: "Gilgit, Diamer, Astore, Ghizer" },
    { name: "Burushaski", family: "Language Isolate", region: "Hunza, Nagar, Yasin" },
    { name: "Wakhi", family: "Eastern Iranian", region: "Upper Hunza (Gojal), Ishkoman" },
    { name: "Khowar", family: "Dardic", region: "Ghizer (Gupis, Yasin, Phander)" },
  ];

  return (
    <section className="section-padding section-white" aria-labelledby="cultural-heading">
      <div className="wrap">
        <div className="editorial-grid-2" style={{ alignItems: "center" }}>
          {/* Left Column: Copy & Linguistic Diversity */}
          <div>
            <p className="eyebrow">
              <span className="archive-tag tag-terracotta">LIVING HERITAGE</span>
              <span>·</span>
              <span>Cultural Pluralism</span>
            </p>
            <h2 id="cultural-heading" style={{ fontSize: "clamp(2.2rem, 3.8vw, 3.3rem)", marginBottom: "20px" }}>
              Many valleys, many voices <em>— one living tapestry.</em>
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "var(--charcoal)", marginBottom: "18px" }}>
              Gilgit-Baltistan is not a monolith. It is an ancient geographical crossroads where diverse
              linguistic heritages, poetic styles, musical sensibilities, and oral narratives have thrived
              side by side for centuries amidst the high mountain passes.
            </p>
            <p style={{ color: "var(--muted)", lineHeight: 1.65, marginBottom: "28px" }}>
              {poetryEvent.summary}
            </p>

            {/* Language Badges Grid */}
            <div style={{ marginBottom: "32px" }}>
              <span className="eyebrow" style={{ display: "block", marginBottom: "12px" }}>
                <Globe size={14} /> Regional Linguistic Traditions
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {languages.map((lang) => (
                  <span
                    key={lang.name}
                    className="archive-tag"
                    title={`${lang.name} (${lang.family}) - Spoken in ${lang.region}`}
                    style={{ padding: "6px 12px", fontSize: "0.75rem" }}
                  >
                    <strong>{lang.name}</strong> <span style={{ opacity: 0.6 }}>· {lang.family}</span>
                  </span>
                ))}
              </div>
            </div>

            <Link href="/events/cultural" className="button button-primary">
              Discover Cultural Programs <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Right Column: Visual Documentary Frame */}
          <div>
            <div
              style={{
                position: "relative",
                background: "var(--paper)",
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                border: "1px solid var(--line)",
                boxShadow: "0 16px 36px rgba(0, 0, 0, 0.08)",
              }}
            >
              <a
                href={poetryEvent.image}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View the full Bazm-e-Sukhan poster (opens in a new tab)"
                style={{ position: "relative", display: "block", aspectRatio: "720 / 460" }}
              >
                <Image
                  src={poetryEvent.image}
                  alt={poetryEvent.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "contain" }}
                />
              </a>
              <div
                style={{
                  position: "relative",
                  padding: "20px",
                  background: "var(--ink)",
                  color: "var(--surface)",
                }}
              >
                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "space-between", alignItems: "flex-end" }}>
                  <div>
                    <span className="archive-tag tag-terracotta" style={{ marginBottom: "6px" }}>
                      POETRY ARCHIVE
                    </span>
                    <h4 style={{ margin: 0, color: "var(--surface)", fontSize: "1.05rem" }}>
                      {poetryEvent.title}
                    </h4>
                  </div>
                  <span style={{ fontSize: "0.75rem", fontFamily: "var(--mono)", color: "#a5b8b0" }}>
                    {poetryEvent.date}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
