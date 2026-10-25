import Link from "next/link";
import { ArrowUpRight, Bell, Calendar } from "lucide-react";
import { announcementsData } from "@/content/announcements";

export function FeaturedAnnouncement() {
  const featured = announcementsData.find((a) => a.priority === "featured") || announcementsData[0];

  return (
    <section className="section-padding section-paper" style={{ paddingBottom: "40px", paddingTop: "56px" }}>
      <div className="wrap">
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--line)",
            borderRadius: "var(--radius-md)",
            padding: "clamp(24px, 4vw, 36px)",
            display: "grid",
            gridTemplateColumns: "auto 1fr auto",
            gap: "24px",
            alignItems: "center",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.03)",
          }}
        >
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "var(--radius-sm)",
              background: "var(--terracotta-pale)",
              color: "var(--terracotta)",
              display: "grid",
              placeItems: "center",
              flexShrink: 0,
            }}
            aria-hidden="true"
          >
            <Bell size={24} />
          </div>

          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px", flexWrap: "wrap" }}>
              <span className="archive-tag tag-terracotta">{featured?.category || "Council Update"}</span>
              {featured?.date && (
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    fontSize: "0.76rem",
                    color: "var(--muted)",
                    fontFamily: "var(--mono)",
                  }}
                >
                  <Calendar size={13} /> {featured.date}
                </span>
              )}
            </div>
            <h3 style={{ margin: "0 0 6px", fontSize: "1.28rem" }}>
              {featured?.title || "Council updates will be published here"}
            </h3>
            <p style={{ margin: 0, color: "var(--muted)", fontSize: "0.9rem", maxWidth: "62ch" }}>
              {featured?.summary ||
                "Official announcements regarding admissions guidance, orientation desks, and council notices will appear here once verified."}
            </p>
          </div>

          <div style={{ flexShrink: 0 }}>
            <Link href={featured?.externalLink?.url || "/announcements"} className="button button-secondary">
              Read Announcement <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
