import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { programCategories } from "@/content/events";

export function ProgramsGrid() {
  return (
    <section className="section-padding section-stone" aria-labelledby="programs-section-heading">
      <div className="wrap">
        <div className="section-header-row">
          <div className="section-header-copy">
            <p className="eyebrow">
              <span className="archive-tag tag-teal">PROGRAM AREAS</span>
              <span>·</span>
              <span>Paths Into Community Life</span>
            </p>
            <h2 id="programs-section-heading">
              Curiosity, craft, and collective learning.
            </h2>
            <p className="section-header-sub">
              Distinct program tracks designed to support student growth, academic scholarship,
              cultural preservation, and practical readiness.
            </p>
          </div>
          <Link href="/events" className="text-link">
            Explore All Programs & Archives <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="editorial-grid-3">
          {programCategories.map((item, index) => (
            <Link key={item.title} href={item.href} className="editorial-card">
              <div className="editorial-card-index">
                <span>PORTFOLIO 0{index + 1}</span>
                <span className="archive-tag tag-teal">{item.title}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <div className="editorial-card-footer">
                <span>View Program Details</span>
                <ArrowUpRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
