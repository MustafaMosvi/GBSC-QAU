"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docH > 0 ? (y / docH) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  // Navigation with optional sub-items
  const navItems = siteConfig.primaryNav.map((item) => ({
    ...item,
    sub: undefined as undefined | { label: string; href: string }[],
  }));

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <div className="wrap site-header-inner">
          {/* Brand */}
          <Link href="/" className="header-brand" aria-label="GBSC-QAU Home">
            <div className="header-logo-wrapper">
              <div className="header-logo-glow" aria-hidden="true" />
              <Image
                src="/images/branding/gbsc-logo.png"
                alt="GBSC-QAU Official Emblem"
                width={44}
                height={58}
                priority
                className="header-logo-img"
              />
            </div>
            <div className="header-brand-text">
              <span className="header-brand-name">Gilgit-Baltistan Student Council</span>
              <span className="header-brand-descriptor">Quaid-i-Azam University · Islamabad</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);

              if (item.sub && item.sub.length > 0) {
                return (
                  <div
                    key={item.href}
                    className="nav-dropdown-wrapper"
                    onMouseEnter={() => handleDropdownEnter(item.label)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button
                      type="button"
                      className={`nav-link nav-link-btn ${isActive ? "nav-link--active" : ""}`}
                      aria-expanded={activeDropdown === item.label}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`nav-chevron ${activeDropdown === item.label ? "nav-chevron--open" : ""}`}
                      />
                    </button>
                    <div className={`nav-dropdown ${activeDropdown === item.label ? "nav-dropdown--open" : ""}`}>
                      {item.sub.map((sub) => (
                        <Link key={sub.href} href={sub.href} className="nav-dropdown-item">
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link ${isActive ? "nav-link--active" : ""}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link href="/contact" className="nav-cta">
              Get Involved <ArrowUpRight size={14} />
            </Link>
          </nav>

          {/* Hamburger */}
          <button
            type="button"
            className={`menu-toggle-btn ${mobileMenuOpen ? "menu-toggle-btn--open" : ""}`}
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className="hamburger-icon">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`mobile-overlay ${mobileMenuOpen ? "mobile-overlay--visible" : ""}`}
        aria-hidden="true"
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile drawer */}
      <div
        id="mobile-navigation"
        className={`mobile-nav-drawer ${mobileMenuOpen ? "is-open" : ""}`}
        aria-hidden={!mobileMenuOpen}
        role="dialog"
        aria-label="Site navigation"
      >
        {/* Drawer header */}
        <div className="mobile-nav-header">
          <div className="mobile-nav-brand">
            <Image
              src="/images/branding/gbsc-logo.png"
              alt="GBSC-QAU"
              width={32}
              height={42}
            />
            <div>
              <div className="mobile-nav-brand-name">GBSC-QAU</div>
              <div className="mobile-nav-brand-sub">Student Council · QAU</div>
            </div>
          </div>
          <button
            type="button"
            className="mobile-nav-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Primary links */}
        <div className="mobile-nav-section">
          <p className="mobile-nav-section-label">Navigation</p>
          <nav>
            {navItems.map((item, idx) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`mobile-nav-link ${isActive ? "mobile-nav-link--active" : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ animationDelay: `${idx * 40}ms` }}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight size={16} className="mobile-nav-arrow" />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Secondary resources */}
        <div className="mobile-nav-section">
          <p className="mobile-nav-section-label">Resources</p>
          <div className="mobile-nav-grid">
            {siteConfig.secondaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="mobile-nav-chip"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mobile-nav-footer">
          <Link
            href="/contact"
            className="button button-primary"
            style={{ width: "100%", justifyContent: "center" }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Reach the Council <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </>
  );
}
