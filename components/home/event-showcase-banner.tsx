"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, MapPin, ArrowUpRight, ChevronLeft, ChevronRight, Flag } from "lucide-react";
import { eventsData } from "@/content/events";

/* ── Countdown to a date string ──────────────────────────── */
function useCountdown(dateStr: string) {
  const [diff, setDiff] = useState({ days: 0, hours: 0, mins: 0, secs: 0, past: false });

  useEffect(() => {
    const target = new Date(dateStr).getTime();
    const tick = () => {
      const now = Date.now();
      const delta = target - now;
      if (delta <= 0) {
        setDiff({ days: 0, hours: 0, mins: 0, secs: 0, past: true });
        return;
      }
      setDiff({
        days:  Math.floor(delta / 86400000),
        hours: Math.floor((delta % 86400000) / 3600000),
        mins:  Math.floor((delta % 3600000) / 60000),
        secs:  Math.floor((delta % 60000) / 1000),
        past:  false,
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [dateStr]);

  return diff;
}

/* ── Countdown Unit Box ──────────────────────────────────── */
function CountUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="ebs-count-unit">
      <span className="ebs-count-val">{String(value).padStart(2, "0")}</span>
      <span className="ebs-count-label">{label}</span>
    </div>
  );
}

/* ── Main Component ──────────────────────────────────────── */
export function EventShowcaseBanner() {
  const confirmed = eventsData.filter((e) => e.status === "confirmed");
  const [active, setActive] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-advance
  const startAuto = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((i) => (i + 1) % confirmed.length);
    }, 7000);
  };

  useEffect(() => {
    if (confirmed.length > 1) startAuto();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [confirmed.length]);

  const go = (dir: number) => {
    setActive((i) => (i + dir + confirmed.length) % confirmed.length);
    startAuto();
  };

  if (confirmed.length === 0) return null;

  const event = confirmed[active];
  const isGBDay = event.isHighlighted && event.slug?.includes("independence");
  // Countdown only for the GB Independence Day (fixed date)
  const countdown = useCountdown("2026-11-01T16:00:00+05:00");

  return (
    <section className="ebs" aria-label="Upcoming Events Showcase">
      {/* Background image layer */}
      <div className="ebs-bg" aria-hidden="true">
        {confirmed.map((ev, i) => (
          <div key={ev.id} className={`ebs-bg-slide ${i === active ? "ebs-bg-slide--active" : ""}`}>
            {ev.image && (
              <Image
                src={ev.image}
                alt=""
                fill
                sizes="100vw"
                style={{ objectFit: "cover", objectPosition: "center 30%" }}
              />
            )}
          </div>
        ))}
        <div className="ebs-bg-mask" />
      </div>

      {/* Left: Event info */}
      <div className="ebs-content">
        {/* Top row */}
        <div className="ebs-top-row">
          <div className="ebs-label-group">
            {isGBDay && (
              <span className="ebs-flag-badge">
                <Flag size={12} />
                GB INDEPENDENCE DAY
              </span>
            )}
            <span className="ebs-category-tag">{event.category}</span>
            <span className="ebs-status-pill">
              <span className="ebs-status-dot" />
              CONFIRMED
            </span>
          </div>
          {confirmed.length > 1 && (
            <div className="ebs-nav-controls" aria-label="Browse events">
              <button className="ebs-nav-btn" onClick={() => go(-1)} aria-label="Previous event">
                <ChevronLeft size={16} />
              </button>
              <span className="ebs-nav-counter">{active + 1} / {confirmed.length}</span>
              <button className="ebs-nav-btn" onClick={() => go(1)} aria-label="Next event">
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>

        {/* Event title */}
        <h2 className="ebs-title" key={event.id}>{event.title}</h2>

        {/* Summary */}
        <p className="ebs-summary">{event.summary}</p>

        {/* Meta row */}
        <div className="ebs-meta-row">
          {event.date && (
            <span className="ebs-meta-item">
              <Calendar size={14} />
              {event.date}
            </span>
          )}
          {event.time && (
            <span className="ebs-meta-item">
              <Clock size={14} />
              {event.time}
            </span>
          )}
          {event.venue && (
            <span className="ebs-meta-item">
              <MapPin size={14} />
              {event.venue}
            </span>
          )}
        </div>

        {/* CTA */}
        <div className="ebs-actions">
          <Link href="/events" className="ebs-btn-primary">
            View All Events <ArrowUpRight size={15} />
          </Link>
          <Link href="/announcements" className="ebs-btn-ghost">
            Read Announcements
          </Link>
        </div>

        {/* Progress dots */}
        {confirmed.length > 1 && (
          <div className="ebs-dots" aria-hidden="true">
            {confirmed.map((_, i) => (
              <button
                key={i}
                className={`ebs-dot ${i === active ? "ebs-dot--active" : ""}`}
                onClick={() => { setActive(i); startAuto(); }}
                aria-label={`Go to event ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Right: Countdown (only for the special highlighted event) */}
      {isGBDay && !countdown.past && (
        <div className="ebs-countdown-panel">
          <div className="ebs-countdown-label">
            <span className="ebs-countdown-live" />
            Countdown to Independence Day
          </div>
          <div className="ebs-countdown-grid">
            <CountUnit value={countdown.days}  label="Days" />
            <div className="ebs-count-sep">:</div>
            <CountUnit value={countdown.hours} label="Hrs" />
            <div className="ebs-count-sep">:</div>
            <CountUnit value={countdown.mins}  label="Min" />
            <div className="ebs-count-sep">:</div>
            <CountUnit value={countdown.secs}  label="Sec" />
          </div>
          <p className="ebs-countdown-sub">
            79th Anniversary · November 1, 1947
          </p>
          <div className="ebs-countdown-border-glow" aria-hidden="true" />
        </div>
      )}

      {/* For non-highlighted events: show a simple next-event card on the right */}
      {!isGBDay && confirmed.length > 1 && (
        <div className="ebs-next-panel">
          <p className="ebs-next-label">Also Upcoming</p>
          {confirmed.filter((_, i) => i !== active).slice(0, 2).map((ev) => (
            <div key={ev.id} className="ebs-next-item">
              <div className="ebs-next-dot" />
              <div>
                <span className="ebs-next-title">{ev.title}</span>
                {ev.date && <span className="ebs-next-date">{ev.date}</span>}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
