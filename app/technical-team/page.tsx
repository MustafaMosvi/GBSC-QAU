import { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import {
  TechTeamSection,
  TechArchitectureSection,
  TechHeroStats,
} from "@/components/technical/tech-team-section";

export const metadata: Metadata = {
  title: "Technical Team // Digital Architects of GBSC-QAU",
  description:
    "Meet the engineering and design team behind the Gilgit-Baltistan Student Council (GBSC-QAU) web application and digital archive at Quaid-i-Azam University, Islamabad.",
};

export default function TechnicalTeamPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Technical Team" }]} />

      <header className="page-hero-banner">
        <div className="wrap">
          <p className="eyebrow light">
            <span className="archive-tag tag-dark">DIGITAL ARCHITECTS</span>
            <span aria-hidden="true">·</span>
            <span>GBSC-QAU Web Application</span>
          </p>
          <h1>The Minds Behind the Mountain Archive.</h1>
          <p className="lead">
            Conceived, architected, and engineered with pride by students of
            Gilgit-Baltistan at Quaid-i-Azam University, Islamabad. Building a
            modern, accessible, and high-performance digital gateway for our
            student community.
          </p>
          <TechHeroStats className="tech-page-hero-stats" />
        </div>
      </header>

      <TechTeamSection />
      <TechArchitectureSection />
    </>
  );
}
