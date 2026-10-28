"use client";

import Image from "next/image";
import { useState } from "react";
import { technicalTeamMembers } from "@/content/technical-team";
import type { TechnicalTeamMember } from "@/lib/types";

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "TT";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

function TechMemberCard({ member }: { member: TechnicalTeamMember }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="cabinet-card tech-simple-card">
      <div className="cabinet-portrait tech-simple-portrait">
        <div
          className="cabinet-portrait-fallback"
          style={{
            backgroundImage:
              "linear-gradient(150deg, #06121d 0%, #285e62 58%, #3d787d 100%)",
          }}
          aria-hidden="true"
        >
          <span className="cabinet-fallback-ring" />
          <span className="cabinet-fallback-initials">
            {getInitials(member.name)}
          </span>
        </div>

        {!imageFailed && (
          <Image
            src={member.image}
            alt={`Portrait of ${member.name}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
            className="cabinet-portrait-img hover:scale-105 transition-transform duration-300"
            onError={() => setImageFailed(true)}
            priority
          />
        )}
      </div>

      <div className="cabinet-card-body tech-simple-body">
        <span className="cabinet-card-role tech-simple-role">{member.role}</span>
        <h2 className="cabinet-card-name tech-simple-name">{member.name}</h2>
      </div>
    </article>
  );
}

export function TechTeamSection() {
  return (
    <section className="section-padding tech-simple-section">
      <div className="wrap">
        <div className="tech-simple-grid">
          {technicalTeamMembers.map((member) => (
            <TechMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
