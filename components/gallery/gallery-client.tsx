"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, ZoomIn } from "lucide-react";
import { GalleryItem, GalleryCategory } from "@/lib/types";

interface GalleryClientProps {
  items: GalleryItem[];
}

export function GalleryClient({ items }: GalleryClientProps) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const categories: GalleryCategory[] = [
    "All",
    "Campus Life",
    "Study Circles",
    "Cultural Gatherings",
    "Heritage & Landscapes",
    "Book Fairs",
  ];

  const filteredItems =
    activeCategory === "All"
      ? items
      : items.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedItemIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setSelectedItemIndex(null);
    document.body.style.overflow = "";
  }, []);

  const showNext = useCallback(() => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex + 1) % filteredItems.length);
    }
  }, [selectedItemIndex, filteredItems.length]);

  const showPrev = useCallback(() => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex(
        (selectedItemIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  }, [selectedItemIndex, filteredItems.length]);

  // Keyboard navigation for accessible lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedItemIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItemIndex, closeLightbox, showNext, showPrev]);

  const currentItem = selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

  return (
    <div>
      {/* Category Filter Pills */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          alignItems: "center",
          marginBottom: "40px",
          borderBottom: "1px solid var(--line)",
          paddingBottom: "16px",
        }}
        role="tablist"
        aria-label="Gallery category filters"
      >
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => {
                setActiveCategory(cat);
                setSelectedItemIndex(null);
              }}
              className={`archive-tag ${isActive ? "tag-teal" : ""}`}
              style={{
                cursor: "pointer",
                padding: "8px 16px",
                fontSize: "0.78rem",
                background: isActive ? "var(--ink)" : "var(--surface)",
                color: isActive ? "var(--surface)" : "var(--charcoal)",
                borderColor: isActive ? "var(--ink)" : "var(--line)",
                transition: "all var(--transition-fast)",
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Masonry-Style Responsive Editorial Grid */}
      {filteredItems.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                transition: "transform var(--transition-normal), box-shadow var(--transition-normal)",
              }}
              className="gallery-grid-card"
            >
              <div style={{ position: "relative", width: "100%", height: "260px", overflow: "hidden" }}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover", transition: "transform var(--transition-smooth)" }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    background: "rgba(6, 18, 29, 0.85)",
                    padding: "4px 8px",
                    borderRadius: "var(--radius-sm)",
                    color: "var(--surface)",
                    fontSize: "0.68rem",
                    fontFamily: "var(--mono)",
                  }}
                >
                  {item.category}
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "12px",
                    right: "12px",
                    background: "rgba(6, 18, 29, 0.8)",
                    color: "var(--surface)",
                    padding: "6px",
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                  }}
                  aria-hidden="true"
                >
                  <ZoomIn size={14} />
                </div>
              </div>

              <div style={{ padding: "20px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <h3 style={{ margin: "0 0 8px", fontSize: "1.15rem" }}>{item.title}</h3>
                <p style={{ margin: "0 0 16px", fontSize: "0.85rem", color: "var(--muted)", flexGrow: 1 }}>
                  {item.caption}
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "0.74rem",
                    color: "var(--muted)",
                    fontFamily: "var(--mono)",
                    borderTop: "1px solid var(--line-light)",
                    paddingTop: "12px",
                  }}
                >
                  {item.location && <span>{item.location}</span>}
                  {item.date && <span>{item.date}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="editorial-empty-state">
          <div className="editorial-empty-mark">—</div>
          <h3>No photographs in this category yet</h3>
          <p>
            The council archives photographs with student permission and contextual documentation.
            Check other categories or explore all records.
          </p>
          <button
            type="button"
            className="button button-secondary"
            onClick={() => setActiveCategory("All")}
          >
            Show All Photographs
          </button>
        </div>
      )}

      {/* Accessible Lightbox Modal */}
      {currentItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Photo lightbox: ${currentItem.title}`}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "rgba(6, 18, 29, 0.95)",
            backdropFilter: "blur(12px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
        >
          {/* Top Controls */}
          <div
            style={{
              position: "absolute",
              top: "20px",
              left: "24px",
              right: "24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "var(--surface)",
              zIndex: 101,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", fontFamily: "var(--mono)", fontSize: "0.8rem" }}>
              <span className="archive-tag tag-dark">{currentItem.category}</span>
              <span>
                {selectedItemIndex! + 1} / {filteredItems.length}
              </span>
            </div>

            <button
              type="button"
              onClick={closeLightbox}
              style={{
                background: "rgba(255, 255, 255, 0.12)",
                border: "none",
                color: "var(--surface)",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                display: "grid",
                placeItems: "center",
                cursor: "pointer",
              }}
              aria-label="Close lightbox modal (Esc)"
            >
              <X size={20} />
            </button>
          </div>

          {/* Image & Navigation Frame */}
          <div
            style={{
              position: "relative",
              maxWidth: "1000px",
              width: "100%",
              maxHeight: "75vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Prev Button */}
            <button
              type="button"
              onClick={showPrev}
              style={{
                position: "absolute",
                left: "-54px",
                background: "rgba(255, 255, 255, 0.12)",
                border: "none",
                color: "var(--surface)",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                display: "grid",
                placeItems: "center",
                cursor: "pointer",
                zIndex: 10,
              }}
              aria-label="Previous image (Left arrow)"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Main Lightbox Image */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "65vh",
                borderRadius: "var(--radius-sm)",
                overflow: "hidden",
              }}
            >
              <Image
                src={currentItem.src}
                alt={currentItem.alt}
                fill
                priority
                sizes="100vw"
                style={{ objectFit: "contain" }}
              />
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={showNext}
              style={{
                position: "absolute",
                right: "-54px",
                background: "rgba(255, 255, 255, 0.12)",
                border: "none",
                color: "var(--surface)",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                display: "grid",
                placeItems: "center",
                cursor: "pointer",
                zIndex: 10,
              }}
              aria-label="Next image (Right arrow)"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Caption Box */}
          <div
            style={{
              marginTop: "20px",
              maxWidth: "800px",
              textAlign: "center",
              color: "var(--surface)",
            }}
          >
            <h4 style={{ margin: "0 0 6px", fontSize: "1.2rem", color: "var(--surface)" }}>
              {currentItem.title}
            </h4>
            <p style={{ margin: "0 0 10px", fontSize: "0.88rem", color: "#cfdbd6", maxWidth: "65ch", marginInline: "auto" }}>
              {currentItem.caption}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "16px",
                fontSize: "0.74rem",
                color: "#8da198",
                fontFamily: "var(--mono)",
              }}
            >
              {currentItem.location && (
                <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <MapPin size={12} /> {currentItem.location}
                </span>
              )}
              {currentItem.date && (
                <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <Calendar size={12} /> {currentItem.date}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
