import Link from "next/link";
import { ArrowUpRight, Compass, Home, BookOpen, HelpCircle, ShieldAlert } from "lucide-react";
import { helpDeskGuide, helpDeskTopicsData } from "@/content/help-desk";

export function HelpDeskFeature() {
  return (
    <section className="section-padding section-paper" aria-labelledby="help-desk-heading">
      <div className="wrap">
        <div className="section-header-row help-desk-header-row">
          <div className="section-header-copy">
            <p className="eyebrow">
              <span className="archive-tag tag-teal">STUDENT SUPPORT DESK</span>
              <span>·</span>
              <span>Peer Mentorship</span>
            </p>
            <h2 id="help-desk-heading" className="help-desk-title">
              A place to start when you need a hand.
            </h2>
            <p className="section-header-sub">
              {helpDeskGuide.intro}
            </p>
          </div>
          <Link href="/help-desk" className="text-link help-desk-header-link">
            Open Help Desk Guide <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* 4 Topic Cards */}
        <div className="help-desk-grid">
          {helpDeskTopicsData.map((topic, index) => (
            <Link
              key={topic.id}
              href={`/help-desk#${topic.id}`}
              className="editorial-card help-desk-card"
            >
              <div className="help-desk-icon-box" aria-hidden="true">
                {index === 0 && <Compass size={22} />}
                {index === 1 && <Home size={22} />}
                {index === 2 && <BookOpen size={22} />}
                {index === 3 && <HelpCircle size={22} />}
              </div>
              <h3 className="help-desk-card-title">{topic.title}</h3>
              <p className="help-desk-card-desc">{topic.description}</p>
              <div className="help-desk-card-footer">
                <span className="help-desk-liaison-badge">
                  Liaison: {topic.universityOffice?.split(",")[0]}
                </span>
                <span className="help-desk-action-arrow" aria-hidden="true">
                  <ArrowUpRight size={15} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Disclaimer Notice */}
        <div className="help-desk-disclaimer">
          <ShieldAlert size={20} className="help-desk-disclaimer-icon" />
          <div className="help-desk-disclaimer-text">
            <strong>Institutional Scope Notice: </strong>
            GBSC-QAU Help Desk volunteers provide informational navigation and collegiate mentoring. We do not
            exercise administrative authority, resolve fee sanctions, or provide psychiatric therapy.
            All formal petitions must be lodged with official Quaid-i-Azam University offices.
          </div>
        </div>
      </div>
    </section>
  );
}
