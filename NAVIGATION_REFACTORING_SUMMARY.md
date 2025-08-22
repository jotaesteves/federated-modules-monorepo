# Navigation Refactoring: Central Source of Truth

## ✅ **Problem Solved**

We've successfully eliminated the duplication of navigation switch cases across multiple files by creating a central navigation configuration.

## 🏗️ **Before: Duplicated Switch Cases**

Previously, navigation path mappings were duplicated in multiple files:

### HeaderTabs.tsx (3 switch cases)

```typescript
// 1. getCurrentPath() - router path → navigation path
switch (pathSegment) {
  case 'vision-360':
    return 'vision360';
  case 'personal-data':
    return 'personalData';
  // ... more cases
}

// 2. getRouterPath() - navigation path → router path
switch (navigationPath) {
  case 'vision360':
    return '/vision-360';
  case 'personalData':
    return '/personal-data';
  // ... more cases
}

// 3. Tab definitions
const tabs = [
  { value: 'vision360', label: 'Visao 360' },
  { value: 'personalData', label: 'Dados Pessoais' },
  // ... more tabs
];
```

### useNavigationService.ts (2 switch cases)

```typescript
// Same switch cases repeated...
```

### navigationBridge.ts (2 switch cases)

```typescript
// Same switch cases repeated again...
```

## 🎯 **After: Single Source of Truth**

Now all navigation configuration comes from one central place:

### packages/shared/src/config/navigationConfig.ts

```typescript
export const NAVIGATION_ROUTES: Record<NavigationPath, NavigationRoute> = {
  vision360: {
    navigationPath: 'vision360',
    routerPath: '/vision-360',
    label: 'Visao 360',
  },
  personalData: {
    navigationPath: 'personalData',
    routerPath: '/personal-data',
    label: 'Dados Pessoais',
  },
  // ... etc - ALL configuration in ONE place
};

// Utility functions that use the central config
export function getRouterPath(navigationPath: NavigationPath): string;
export function getNavigationPath(routerPath: string): NavigationPath | null;
export function getTabRoutes(): NavigationRoute[];
```

## 📁 **Files Updated**

### ✅ Created Central Config

- `packages/shared/src/config/navigationConfig.ts` - **Single source of truth**
- `packages/shared/src/config/index.ts` - Export configuration

### ✅ Refactored to Use Central Config

- `apps/header/src/components/HeaderTabs.tsx` - Uses central route definitions
- `apps/main/src/hooks/useNavigationService.ts` - Uses central path mapping
- `packages/shared/src/utils/navigationBridge.ts` - Uses central functions

### ✅ Updated Module Federation

- `packages/@config/webpack-config/module-federation.ts` - Exposes central config

## 🚀 **Benefits Achieved**

### 1. **No More Duplication**

- ❌ Before: 7+ switch cases across 4 files
- ✅ After: 1 central configuration object

### 2. **Single Source of Truth**

- All navigation paths, router paths, and labels in one place
- Consistent mapping logic across all applications

### 3. **Easy Maintenance**

- Add new route: Update only the central config
- Change path mapping: Update only one place
- Update labels: Change once, applies everywhere

### 4. **Type Safety**

- Central `NavigationPath` type definition
- Consistent interfaces across all files

### 5. **Reduced Errors**

- No risk of inconsistent mappings between files
- Compiler catches missing routes automatically

## 📝 **How to Add New Routes**

Adding a new navigation route is now super simple:

### 1. Update Central Config

```typescript
// In packages/shared/src/config/navigationConfig.ts
export const NAVIGATION_ROUTES: Record<NavigationPath, NavigationRoute> = {
  // ... existing routes
  newRoute: {
    navigationPath: 'newRoute',
    routerPath: '/new-route',
    label: 'New Route',
  },
};
```

### 2. Update Type Definition

```typescript
export type NavigationPath = 'vision360' | 'personalData' | 'newRoute'; // Add here
// ... other paths
```

### 3. Add Route to Main App

```typescript
// In apps/main/src/App.tsx
<Route path="new-route/*" element={<NewRoutePage />} />
```

**That's it!** No need to update switch cases in multiple files.

## 🎉 **Result**

We've transformed a maintenance nightmare into a clean, maintainable solution where navigation configuration is centralized and consistent across the entire Module Federation application.

The navigation system is now:

- ✅ **DRY (Don't Repeat Yourself)**
- ✅ **Single Responsibility**
- ✅ **Easy to maintain**
- ✅ **Type-safe**
- ✅ **Consistent across all micro frontends**
