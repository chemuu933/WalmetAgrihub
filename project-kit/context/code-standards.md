# Code standards

Status: DRAFT. Adopt the existing codebase's conventions; formal lint and
accessibility gates need owner confirmation.

## Existing conventions

- Keep page-specific markup in the existing root-level HTML files and shared
	behavior in the current JavaScript files.
- Use browser-native HTML, CSS and JavaScript; do not introduce a framework or
	dependency without an approved spec.
- Preserve semantic landmarks, labelled controls, keyboard interaction,
	responsive layouts and reduced-motion handling when changing the UI.
- Keep content in `data.js` when it belongs to the existing work or Knowledge
	Hub collections; escape dynamic values as `render.js` currently does.

## Verification status

No formatter, linter, automated test suite, accessibility checker, or security
scanner is configured in the inspected root. Select project-appropriate checks
with the owner before treating them as release gates. Until then, verify changed
pages and interactions in agreed browsers and document the exact manual checks.
