"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Code2,
  Cpu,
  Palette,
  Sparkles,
  Github,
  Mail,
  ArrowUpRight,
  CheckCircle2,
  Terminal,
  Layers,
  Heart,
  ExternalLink,
} from "lucide-react";
import {
  technicalTeamMembers,
  platformArchitecture,
  techHighlights,
} from "@/content/technical-team";
import type { TechnicalTeamMember } from "@/lib/types";

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "TT";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

export function TechHeroStats({ className = "" }: { className?: string }) {
  return (
    <div
      className={`tech-hero-stats ${className}`}
      role="region"
      aria-label="Platform Architecture Highlights"
    >
      {techHighlights.map((stat, i) => (
        <div key={i} className="tech-stat-chip">
          <strong className="tech-stat-number">{stat.label}</strong>
          <span className="tech-stat-label">{stat.detail}</span>
        </div>
      ))}
    </div>
  );
}

function TechMemberCard({ member }: { member: TechnicalTeamMember }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article
      className={`tech-card ${member.isLead ? "tech-card--lead" : ""}`}
      id={`member-${member.id}`}
    >
      <div className="tech-card-top">
        {/* Portrait container */}
        <div className="tech-portrait-wrapper">
          <div className="tech-portrait-glow" aria-hidden="true" />
          <div className="tech-portrait-box">
            {imageFailed ? (
              <div className="tech-portrait-fallback">
                <span className="tech-fallback-initials">
                  {getInitials(member.name)}
                </span>
              </div>
            ) : (
              <Image
                src={member.image}
                alt={`Portrait of ${member.name}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                className="tech-portrait-image"
                onError={() => setImageFailed(true)}
                priority
              />
            )}
            <span
              className={`tech-card-badge ${
                member.isLead ? "tech-card-badge--lead" : "tech-card-badge--core"
              }`}
            >
              {member.badge}
            </span>
          </div>
        </div>

        {/* Member Header Information */}
        <div className="tech-card-header">
          <p className="tech-card-role">{member.role}</p>
          <h2 className="tech-card-name">{member.name}</h2>
          <p className="tech-card-affil">
            <span className="tech-affil-dot" aria-hidden="true" />
            <span>{member.affiliation}</span>
            <span className="tech-affil-sep">·</span>
            <span className="tech-affil-dept">{member.department}</span>
          </p>
        </div>
      </div>

      <div className="tech-card-body">
        {/* Bio */}
        <p className="tech-card-bio">{member.bio}</p>

        {/* Contributions */}
        <div className="tech-contributions-block">
          <h3 className="tech-subheading">
            <CheckCircle2 size={15} className="tech-subheading-icon" />
            <span>Key Contributions</span>
          </h3>
          <ul className="tech-contributions-list">
            {member.contributions.map((item, idx) => (
              <li key={idx} className="tech-contribution-item">
                <span className="tech-contrib-bullet" aria-hidden="true">
                  →
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Skills & Specialties */}
        <div className="tech-skills-block">
          <h3 className="tech-subheading">
            <Terminal size={15} className="tech-subheading-icon" />
            <span>Tech Stack & Focus</span>
          </h3>
          <div className="tech-skills-tags">
            {member.skills.map((skill, idx) => (
              <span key={idx} className="tech-skill-pill">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Connect Action Bar */}
        {member.socials && (
          <div className="tech-card-footer">
            {member.socials.github && (
              <a
                href={member.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="tech-social-link"
                aria-label={`GitHub profile for ${member.name}`}
              >
                <Github size={15} />
                <span>GitHub</span>
                <ArrowUpRight size={13} className="tech-link-arrow" />
              </a>
            )}
            {member.socials.email && (
              <a
                href={`mailto:${member.socials.email}`}
                className="tech-social-link"
                aria-label={`Email ${member.name}`}
              >
                <Mail size={15} />
                <span>Email</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

const architectureIcons: Record<string, typeof Cpu> = {
  Cpu: Cpu,
  Palette: Palette,
  Code2: Code2,
  Sparkles: Sparkles,
};

export function TechArchitectureSection() {
  return (
    <section className="section-padding tech-arch-section">
      <div className="wrap">
        <div className="section-header-editorial">
          <p className="eyebrow">
            <span className="archive-tag tag-dark">SYSTEM ARCHITECTURE</span>
            <span aria-hidden="true">·</span>
            <span>Technical Foundation</span>
          </p>
          <h2>How the GBSC-QAU Platform was Built</h2>
          <p className="lead">
            Built from scratch to deliver an institutional-grade, zero-compromise
            experience that honors the historical and cultural dignity of
            Gilgit-Baltistan.
          </p>
        </div>

        <div className="tech-arch-grid">
          {platformArchitecture.map((item, idx) => {
            const IconComponent = architectureIcons[item.iconName] || Layers;
            return (
              <div key={idx} className="tech-arch-card">
                <div className="tech-arch-icon-wrap">
                  <IconComponent size={24} />
                </div>
                <div className="tech-arch-cat">{item.category}</div>
                <h3 className="tech-arch-title">{item.title}</h3>
                <p className="tech-arch-desc">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function TechTeamSection() {
  return (
    <section className="section-padding tech-team-main-section">
      <div className="wrap">
        <div className="tech-team-intro">
          <p className="eyebrow">
            <span className="archive-tag tag-teal">CORE BUILDERS</span>
            <span aria-hidden="true">·</span>
            <span>Design & Engineering</span>
          </p>
          <h2 className="tech-team-title">
            The Students Behind the Code & Design
          </h2>
          <p className="tech-team-lead">
            Meet the developers from Quaid-i-Azam University who conceptualized,
            designed, and engineered this platform for the Gilgit-Baltistan
            Student Council.
          </p>
        </div>

        {/* Team Grid */}
        <div className="tech-team-grid">
          {technicalTeamMembers.map((member) => (
            <TechMemberCard key={member.id} member={member} />
          ))}
        </div>

        {/* Community Callout */}
        <div className="tech-community-banner">
          <div className="tech-community-content">
            <div className="tech-community-tag">
              <Heart size={14} className="tech-heart-icon" />
              <span>COMMUNITY-DRIVEN CODEBASE</span>
            </div>
            <h3>Interested in contributing to GBSC tech initiatives?</h3>
            <p>
              We welcome students of Gilgit-Baltistan at QAU passionate about
              software engineering, digital archiving, graphic design, and
              creative writing to collaborate on upcoming council platforms.
            </p>
          </div>
          <div className="tech-community-cta">
            <Link href="/contact" className="button button-primary">
              Connect With Council <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
