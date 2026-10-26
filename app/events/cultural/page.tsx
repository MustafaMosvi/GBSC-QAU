import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Music, Globe, Sparkles, Feather } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { poetryEvent } from "@/content/cultural-events";

export const metadata: Metadata = {
  title: "Cultural Life // Living Heritage",
  description:
    "Celebrating the languages, acoustic instruments, poetry, and living cultural diversity of Gilgit-Baltistan at Quaid-i-Azam University, Islamabad.",
};

export default function CulturalPage() {
  const traditions = [
    {
      title: "Acoustic String & Percussion Traditions",
      description: "The resonant tones of the Rubab, Suranai, and Daf accompany traditional dance and vocal harmonies that carry mountain stories.",
      icon: Music,
    },
    {
      title: "Multilingual Poetic Gatherings (Mushaira)",
      description: "Poetic recitals celebrating the expressive beauty of Balti, Shina, Burushaski, Wakhi, Khowar, and Urdu verses.",
      icon: Feather,
    },
    {
      title: "Textile Crafts & Traditional Attire",
      description: "The iconic hand-spun woollen Pakol cap with its distinctive plumed feather, handcrafted Chugha cloaks, and regional geometric embroidery.",
      icon: Sparkles,
    },
    {
      title: "Folklore & Oral Narratives",
      description: "Documenting generational folktales, proverbs, and ecological wisdom passed down through oral tradition across the high valleys.",
      icon: Globe,
    },
  ];

  return (
    <>
      <Breadcrumbs items={[{ label: "Events", href: "/events" }, { label: "Cultural Life" }]} />

      <header className="page-hero-banner">
        <div className="wrap">
          <p className="eyebrow light">
            <span className="archive-tag tag-dark">CULTURAL HERITAGE</span>
            <span>·</span>
            <span>Living Traditions</span>
          </p>
          <h1>Many voices, many ways to belong.</h1>
          <p className="lead">
            Cultural life is more than a single image. It encompasses languages, oral histories,
            acoustic music, contemporary creativity, and the lived experiences of diverse mountain communities.
          </p>
        </div>
      </header>

      <section className="section-padding section-paper">
        <div className="wrap">
          <div className="editorial-grid-2" style={{ alignItems: "center", marginBottom: "64px" }}>
            <div>
              <p className="eyebrow">
                <span className="archive-tag tag-terracotta">PAST POETRY EVENT</span>
              </p>
              <h2 style={{ marginBottom: "20px" }}>{poetryEvent.title}</h2>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "var(--charcoal)", marginBottom: "16px" }}>
                {poetryEvent.summary}
              </p>
              <p style={{ color: "var(--muted)", lineHeight: 1.65, marginBottom: "24px" }}>
                {poetryEvent.date} · {poetryEvent.time}<br />
                {poetryEvent.venue}
              </p>
              <Link href="/gallery" className="button button-primary">
                View Cultural Archive Gallery <ArrowUpRight size={16} />
              </Link>
            </div>

            <a
              href={poetryEvent.image}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View the full Bazm-e-Sukhan poster (opens in a new tab)"
              style={{
                position: "relative",
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                border: "1px solid var(--line)",
                boxShadow: "0 12px 32px rgba(0,0,0,0.06)",
              }}
            >
              <Image
                src={poetryEvent.image}
                alt={poetryEvent.imageAlt}
                width={poetryEvent.imageWidth}
                height={poetryEvent.imageHeight}
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </a>
          </div>

          <div className="editorial-grid-2" style={{ gap: "24px" }}>
            {traditions.map((t, idx) => {
              const IconComp = t.icon;
              return (
                <div key={idx} className="editorial-card">
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "var(--radius-sm)",
                      background: "var(--terracotta-pale)",
                      color: "var(--terracotta)",
                      display: "grid",
                      placeItems: "center",
                      marginBottom: "16px",
                    }}
                    aria-hidden="true"
                  >
                    <IconComp size={20} />
                  </div>
                  <h3 style={{ fontSize: "1.25rem", marginBottom: "8px" }}>{t.title}</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--muted)", margin: 0 }}>{t.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
