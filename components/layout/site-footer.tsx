import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top-grid">
          {/* Brand Column */}
          <div className="footer-brand-column">
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <Image
                src="/images/branding/gbsc-logo.png"
                alt="GBSC Emblem"
                width={36}
                height={48}
                style={{ objectFit: "contain" }}
              />
              <div>
                <h3 style={{ margin: 0, fontSize: "1.15rem", color: "var(--surface)" }}>{siteConfig.acronym}</h3>
                <span style={{ fontSize: "0.72rem", color: "#8da198", fontFamily: "var(--mono)" }}>
                  Quaid-i-Azam University
                </span>
              </div>
            </div>
            <p className="footer-brand-copy">{siteConfig.shortDescription}</p>
            <div className="footer-disclaimer-box">
              <strong>Notice of Independent Governance:</strong>
              <p style={{ margin: "4px 0 0", fontSize: "0.74rem" }}>
                {siteConfig.disclaimers.governance}
              </p>
            </div>
          </div>

          {/* Quick Navigation Column */}
          <div className="footer-column">
            <h4>Primary Pages</h4>
            <ul>
              {siteConfig.primaryNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs & Archives Column */}
          <div className="footer-column">
            <h4>Programs & Archives</h4>
            <ul>
              {siteConfig.programLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/history">Council History</Link>
              </li>
              <li>
                <Link href="/our-pride">Our Pride Archive</Link>
              </li>
            </ul>
          </div>

          {/* Student Support & Community Column */}
          <div className="footer-column">
            <h4>Student Resources</h4>
            <ul>
              <li>
                <Link href="/help-desk">Student Help Desk</Link>
              </li>
              <li>
                <Link href="/announcements">Council Announcements</Link>
              </li>
              <li>
                <Link href="/faq">Frequently Asked Questions</Link>
              </li>
              <li>
                <Link href="/contact">Reach Out to Cabinet</Link>
              </li>
            </ul>
            <div style={{ marginTop: "20px" }}>
              <span className="archive-tag tag-dark" style={{ display: "inline-block", marginBottom: "10px" }}>
                Campus Meeting Venue
              </span>
              <p style={{ margin: 0, fontSize: "0.78rem", color: "#8da198", lineHeight: 1.5 }}>
                {siteConfig.contact.campusLocation}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-row">
          <div>
            <span>© {currentYear} {siteConfig.name} (GBSC-QAU).</span>
            <span style={{ margin: "0 8px", opacity: 0.4 }}>·</span>
            <span>All rights reserved.</span>
          </div>
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <span>THE MOUNTAIN ARCHIVE</span>
            <span style={{ opacity: 0.4 }}>//</span>
            <span>HERITAGE IN MOTION</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
