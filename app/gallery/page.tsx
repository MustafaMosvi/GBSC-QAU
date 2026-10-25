import { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { GalleryClient } from "@/components/gallery/gallery-client";
import { galleryItemsData } from "@/content/gallery";

export const metadata: Metadata = {
  title: "Photo Archive Gallery // Documentary Life",
  description:
    "A visual record of students from Gilgit-Baltistan at Quaid-i-Azam University, Islamabad. Documenting cultural gatherings, study circles, book fairs, and mountain landscapes.",
};

export default function GalleryPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Gallery Archive" }]} />

      <header className="page-hero-banner">
        <div className="wrap">
          <p className="eyebrow light">
            <span className="archive-tag tag-dark">DOCUMENTARY RECORD</span>
            <span>·</span>
            <span>Visual Archive</span>
          </p>
          <h1>A visual record, made with care.</h1>
          <p className="lead">
            Photographs documenting collegiate gatherings, intellectual discussions, regional music,
            and the landscapes of our home valleys. Captured with permission and editorial stewardship.
          </p>
        </div>
      </header>

      <section className="section-padding section-paper">
        <div className="wrap">
          <GalleryClient items={galleryItemsData} />

          <div
            style={{
              marginTop: "56px",
              padding: "20px 24px",
              background: "var(--surface)",
              border: "1px solid var(--line)",
              borderRadius: "var(--radius-sm)",
              fontSize: "0.82rem",
              color: "var(--muted)",
              lineHeight: 1.6,
            }}
          >
            <strong>Editorial & Privacy Stewardship: </strong>
            All photographs featured in the GBSC-QAU digital archive are published with consent from participating students.
            If you are an identifiable student or community member and wish to request caption refinement or archive exclusion,
            please contact the council information secretary directly through our contact form.
          </div>
        </div>
      </section>
    </>
  );
}
