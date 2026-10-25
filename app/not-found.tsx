import Link from "next/link";
import { ArrowUpRight, Compass, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="section-padding section-paper not-found" style={{ textAlign: "center", minHeight: "60vh", display: "flex", alignItems: "center" }}>
      <div className="wrap" style={{ maxWidth: "680px", marginInline: "auto" }}>
        <p className="eyebrow" style={{ justifyContent: "center" }}>
          <span className="archive-tag tag-terracotta">ERROR 404 // NOT FOUND</span>
        </p>
        <h1 style={{ fontSize: "clamp(2.4rem, 4vw, 3.8rem)", marginBottom: "16px" }}>
          The path you seek is unrecorded.
        </h1>
        <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.65, marginBottom: "32px" }}>
          The document or archive entry you are looking for may have been moved, updated,
          or has not yet been archived by the council.
        </p>

        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="button button-primary">
            <Home size={16} /> Return to Home
          </Link>
          <Link href="/events" className="button button-secondary">
            <Compass size={16} /> Explore Events Directory
          </Link>
          <Link href="/help-desk" className="button button-secondary">
            Student Help Desk <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
