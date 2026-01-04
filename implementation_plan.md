# Implementation Plan: B2B Global Trade Website

## 1. Project Setup
- **Stack**: React + Vite + Tailwind CSS.
- **Theme**: Corporate Blue (Primary: `#1e3a8a`, Secondary: `#3b82f6`).
- **Typography**: Responsive text sizes (`text-2xl md:text-4xl lg:text-6xl`).

## 2. Breakpoint Strategy
We will use Tailwind's default breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 3. Component Architecture

### A. Smart Navbar (`src/components/Navbar.jsx`)
- **Behavior**: Sticky or fixed top.
- **Desktop (>= 1024px)**: Full horizontal menu.
- **Mobile (< 1024px)**: Hamburger menu icon toggles a slide-in drawer.
- **Implementation**:
  - State: `isMenuOpen` (boolean).
  - Mobile Menu: Absolute positioned overlay with smooth transition.

### B. Hero Section (`src/components/HeroSection.jsx`)
- **Layout**:
  - **Mobile**: Flex column-reverse (Text below, Image on top - *User said Image on top, Text below, so Flex column*).
    - *Correction*: User Request: "On mobile, the image should be on top and text below." -> Flex column.
  - **Desktop**: Flex row (Side-by-side).
- **Height**:
  - Desktop: `h-[70vh]`
  - Mobile: `min-h-screen`

### C. Category Section (`src/components/CategorySection.jsx`)
- **Data Source**: `src/data/products.js` (12 categories).
- **Grid Layout**:
  - `grid-cols-1` (Mobile)
  - `grid-cols-2` (Tablets - md)
  - `grid-cols-3` (Laptops - lg)
  - `grid-cols-4` (Desktops - xl)
- **Spacing**: `gap-4` (mobile), `gap-8` (desktop).

### D. Footer (`src/components/Footer.jsx`)
- **Layout**:
  - Mobile: Stacked vertically.
  - Desktop: 4 columns.
- **Content**: Company info, Quick links, Categories, Contact.

### E. Data Layer (`src/data/products.js`)
- Array of objects: `{ id, title, image, description }`.
- Categories: Construction, Medical, Chemical, Food, etc.

## 4. Visual Validation Strategy
- **Tools**: Antigravity Browser Subagent.
- **Checkpoints**:
  - 375px (iPhone SE/Mini)
  - 768px (iPad Mini/Air)
  - 1440px (Desktop)
- **Criteria**: No horizontal scroll, correct grid columns, legible text.

## 5. Execution Steps
1. Install Tailwind CSS.
2. Configure Tailwind (`tailwind.config.js` & `index.css`).
3. Create `products.js` data.
4. Implement `Navbar`.
5. Implement `HeroSection`.
6. Implement `CategorySection`.
7. Implement `Footer`.
8. Assemble in `App.jsx`.
9. Validate.
