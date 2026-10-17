# 02 — Publish postal address

Status: DONE.

## Approval and outcome

The owner supplied the postal address `P.O. Box 8580-30100, Eldoret, Kenya`
and requested it be shown in the site's location and other relevant contact
surfaces. On 2026-10-17, the user approved this narrowly scoped implementation
while the broader planning decisions in spec 01 remain open.

Publish the address as a postal address. Do not imply that it is a street
address or a confirmed physical office location.

## Scope

- Update the Contact page's contact details and search/social descriptions.
- Update the repeated contact footer and footer-bottom location on every
  public page.
- Keep existing phone numbers, email addresses, and all other content intact.
- Record the confirmed address in product context and this tracker/spec.

## Files

- `about.html`
- `contact.html`
- `expertise.html`
- `index.html`
- `knowledge-hub.html`
- `our-work.html`
- `partners.html`
- `what-we-do.html`
- `project-kit/context/product-context.md`
- `project-kit/context/progress-tracker.md`

## Verification

- Search public HTML and confirm `Nairobi, Kenya` no longer appears.
- Confirm all eight pages display `P.O. Box 8580-30100, Eldoret, Kenya` in
  their shared footer; the Contact page also labels it `Postal address`.
- Confirm both Contact page metadata descriptions identify the postal address.
- Run `git diff --check`.

## Acceptance criteria

- [x] Every public page displays the supplied postal address in its footer.
- [x] The Contact page labels the address as postal and metadata is consistent.
- [x] No obsolete `Nairobi, Kenya` location remains in public HTML.
- [x] Verification evidence is recorded in the progress tracker.