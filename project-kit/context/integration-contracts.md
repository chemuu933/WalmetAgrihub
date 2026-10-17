# Integration contracts

Status: DRAFT. No backend API contract is currently defined. Canonical records
for any adopted external service belong in `docs/contracts/`.

## Registry

| Contract ID | Owner | Canonical document | Consumers | Compatibility/version |
|---|---|---|---|---|
| Enquiry email handoff | Website (`contact.js`) | `docs/contracts/README.md` | Visitor email client | Current behavior; owner confirmation needed |
| Newsletter email handoff | Website (`main.js`) | `docs/contracts/README.md` | Visitor email client | No subscription persistence; owner confirmation needed |
| Optional enquiry endpoint | Website (`contact.js`) | To create only if enabled | Endpoint provider | Not configured in current `contact.html` |
| Google Fonts | Website HTML | External provider documentation | Visitor browser | Font request; fallback behavior in CSS |

## Change procedure

Do not enable or replace a service based only on the presence of optional code.
When an integration is approved, document its owner, data sent, failure
behavior, compatibility and rollback in the same change as the consumer update.
