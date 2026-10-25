import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Calendar, MapPin, Clock, BookOpen, Compass, Award } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { programCategories, eventsData } from "@/content/events";

export const metadata: Metadata = {
  title: "Events & Programs Directory",
  description:
    "Explore confirmed and past gatherings, academic study circles, cultural festivals, workshops, and book fairs organized by the Gilgit-Baltistan Student Council at QAU.",
};

export default function EventsPage() {
  const confirmedUpcoming = eventsData.filter((e) => e.status === "confirmed");
  const pastEvents = eventsData.filter((e) => e.status === "past");

  return (
    <>
      <Breadcrumbs items={[{ label: "Events & Programs" }]} />

      <header className="page-hero-banner">
        <div className="wrap">
          <p className="eyebrow light">
            <span className="archive-tag tag-dark">COMMUNITY CALENDAR</span>
            <span>·</span>
            <span>Programs & Gatherings</span>
          </p>
          <h1>Gather, learn, and share ideas.</h1>
          <p className="lead">
            Explore our confirmed calendar, program areas, and historical archives.
            All dates and venues are confirmed strictly by council executive authorization.
          </p>
        </div>
      </header>

      {/* Program Tracks Spotlight */}
      <section className="section-padding section-paper" style={{ paddingBottom: "56px" }}>
        <div className="wrap">
          <div className="section-header-row">
            <div className="section-header-copy">
              <p className="eyebrow">
                <span className="archive-tag tag-teal">PROGRAM TRACKS</span>
                <span>·</span>
                <span>Active Initiatives</span>
              </p>
              <h2>Specialized Academic & Cultural Areas</h2>
              <p className="section-header-sub">
                Browse our distinct program areas or visit dedicated spotlights for study circles,
                workshops, cultural festivals, and book fairs.
              </p>
            </div>
          </div>

          <div className="editorial-grid-3">
            {programCategories.map((item, idx) => (
              <div key={item.slug} className="editorial-card" style={{ padding: 0, overflow: "hidden" }}>
                <div style={{ position: "relative", height: "180px", width: "100%" }}>
                  <Image
                    src={item.image}
                    alt={item.title}
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
                    TRACK 0{idx + 1}
                  </div>
                </div>

                <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <span className="archive-tag tag-teal" style={{ alignSelf: "flex-start", marginBottom: "8px" }}>
                    {item.title}
                  </span>
                  <h3 style={{ fontSize: "1.3rem", marginBottom: "8px" }}>{item.title}</h3>
                  <p style={{ fontSize: "0.88rem", color: "var(--muted)", marginBottom: "16px", flexGrow: 1 }}>
                    {item.summary}
                  </p>
                  <Link href={item.href} className="text-link" style={{ marginTop: "auto" }}>
                    Explore {item.title} Track <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Gatherings */}
      <section className="section-padding section-white">
        <div className="wrap">
          <div className="section-header-row">
            <div className="section-header-copy">
              <p className="eyebrow">
                <span className="archive-tag tag-terracotta">SCHEDULED GATHERINGS</span>
                <span>·</span>
                <span>Upcoming Sessions</span>
              </p>
              <h2>Confirmed Upcoming Events</h2>
              <p className="section-header-sub">
                Events with ratified dates, venues, and student coordinators.
              </p>
            </div>
          </div>

          {confirmedUpcoming.length > 0 ? (
            <div className="editorial-grid-3">
              {confirmedUpcoming.map((event) => (
                <article key={event.id} className="editorial-card">
                  <div className="editorial-card-index">
                    <span className="archive-tag tag-teal">{event.category}</span>
                    <span style={{ color: "var(--terracotta)", fontWeight: 700, fontSize: "0.72rem" }}>
                      CONFIRMED
                    </span>
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
            <div className="editorial-empty-state">
              <div className="editorial-empty-mark">—</div>
              <h3>No upcoming events currently scheduled</h3>
              <p>
                Dates, locations, and registration details will appear here once finalized by the council.
                The council announces events with at least two weeks of prior notice on campus notice boards.
              </p>
              <Link href="/announcements" className="button button-secondary">
                Read Council Announcements <ArrowUpRight size={15} />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Past Events Archive */}
      <section className="section-padding section-paper">
        <div className="wrap">
          <div className="section-header-row">
            <div className="section-header-copy">
              <p className="eyebrow">
                <span className="archive-tag tag-dark">INSTITUTIONAL RECORD</span>
                <span>·</span>
                <span>Past Gatherings Archive</span>
              </p>
              <h2>Documented Gatherings Archive</h2>
              <p className="section-header-sub">
                A permanent record of past discussions, symposiums, and cultural festivals hosted by GBSC-QAU.
              </p>
            </div>
          </div>

          <div className="editorial-grid-3">
            {pastEvents.map((event) => (
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
                    {event.description}
                  </p>
                  <span style={{ fontSize: "0.78rem", color: "var(--muted)", fontFamily: "var(--mono)" }}>
                    Location: {event.venue || "Quaid-i-Azam University"}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
