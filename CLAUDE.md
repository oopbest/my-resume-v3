# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio/resume website built with React 19, TypeScript, Vite, and Tailwind CSS. Uses shadcn/ui (new-york style) with Radix UI primitives.

## Commands

```bash
npm run dev          # Start dev server
npm run build        # TypeScript check + production build
npm run lint         # Run ESLint
npm run test         # Run all tests once
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage

# Run a single test file
npx vitest run src/components/ui/button.test.tsx

# Watch a single test file
npm run test:watch -- src/components/ui/button.test.tsx
```

## Architecture

### Path Alias

`@` → `src` (configured in tsconfig.json and vite.config.ts)

### Directory Structure (Atomic Design)

```
src/
├── components/
│   ├── ui/           # Atoms: shadcn/ui primitives (button, card, form, etc.)
│   ├── common/       # Molecules: reusable composed components
│   │   ├── AnimatedSection.tsx
│   │   ├── ModeToggle.tsx
│   │   └── ProfileAvatar.tsx
│   ├── theme-provider.tsx
│   └── theme-context.tsx
├── sections/         # Organisms: page sections
│   ├── AboutMe.tsx
│   ├── Timeline.tsx
│   ├── Skill.tsx
│   ├── Portfolio.tsx
│   └── ContactForm.tsx
├── layout/           # Templates: page layouts
│   ├── MainLayout.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx
├── hooks/            # Custom React hooks
│   ├── useContactForm.ts
│   ├── useImageDialog.ts
│   └── useExpandableText.ts
├── data/             # Static data (separated from components)
│   ├── projects.tsx
│   ├── skills.tsx
│   ├── timeline.ts
│   └── navigation.tsx
├── types/            # TypeScript interfaces
│   ├── project.ts
│   ├── skill.ts
│   └── timeline.ts
└── lib/              # Generic utilities
    ├── utils.ts      # cn() for class merging
    └── date.ts       # Date utilities
```

### Barrel Exports

All directories have `index.ts` for clean imports:
- `@/components` - common components, theme provider
- `@/hooks` - custom hooks
- `@/data` - static data
- `@/types` - TypeScript types
- `@/sections` - page sections
- `@/layout` - layout components

### Key Patterns

- **shadcn/ui**: Components use `class-variance-authority` for variants and `tailwind-merge` via the `cn()` utility
- **Theming**: Dark/light mode via `ThemeProvider` context, dark mode is default
- **Forms**: `react-hook-form` with `zod` validation (logic extracted to `useContactForm` hook)
- **Animations**: Framer Motion via `AnimatedSection` component
- **Contact**: EmailJS integration for contact form

### Testing

- Vitest with jsdom environment
- Testing Library for React components
- Test files use `.test.tsx` extension alongside components
- Setup file: `src/test/setup.ts`
