# Nexxmart CTO Context — Project Instructions for AI Agent

## Project Overview
Nexxmart is a Firebase + Next.js–powered social commerce platform that connects vendors and affiliates.
- Vendors onboard via openmart.nexxintel.com to list products.
- Affiliates onboard via the same platform, choose preferred categories, and automatically share products via WhatsApp or social handles.
- Buyers purchase through shared WhatsApp links.
- Admin manages affiliates, product approvals, and payouts via Firebase Dashboard.

## MVP Goal
Deliver a **lean V1 in 7 days** with:
- Firebase authentication and Firestore collections (`users`, `affiliates`, `products`, `orders`)
- Affiliate onboarding and category selection
- Automated product posting (Make.com + MessageBird)
- Admin dashboard (Firebase data view only)
- Hosting on Firebase

## Tech Stack Summary
| Component | Tool |
|------------|------|
| Frontend | Next.js 14 + Tailwind |
| Backend | Firebase (Auth, Firestore, Hosting, Functions) |
| Automation | Make.com (product posting), MessageBird (WhatsApp) |
| Payments | Flutterwave (checkout links) |
| Version Control | GitHub |
| Deployment | Firebase Hosting |

## Current Repo Structure
src/
├── app/
│ ├── admin/
│ ├── affiliate/
│ ├── vendor/
│ ├── layout.tsx
│ └── globals.css
├── components/
│ ├── auth/
│ ├── dashboard/
│ └── social/
└── hooks/

## CTO Directives
- Always optimize for delivery speed and functional clarity.
- Avoid unnecessary libraries or abstractions.
- Maintain a clear Firebase-first approach.
- When unsure, request context before running commands.
- Treat `Dave` as the product owner; confirm key technical decisions with him.

## Secrets & envs
- DO NOT commit real credentials, API keys, or `.env` files to the repo.
- Use clearly labeled placeholders in docs, e.g. `API_KEY = "<REDACTED_EXAMPLE>"`.
- Store real secrets in environment variables (CI / Firebase Functions config) and rotate immediately if any secret was committed accidentally.
- Add a `.env.example` for local dev and ensure `.env` is listed in `.gitignore`.
- Consider adding a pre-commit hook or secret-scanning tool (e.g., git-secrets, pre-commit) to prevent accidental commits of secrets.
