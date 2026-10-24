import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Calendar, MapPin, Clock } from "lucide-react";
import { eventsData } from "@/content/events";

export function EventsShowcase() {
  const confirmedUpcoming = eventsData.filter((e) => e.status === "confirmed");
  const pastHighlights = eventsData.filter((e) => e.status === "past").slice(0, 3);

  return (
    <section className="section-padding section-paper" aria-labelledby="events-section-heading">
      <div className="wrap">
        <div className="section-header-row">
          <div className="section-header-copy">
            <p className="eyebrow">
              <span className="archive-tag tag-terracotta">CALENDAR & ARCHIVES</span>
              <span>·</span>
              <span>GBSC-QAU Gatherings</span>
            </p>
            <h2 id="events-section-heading">
              Gather, learn, and share ideas.
            </h2>
            <p className="section-header-sub">
              Confirmed dates, times, and venues are published solely upon formal ratification
              by the council executive committee.
            </p>
          </div>
          <Link href="/events" className="text-link">
            All Events Directory <ArrowUpRight size={16} />
          </Link>
        </div>

        {confirmedUpcoming.length > 0 ? (
          <div className="editorial-grid-3">
            {confirmedUpcoming.map((event) => (
              <article key={event.id} className="editorial-card">
                <div className="editorial-card-index">
                  <span className="archive-tag tag-teal">{event.category}</span>
                  <span style={{ color: "var(--muted)", fontSize: "0.74rem" }}>CONFIRMED</span>
                </div>
                <h3>{event.title}</h3>
                <p>{event.summary}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", margin: "16px 0", fontSize: "0.82rem", color: "var(--muted)" }}>
                  {event.date && (
                    <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <Calendar size={14} /> {event.date}
                    </span>
                  )}
                  {event.time && (
                    <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <Clock size={14} /> {event.time}
                    </span>
                  )}
                  {event.venue && (
                    <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <MapPin size={14} /> {event.venue}
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {/* Editorial Empty State */}
            <div className="editorial-empty-state">
              <div className="editorial-empty-mark">—</div>
              <h3>No upcoming events currently scheduled</h3>
              <p>
                Dates, locations, and registration details will appear here once finalized by the council.
                In the meantime, explore our program tracks or review recent archived gatherings below.
              </p>
              <Link href="/announcements" className="button button-secondary">
                Read Latest Announcements <ArrowUpRight size={15} />
              </Link>
            </div>

            {/* Past Gatherings Highlight Archive */}
            <div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
                <h4 style={{ margin: 0, fontSize: "1.2rem" }}>Recent Archived Gatherings</h4>
                <span className="archive-tag tag-dark">PAST SESSIONS</span>
              </div>

              <div className="editorial-grid-3">
                {pastHighlights.map((event) => (
                  <article key={event.id} className="editorial-card" style={{ padding: 0, overflow: "hidden" }}>
                    {event.image && (
                      <div style={{ position: "relative", height: "180px", width: "100%" }}>
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          style={{ objectFit: "cover" }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            top: "12px",
                            left: "12px",
                            background: "rgba(6, 18, 29, 0.85)",
                            padding: "4px 8px",
                            borderRadius: "var(--radius-sm)",
                            fontSize: "0.68rem",
                            color: "var(--surface)",
                            fontFamily: "var(--mono)",
                          }}
                        >
                          {event.category}
                        </div>
                      </div>
                    )}
                    <div style={{ padding: "24px" }}>
                      <h4 style={{ margin: "0 0 8px", fontSize: "1.15rem" }}>{event.title}</h4>
                      <p style={{ margin: "0 0 14px", fontSize: "0.85rem", color: "var(--muted)" }}>
                        {event.summary}
                      </p>
                      <span style={{ fontSize: "0.78rem", color: "var(--muted)", fontFamily: "var(--mono)" }}>
                        Archive // {event.venue || "QAU Campus"}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
