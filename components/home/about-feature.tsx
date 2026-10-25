import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mountain, Feather, Compass } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { historyNarrative } from "@/content/history";

export function AboutFeature() {
  return (
    <section className="section-padding section-white" aria-labelledby="about-section-heading">
      <div className="wrap">
        <div className="section-header-row">
          <div className="section-header-copy">
            <p className="eyebrow">
              <span className="archive-tag tag-teal">COMMUNITY PURPOSE</span>
              <span>·</span>
              <span>GBSC-QAU Identity</span>
            </p>
            <h2 id="about-section-heading">
              A community shaped by where we come from <em>— and where we want to go.</em>
            </h2>
            <p className="section-header-sub">
              {siteConfig.missionStatement}
            </p>
          </div>
          <Link href="/about" className="text-link">
            Learn More About GBSC-QAU <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Narrative & Emblem Showcase */}
        <div className="editorial-grid-2" style={{ alignItems: "center", marginBottom: "48px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <p style={{ fontSize: "1.08rem", lineHeight: 1.7, color: "var(--charcoal)", margin: 0 }}>
              The Gilgit-Baltistan Student Council serves as a living platform for student representation,
              cultural connection, academic exchange, community participation, and mutual support at
              Quaid-i-Azam University, Islamabad.
            </p>
            <p style={{ color: "var(--muted)", margin: 0 }}>
              Formed organically by students arriving from high mountain valleys to the federal capital,
              GBSC-QAU bridges the gap between home traditions and rigorous higher education. It ensures
              that no student navigates university life without reliable guidance, collegiate brotherhood,
              and intellectual fellowship.
            </p>
            <div style={{ paddingTop: "8px" }}>
              <Link href="/about" className="button button-primary">
                Read Full Council Charter <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          <div
            style={{
              background: "var(--paper)",
              border: "1px solid var(--line)",
              borderRadius: "var(--radius-md)",
              padding: "36px 32px",
              display: "flex",
              alignItems: "center",
              gap: "28px",
            }}
          >
            <div style={{ width: "90px", height: "120px", position: "relative", flexShrink: 0 }}>
              <Image
                src="/images/branding/gbsc-logo.png"
                alt="Emblem of GBSC-QAU"
                width={90}
                height={120}
                style={{ objectFit: "contain" }}
              />
            </div>
            <div>
              <span className="archive-tag tag-terracotta" style={{ marginBottom: "8px" }}>
                COUNCIL INSIGNIA
              </span>
              <h3 style={{ margin: "4px 0 8px", fontSize: "1.3rem" }}>The Emblem & Its Meaning</h3>
              <p style={{ margin: 0, fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.55 }}>
                Designed with cultural intentionality, the insignia unites the mountain Markhor,
                the three convergence ranges, and the fountain pen of scholarship.
              </p>
            </div>
          </div>
        </div>

        {/* The 3 Emblem Pillars */}
        <div className="emblem-symbol-grid">
          {historyNarrative.pillars.map((pillar, idx) => (
            <div key={idx} className="emblem-symbol-card">
              <div className="emblem-symbol-header">
                <div className="emblem-symbol-icon" aria-hidden="true">
                  {idx === 0 && <Compass size={20} />}
                  {idx === 1 && <Mountain size={20} />}
                  {idx === 2 && <Feather size={20} />}
                </div>
                <h4>{pillar.title}</h4>
              </div>
              <p>{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
