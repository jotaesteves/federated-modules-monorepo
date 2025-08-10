# Main App Architecture

This document outlines the refactored directory structure for the main application.

## Directory Structure

```
src/
├── components/
│   ├── common/           # Shared UI components
│   │   └── Spinner.tsx   # Loading spinner component
│   └── NavBar/           # Navigation components
├── layouts/              # Layout components
│   ├── BaseLayout.tsx    # Simple layout with header/footer
│   ├── DashboardLayout.tsx # Dashboard layout with sidebar
│   └── index.ts          # Layout exports
├── pages/                # Page components organized by feature
│   ├── Dashboard/        # Dashboard-related pages
│   │   ├── Vision360Page.tsx
│   │   ├── PersonalDataPage.tsx
│   │   ├── App2Page.tsx
│   │   └── index.ts
│   ├── Settings/         # Settings-related pages
│   │   ├── CSSDemo/
│   │   │   ├── CSSDemo.tsx
│   │   │   └── index.ts
│   │   └── index.ts
│   └── Root/             # Home/root pages
│       └── Root.tsx
├── App.tsx              # Main app with routing configuration
├── bootstrap.tsx        # App bootstrap
└── main.ts              # Entry point
```

## Layouts

### DashboardLayout

- **Purpose**: Main dashboard layout with header, sidebar, and footer
- **Features**:
  - Includes Header, Sidebar, and Footer components
  - Responsive sidebar layout
  - Scrollable content area
- **Used for**: Dashboard pages (Vision360, Personal Data, App2)

### BaseLayout

- **Purpose**: Simple layout for settings and utility pages
- **Features**:
  - Header and Footer only
  - Full-width content area
  - Centered content with padding
- **Used for**: Settings pages, standalone pages

## Pages Organization

### Dashboard Pages

- **Vision360Page**: Renders the Vision360 microfrontend
- **PersonalDataPage**: Renders the PersonalData microfrontend
- **App2Page**: Renders the App2 microfrontend

### Settings Pages

- **CSSDemo**: Demonstrates CSS features and styling

## Routing Structure

```
/ (DashboardLayout)
├── /vision-360/* → Vision360Page
├── /personal-data/* → PersonalDataPage
├── /app-2/* → App2Page
└── / → Root (index)

/settings (BaseLayout)
└── /css-demo → CSSDemo

/* → Root (catch-all)
```

## Adding New Pages

### To add a new dashboard page:

1. Create component in `pages/Dashboard/NewPage.tsx`
2. Export in `pages/Dashboard/index.ts`
3. Add route in `App.tsx` under DashboardLayout

### To add a new settings page:

1. Create component in `pages/Settings/NewPage.tsx`
2. Export in `pages/Settings/index.ts`
3. Add route in `App.tsx` under BaseLayout

### To add a new layout:

1. Create component in `layouts/NewLayout.tsx`
2. Export in `layouts/index.ts`
3. Add route group in `App.tsx` with the new layout

## Benefits of This Structure

1. **Separation of Concerns**: Clear distinction between layouts, pages, and components
2. **Scalability**: Easy to add new pages and layouts
3. **Maintainability**: Organized file structure with logical grouping
4. **Reusability**: Layouts can be reused across different page types
5. **Type Safety**: Better TypeScript support with organized imports
