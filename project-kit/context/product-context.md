# Product context — walmetagrihub

Status: DRAFT. Current website content is evidence of the implementation, not
confirmation of approved business requirements.

## Problem

The current site presents Walmet Agrihub as a Kenya-based agriculture and
development enterprise. It describes regenerative agriculture, climate
resilience, rural livelihoods, food systems and partnerships. The underlying
business problem, target outcomes and evidence of need have not been provided.

## Areas

- One public-facing static website, served from this repository root.

## Stack / conventions

- HTML pages, shared CSS, and vanilla JavaScript; no package manifest or build
	tooling is present in the inspected root.
- `data.js` supplies the work and Knowledge Hub entries consumed by
	`render.js`.
- Preserve the existing root-level structure and static deployment model unless
	an approved spec changes it.

## Users and journeys

Observed journeys (intended audiences and permissions still need owner
confirmation):

1. A prospective partner browses the organisation, expertise, work and partner
	 pages, then opens the contact page and submits an enquiry. With the current
	 empty `data-endpoint`, submission hands off to the visitor's email app.
2. A visitor opens Our Work or Knowledge Hub, filters or searches entries, and
	 follows an available item link. Several Knowledge Hub entries are explicitly
	 marked as coming soon.
3. A visitor uses the footer newsletter form; the current script opens a
	 pre-filled email draft and does not record a subscription on a server.

## Scope

Current repository scope is the public static website and its content. No
backend, CMS, newsletter service, analytics, deployment platform, or ongoing
content-approval process has been confirmed. Do not add these as assumed
requirements.

The owner-supplied postal address for spec 02 is P.O. Box 8580-30100, Eldoret,
Kenya. This confirms the postal address only, not a physical office location.

## Success

No approved success measures or baselines are recorded. The owner should define
the intended outcomes and measurable signals before product implementation is
planned.

## Open questions

- Who are the priority audiences, and which journeys matter most?
- Which project/work entries, partner names, claims, contact details and
	Knowledge Hub materials are approved for publication?
- Is email-app handoff the intended enquiry and newsletter behavior, or should
	a service endpoint be configured?
- Where is the site hosted, and what release/rollback process is expected?
- What browser/device support, accessibility target, and performance targets
	are required?
- Which lint, test, security and deployment checks should be authoritative?
