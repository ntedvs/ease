# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **EASE** (East Africa Specialized Engineering) company website - a Next.js application showcasing an Ethiopian construction and engineering company that specializes in post-tensioning solutions and structural engineering. The site displays their projects, services, and company information.

## Technology Stack

- **Framework**: Next.js 15.3.4 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.1.11 with custom theme
- **Package Manager**: pnpm (workspace setup)
- **Icons**: Lucide React
- **Development**: ESLint with Next.js config, Prettier with Tailwind plugin

## Common Development Commands

```bash
# Development server with turbopack
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint

# Format code (inferred from prettier config)
npx prettier --write .
```

## Project Structure

- `src/app/` - Next.js App Router pages and layouts
  - Main pages: `page.tsx` (home), `about/`, `contact/`, `services/`, `projects/`, `post-tensioning/`
- `src/components/` - Reusable React components (Header, AnimatedStats, BounceLoader, etc.)
- `src/styles/base.css` - Tailwind CSS with custom theme variables
- `public/` - Static assets including project images, logos, and company documents
- `projects.json` - Project data with 75+ construction projects

## Key Architecture Details

### Styling System

- Uses Tailwind CSS 4.1.11 with custom CSS variables defined in `src/styles/base.css`
- Custom color palette: primary (#e82d22), secondary (#15244c), neutral (#f2f2f2)
- Responsive design with mobile-first approach
- Custom utility classes for nav links and container layouts

### Data Management

- Project data stored in `projects.json` with structure: name, area, signingDate, category, hasImage, imageUrl, year
- Projects categorized as: Apartment, Mixed Use, Hotel, Government, Hospital, Commercial, etc.
- Static images organized in `public/projects/`, `public/services/`, `public/logos/`

### Component Architecture

- Header component with responsive navigation and mobile menu
- Layout component with SEO metadata, structured data (JSON-LD), and footer
- Specialized components: AnimatedStats, ImageCarousel, TestimonialCarousel, CompanyMarquee
- All components use TypeScript with proper typing

### SEO & Metadata

- Comprehensive SEO setup in layout.tsx with OpenGraph, Twitter Cards, and structured data
- Company information optimized for Ethiopian construction/engineering searches
- Metadata includes contact info, social media links, and service descriptions

## Configuration Files

- `next.config.ts` - Basic Next.js configuration
- `tsconfig.json` - TypeScript config with path mapping (`@/*` → `./src/*`)
- `eslint.config.mjs` - ESLint with Next.js and TypeScript rules
- `prettier.config.mjs` - Prettier with Tailwind plugin, no semicolons
- `postcss.config.mjs` - PostCSS with Tailwind CSS plugin

## Development Notes

- The site is production-ready with proper error handling (`error.tsx`, `not-found.tsx`)
- Uses Next.js Image component for optimized images
- Implements responsive design patterns throughout
- Company established in 2015, completed 75+ projects across 550,000+ square meters
- Partnership with international suppliers like Rudloph Strong Force mentioned in codebase
