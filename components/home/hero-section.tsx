"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Calendar, MapPin, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { eventsData } from "@/content/events";
import { heroSlides, heroSlideIntervalMs } from "@/content/hero";

/* ─── Animated Contour Canvas ───────────────────────────────────────── */
function ContourCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let t = 0;

    const resize = () => {
      c.width = c.offsetWidth;
      c.height = c.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const { width: W, height: H } = c;
      ctx.clearRect(0, 0, W, H);

      // Draw layered flowing mountain contour lines
      const layers = [
        { n: 14, base: H * 0.95, scale: 0.55, speed: 0.003, alpha: 0.22, col: "152,186,188" },
        { n: 10, base: H * 0.80, scale: 0.40, speed: 0.004, alpha: 0.16, col: "152,186,188" },
        { n:  7, base: H * 0.65, scale: 0.30, speed: 0.005, alpha: 0.10, col: "166,75,53" },
        { n:  5, base: H * 0.50, scale: 0.20, speed: 0.006, alpha: 0.07, col: "152,186,188" },
      ];

      layers.forEach(({ n, base, scale, speed, alpha, col }) => {
        for (let i = 0; i < n; i++) {
          const y0 = base - i * (H * 0.028);
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${col},${alpha * (1 - i / n)})`;
          ctx.lineWidth = 1;
          for (let x = 0; x <= W; x += 3) {
            const freq1 = 0.006 + i * 0.0005;
            const freq2 = 0.011 + i * 0.0003;
            const y =
              y0
              + Math.sin(x * freq1 + t * speed + i * 0.8) * (H * scale * 0.12)
              + Math.sin(x * freq2 + t * speed * 1.3 + i * 1.5) * (H * scale * 0.07)
              + Math.cos(x * 0.003 + t * speed * 0.5) * (H * scale * 0.05);
            x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
      });

      // Floating particles
      for (let i = 0; i < 30; i++) {
        const px = ((i * 137.5 + t * 8) % W);
        const py = ((i * 97.3 + t * 5) % H);
        const a = 0.08 + 0.06 * Math.sin(t * 0.04 + i);
        ctx.beginPath();
        ctx.arc(px, py, 0.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(152,186,188,${a})`;
        ctx.fill();
      }

      t++;
      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={ref} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} />;
}

/* ─── Counting Altitude Ticker ──────────────────────────────────────── */
function AltitudeTicker() {
  const [val, setVal] = useState(0);
  const target = 8611;
  useEffect(() => {
    let start: number | null = null;
    const dur = 2200;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setVal(Math.floor(eased * target));
      if (p < 1) requestAnimationFrame(step);
    };
    const id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, []);
  return <>{val.toLocaleString()}</>;
}

