import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck, Users, Mountain, Feather, Award, HeartHandshake } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { siteConfig } from "@/lib/site-config";
import { cabinetMembersData, chairmanMessageData } from "@/content/cabinet";
import { historyNarrative } from "@/content/history";

export const metadata: Metadata = {
  title: "About & Current Cabinet",
  description:
    "Learn about the Gilgit-Baltistan Student Council at Quaid-i-Azam University, Islamabad—its purpose, constitutional cabinet portfolios, values, and student representation.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Collegiate Solidarity",
      description: "Ensuring every student from the northern valleys finds warm fraternity, peer mentorship, and guidance at QAU.",
      icon: HeartHandshake,
    },
    {
      title: "Intellectual Rigor",
      description: "Cultivating critical reading, active debate, scientific curiosity, and high academic performance.",
      icon: Feather,
    },
    {
      title: "Cultural Dignity",
      description: "Preserving and celebrating the distinct languages, oral folklore, and acoustic traditions of Gilgit-Baltistan.",
      icon: Mountain,
    },
    {
      title: "Institutional Integrity",
      description: "Upholding constitutional student representation, financial transparency, and constructive campus engagement.",
      icon: Award,
    },
  ];

  return (
    <>
      <Breadcrumbs items={[{ label: "About & Cabinet" }]} />

      {/* Hero Header */}
      <header className="page-hero-banner">
        <div className="wrap">
          <p className="eyebrow light">
            <span className="archive-tag tag-dark">COUNCIL CHARTER</span>
            <span>·</span>
            <span>About GBSC-QAU</span>
          </p>
          <h1>A community shaped by where we come from — and where we want to go.</h1>
          <p className="lead">
            The Gilgit-Baltistan Student Council at Quaid-i-Azam University, Islamabad serves as a platform
            for student representation, cultural connection, academic exchange, and mutual support.
          </p>
        </div>
      </header>

      {/* Overview & Purpose Section */}
      <section className="section-padding section-paper">
        <div className="wrap">
          <div className="editorial-grid-2" style={{ alignItems: "center", marginBottom: "64px" }}>
            <div>
              <p className="eyebrow">
                <span className="archive-tag tag-teal">OUR FOUNDATION</span>
                <span>·</span>
                <span>Mission & Purpose</span>
              </p>
              <h2 style={{ marginBottom: "20px" }}>Rooted in the mountains, flourishing at QAU.</h2>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "var(--charcoal)", marginBottom: "16px" }}>
                Established as an independent student-led collective, GBSC-QAU unites students from all ten districts
                of Gilgit-Baltistan. We represent undergraduate, graduate, and doctoral scholars across all four faculties
                of Quaid-i-Azam University.
              </p>
              <p style={{ color: "var(--muted)", lineHeight: 1.65, marginBottom: "24px" }}>
                Our purpose is fourfold: to welcome and guide incoming students, to preserve the rich multilingual
                and musical heritage of our home valleys, to foster rigorous intellectual curiosity through study circles,
                and to advocate constructively for student welfare.
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <Link href="/history" className="button button-primary">
                  Explore Council History <ArrowUpRight size={16} />
                </Link>
                <Link href="/contact" className="button button-secondary">
                  Get in Touch
                </Link>
              </div>
            </div>

            <div
              style={{
                position: "relative",
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                border: "1px solid var(--line)",
                boxShadow: "0 12px 32px rgba(0,0,0,0.06)",
              }}
            >
              <Image
                src="/images/heritage/hunza-heritage.jpg"
                alt="Traditional architectural heritage in Gilgit-Baltistan overlooking mountain peaks"
                width={700}
                height={460}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "16px 20px",
                  background: "linear-gradient(to top, rgba(6,18,29,0.92), transparent)",
                  color: "var(--surface)",
                  fontSize: "0.78rem",
                  fontFamily: "var(--mono)",
                }}
              >
                HERITAGE ARCHIVE // BALTIT MASONRY & MOUNTAIN ROOTS
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div style={{ marginBottom: "64px" }}>
            <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 40px" }}>
              <p className="eyebrow" style={{ justifyContent: "center" }}>
                <span className="archive-tag tag-terracotta">GUIDING PRINCIPLES</span>
              </p>
              <h3>Our Pillars of Action</h3>
            </div>

            <div className="editorial-grid-4">
              {values.map((v, i) => {
                const IconComponent = v.icon;
                return (
                  <div key={i} className="editorial-card">
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
                      <IconComponent size={20} />
                    </div>
                    <h4 style={{ margin: "0 0 8px", fontSize: "1.15rem" }}>{v.title}</h4>
                    <p style={{ margin: 0, fontSize: "0.86rem", color: "var(--muted)" }}>{v.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Emblem Symbolism Review */}
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--line)",
              borderRadius: "var(--radius-md)",
              padding: "clamp(32px, 5vw, 48px)",
              marginBottom: "64px",
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "36px", alignItems: "center" }}>
              <div style={{ textAlign: "center" }}>
                <Image
                  src="/images/branding/gbsc-logo.png"
                  alt="GBSC-QAU Emblem"
                  width={120}
                  height={160}
                  style={{ objectFit: "contain", margin: "0 auto 16px" }}
                />
                <span className="archive-tag tag-teal">THE SEAL OF GBSC</span>
              </div>
              <div>
                <p className="eyebrow">
                  <span className="archive-tag tag-terracotta">HERITAGE MOTIF</span>
                  <span>·</span>
                  <span>Symbolism</span>
                </p>
                <h3 style={{ marginBottom: "16px" }}>The Markhor, The Three Ranges, and The Pen</h3>
                <p style={{ color: "var(--muted)", fontSize: "0.94rem", lineHeight: 1.65, marginBottom: "16px" }}>
                  Every element of the council insignia reflects our geographical origin and educational mission.
                  The <strong>Markhor</strong> represents sure footing, patience, and courage on challenging terrain.
                  The <strong>mountain peaks</strong> honor the meeting of the Karakoram, Himalaya, and Hindu Kush.
                  The <strong>pen nib</strong> affirms that our primary purpose at Quaid-i-Azam University is rigorous scholarship,
                  intellectual voice, and ethical leadership.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  {historyNarrative.pillars.map((p, idx) => (
                    <span key={idx} className="archive-tag" style={{ fontSize: "0.76rem" }}>
                      {p.title.split(":")[0]}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chairman's Message Section */}
      <section className="chairman-band">
        <div className="wrap">
          <div className="chairman-layout">
            <div className="chairman-portrait-frame">
              <div className="chairman-logo-badge">
                <Image
                  src={chairmanMessageData.imagePlaceholder}
                  alt="Chairman Desk Badge"
                  width={90}
                  height={120}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <span className="archive-tag tag-teal">EXECUTIVE MESSAGE</span>
              <div className="chairman-badge-label">{chairmanMessageData.role}</div>
            </div>

            <div className="chairman-quote-content">
              <p className="eyebrow">
                <span className="archive-tag tag-terracotta">CHAIRMAN&apos;S ADDRESS</span>
                <span>·</span>
                <span>Official Statement</span>
              </p>
              <h2>{chairmanMessageData.title}</h2>
              <blockquote>“{chairmanMessageData.quote}”</blockquote>
              <div className="chairman-quote-body">
                {chairmanMessageData.body.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
              <div className="chairman-signoff">
                <div>
                  <strong>{chairmanMessageData.namePlaceholder}</strong>
                  <span>{chairmanMessageData.role} · {chairmanMessageData.tenure}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cabinet Structure Section */}
      <section className="section-padding section-paper">
        <div className="wrap">
          <div className="section-header-row">
            <div className="section-header-copy">
              <p className="eyebrow">
                <span className="archive-tag tag-teal">ORGANIZATIONAL STRUCTURE</span>
                <span>·</span>
                <span>Constitutional Portfolios</span>
              </p>
              <h2>Current Cabinet & Executive Responsibilities</h2>
              <p className="section-header-sub">
                The cabinet is constituted to manage student welfare, academic forums, cultural events,
                and institutional liaison with clarity and democratic accountability.
              </p>
            </div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 14px",
                background: "var(--teal-pale)",
                borderRadius: "var(--radius-sm)",
                fontSize: "0.76rem",
                color: "var(--teal)",
                fontFamily: "var(--mono)",
              }}
            >
              <ShieldCheck size={16} />
              <span>OFFICIAL CONSTITUTIONAL FRAMEWORK</span>
            </div>
          </div>

          <div className="editorial-grid-2" style={{ gap: "24px" }}>
            {cabinetMembersData.map((member) => (
              <div key={member.id} className="editorial-card" style={{ padding: "28px" }}>
                <div className="editorial-card-index">
                  <span className="archive-tag tag-teal">{member.role}</span>
                  <span style={{ fontSize: "0.74rem", color: "var(--muted)" }}>{member.tenure}</span>
                </div>
                <h3 style={{ fontSize: "1.3rem", marginBottom: "8px" }}>
                  {member.name || `Office of the ${member.role}`}
                </h3>
                <div style={{ fontSize: "0.78rem", color: "var(--terracotta)", marginBottom: "16px", fontFamily: "var(--mono)" }}>
                  {member.isConfirmed ? member.department : "Details to be ratified upon cabinet notification"}
                </div>
                <div style={{ borderTop: "1px solid var(--line-light)", paddingTop: "14px" }}>
                  <span style={{ fontSize: "0.74rem", fontWeight: 700, color: "var(--charcoal)", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "8px" }}>
                    Core Responsibilities:
                  </span>
                  <ul style={{ margin: 0, paddingLeft: "18px", fontSize: "0.84rem", color: "var(--muted)", lineHeight: 1.6 }}>
                    {member.duties.map((duty, idx) => (
                      <li key={idx}>{duty}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "40px",
              padding: "16px 20px",
              background: "var(--surface)",
              border: "1px dashed var(--line)",
              borderRadius: "var(--radius-sm)",
              fontSize: "0.82rem",
              color: "var(--muted)",
              textAlign: "center",
            }}
          >
            <strong>Note on Official Identification: </strong>
            Individual officer names, student departmental affiliations, and official portraits are published exclusively
            following constitutional ratification and personal data consent.
          </div>
        </div>
      </section>
    </>
  );
}
