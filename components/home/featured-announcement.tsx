import Link from "next/link";
import { ArrowUpRight, Bell, Calendar } from "lucide-react";
import { announcementsData } from "@/content/announcements";

export function FeaturedAnnouncement() {
  const featured = announcementsData.find((a) => a.priority === "featured") || announcementsData[0];

  return (
    <section className="section-padding section-paper featured-announcement-section">
      <div className="wrap">
        <div className="featured-announcement-card">
          <div className="featured-announcement-icon" aria-hidden="true">
            <Bell size={24} />
          </div>

          <div className="featured-announcement-content">
            <div className="featured-announcement-meta">
              <span className="archive-tag tag-terracotta">{featured?.category || "Council Update"}</span>
              {featured?.date && (
                <span className="featured-announcement-date">
                  <Calendar size={13} /> {featured.date}
                </span>
              )}
            </div>
            <h3 className="featured-announcement-title">
              {featured?.title || "Council updates will be published here"}
            </h3>
            <p className="featured-announcement-desc">
              {featured?.summary ||
                "Official announcements regarding admissions guidance, orientation desks, and council notices will appear here once verified."}
            </p>
          </div>

          <div className="featured-announcement-action">
            <Link href={featured?.externalLink?.url || "/announcements"} className="button button-secondary">
              Read Announcement <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
