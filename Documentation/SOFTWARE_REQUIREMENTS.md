# GBSC-QAU Software Requirements

**Document status:** Draft for team discussion  
**Product:** GB Council web application at Quaid-i-Azam University (QAU)  
**Version:** 0.1

## 1. Purpose

This document describes a proposed first release of the GBSC-QAU web application, accessed through a browser. It is intended to help the team agree on the problem, product boundaries, features, and quality expectations before selecting an implementation.

Council-specific policies, contacts, and content should be confirmed by the team before publication.

## 2. Problem statement

Students and other members of the QAU community may not have one reliable, easy-to-find online place to learn about the GB Council, its representatives, activities, announcements, and relevant student resources. Council information may be scattered across social channels or shared informally, making it harder to find current details or contact the right person.

The proposed application will provide a central, mobile-friendly source of council information and a manageable way for authorized council members to keep it up to date.

## 3. Goals and success measures

The first release should:

- Make current council information, announcements, events, and approved resources available in one place.
- Make it clear how students can contact the council or get involved.
- Allow authorized council staff to publish and update routine content without changing application code.
- Work well on common mobile and desktop browsers.

Possible measures for the team to agree on:

- Students can find council contact information and the next event from the home page or primary navigation.
- An authorized editor can publish an announcement without developer assistance.
- Core pages meet the agreed accessibility and performance targets in Section 7.

## 4. Stakeholders and user classes

- **Students and visitors:** Read public information, announcements, events, and resources; find ways to contact or join council activities.
- **Council representatives:** Provide and review accurate council information and respond to public enquiries.
- **Content editors:** Create, edit, publish, and archive application content.
- **Application administrator:** Manage editor access and application configuration.
- **University community:** Consult public council information where relevant.

The team should decide whether any additional groups require distinct permissions or features.

## 5. Scope

### 5.1 In scope for the proposed first release

- Public home page with recent announcements, upcoming events, and quick links.
- Council overview, responsibilities, and ways to get involved.
- Current council members, roles or portfolios, and approved contact details.
- Public announcements and event listings, including event details and past-item status.
- A curated list of approved student resources and external links.
- Public contact information and a basic feedback or enquiry route.
- An authenticated content-management area for authorized editors.
- Responsive layouts, accessibility, and baseline security and privacy protections.

### 5.2 Out of scope unless the team adds them

- Student accounts or a member-only portal.
- Online elections, voting, or election-result management.
- Online payments, donations, or financial management.
- Real-time chat or a guaranteed emergency-response service.
- A public discussion forum or social network.
- Collecting sensitive personal, academic, or case-management information.
- Native mobile applications.

## 6. Functional requirements

Requirements are proposals for the team to confirm. In this draft, **must** means a proposed first-release requirement, **should** means a recommended quality or behavior, and **may** means optional. The team should confirm priorities before implementation.

### FR-01 — Public home page

The system must provide a home page that introduces the council and links to the main sections. It should show recent announcements and upcoming events when those items are available.

### FR-02 — Council information

The system must provide a page describing the council’s purpose and responsibilities. Council-approved content must be editable by an authorized editor.

### FR-03 — Members and roles

The system must display current council members and their approved roles or portfolios. It may display public contact details where the council has permission to publish them.

### FR-04 — Announcements

The system must allow authorized editors to create, edit, publish, unpublish, and archive announcements. Each published announcement must have a title, body, and publication date. Draft or unpublished content must not appear on public pages. Publishing an update must make the updated version available on public pages.

### FR-05 — Events

The system must allow authorized editors to publish, update, and cancel events. An event should include its title, start and end date/time, time zone, location or online details, and a description. Events whose end time has passed must no longer appear as upcoming. Registration links may be included when provided.

### FR-06 — Resources

The system must provide a curated list of student resources and useful links. Each item should have a descriptive label and destination. Editors must be able to update or remove items.

### FR-07 — Contact and feedback

The system must publish at least one council-approved contact route, such as an official email address or social account. A web enquiry form is optional and requires team approval. If included, it must explain what information is requested and who receives the submission; submissions must not be displayed publicly.

### FR-08 — Content administration

The system must require authentication for content-management functions. Authorized editors must be able to manage the content types included in the first release. The administrator must be able to grant and revoke editor access.

### FR-09 — Content status and dates

The system must distinguish draft, published, and archived content. Public listings must show relevant dates, exclude drafts and archived items, and must not present cancelled or ended events as upcoming.

