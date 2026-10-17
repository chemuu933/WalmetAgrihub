# Progress tracker — root coordination

The most important file after the brief. The execution chain picks the next
spec; the status board is the delivery truth. Update both in the same branch.

## 0. Execution chain

Full chain:

```text
01
```

Next:

```text
01
```

## 1. Status board

| ID | Feature | State | Evidence | Operator gates |
|---|---|---|---|---|
| 01 | Project planning foundation | IN PROGRESS | Existing-project onboarding generated; context documented from source inspection | Owner decisions and verification commands OPEN |

## 2. In flight

01 — Project planning foundation. Planning documents only; product scope and
owner approvals remain open.

## 3. Verification and deviations

Onboarding: `python scripts/configure.py --existing f:\\walmetagrihub --name walmetagrihub --areas "static website" --stack "HTML, CSS, vanilla JavaScript; no build tooling identified"` — completed; created missing project-owned starters and did not modify tracked site files or the existing README. Product lint/test/security commands are not configured or verified.

## 4. Next action and history

Resolve the open questions in `project-kit/context/product-context.md`, agree
the project verification commands, then revise and approve spec 01. No
production implementation is authorized by this planning setup.
