# Stack contract

Status: DRAFT. This records observed technologies, not a new stack approval.

## Current implementation

- HTML pages at the repository root.
- Shared CSS in `styles.css`.
- Browser-native JavaScript in `main.js`, `contact.js`, `data.js` and
  `render.js`.
- Google Fonts are requested by the HTML pages. No package manifest, framework,
  compiler, or bundler was found in the root file inventory.

## Rules

- Keep the existing static site structure. Do not add a runtime, package
  manifest, dependencies, backend, or build pipeline without an approved spec.
- If an approved change introduces an external service or package, record its
  owner, version/source, data flow and verification in the owning spec first.
- Record runnable verification commands in the owning spec and tracker. No
  authoritative lint/test/security commands have been supplied yet.