### FR-10 — Navigation and page not found

The system must provide consistent navigation between public sections and a useful not-found page for invalid or removed page addresses.

### FR-11 — Search

Search is a candidate enhancement rather than a first-release must-have. If included, it should find public announcements, events, and resources and should not expose unpublished content.

### FR-12 — Social and external links

The system may link to council-approved social media and external services. External links should be identifiable to users and maintained by editors where practical.

## 7. Non-functional requirements

These are proposed targets; the team should confirm the measurement conditions and hosting environment.

### NFR-01 — Usability and responsive design

Public pages must remain usable at common mobile, tablet, and desktop viewport sizes without requiring horizontal scrolling for ordinary content. Primary navigation and key actions must be easy to locate.

### NFR-02 — Accessibility

The application should target WCAG 2.2 Level AA for public pages. Content and controls should support keyboard navigation, visible focus, meaningful headings, text alternatives for informative images, and sufficient color contrast.

### NFR-03 — Performance

On the agreed production-like test setup, the team should target a Largest Contentful Paint (LCP) of 2.5 seconds or less at the 75th percentile for public pages. Pages should avoid unnecessarily large images and scripts.

### NFR-04 — Security

Administrative functions must be protected by authentication and role-based authorization. The implementation must use secure password handling or a trusted identity provider, protect authenticated sessions, validate input, and use HTTPS in production.

Public registration for editorial accounts must be disabled. An administrator must grant or revoke editorial access through an approved process.

### NFR-05 — Privacy and data minimization

The application must not request sensitive personal information unless the council has approved a clear need and handling process. Any form must collect only necessary information, state its purpose, and restrict access to submissions to authorized recipients.

### NFR-06 — Reliability and error handling

Public pages should remain available during normal expected use. Failed submissions or administrative actions must show a clear error and must not be reported as successful when they were not.

### NFR-07 — Backup and recovery

If the site stores content in a database or content-management service, the team must define a backup and recovery process before launch. Backups must be access-restricted, and the recovery process should be tested before production use.

### NFR-08 — Maintainability

Content editors should be able to make routine content updates without a code change. The codebase should include setup instructions and a repeatable way to build and verify the application.

### NFR-09 — Compatibility

The application should support current stable versions of major browsers on desktop and mobile. The team should identify the specific browser support policy before release.

### NFR-10 — Search engine and sharing metadata

Public pages should use descriptive page titles and metadata. Private or unpublished content must not be indexed or exposed through public sharing previews.

### NFR-11 — Content quality

Published content should identify dates clearly, use consistent terminology, and have an assigned council owner responsible for keeping it current.

## 8. Constraints and assumptions

- The application is for the GB Council at QAU; the official council name, branding, and relationship to university services need confirmation.
- Public content and contact details will be supplied and approved by the council.
- The first release is expected to be a public-facing web application, not a replacement for official university systems.
- Hosting, domain name, technology stack, editor identity management, and data-retention rules have not yet been selected.
- The council will define who is authorized to publish content and who handles contact submissions.

## 9. Open questions for team discussion

1. What is the council’s official full name, and what audience should the application serve?
2. Which pages and features are essential for the first release?
3. Who can create, review, and publish content? Is a review/approval step required?
4. Should contact be handled by published email/social links, a web form, or both?
5. If an enquiry form is included, who receives submissions, what response expectations can be stated, and how long should data be retained?
6. Are event registrations, volunteer sign-ups, or a calendar required at launch?
7. Which resources and external links are approved for publication?
8. Who will provide hosting, domain, branding, photos, and ongoing content maintenance?
9. Are there university policies or accessibility, privacy, or security standards the project must follow?
10. What browser support and service-availability expectations should be committed to?

## 10. Suggested first-release acceptance checklist

- A visitor can navigate to council information, members, announcements, events, resources, and contact details.
- The home page presents current announcements and upcoming events when published items exist.
- An authorized editor can sign in and create, edit, publish, unpublish, and archive supported content.
- Draft content is not visible to unauthenticated visitors.
- Cancelled, ended, and archived events are not presented as upcoming events.
- Public pages work at mobile and desktop sizes and can be navigated with a keyboard.
- At least one council-approved contact route is available. If a web enquiry form is included, it explains its purpose and recipient, and submissions are not public.
- The council has reviewed and approved the public copy and contact information.
- If content is stored by the application or its CMS, the backup and recovery process has been tested.
