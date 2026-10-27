import { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import {
  RegionsSection,
  RegionsStats,
} from "@/components/regions/regions-section";

export const metadata: Metadata = {
  title: "Our Regions // Fourteen Districts of Gilgit-Baltistan",
  description:
    "Explore the fourteen districts of Gilgit-Baltistan across the Gilgit, Baltistan, and Diamer divisions, and the student community they bring to Quaid-i-Azam University.",
};

export default function RegionsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Our Regions" }]} />

      <header className="page-hero-banner">
        <div className="wrap">
          <p className="eyebrow light">
            <span className="archive-tag tag-dark">OUR REGIONS</span>
            <span aria-hidden="true">·</span>
            <span>Gilgit-Baltistan</span>
          </p>
          <h1>Fourteen districts. One student community.</h1>
          <p className="lead">
            Our members come from every corner of Gilgit-Baltistan — from the
            alpine valleys of Gilgit Division to the high Karakoram of Baltistan
            and the western Indus corridor of Diamer.
          </p>
          <RegionsStats className="regions-hero-stats" />
        </div>
      </header>

      <RegionsSection showHeader={false} />
    </>
  );
}
