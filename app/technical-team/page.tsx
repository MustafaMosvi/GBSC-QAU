import { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { TechTeamSection } from "@/components/technical/tech-team-section";

export const metadata: Metadata = {
  title: "Technical Team // GBSC-QAU",
  description:
    "The technical team who created the official web application for the Gilgit-Baltistan Student Council (GBSC-QAU) at Quaid-i-Azam University, Islamabad.",
};

export default function TechnicalTeamPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Technical Team" }]} />

      <header className="page-hero-banner">
        <div className="wrap">
          <p className="eyebrow light">
            <span className="archive-tag tag-dark">TECHNICAL TEAM</span>
            <span aria-hidden="true">·</span>
            <span>Web Application</span>
          </p>
          <h1>Technical Team</h1>
          <p className="lead">
            The team who created the official web application for the
            Gilgit-Baltistan Student Council (GBSC-QAU).
          </p>
        </div>
      </header>

      <TechTeamSection />
    </>
  );
}
