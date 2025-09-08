# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server with Turbopack (recommended)
- `pnpm build` - Build production version
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint checks

Use pnpm as the package manager (configured via pnpm-workspace.yaml).

## Project Architecture

**EASE** is a Next.js 15 corporate website for an Ethiopian construction company specializing in post-tensioning solutions. The architecture follows Next.js App Router patterns with a component-based design system.

### Key Architectural Patterns

**Styling Architecture:**

- TailwindCSS v4 with custom theme defined in `src/styles/base.css`
- Brand colors: Primary red (#e82d22), Secondary navy (#15244c)
- Custom component classes (.btn, .form-input, etc.) defined in @layer components
- Prettier configured with Tailwind plugin for class sorting

**Data Flow:**

- Static project data managed in `projects.json` (80+ construction projects)
- No external API dependencies - all content is static/file-based
- Images organized by category in `/public` (logos, projects, insurance docs, etc.)

**Component Patterns:**

- All components are client-side ("use client") when requiring interactivity
- Consistent prop patterns for reusable components (AnimatedNumber, ImageCarousel, etc.)
- Navigation uses `usePathname()` for active states
- Mobile-first responsive design throughout

**SEO & Metadata:**

- Comprehensive structured data in root layout for business schema
- OpenGraph and Twitter card metadata configured
- Custom metadata per page using Next.js Metadata API

### File Structure Notes

- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - Reusable UI components
- `src/styles/base.css` - Main stylesheet with Tailwind imports and custom theme
- `projects.json` - Central data source for all project information
- `/public/` - Static assets organized by type (logos/, projects/, insurance/, etc.)

### Configuration Details

**TypeScript:** Strict mode enabled with path mapping (`@/*` → `./src/*`)

**Prettier:** Configured with no semicolons, Tailwind class sorting enabled

**ESLint:** Uses Next.js core-web-vitals and TypeScript configs via FlatCompat

**Next.js:** Minimal config, relies on defaults with App Router

### Content Management

Project data is centralized in `projects.json` with schema:

```typescript
{
  name: string
  area: number
  signingDate: string
  category: string
  hasImage: boolean
  imageUrl: string | null
  year: number
}
```

Static assets follow organized directory structure in `/public` for easy maintenance and CDN optimization.
