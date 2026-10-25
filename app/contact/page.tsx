import { Metadata } from "next";
import { MapPin, Mail, MessageSquare, Compass, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ContactForm } from "@/components/contact/contact-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Council // Official Channels",
  description:
    "Get in touch with the Gilgit-Baltistan Student Council at Quaid-i-Azam University, Islamabad. Submit questions, volunteer inquiries, or connect with the student help desk.",
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact Council" }]} />

      <header className="page-hero-banner">
        <div className="wrap">
          <p className="eyebrow light">
            <span className="archive-tag tag-dark">COMMUNICATION DESK</span>
            <span>·</span>
            <span>Direct Liaison</span>
          </p>
          <h1>A conversation starts with a reliable way to reach us.</h1>
          <p className="lead">
            Whether you are a new student seeking peer orientation, a researcher proposing a study circle,
            or an alumnus sharing archival records, the council is ready to listen.
          </p>
        </div>
      </header>

      <section className="section-padding section-paper">
        <div className="wrap">
          <div className="editorial-grid-2" style={{ alignItems: "flex-start", gap: "clamp(36px, 6vw, 64px)" }}>
            {/* Left: Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Right: Institutional Contact Details & Campus Navigation */}
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              {/* Meeting Point Card */}
              <div className="editorial-card">
                <div className="editorial-card-index">
                  <span className="archive-tag tag-teal">CAMPUS PRESENCE</span>
                  <MapPin size={16} style={{ color: "var(--teal)" }} />
                </div>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "8px" }}>Campus Meeting Ground</h3>
                <p style={{ fontSize: "0.9rem", color: "var(--muted)", marginBottom: "14px" }}>
                  Council members and student delegates meet regularly on campus across the academic term.
                </p>
                <div style={{ fontSize: "0.82rem", color: "var(--charcoal)", background: "var(--paper)", padding: "12px", borderRadius: "var(--radius-sm)" }}>
                  <strong>Venue: </strong>{siteConfig.contact.campusLocation}<br />
                  <span style={{ color: "var(--muted)" }}>Student Activity Centre & Central Library Lawns</span>
                </div>
              </div>

              {/* Direct Mail Guidance */}
              <div className="editorial-card">
                <div className="editorial-card-index">
                  <span className="archive-tag tag-terracotta">ELECTRONIC LIAISON</span>
                  <Mail size={16} style={{ color: "var(--terracotta)" }} />
                </div>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "8px" }}>Council Correspondence</h3>
                <p style={{ fontSize: "0.9rem", color: "var(--muted)", marginBottom: "12px" }}>
                  For formal invitations, academic collaboration proposals, and inter-university correspondence:
                </p>
                <div style={{ fontFamily: "var(--mono)", fontSize: "0.85rem", color: "var(--teal)", fontWeight: 600 }}>
                  {siteConfig.contact.email}
                </div>
                <p style={{ margin: "8px 0 0", fontSize: "0.76rem", color: "var(--muted)" }}>
                  {siteConfig.contact.emailNote}
                </p>
              </div>

              {/* Verified Channels Policy */}
              <div
                style={{
                  background: "var(--surface)",
                  border: "1px dashed var(--line)",
                  borderRadius: "var(--radius-sm)",
                  padding: "18px 20px",
                  fontSize: "0.82rem",
                  color: "var(--muted)",
                  lineHeight: 1.6,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--charcoal)", fontWeight: 700, marginBottom: "6px" }}>
                  <ShieldCheck size={16} style={{ color: "var(--teal)" }} />
                  <span>Information Integrity Policy:</span>
                </div>
                GBSC-QAU strictly publishes only verified communication channels. We do not publish unverified personal
                phone numbers or unofficial social media handles. Official announcements are circulated solely through
                verified cabinet officers and official notice boards.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
