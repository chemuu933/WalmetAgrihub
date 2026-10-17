# Agent instructions — walmetagrihub

## Daily loop prompt — paste into a fresh AI session after every feature

```text
Paste this block into a fresh AI session after each merged feature.
It implements exactly ONE next spec, then waits.

0. SKILLS + CURRENT DOCS FIRST: load this AGENTS.md plus any layer kits,
   then use MCP/Context7 to fetch current docs for every tool, framework,
   and package touched — never answer versioned APIs from memory. Record
   library, version, source, and date in the spec. If unreachable, say so
   and mark the claim unverified.
1. READ: the user request, project-kit/context/product-context.md,
   project-kit/context/progress-tracker.md (section 0 Next picks the ONE
   spec) plus each layer tracker, then the owning spec and every file it
   names. Trackers disagree: stop and ask.
2. BRANCH: fetch the default branch, cut feature/<area>/<NN>-<slug> from
   its tip (fix/ for bugs, docs/ for planning-only). Never from another
   feature branch, never straight to the default branch.
3. IMPLEMENT exactly what the spec says. Runtime files only when the spec
   orders them. Fixes go in only with owner + consumer docs in the same
   branch — tell the user and document it.
4. RULES: every rule in these agent files, every run. No destructive
   commands without approval; sudo-class commands print first, then wait.
5. TRACKERS (most important): owning plus every affected tracker — chains,
   board rows, verification evidence — in the same branch.
6. REVIEWS: address unaddressed review findings on this branch with proof.
7. PUSH GATE: this project's own verification only, never another
   layer's gates. Tracker updated before push; push only this branch.
8. REPORT: what changed, evidence with counts, open gates, deviations, and
   anything needed from the user as numbered copy-run steps. Then STOP and
   wait for explicit approval before the next spec.
```

## What this project is

Areas: static website.
Stack / conventions: HTML, CSS, vanilla JavaScript; no build tooling identified.
Adopt this project's existing folders, language, and standards as-is.
Never restructure source to match an outside scaffold.
Shared lessons live at `C:\Users\JEMUTAI C\Projects\Workflows\my-knowledge-base` — consult by topic, never commit secrets there.

## Reading order

1. The user's current request.
2. `project-kit/context/product-context.md` — problem, users, scope, constraints.
3. `project-kit/context/progress-tracker.md` — section 0 execution chain gives the next spec.
   In a layered project also read each layer's own tracker (see below).
4. The owning spec under `project-kit/feature-specs/` (or the layer's kit) plus every file it names.
5. This project's own source, configs, and tests as-is.

## Architecture: single app, monorepo, or multi-repo

Each project has its own architecture — single app, monorepo, or multi-repo.
Follow the brief and specs; never impose one shape on another.

- Single app: everything lives in this root — no layer subfolders. Do NOT
  create one folder per area for a single app; the project IS this root.
  A second folder appears only for a real second deployable layer.
- Monorepo (several areas in this folder): organize each layer into its own
  folder. Every layer gets its own `AGENTS.md` (that layer's areas, stack,
  commands), its own `README.md` (what the layer is about, an index of every
  file with what each does and how to upgrade it), and its own project kit
  (brief slice, specs, progress tracker). This root file links every layer
  file; layers reference the root instead of duplicating its decisions.
- Multi-repo: the same pattern, except each layer lives in its own
  repository at its accurate location. Repos reference each other by location
  plus interface contracts, and communicate only through those contracts.
- Progress trackers are the most important thing: the root tracker chains
  the layers and their specs, each layer tracker chains its own specs.
  Update the owning tracker plus every affected tracker in the same branch.
- Hard gates run per layer only: a layer's checks, tests, and pre-push gates
  run for that layer's changes. Never run another layer's gates while working
  in this one.

## Official scaffolds sit WITH the structure, never over it

When a project or layer starts from an official command (for example
a Next.js, Vue, React Native, or Python starter, or any official install
link), that command must NOT destroy or overwrite the folder structure
already here — not `AGENTS.md`, not the project kits, not any folder.
Scaffold into an empty temp dir or a fresh subfolder, then arrange everything
to fit: every existing file stays, and the official folder structure stays
valid. Lose no file, compromise neither structure.

## Working rules

1. Plan before code: reviewable spec plus binary acceptance criteria first.
2. One spec, one branch, one review: `feature/<area>/<NN>-<slug>` from the
   fetched default branch tip (`fix/` for bugs, `docs/` for planning-only).
3. Implement exactly what the spec says. Runtime files (manifests,
   dependencies, migrations, containers) are created only when a feature
   spec orders them, using that spec's commands — never speculatively.
4. Verify with this project's own commands (recorded in the spec/tracker),
   and report exact output: pass/fail/skip counts, revision, limits.
5. Update the owning tracker plus every affected tracker in the same branch.
6. No destructive commands without explicit approval. Commands needing
   elevated rights: print them, ask, and wait.
7. Report when done: what changed, verification evidence, open items,
   and anything needed from the user as numbered copy-run steps. Then wait
   for explicit approval before the next spec.
