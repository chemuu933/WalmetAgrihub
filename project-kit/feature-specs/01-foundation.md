# 01 — Project planning foundation (root)

Status: DRAFT. Planning-only scope. This spec does not authorize production
website changes.

## Outcome

Produce a reviewable, evidence-based planning pack for the existing static
website: describe its observed structure and user-facing behavior, record
confirmed constraints, identify open owner decisions, and agree the checks
needed before any product implementation.

## Dependencies

The existing website in the default branch is the source of implementation
facts. Product goals, approved content, deployment ownership and success
measures are not yet confirmed and must not be inferred.

## Setup and initialization

No runtime setup or official app scaffold is required. Keep the existing static
HTML/CSS/JavaScript layout. The baseline existing-project generator was run
from a temporary checkout of `DonArtkins/baseline-limit`; it created missing
project-owned planning files only. No runtime files are in scope.

## Files owned and separation of concerns

Owns this spec and the generated planning context, brief, tracker and indexes
under `project-kit/`, `research/`, `docs/` and `bugs/`, plus the root
`AGENTS.md`. Existing website pages, scripts, styles, images, favicon and
`README.md` stay untouched by this planning spec.

## Verification

For this planning change, run `git diff --check` and verify that local Markdown
links resolve within the repository. Confirm the original site files remain
unchanged. No product lint, test, security or browser gate is configured yet;
the owner must select these before implementation/release planning is complete.

## Acceptance criteria

- [x] Project context reflects observable repository structure and current form
	behavior without asserting unverified business requirements.
- [x] Existing application files and README are preserved; no CI, dependencies
	or backend are added by onboarding.
- [ ] Owner confirms priority audiences, publication approvals, success
	measures, deployment/recovery ownership and verification commands.
- [ ] Revise this planning pack from owner answers and record approval before
	creating a production implementation spec.