/* ─── Main Hero ─────────────────────────────────────────────────────── */
export function HeroSection() {
  const [ready, setReady] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [loadedSlides, setLoadedSlides] = useState<number[]>([0]);
  const [isPaused, setIsPaused] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(true);
  const currentSlide = heroSlides[activeSlide];
  const upcomingEvents = eventsData.filter((e) => e.status === "confirmed").slice(0, 2);

  useEffect(() => {
    const id = setTimeout(() => setReady(true), 60);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setIsPaused(motionPreference.matches);
    const updateVisibility = () => setIsPageVisible(!document.hidden);
    updateMotionPreference();
    updateVisibility();
    motionPreference.addEventListener("change", updateMotionPreference);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      motionPreference.removeEventListener("change", updateMotionPreference);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (isPaused || isHovered || hasFocus || !isPageVisible || loadedSlides.length < heroSlides.length) return;
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, heroSlideIntervalMs);
    return () => clearInterval(interval);
  }, [activeSlide, isPaused, isHovered, hasFocus, isPageVisible, loadedSlides.length]);

  const selectSlide = (index: number) => {
    if (!loadedSlides.includes(index)) return;
    setActiveSlide(index);
    setIsPaused(true);
  };

  return (
    <section
      className="xhero"
      aria-labelledby="hero-title"
      aria-roledescription="carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setHasFocus(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setHasFocus(false);
      }}
    >

      {/* ── Layer 0: full-bleed photo ───────────────────────────────── */}
      <div className="xhero-photo-layer" aria-hidden="true">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`xhero-photo-slide xhero-photo-slide--${slide.id}${index === activeSlide ? " xhero-photo-slide--active" : ""}`}
          >
            <Image
              src={slide.src}
              alt=""
              fill
              priority={index === 0}
              loading={index === 0 ? undefined : "eager"}
              sizes="100vw"
              style={{ objectFit: slide.imageFit }}
              onLoad={() => setLoadedSlides((current) => current.includes(index) ? current : [...current, index])}
            />
          </div>
        ))}
        {/* Deep dark overlay — more intense on left where text lives */}
        <div className="xhero-photo-mask" />
      </div>

      {/* ── Layer 1: animated contour lines ───────────────────────── */}
      <div className="xhero-canvas-layer" aria-hidden="true">
        <ContourCanvas />
      </div>

      {/* ── Layer 2: Spine text (vertical left edge) ───────────────── */}
      <div className="xhero-spine" aria-hidden="true">
        <span>GBSC-QAU</span>
        <span className="xhero-spine-dot" />
        <span>35°N · 74°E</span>
        <span className="xhero-spine-dot" />
        <span>THE MOUNTAIN ARCHIVE</span>
      </div>

      {/* ── Layer 3: Top-right altitude badge ─────────────────────── */}
      {activeSlide === 0 && <div className={`xhero-altitude-badge ${ready ? "xhero-in" : ""}`} aria-hidden="true">
        <div className="xhero-alt-label">PEAK ELEVATION</div>
        <div className="xhero-alt-value"><AltitudeTicker /><span>m</span></div>
        <div className="xhero-alt-sub">K2 · Karakoram Range</div>
        <div className="xhero-alt-pulse" />
      </div>}

      {/* ── Layer 4: Main composition ─────────────────────────────── */}
      <div className="xhero-stage">

        {/* Top-left: archive tag + identifier */}
        <div className={`xhero-identifier ${ready ? "xhero-in" : ""}`}>
          <span className="xhero-id-pill">
            <span className="xhero-id-dot" />
            GILGIT-BALTISTAN STUDENT COUNCIL
          </span>
          <span className="xhero-id-sep">—</span>
          <span className="xhero-id-code">QAU · ISL · PKT+5</span>
        </div>

        {/* The main editorial headline — fragmented layout */}
        <div className="xhero-headline-block">
          <div className={`xhero-hl-line xhero-hl-1 ${ready ? "xhero-in" : ""}`}>
            <span className="xhero-hl-word">Where</span>
            <span className="xhero-hl-word xhero-hl-accent">mountains</span>
          </div>
          <div className={`xhero-hl-line xhero-hl-2 ${ready ? "xhero-in" : ""}`}>
            <span className="xhero-hl-word xhero-hl-outline">meet</span>
            <span className="xhero-hl-word">the</span>
            <span className="xhero-hl-word xhero-hl-italic">mind.</span>
          </div>
          <div className={`xhero-sub-line ${ready ? "xhero-in" : ""}`}>
            <p id="hero-title" className="xhero-sub-text">
              A student-led community rooted in the peaks of Gilgit-Baltistan,
              building intellectual life and cultural memory at Quaid-i-Azam University.
            </p>
            <div className="xhero-slideshow-toolbar" role="group" aria-label="Hero slideshow controls">
              <p className="xhero-slide-caption" aria-live={isPaused ? "polite" : "off"} aria-atomic="true">
                <a href={currentSlide.src} target="_blank" rel="noopener noreferrer" aria-label={`View full image: ${currentSlide.caption} (opens in a new tab)`}>
                  {currentSlide.caption}
                </a>
              </p>
              <div className="xhero-slide-controls">
                <button type="button" className="xhero-slide-button" aria-label="Previous hero image" disabled={loadedSlides.length < heroSlides.length} onClick={() => selectSlide((activeSlide - 1 + heroSlides.length) % heroSlides.length)}>
                  <ChevronLeft size={18} aria-hidden="true" />
                </button>
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    className="xhero-slide-button"
                    aria-label={`Show ${slide.label}`}
                    aria-pressed={activeSlide === index}
                    disabled={!loadedSlides.includes(index)}
                    onClick={() => selectSlide(index)}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </button>
                ))}
                <button type="button" className="xhero-slide-button" aria-label="Next hero image" disabled={loadedSlides.length < heroSlides.length} onClick={() => selectSlide((activeSlide + 1) % heroSlides.length)}>
                  <ChevronRight size={18} aria-hidden="true" />
                </button>
                <button type="button" className="xhero-slide-button" aria-label={isPaused ? "Play hero slideshow" : "Pause hero slideshow"} onClick={() => setIsPaused((current) => !current)}>
                  {isPaused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom composition: CTA strip + events card */}
        <div className={`xhero-bottom-strip ${ready ? "xhero-in" : ""}`}>
          {/* CTA block */}
          <div className="xhero-cta-block">
            <Link href="/about" className="xhero-btn-primary">
              Explore the Council <ArrowUpRight size={16} />
            </Link>
            <Link href="/events" className="xhero-btn-ghost">
              Events & Programs
            </Link>
          </div>

          {/* Divider line */}
          <div className="xhero-strip-divider" aria-hidden="true" />

          {/* Events mission card */}
          {upcomingEvents.length > 0 ? (
            <div className="xhero-mission-card">
              <div className="xhero-mission-header">
                <span className="xhero-mission-blink" />
                <span>UPCOMING MISSION</span>
              </div>
              {upcomingEvents.map((ev, i) => (
                <Link key={ev.id} href="/events" className="xhero-mission-item">
                  <div className="xhero-mission-num">0{i + 1}</div>
                  <div className="xhero-mission-info">
                    <span className="xhero-mission-title">{ev.title}</span>
                    <span className="xhero-mission-meta">
                      {ev.date && <><Calendar size={10} /> {ev.date}</>}
                      {ev.venue && <><MapPin size={10} /> {ev.venue}</>}
                    </span>
                  </div>
                  <ArrowUpRight size={13} className="xhero-mission-arrow" />
                </Link>
              ))}
            </div>
          ) : (
            <div className="xhero-mission-card">
              <div className="xhero-mission-header">
                <span className="xhero-mission-blink" />
                <span>COUNCIL STATUS</span>
              </div>
              <div style={{ padding: "12px 16px", fontSize: "0.8rem", color: "#a8c8c4" }}>
                Events & programs announced after ratification by the executive committee.
              </div>
            </div>
          )}

          {/* Coordinates readout */}
          <div className="xhero-coords" aria-hidden="true">
            <span className="xhero-coord-item">
              <span className="xhero-coord-label">LAT</span>
              <span className="xhero-coord-val">35.9208° N</span>
            </span>
            <span className="xhero-coord-sep" />
            <span className="xhero-coord-item">
              <span className="xhero-coord-label">LONG</span>
              <span className="xhero-coord-val">74.3144° E</span>
            </span>
            <span className="xhero-coord-sep" />
            <span className="xhero-coord-item">
              <span className="xhero-coord-label">EST.</span>
              <span className="xhero-coord-val">GBSC-QAU</span>
            </span>
          </div>
        </div>

      </div>

      {/* ── Layer 5: Scroll indicator ─────────────────────────────── */}
      <div className="xhero-scroll-hint" aria-hidden="true">
        <div className="xhero-scroll-line" />
        <span>scroll</span>
      </div>

    </section>
  );
}
