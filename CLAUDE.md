# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm i` - Install dependencies
- `npm run dev` - Start development server on port 3000 with auto-open browser
- `npm run build` - Build production bundle to `build/` directory

## Architecture

### Tech Stack
- **Framework**: React 18.3 with TypeScript
- **Build Tool**: Vite 5.4 with SWC
- **Styling**: Tailwind CSS v4 (compiled CSS in `src/index.css`)
- **UI Components**: Radix UI primitives (extensive collection in `src/components/ui/`)
- **Icons**: Lucide React + custom SVG paths

### Project Structure
- **Main App**: `src/App.tsx` - Korean review management mobile app interface (390px max-width)
- **Component Library**: `src/components/ui/` - Shadcn/ui-style components using Radix UI
- **SVG Assets**: `src/imports/svg-*.ts` - Exported SVG path data
- **Figma Imports**: `src/imports/` - Components exported from Figma design

### Key Features
1. **Review Management System**: Tab-based interface for filtering reviews (전체/답변없음/답변완료/곧 만료될 리뷰/전송실패 리뷰)
2. **Review Cards**: Display customer reviews with ratings, photos, price details, and channel (Coupang/Baemin)
3. **AI Reply System**: Three reply modes:
   - Full reply with editable text area
   - Generate reply button
   - Simple reply display
4. **Interactive Components**: Pressed states, floating action buttons, gradient text for AI recommendations

### Design Patterns
- Mobile-first responsive design (390px viewport)
- Korean language UI with mixed English technical terms
- Gradient branding for AI features (#b4139c to #1258d2)
- Tailwind utility classes with CSS variables for theming
- Component composition with nested functional components

### Path Aliases
The Vite config defines extensive path aliases for packages and assets - check `vite.config.ts` for mappings.

### Figma Integration
Original design available at: https://www.figma.com/design/RDlsDI8Y3WkCPnwTrv5MZN/%F0%9F%8E%82-Self-Serve-Reputation-Management--SSRPM-?node-id=904-36346&m=dev