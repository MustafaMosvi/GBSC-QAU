import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Music,
  Globe,
  Sparkles,
  Feather,
  Flame,
  Clock,
  MapPin,
  Calendar,
  Info,
  Shield,
  Users,
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { poetryEvent, jashnEMayfungEvent } from "@/content/cultural-events";

export const metadata: Metadata = {
  title: "Cultural Life // Living Heritage & Jashn-e-Mayfung",
  description:
    "Celebrating Jashn-e-Mayfung, poetry recitals, acoustic instruments, languages, and the living cultural diversity of Gilgit-Baltistan at Quaid-i-Azam University, Islamabad.",
};

export default function CulturalPage() {
  const mayfungPillars = [
    {
      title: "Victory of Light & Warmth",
      description:
        "Centuries-old bonfires and fiery torchlight processions symbolizing hope, life, and the turning away of harsh winter darkness.",
      icon: Flame,
    },
    {
      title: "Ancient Mountain History",
      description:
        "An ancestral winter solstice tradition celebrated for generations across Baltistan, Hunza, Nagar, and Gilgit valleys.",
      icon: Shield,
    },
    {
      title: "Folk Music & Traditional Dance",
      description:
        "Rhythmic beats of the Damal and Suranai accompanying timeless folk melodies, sword dances, and celebratory choruses.",
      icon: Music,
    },
    {
      title: "Campus Fellowship & Solidarity",
      description:
        "A welcoming gathering bringing together GBIANS and all Quaidians in the warmth of collegiate brotherhood and shared cultural memory.",
      icon: Users,
    },
  ];

  const traditions = [
    {
      title: "Acoustic String & Percussion Traditions",
      description:
        "The resonant tones of the Rubab, Suranai, and Daf accompany traditional dance and vocal harmonies that carry mountain stories.",
      icon: Music,
    },
    {
      title: "Multilingual Poetic Gatherings (Mushaira)",
      description:
        "Poetic recitals celebrating the expressive beauty of Balti, Shina, Burushaski, Wakhi, Khowar, and Urdu verses.",
      icon: Feather,
    },
    {
      title: "Textile Crafts & Traditional Attire",
      description:
        "The iconic hand-spun woollen Pakol cap with its distinctive plumed feather, handcrafted Chugha cloaks, and regional geometric embroidery.",
      icon: Sparkles,
    },
    {
      title: "Folklore & Oral Narratives",
      description:
        "Documenting generational folktales, proverbs, and ecological wisdom passed down through oral tradition across the high valleys.",
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
            Cultural life is more than a single image. It encompasses living seasonal festivals,
            languages, oral histories, acoustic music, contemporary creativity, and the shared
            experiences of diverse mountain communities.
          </p>
        </div>
      </header>

      {/* ── Jashn-e-Mayfung Section ─────────────────────────────────── */}
      <section
        id="jashn-e-mayfung"
        className="section-padding section-white"
        aria-labelledby="mayfung-heading"
      >
        <div className="wrap">
          <div className="editorial-grid-2" style={{ alignItems: "center", marginBottom: "48px" }}>
            <div>
              <p className="eyebrow">
                <span className="archive-tag tag-terracotta">
                  <Flame size={12} style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }} />
                  CULTURAL CELEBRATION
                </span>
                <span>·</span>
                <span>Ancient Winter Solstice Festival</span>
              </p>
              <h2 id="mayfung-heading" style={{ marginBottom: "20px" }}>
                Jashn-e-Mayfung: Celebration of Culture & History
              </h2>
              <p style={{ fontSize: "1.08rem", lineHeight: 1.7, color: "var(--charcoal)", marginBottom: "16px" }}>
                Jashn-e-Mayfung is an ancient, historic cultural festival celebrated across the high
                mountain valleys of Gilgit-Baltistan to mark the winter solstice, symbolizing the
                triumph of light over darkness, warmth over cold, and renewed hope.
              </p>
              <p style={{ color: "var(--muted)", lineHeight: 1.65, marginBottom: "20px" }}>
                Rooted deeply in centuries of mountain history, the festival brings communities
                together through glowing night bonfires, fiery torch processions (Mephang), acoustic
                music on traditional instruments, and spirited folk dances. GBSC-QAU brings this
                living heritage to Quaid-i-Azam University, providing students and the wider campus
                a sacred space of communal warmth, ancestral pride, and shared identity.
              </p>

              {/* Status & Schedule Notice Box */}
              <div
                style={{
                  background: "var(--paper)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius-md)",
                  padding: "18px 20px",
                  marginBottom: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span className="archive-tag tag-teal" style={{ fontSize: "0.72rem" }}>
                    UPCOMING CULTURAL EVENT
                  </span>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--terracotta)",
                      fontWeight: 700,
                      fontFamily: "var(--mono)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    DETAILS FORTHCOMING
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                    fontSize: "0.85rem",
                    color: "var(--charcoal)",
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <Calendar size={15} style={{ color: "var(--teal)", flexShrink: 0 }} />
                    <strong>Date:</strong> {jashnEMayfungEvent.date}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <Clock size={15} style={{ color: "var(--teal)", flexShrink: 0 }} />
                    <strong>Time:</strong> {jashnEMayfungEvent.time}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <MapPin size={15} style={{ color: "var(--teal)", flexShrink: 0 }} />
                    <strong>Venue:</strong> {jashnEMayfungEvent.venue}
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "8px",
                    paddingTop: "8px",
                    borderTop: "1px solid var(--line-light)",
                    fontSize: "0.8rem",
                    color: "var(--muted)",
                  }}
                >
                  <Info size={14} style={{ color: "var(--terracotta)", marginTop: "2px", flexShrink: 0 }} />
                  <span>
                    Official event date, schedule, and venue arrangements will be disclosed in the future
                    via official council announcements.
                  </span>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link href="/events#jashn-e-mayfung" className="button button-primary">
                  View in Events Directory <ArrowUpRight size={16} />
                </Link>
                <Link href="/announcements" className="button button-secondary">
                  Council Announcements
                </Link>
              </div>
            </div>

            {/* Poster Card */}
            <div>
              <a
                href={jashnEMayfungEvent.image}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View full Jashn-e-Mayfung poster (opens in a new tab)"
                style={{
                  position: "relative",
                  display: "block",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  border: "1px solid var(--line)",
                  boxShadow: "0 16px 36px rgba(0,0,0,0.08)",
                  background: "var(--ink-deep)",
                }}
              >
                <Image
                  src={jashnEMayfungEvent.image}
                  alt={jashnEMayfungEvent.imageAlt}
                  width={jashnEMayfungEvent.imageWidth}
                  height={jashnEMayfungEvent.imageHeight}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
                <div
                  style={{
                    padding: "12px 18px",
                    background: "rgba(6, 18, 29, 0.95)",
                    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: "#d2e6e1",
                    fontSize: "0.74rem",
                    fontFamily: "var(--mono)",
                  }}
                >
                  <span>GBSC-QAU // JASHN-E-MAYFUNG</span>
                  <span style={{ color: "var(--teal-light)" }}>VIEW FULL POSTER ↗</span>
                </div>
              </a>
            </div>
          </div>

          {/* Pillars of Jashn-e-Mayfung */}
          <div className="editorial-grid-4">
            {mayfungPillars.map((p, idx) => {
              const IconComp = p.icon;
              return (
                <div key={idx} className="editorial-card" style={{ padding: "24px 20px" }}>
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "var(--radius-sm)",
                      background: "var(--terracotta-pale)",
                      color: "var(--terracotta)",
                      display: "grid",
                      placeItems: "center",
                      marginBottom: "14px",
                    }}
                    aria-hidden="true"
                  >
                    <IconComp size={20} />
                  </div>
                  <h3 style={{ fontSize: "1.15rem", marginBottom: "8px" }}>{p.title}</h3>
                  <p style={{ fontSize: "0.86rem", color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>
                    {p.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Bazm-e-Sukhan Poetry Archive ───────────────────────────── */}
      <section className="section-padding section-paper">
        <div className="wrap">
          <div className="editorial-grid-2" style={{ alignItems: "center", marginBottom: "64px" }}>
            <div>
              <p className="eyebrow">
                <span className="archive-tag tag-terracotta">PAST POETRY EVENT</span>
                <span>·</span>
                <span>Literary & Cultural Evening</span>
              </p>
              <h2 style={{ marginBottom: "20px" }}>{poetryEvent.title}</h2>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "var(--charcoal)", marginBottom: "16px" }}>
                {poetryEvent.summary}
              </p>
              <p style={{ color: "var(--muted)", lineHeight: 1.65, marginBottom: "24px" }}>
                {poetryEvent.date} · {poetryEvent.time}
                <br />
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
                display: "block",
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

          {/* Living Traditions Overview */}
          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 36px" }}>
            <p className="eyebrow" style={{ justifyContent: "center" }}>
              <span className="archive-tag tag-teal">LIVING TRADITIONS</span>
            </p>
            <h3>Pillars of Mountain Heritage</h3>
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
                      background: "var(--teal-pale)",
                      color: "var(--teal)",
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
