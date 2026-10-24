import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FAQAccordion } from "@/components/faq/faq-accordion";
import { faqData } from "@/content/faq";

export function FAQFeature() {
  const homeFaqs = faqData.slice(0, 5);

  return (
    <section className="section-padding section-white" aria-labelledby="faq-heading">
      <div className="wrap">
        <div className="section-header-row">
          <div className="section-header-copy">
            <p className="eyebrow">
              <span className="archive-tag tag-terracotta">QUESTIONS & CLARIFICATIONS</span>
              <span>·</span>
              <span>Knowledge Base</span>
            </p>
            <h2 id="faq-heading">Frequently asked questions.</h2>
            <p className="section-header-sub">
              Direct, factual answers concerning council membership, activity access, and student inquiries.
            </p>
          </div>
          <Link href="/faq" className="text-link">
            View All Answers <ArrowUpRight size={16} />
          </Link>
        </div>

        <div style={{ maxWidth: "900px" }}>
          <FAQAccordion items={homeFaqs} />
        </div>
      </div>
    </section>
  );
}
