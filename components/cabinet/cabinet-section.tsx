"use client";

import Image from "next/image";
import { useId, useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { currentCabinetMembers, currentCabinetTiers } from "@/content/cabinet";
import type { CabinetShowcaseMember } from "@/lib/types";

const FALLBACK_GRADIENTS = [
  "linear-gradient(150deg, #06121d 0%, #285e62 58%, #3d787d 100%)",
  "linear-gradient(150deg, #0a1c2a 0%, #3d787d 62%, #98babc 130%)",
  "linear-gradient(150deg, #0a1c2a 0%, #8c3824 72%, #a64b35 120%)",
  "linear-gradient(150deg, #25333d 0%, #285e62 58%, #a64b35 135%)",
];

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);

  if (parts.length === 0) return "GB";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();

  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

interface CabinetCardProps {
  member: CabinetShowcaseMember;
  index: number;
  tierIndex: number;
}

function CabinetCard({ member, index, tierIndex }: CabinetCardProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const gradient = FALLBACK_GRADIENTS[tierIndex % FALLBACK_GRADIENTS.length];

  return (
    <article className={`cabinet-card group${member.isChair ? " cabinet-card--lead" : ""}`}>
      <div className="cabinet-portrait">
        <div
          className="cabinet-portrait-fallback"
          style={{ backgroundImage: gradient }}
          aria-hidden="true"
        >
          <span className="cabinet-fallback-ring" />
          <span className="cabinet-fallback-initials">
            {getInitials(member.name)}
          </span>
        </div>

        {imageFailed ? null : (
          <Image
            src={member.image}
            alt={`Portrait of ${member.name}, ${member.role}`}
            fill
            sizes="(max-width: 480px) 46vw, (max-width: 768px) 30vw, (max-width: 1100px) 22vw, 240px"
            className="cabinet-portrait-img group-hover:scale-105 hover:scale-105 transition-transform duration-300"
            onError={() => setImageFailed(true)}
          />
        )}

        <span className="cabinet-portrait-badge" aria-hidden="true">
          {member.isChair ? "CHAIR" : String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="cabinet-card-body">
        <span className="cabinet-card-role">{member.role}</span>
        <h4 className="cabinet-card-name">{member.name}</h4>
      </div>
    </article>
  );
}

export function CabinetSection() {
  const [query, setQuery] = useState("");
  const headingId = useId();
  const searchId = useId();

  const normalizedQuery = query.trim().toLowerCase();

  const filteredTiers = useMemo(() => {
    if (!normalizedQuery) return currentCabinetTiers;

    return currentCabinetTiers
      .map((tier) => ({
        ...tier,
        members: tier.members.filter((member) => {
          const searchable = [
            member.name,
            member.role,
            ...(member.searchAliases ?? []),
          ]
            .join(" ")
            .toLowerCase();

          return searchable.includes(normalizedQuery);
        }),
      }))
      .filter((tier) => tier.members.length > 0);
  }, [normalizedQuery]);

  const resultCount = filteredTiers.reduce(
    (total, tier) => total + tier.members.length,
    0
  );

  return (
    <section
      id="cabinet"
      className="cabinet-section"
      aria-labelledby={headingId}
    >
      <div className="wrap">
        <div className="cabinet-header">
          <div className="cabinet-header-copy">
            <p className="eyebrow">
              <span className="archive-tag tag-teal">EXECUTIVE DIRECTORY</span>
              <span aria-hidden="true">·</span>
              <span>Council Secretariat</span>
            </p>
            <h2 id={headingId}>GBSC Executive Cabinet</h2>
            <p className="cabinet-intro">
              The current term cabinet, ordered by constitutional tier — from
              the principal executive offices to the secretaries and student
              representatives who carry the council&apos;s work across campus.
            </p>
          </div>

          <div className="cabinet-term-badge">
            <span className="cabinet-term-dot" aria-hidden="true" />
            <span className="cabinet-term-copy">
              <strong>Current Term Leadership</strong>
              <span>{currentCabinetMembers.length} members · 4 tiers</span>
            </span>
          </div>
        </div>

        <div className="cabinet-toolbar">
          <div className="cabinet-search">
            <Search
              size={17}
              strokeWidth={2}
              className="cabinet-search-icon"
              aria-hidden="true"
            />
            <label htmlFor={searchId} className="sr-only">
              Search cabinet members by name or portfolio
            </label>
            <input
              id={searchId}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by name or portfolio…"
              className="cabinet-search-input"
              autoComplete="off"
              spellCheck={false}
            />
            {query ? (
              <button
                type="button"
                className="cabinet-search-clear"
                onClick={() => setQuery("")}
                aria-label="Clear cabinet search"
              >
                <X size={14} strokeWidth={2.5} aria-hidden="true" />
              </button>
            ) : null}
          </div>

          <p className="cabinet-result-count" aria-live="polite">
            {normalizedQuery
              ? `${resultCount} of ${currentCabinetMembers.length} members`
              : `${currentCabinetMembers.length} members · 4 tiers`}
          </p>
        </div>

        {filteredTiers.length > 0 ? (
          <div className="cabinet-tiers">
            {filteredTiers.map((tier) => {
              const tierIndex = currentCabinetTiers.findIndex(
                (item) => item.id === tier.id
              );
              const tierHeadingId = `${headingId}-${tier.id}`;

              return (
                <section
                  key={tier.id}
                  className="cabinet-tier"
                  aria-labelledby={tierHeadingId}
                >
                  <div className="cabinet-tier-head">
                    <span className="cabinet-tier-index" aria-hidden="true">
                      {String(tierIndex + 1).padStart(2, "0")}
                    </span>
                    <div className="cabinet-tier-copy">
                      <h3 id={tierHeadingId}>{tier.label}</h3>
                      <p>{tier.description}</p>
                    </div>
                    <span className="cabinet-tier-count">
                      {tier.members.length}{" "}
                      {tier.members.length === 1 ? "office" : "offices"}
                    </span>
                  </div>

                  <div className="cabinet-grid">
                    {tier.members.map((member, index) => (
                      <CabinetCard
                        key={member.id}
                        member={member}
                        index={index}
                        tierIndex={tierIndex}
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        ) : (
          <div className="cabinet-empty" role="status">
            <span className="cabinet-empty-icon" aria-hidden="true">
              <Search size={22} strokeWidth={1.8} />
            </span>
            <h3>No matching cabinet members</h3>
            <p>
              Try a different name, portfolio, or abbreviation — for example
              &ldquo;GS&rdquo;, &ldquo;finance&rdquo;, or &ldquo;MSc&rdquo;.
            </p>
            <button
              type="button"
              className="button button-secondary"
              onClick={() => setQuery("")}
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
