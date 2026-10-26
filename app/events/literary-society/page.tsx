import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { literarySocietyImages, literarySocietyInitiative } from "@/content/literary-society";

export const metadata: Metadata = {
  title: "Literary Society // Gilgit-Baltistan at QAU",
  description: literarySocietyInitiative.summary,
};

export default function LiterarySocietyPage() {
  const emblem = literarySocietyImages[0];

  return (
    <>
      <Breadcrumbs items={[{ label: "Events", href: "/events" }, { label: "Literary Society" }]} />
      <header className="page-hero-banner">
        <div className="wrap">
          <p className="eyebrow light">
            <span className="archive-tag tag-dark">LITERARY SOCIETY</span>
            <span>·</span>
            <span>Literature, Languages & Heritage</span>
          </p>
          <h1>Gilgit-Baltistan Literary Society</h1>
          <p className="lead">A platform for student expression, literary identity, and intellectual exchange at QAU.</p>
        </div>
      </header>
      <section className="section-padding section-paper">
        <div className="wrap">
          <div className="editorial-grid-2" style={{ alignItems: "center", marginBottom: "64px" }}>
            <div>
              <p className="eyebrow"><span className="archive-tag tag-teal">CABINET 2025–26 INITIATIVE</span></p>
              <h2 style={{ marginBottom: "20px" }}>A first step for literature and heritage.</h2>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "var(--charcoal)", marginBottom: "24px" }}>
                {literarySocietyInitiative.summary}
              </p>
              <Link href="/contact" className="button button-primary">Get Involved <ArrowUpRight size={16} /></Link>
            </div>
            <Image
              src={emblem.src}
              alt={emblem.alt}
              width={emblem.width}
              height={emblem.height}
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ width: "100%", height: "auto", maxHeight: "420px", objectFit: "contain", borderRadius: "var(--radius-md)" }}
            />
          </div>
          <div className="section-header-row">
            <div className="section-header-copy">
              <p className="eyebrow"><span className="archive-tag tag-terracotta">SOCIETY ARCHIVE</span></p>
              <h2>The people behind the initiative.</h2>
            </div>
            <Link href="/gallery" className="text-link">Explore the Gallery <ArrowUpRight size={16} /></Link>
          </div>
          <div className="editorial-grid-2" style={{ gap: "24px" }}>
            {literarySocietyImages.slice(1).map((image) => (
              <figure key={image.id} className="editorial-card" style={{ margin: 0 }}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ width: "100%", height: "auto", display: "block", borderRadius: "var(--radius-sm)", marginBottom: "16px" }}
                />
                <figcaption style={{ fontSize: "0.9rem", color: "var(--muted)" }}>{image.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
