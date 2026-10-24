import { Metadata } from "next";
import { HeroSection } from "@/components/home/hero-section";
import { EventShowcaseBanner } from "@/components/home/event-showcase-banner";
import { FeaturedAnnouncement } from "@/components/home/featured-announcement";
import { AboutFeature } from "@/components/home/about-feature";
import { ProgramsGrid } from "@/components/home/programs-grid";
import { StudyFeature } from "@/components/home/study-feature";
import { EventsShowcase } from "@/components/home/events-showcase";
import { CulturalFeature } from "@/components/home/cultural-feature";
import { ChairmanFeature } from "@/components/home/chairman-feature";
import { HistoryFeature } from "@/components/home/history-feature";
import { PrideFeature } from "@/components/home/pride-feature";
import { GalleryPreview } from "@/components/home/gallery-preview";
import { HelpDeskFeature } from "@/components/home/help-desk-feature";
import { FAQFeature } from "@/components/home/faq-feature";
import { CTASection } from "@/components/home/cta-section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "GBSC-QAU | Gilgit-Baltistan Student Council · Quaid-i-Azam University",
  description:
    "Discover the Gilgit-Baltistan Student Council at Quaid-i-Azam University, Islamabad. Explore student activities, cultural events, study circles, workshops, and community initiatives.",
  keywords: [
    "Gilgit-Baltistan Student Council",
    "GBSC-QAU",
    "Gilgit Baltistan students",
    "Quaid-i-Azam University",
    "QAU student council",
    "Gilgit-Baltistan student community",
    "student cultural events",
    "study circles",
    "student workshops",
    "Islamabad university events",
  ],
  openGraph: {
    title: "GBSC-QAU | Gilgit-Baltistan Student Council · Quaid-i-Azam University",
    description: siteConfig.missionStatement,
    url: siteConfig.baseUrl,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/hero/karakoram-hero.jpg",
        width: 1200,
        height: 630,
        alt: "GBSC-QAU Karakoram Landscape and Student Archive",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GBSC-QAU | Gilgit-Baltistan Student Council · Quaid-i-Azam University",
    description: siteConfig.missionStatement,
    images: ["/images/hero/karakoram-hero.jpg"],
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteConfig.name,
    alternateName: siteConfig.acronym,
    url: siteConfig.baseUrl,
    logo: `${siteConfig.baseUrl}/images/branding/gbsc-logo.png`,
    description: siteConfig.shortDescription,
    parentOrganization: {
      "@type": "CollegeOrUniversity",
      name: siteConfig.institution,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Quaid-i-Azam University Campus",
      addressLocality: "Islamabad",
      postalCode: "45320",
      addressCountry: "PK",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <EventShowcaseBanner />
      <FeaturedAnnouncement />
      <AboutFeature />
      <ProgramsGrid />
      <StudyFeature />
      <EventsShowcase />
      <CulturalFeature />
      <ChairmanFeature />
      <HistoryFeature />
      <PrideFeature />
      <GalleryPreview />
      <HelpDeskFeature />
      <FAQFeature />
      <CTASection />
    </>
  );
}
