# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

EASE is a Next.js 15 application for a construction and engineering company based in Ethiopia. The company specializes in post-tensioning construction solutions and structural engineering. This is a modern React application built with TypeScript, Tailwind CSS, and optimized for production deployment.

## Development Commands

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Architecture and Structure

### Framework Stack

- **Next.js 15** with App Router
- **React 19** with TypeScript
- **Tailwind CSS 4** for styling with custom theme
- **Turbopack** for fast development builds

### Project Structure

- `src/app/` - Next.js App Router pages and layouts
  - Root layout includes global metadata, structured data, and footer
  - Pages: home (`/`), about, contact, projects, services
- `src/components/` - Reusable React components
  - Interactive components: AnimatedStats, CompanyMarquee, ImageCarousel, TestimonialCarousel
  - Layout components: Header
- `src/styles/base.css` - Global styles and Tailwind configuration
- `public/` - Static assets including images and company profile PDF

### Styling System

- Custom Tailwind theme with company brand colors
- CSS custom properties for colors (primary: #e82d22, secondary: #15244c)
- Utility classes for common patterns (btn, card, container-xl, section)
- Responsive design with mobile-first approach
- Hero background using construction.jpg

### Key Features

- SEO optimized with comprehensive metadata and structured data
- Responsive image handling with Next.js Image component
- Animation components for stats and carousels
- Accessibility features and semantic HTML
- Social media integration

### Component Patterns

- Use `@/` path alias for imports from src directory
- Components follow TypeScript patterns with proper prop typing
- Lucide React icons used throughout
- Inter font loaded via next/font/google

## Code Style

- **TypeScript**: Strict mode enabled
- **ESLint**: Next.js recommended configuration
- **Prettier**: No semicolons, Tailwind plugin enabled
- **Import style**: Use `@/` alias for internal imports
- **Component naming**: PascalCase for components, descriptive names

## Important Notes

- Company branding uses specific colors and imagery related to Ethiopian construction industry
- Content focuses on post-tensioning technology and structural engineering
- Images and content are specific to EASE company projects and partnerships
- SEO metadata includes Ethiopian-specific keywords and location data
