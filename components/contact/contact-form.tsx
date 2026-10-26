"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Info } from "lucide-react";

interface FormValues {
  name: string;
  email: string;
  topic: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  topic?: string;
  subject?: string;
  message?: string;
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    topic: "general",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!values.name.trim()) {
      errs.name = "Full name is required.";
    } else if (values.name.trim().length < 2) {
      errs.name = "Name must be at least 2 characters.";
    }

    if (!values.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }

    if (!values.subject.trim()) {
      errs.subject = "Subject line is required.";
    }

    if (!values.message.trim()) {
      errs.message = "Message content is required.";
    } else if (values.message.trim().length < 15) {
      errs.message = "Please write a descriptive message (at least 15 characters).";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Honest handling: simulate client validation and provide direct mailto action
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setValues({
      name: "",
      email: "",
      topic: "general",
      subject: "",
      message: "",
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--line)",
        borderRadius: "var(--radius-md)",
        padding: "clamp(28px, 4vw, 44px)",
        boxShadow: "0 8px 24px rgba(0,0,0,0.03)",
      }}
    >
      {submitted ? (
        <div style={{ textAlign: "center", padding: "20px 0" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              background: "var(--teal-pale)",
              color: "var(--teal)",
              display: "grid",
              placeItems: "center",
              margin: "0 auto 16px",
            }}
          >
            <CheckCircle2 size={32} />
          </div>
          <h3 style={{ fontSize: "1.45rem", marginBottom: "8px" }}>Inquiry Validated</h3>
          <p style={{ color: "var(--muted)", maxWidth: "52ch", margin: "0 auto 24px", fontSize: "0.92rem", lineHeight: 1.6 }}>
            Thank you, <strong>{values.name}</strong>. Your message regarding &ldquo;{values.subject}&rdquo; has been formatted.
          </p>

          <div
            style={{
              background: "var(--paper)",
              border: "1px solid var(--line)",
              borderRadius: "var(--radius-sm)",
              padding: "16px 20px",
              textAlign: "left",
              maxWidth: "540px",
              margin: "0 auto 28px",
              fontSize: "0.82rem",
              color: "var(--muted)",
              lineHeight: 1.6,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--charcoal)", fontWeight: 700, marginBottom: "6px" }}>
              <Info size={16} style={{ color: "var(--teal)" }} />
              <span>Production Integration Notice:</span>
            </div>
            In this initial frontend deployment, no third-party database is attached. To send this message directly via your email client, click the button below:
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <a
              href={`mailto:contact@gbsc-qau.org?subject=${encodeURIComponent(`[${values.topic.toUpperCase()}] ${values.subject}`)}&body=${encodeURIComponent(`From: ${values.name} (${values.email})\n\n${values.message}`)}`}
              className="button button-primary"
            >
              Open in Email Client <Send size={15} />
            </a>
            <button type="button" onClick={handleReset} className="button button-secondary">
              Compose Another Message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div style={{ marginBottom: "24px" }}>
            <h3 style={{ fontSize: "1.35rem", marginBottom: "6px" }}>Send an Inquiry to the Council</h3>
            <p style={{ margin: 0, fontSize: "0.88rem", color: "var(--muted)" }}>
              Reach cabinet secretaries for academic proposals, help desk questions, or cultural collaborations.
            </p>
          </div>

          <div className="contact-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
            {/* Full Name */}
            <div>
              <label
                htmlFor="contact-name"
                style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "var(--charcoal)", marginBottom: "6px" }}
              >
                Full Name <span style={{ color: "var(--terracotta)" }}>*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
                placeholder="e.g. Ali Raza"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  borderRadius: "var(--radius-sm)",
                  border: `1.5px solid ${errors.name ? "var(--terracotta)" : "var(--line)"}`,
                  background: "var(--paper)",
                  fontSize: "0.92rem",
                  color: "var(--ink)",
                }}
              />
              {errors.name && (
                <span id="name-error" style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "0.76rem", color: "var(--terracotta)", marginTop: "4px" }}>
                  <AlertCircle size={13} /> {errors.name}
                </span>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label
                htmlFor="contact-email"
                style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "var(--charcoal)", marginBottom: "6px" }}
              >
                Email Address <span style={{ color: "var(--terracotta)" }}>*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                placeholder="e.g. student@qau.edu.pk"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  borderRadius: "var(--radius-sm)",
                  border: `1.5px solid ${errors.email ? "var(--terracotta)" : "var(--line)"}`,
                  background: "var(--paper)",
                  fontSize: "0.92rem",
                  color: "var(--ink)",
                }}
              />
              {errors.email && (
                <span id="email-error" style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "0.76rem", color: "var(--terracotta)", marginTop: "4px" }}>
                  <AlertCircle size={13} /> {errors.email}
                </span>
              )}
            </div>
          </div>

          <div className="contact-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
            {/* Topic Category */}
            <div>
              <label
                htmlFor="contact-topic"
                style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "var(--charcoal)", marginBottom: "6px" }}
              >
                Inquiry Category
              </label>
              <select
                id="contact-topic"
                name="topic"
                value={values.topic}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  borderRadius: "var(--radius-sm)",
                  border: "1.5px solid var(--line)",
                  background: "var(--paper)",
                  fontSize: "0.92rem",
                  color: "var(--ink)",
                }}
              >
                <option value="general">General Council Question</option>
                <option value="help-desk">Freshmen Guidance / Help Desk</option>
                <option value="study-circle">Propose Study Circle Session</option>
                <option value="cultural">Cultural Performance / Volunteering</option>
                <option value="archive">Historical Archive Contribution</option>
              </select>
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="contact-subject"
                style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "var(--charcoal)", marginBottom: "6px" }}
              >
                Subject <span style={{ color: "var(--terracotta)" }}>*</span>
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                value={values.subject}
                onChange={handleChange}
                placeholder="e.g. Study circle proposal on glaciology"
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? "subject-error" : undefined}
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  borderRadius: "var(--radius-sm)",
                  border: `1.5px solid ${errors.subject ? "var(--terracotta)" : "var(--line)"}`,
                  background: "var(--paper)",
                  fontSize: "0.92rem",
                  color: "var(--ink)",
                }}
              />
              {errors.subject && (
                <span id="subject-error" style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "0.76rem", color: "var(--terracotta)", marginTop: "4px" }}>
                  <AlertCircle size={13} /> {errors.subject}
                </span>
              )}
            </div>
          </div>

          {/* Message Textarea */}
          <div style={{ marginBottom: "24px" }}>
            <label
              htmlFor="contact-message"
              style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "var(--charcoal)", marginBottom: "6px" }}
            >
              Message Content <span style={{ color: "var(--terracotta)" }}>*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              value={values.message}
              onChange={handleChange}
              placeholder="Describe your inquiry, proposal, or question in detail..."
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              style={{
                width: "100%",
                padding: "12px 14px",
                borderRadius: "var(--radius-sm)",
                border: `1.5px solid ${errors.message ? "var(--terracotta)" : "var(--line)"}`,
                background: "var(--paper)",
                fontSize: "0.92rem",
                color: "var(--ink)",
                resize: "vertical",
              }}
            />
            {errors.message && (
              <span id="message-error" style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "0.76rem", color: "var(--terracotta)", marginTop: "4px" }}>
                <AlertCircle size={13} /> {errors.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="button button-primary"
            style={{ width: "100%", minHeight: "50px" }}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Validating..." : "Submit Inquiry"} <Send size={15} />
          </button>
        </form>
      )}
    </div>
  );
}
