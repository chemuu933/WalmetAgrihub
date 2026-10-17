# Progress tracker — root coordination

The most important file after the brief. The execution chain picks the next
spec; the status board is the delivery truth. Update both in the same branch.

## 0. Execution chain

Full chain:

```text
02 -> 01
```

Next:

```text
01 (blocked pending owner decisions)
```

## 1. Status board

| ID | Feature | State | Evidence | Operator gates |
|---|---|---|---|---|
| 01 | Project planning foundation | BLOCKED | Planning pack created; broader owner decisions remain open and are not prerequisites for approved spec 02 | Owner decisions and verification commands OPEN |
| 02 | Publish postal address | DONE | Verified all 8 public HTML pages contain the address; no Nairobi location remains; Contact label and both metadata descriptions match | `git diff --check` pending |

## 2. In flight

02 — Publish the user-supplied postal address consistently across public pages. Address coverage and Contact metadata checks passed on 2026-10-17.
01 — Project planning foundation is blocked pending broader owner decisions;
the user explicitly approved spec 02 as a scoped exception.

## 3. Verification and deviations

Onboarding: `python scripts/configure.py --existing f:\\walmetagrihub --name walmetagrihub --areas "static website" --stack "HTML, CSS, vanilla JavaScript; no build tooling identified"` — completed; created missing project-owned starters and did not modify tracked site files or the existing README. Product lint/test/security commands are not configured or verified.

Spec 02 verification (2026-10-17): all 8 root-level HTML pages contain
`P.O. Box 8580-30100, Eldoret, Kenya`; no public HTML contains `Nairobi, Kenya`;
the Contact page labels the value `Postal address` and includes it in both
description metadata fields. Product lint/test/security commands remain
unconfigured and were not run.

## 4. Next action and history

After spec 02 is verified, return to spec 01: resolve the remaining open
questions in `project-kit/context/product-context.md`, agree project
verification commands, then revise and approve the planning pack.
