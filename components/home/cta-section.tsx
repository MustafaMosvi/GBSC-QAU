import Link from "next/link";
import { ArrowUpRight, MessageSquare, Compass } from "lucide-react";

export function CTASection() {
  return (
    <section
      style={{
        background: "var(--ink-deep)",
        color: "var(--surface)",
        padding: "clamp(64px, 8vw, 100px) 0",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
      }}
      aria-labelledby="cta-heading"
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 75% 50%, rgba(40, 94, 98, 0.3), transparent 60%)",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "clamp(32px, 5vw, 64px)",
            alignItems: "center",
          }}
        >
          <div>
            <p className="eyebrow light">
              <span className="archive-tag tag-dark">COMMUNITY INVITATION</span>
              <span>·</span>
              <span>Participation</span>
            </p>
            <h2 id="cta-heading" style={{ color: "var(--surface)", fontSize: "clamp(2.4rem, 4.4vw, 3.8rem)", marginBottom: "20px" }}>
              Your voice belongs in this community.
            </h2>
            <p style={{ color: "#d2ded9", fontSize: "1.08rem", lineHeight: 1.7, maxWidth: "560px", margin: 0 }}>
              Whether you are an incoming freshman seeking advice, a graduate student conducting mountain research,
              or someone with an idea for a study circle session, our doors are open.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start" }}>
            <Link href="/contact" className="button button-white" style={{ minWidth: "220px" }}>
              <MessageSquare size={17} /> Reach Out to the Council
            </Link>
            <Link href="/events" className="button button-outline-light" style={{ minWidth: "220px" }}>
              <Compass size={17} /> Discover Program Tracks
            </Link>
            <span style={{ fontSize: "0.74rem", color: "#8da49c", fontFamily: "var(--mono)", marginTop: "8px" }}>
              Quaid-i-Azam University · Islamabad
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
