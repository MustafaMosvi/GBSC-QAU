import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { chairmanMessageData } from "@/content/cabinet";

export function ChairmanFeature() {
  return (
    <section className="chairman-band" aria-labelledby="chairman-heading">
      <div className="wrap chairman-layout">
        {/* Left Column: Portrait Badge / Insignia Frame */}
        <div className="chairman-portrait-frame">
          <div className="chairman-logo-badge">
            <Image
              src={chairmanMessageData.imagePlaceholder}
              alt="GBSC-QAU Seal"
              width={100}
              height={135}
              style={{ objectFit: "contain" }}
            />
          </div>
          <span className="archive-tag tag-teal">EXECUTIVE DESK</span>
          <div className="chairman-badge-label">
            {chairmanMessageData.role}
          </div>
          <p style={{ margin: "8px 0 0", fontSize: "0.78rem", color: "var(--muted)" }}>
            {chairmanMessageData.institution}
          </p>
        </div>

        {/* Right Column: Editorial Message */}
        <div className="chairman-quote-content">
          <p className="eyebrow">
            <span className="archive-tag tag-terracotta">CABINET PERSPECTIVE</span>
            <span>·</span>
            <span>{chairmanMessageData.eyebrow}</span>
          </p>

          <h2 id="chairman-heading" style={{ fontSize: "clamp(2rem, 3.4vw, 2.8rem)", marginBottom: "20px" }}>
            {chairmanMessageData.title}
          </h2>

          <blockquote>
            “{chairmanMessageData.quote}”
          </blockquote>

          <div className="chairman-quote-body">
            {chairmanMessageData.body.slice(0, 2).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
            <div className="chairman-signoff">
              <div>
                <strong>{chairmanMessageData.namePlaceholder}</strong>
                <span>{chairmanMessageData.role} · {chairmanMessageData.tenure}</span>
              </div>
            </div>

            <Link href="/about" className="button button-secondary">
              View Full Cabinet Structure <ArrowUpRight size={15} />
            </Link>
          </div>

          {/* Transparent Editorial Disclaimer */}
          <div
            style={{
              marginTop: "24px",
              padding: "10px 16px",
              background: "rgba(10, 28, 42, 0.04)",
              borderRadius: "var(--radius-sm)",
              fontSize: "0.76rem",
              color: "var(--muted)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <ShieldCheck size={14} style={{ color: "var(--teal)", flexShrink: 0 }} />
            <span>{chairmanMessageData.editorialNote}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
