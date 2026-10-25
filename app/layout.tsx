import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AnnouncementStrip } from "@/components/layout/announcement-strip";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { siteConfig } from "@/lib/site-config";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#06121d",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: "GBSC-QAU | Gilgit-Baltistan Student Council · QAU Islamabad",
    template: "%s | GBSC-QAU",
  },
  description: siteConfig.shortDescription,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  generator: "Next.js",
  keywords: [
    "Gilgit-Baltistan Student Council",
    "GBSC-QAU",
    "Quaid-i-Azam University",
    "QAU Islamabad",
    "Gilgit-Baltistan students",
    "mountain student community",
  ],
  alternates: {
    canonical: siteConfig.canonicalOrigin ? siteConfig.canonicalOrigin : undefined,
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: "GBSC-QAU | Gilgit-Baltistan Student Council",
    description: siteConfig.shortDescription,
    images: [
      {
        url: "/images/hero/karakoram-hero.jpg",
        width: 1200,
        height: 630,
        alt: "GBSC-QAU Digital Archive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GBSC-QAU | Gilgit-Baltistan Student Council",
    description: siteConfig.shortDescription,
    images: ["/images/hero/karakoram-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/branding/gbsc-logo.png",
    apple: "/images/branding/gbsc-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <AnnouncementStrip />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
