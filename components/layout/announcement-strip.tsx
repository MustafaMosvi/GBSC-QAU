"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { X, ArrowRight, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { activeTickerAnnouncement } from "@/content/announcements";
import { eventsData } from "@/content/events";

export function AnnouncementStrip() {
  const [dismissed, setDismissed] = useState(false);
  const [currentEventIdx, setCurrentEventIdx] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const upcomingEvents = eventsData.filter((e) => e.status === "confirmed");
  const hasEvents = upcomingEvents.length > 0;
  const hasAnnouncement = activeTickerAnnouncement.enabled;

  // Auto-cycle events
  useEffect(() => {
    if (!hasEvents || upcomingEvents.length <= 1) return;
    intervalRef.current = setInterval(() => {
      setCurrentEventIdx((i) => (i + 1) % upcomingEvents.length);
    }, 4000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [hasEvents, upcomingEvents.length]);

  if (dismissed && !hasEvents) return null;
  if (!hasAnnouncement && !hasEvents) return null;

  const currentEvent = upcomingEvents[currentEventIdx];

  return (
    <div className="top-strip-stack">
      {/* Events ticker — always visible when events exist */}
      {hasEvents && (
        <div className="events-ticker-bar" role="complementary" aria-label="Upcoming events">
          <div className="wrap events-ticker-inner">
            <div className="events-ticker-label">
              <span className="events-ticker-dot" aria-hidden="true" />
              <Calendar size={12} />
              <span>Upcoming</span>
            </div>

            <div className="events-ticker-content">
              <div
                className="events-ticker-slide"
                key={currentEventIdx}
              >
                <strong className="events-ticker-title">{currentEvent.title}</strong>
                {currentEvent.date && (
                  <span className="events-ticker-date">{currentEvent.date}</span>
                )}
                {currentEvent.venue && (
                  <span className="events-ticker-venue">{currentEvent.venue}</span>
                )}
              </div>
            </div>

            <div className="events-ticker-controls">
              {upcomingEvents.length > 1 && (
                <>
                  <button
                    type="button"
                    className="ticker-nav-btn"
                    onClick={() => setCurrentEventIdx((i) => (i - 1 + upcomingEvents.length) % upcomingEvents.length)}
                    aria-label="Previous event"
                  >
                    <ChevronLeft size={13} />
                  </button>
                  <span className="ticker-pagination">
                    {currentEventIdx + 1}/{upcomingEvents.length}
                  </span>
                  <button
                    type="button"
                    className="ticker-nav-btn"
                    onClick={() => setCurrentEventIdx((i) => (i + 1) % upcomingEvents.length)}
                    aria-label="Next event"
                  >
                    <ChevronRight size={13} />
                  </button>
                </>
              )}
              <Link href="/events" className="ticker-cta-link">
                View all <ArrowRight size={11} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Announcement strip */}
      {hasAnnouncement && !dismissed && (
        <aside className="announcement-strip" aria-label="Council Announcement">
          <div className="wrap announcement-strip-inner">
            <div className="announcement-strip-content">
              <span className="announcement-pulse-dot" aria-hidden="true" />
              <p className="announcement-strip-text">
                <span>{activeTickerAnnouncement.message}</span>
                <Link href={activeTickerAnnouncement.href} className="announcement-strip-link">
                  {activeTickerAnnouncement.linkText} <ArrowRight size={13} style={{ display: "inline", verticalAlign: "middle" }} />
                </Link>
              </p>
            </div>
            <button
              type="button"
              className="announcement-strip-close"
              onClick={() => setDismissed(true)}
              aria-label="Dismiss announcement"
            >
              <X size={15} />
            </button>
          </div>
        </aside>
      )}
    </div>
  );
}
