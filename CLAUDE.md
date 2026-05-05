# CLAUDE.md — AI Assistant Guide

This file provides context for AI assistants (Claude, Copilot, etc.) working in this repository.

## Repository Overview

**Name:** templates  
**Owner:** Anderson Muller — DICON Contabilidade  
**Purpose:** A centralized collection of reusable project templates organized by technology stack.  
**Status:** Early stage — directories are scaffolded and ready to receive templates.

---

## Repository Structure

```
templates/
├── README.md            # Human-facing project overview
├── CLAUDE.md            # This file — AI assistant guide
├── landing-pages/       # HTML/CSS landing page templates
├── laravel/             # Laravel (PHP) project templates
└── react/               # React (JavaScript/TypeScript) templates
```

Each subdirectory currently contains only a `.gitkeep` placeholder and is ready to receive templates.

---

## Conventions & Guidelines

### Adding a New Template

1. Place the template inside the appropriate technology directory (`landing-pages/`, `laravel/`, `react/`).
2. Each template should live in its own subdirectory named descriptively in **kebab-case** (e.g., `react/dashboard-starter/`).
3. Include a `README.md` inside each template explaining:
   - What the template does
   - How to install / use it
   - Key dependencies / requirements
4. Do **not** commit compiled/build artifacts (e.g., `node_modules/`, `vendor/`, `dist/`) — add them to `.gitignore` within the template folder.

### Naming Conventions

| Artifact | Convention | Example |
|---|---|---|
| Template directory | kebab-case | `saas-landing-page` |
| PHP classes (Laravel) | PascalCase | `UserController` |
| React components | PascalCase | `DashboardCard.tsx` |
| CSS/HTML files | kebab-case | `main-layout.css` |
| Variables / functions | camelCase | `fetchUserData` |

### Branching & Commits

- Default branch: `master`
- Feature/fix branches: `<type>/<short-description>` (e.g., `feat/react-auth-template`)
- Commit messages: use the imperative mood in English or Portuguese, e.g. `add react dashboard template` or `adiciona template de dashboard React`

---

## Technology Notes

### Landing Pages (`landing-pages/`)
- Pure HTML, CSS, and optionally vanilla JS
- No build step required unless explicitly added
- Should be self-contained and openable directly in a browser

### Laravel (`laravel/`)
- PHP framework — follow [Laravel conventions](https://laravel.com/docs)
- Use Composer for dependency management (`composer.json`)
- Typical structure per template: `app/`, `routes/`, `resources/views/`, `database/`
- Include `.env.example` (never commit `.env`)

### React (`react/`)
- JavaScript or TypeScript components
- Preferred tooling: Vite or Create React App (document the choice inside the template)
- Use functional components and hooks — avoid class components
- Include `package.json` with all dependencies listed

---

## What AI Assistants Should Know

- This repo is a **template library**, not a running application. There is no single entry point or test suite at the root level.
- Each template is an independent unit — treat files within a template folder as a mini-project.
- When asked to add or modify a template, scope changes to that template's subdirectory only.
- Preserve the existing directory structure; do not flatten or reorganize without explicit instruction.
- The repo language context is **bilingual** (Portuguese for documentation/README files, English for code identifiers).
- The author is **Anderson Muller** at **DICON Contabilidade** — accounting/financial context is common for templates here.
