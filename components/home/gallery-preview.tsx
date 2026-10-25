import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Camera } from "lucide-react";
import { galleryItemsData } from "@/content/gallery";

export function GalleryPreview() {
  const previewItems = galleryItemsData.slice(0, 4);

  return (
    <section className="section-padding section-dark" aria-labelledby="gallery-preview-heading">
      <div className="wrap">
        <div className="section-header-row">
          <div className="section-header-copy">
            <p className="eyebrow light">
              <span className="archive-tag tag-dark">DOCUMENTARY RECORD</span>
              <span>·</span>
              <span>Visual Archive</span>
            </p>
            <h2 id="gallery-preview-heading" style={{ color: "var(--surface)" }}>
              Moments from a living student community.
            </h2>
            <p className="section-header-sub" style={{ color: "#a2b5ac" }}>
              Photographic documentation of cultural nights, study circles, book fairs, and mountain heritage.
              Shared with permission and editorial care.
            </p>
          </div>
          <Link href="/gallery" className="button button-outline-light">
            View Complete Gallery Archive <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Varied Editorial Photo Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {previewItems.map((item, index) => (
            <Link
              key={item.id}
              href="/gallery"
              className="group"
              style={{
                position: "relative",
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                textDecoration: "none",
                display: "block",
                aspectRatio: index === 0 ? "16/11" : "4/3",
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover", transition: "transform var(--transition-smooth)" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(6, 18, 29, 0.92) 0%, rgba(6, 18, 29, 0.2) 60%, transparent 100%)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "20px",
                  color: "var(--surface)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "0.68rem",
                    color: "var(--teal-light)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "4px",
                  }}
                >
                  {item.category}
                </span>
                <h4 style={{ margin: 0, color: "var(--surface)", fontSize: "1.05rem" }}>{item.title}</h4>
                <p style={{ margin: "4px 0 0", fontSize: "0.76rem", color: "#b4c7be", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {item.caption}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
