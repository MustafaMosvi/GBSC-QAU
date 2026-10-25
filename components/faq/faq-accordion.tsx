"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQItem } from "@/lib/types";

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="faq-accordion" role="region" aria-label="Frequently Asked Questions">
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        const headerId = `faq-header-${item.id}`;
        const panelId = `faq-panel-${item.id}`;

        return (
          <div key={item.id} className={`faq-item ${isOpen ? "is-open" : ""}`}>
            <button
              type="button"
              id={headerId}
              className="faq-trigger"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span>{item.question}</span>
              <div className="faq-icon" aria-hidden="true">
                <Plus size={16} />
              </div>
            </button>
            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={headerId}
                className="faq-content"
              >
                <p style={{ margin: 0 }}>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
