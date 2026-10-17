# System map

Status: DRAFT. Based on the current repository; operational ownership needs
confirmation.

## Layers

Single static website. Source remains at the repository root; there is no
separate backend or deployable layer in the inspected files.

- HTML documents provide the Home, About, Expertise, What We Do, Our Work,
	Knowledge Hub, Partners and Contact pages.
- `styles.css` supplies shared presentation.
- `main.js` supplies shared navigation, reveal effects, footer year and
	newsletter email handoff.
- `data.js` holds work and Knowledge Hub content; `render.js` builds their
	grids, filters and search UI.
- `contact.js` validates the enquiry form and uses an optional endpoint when
	configured; the current `contact.html` leaves that endpoint empty.
- Root image and favicon assets are referenced by the pages.

## Data and trust flow

Page content and grid data are bundled as static repository files and loaded by
the visitor's browser. The enquiry form currently transfers a composed message
to the visitor's local email app; the newsletter form does the same. No server,
database, or persistent user-data store was identified. If the optional enquiry
endpoint is enabled, its provider and data handling must be documented before
that change is approved.

## Ownership and deployment

Code ownership, hosting provider, domain/DNS ownership, release access and
rollback procedure are not documented yet. Record them after confirmation; do
not create infrastructure or credentials speculatively.
