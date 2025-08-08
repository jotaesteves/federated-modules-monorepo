# Adding a new MicroFrontend under `apps/`

This guide explains how to add a new MicroFrontend (MF) to this monorepo. Example MF name: `app3`. Replace `app3` with your actual name.

## Overview

- Each MF lives under `apps/<name>` with its own webpack setup and Module Federation exposes.
- The host (`apps/main`) consumes remotes configured in the shared webpack config package.
- TailwindCSS is configured centrally in `packages/shared/tailwind.config.js` and must be told where to scan for classes.

## 0) Choose a unique name and ports

- Name: `app3` (folder and MF `name` must match)
- Dev port: `3005`
- Analyzer port: `4005`

## 1) Scaffold the new app

- Copy an existing MF as a template (recommended: `apps/header`) to `apps/app3`.
- Keep the structure:
  - `public/index.html`, `public/favicon.png`
  - `src/main.ts`, `src/bootstrap.tsx`, and your root component (e.g. `src/App3.tsx`)
  - `webpack/webpack.common.ts`, `webpack/webpack.dev.ts`, `webpack/webpack.prod.ts`
  - `package.json`, `tsconfig.json`, `babel.config.js`, `jest.config.ts`

## 2) Update `apps/app3/package.json`

- Set the package name:
  - `"name": "app3"`
- Scripts are generic; keep as-is unless you need changes.
- Dependencies typically mirror other apps (e.g., `header`).

## 3) Update `apps/app3/tsconfig.json`

- Ensure paths for shared remote types are present:

```jsonc
{
  "extends": "@config/tsconfig",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "shared/*": ["../../packages/shared/.wp_federation/shared/*"]
    }
  },
  "include": ["**/*", "package.json"],
  "exclude": ["build", "dist", "coverage", "node_modules"]
}
```

## 4) Wire webpack for the new app

Update the three webpack files under `apps/app3/webpack/` to reference the new enum value (added in step 5):

- `webpack.common.ts`

  - Replace usages of `Apps.header` with `Apps.app3` in `getAppModuleFederationConfig(Apps.app3)` and `getDtsModuleConfig(Apps.app3)` calls.

- `webpack.dev.ts`

  - Replace `Apps.header` with `Apps.app3` in the dev config and Module Federation plugin.

- `webpack.prod.ts`
  - Replace `Apps.header` with `Apps.app3` similarly.

Do not change loaders; they come from `@config/webpack-config`.

## 5) Add the enum

Edit `packages/@config/webpack-config/enums.ts` and append the new app to the `Apps` enum (order is not critical but be consistent):

```ts
export enum Apps {
  shared,
  app1,
  app2,
  main,
  header,
  app3, // new
}
```

## 6) Add Module Federation configuration

Edit `packages/@config/webpack-config/module-federation.ts`.

- Add a new entry to `appsModuleFederationConfig` for `Apps.app3`:

```ts
[Apps.app3]: {
  devPort: 3005,
  analyzerPort: 4005,
  baseConfig: {
    name: 'app3',
    filename: 'remoteEntry.js',
    exposes: {
      './App3': './src/App3', // adjust if your root file differs
    },
  },
  remotes: {
    dev: {
      shared: 'shared@http://localhost:3001/remoteEntry.js',
    },
    prod: {
      shared: `shared@${hostBaseUrl}packages/shared/dist/remoteEntry.js`,
    },
  },
},
```

- Add `app3` to the host (`Apps.main`) remotes so the shell can load it:

```ts
[Apps.main]: {
  // ...existing config...
  remotes: {
    dev: {
      // ...existing remotes
      app3: 'app3@http://localhost:3005/remoteEntry.js',
    },
    prod: {
      // ...existing remotes
      app3: `app3@${hostBaseUrl}apps/app3/dist/remoteEntry.js`,
    },
  },
},
```

## 7) TailwindCSS: include the new app in content scan

Edit `packages/shared/tailwind.config.js` and add the new app to `content` so Tailwind JIT finds your classes:

```js
'../../apps/app3/src/**/*.{js,ts,jsx,tsx}',
'../../apps/app3/public/index.html',
```

Notes:

- Use `text-primary-500` / `border-primary-500` style utilities unless you define a `DEFAULT` shade in `theme.extend.colors.primary.DEFAULT`.
- Tailwind is loaded via `shared/styles/Global` → `TailwindProvider` which imports `tailwind.css`. Do not import Tailwind CSS twice in the app.

## 8) App entry files

- `src/App3.tsx`: export your root component as default.
- `src/main.ts`:

```ts
import('./bootstrap');
```

- `src/bootstrap.tsx`: render your component within provided providers (match other apps):

```tsx
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from 'shared/queries/client';
import Global from 'shared/styles/Global';
import App3 from './App3';

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(
  <>
    <Global />
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App3 />
      </BrowserRouter>
    </QueryClientProvider>
  </>
);
```

## 9) Using the new remote in the host (`apps/main`)

Import and render the remote (route or component) from `main`:

```tsx
import React, { lazy, Suspense } from 'react';
const App3 = lazy(() => import('app3/App3'));

export default function SomeRoute() {
  return (
    <Suspense fallback={null}>
      <App3 />
    </Suspense>
  );
}
```

No changes are needed in `apps/main` webpack files beyond updating remotes in step 6.

## 10) Run and verify

- Dev (from repo root): `pnpm dev`
  - Verify `http://localhost:3005` serves `app3` and `apps/main` can load the remote without `remoteEntry.js` 404s.
- If Tailwind classes don’t appear, ensure the new paths are in `tailwind.config.js` and restart dev to clear JIT cache.

## 11) Build and local serve

- Build all: `pnpm build` or `pnpm build:local`
- Local static serving using provided scripts:
  - `pnpm serve:local` (builds with `HOST_BASE_URL` and serves from port 3333 for remotes, main on port 80)
- Ensure the prod remotes in `module-federation.ts` match the output paths:
  - `app3@${hostBaseUrl}apps/app3/dist/remoteEntry.js`

## Common pitfalls

- Missing Tailwind scan paths → utilities purged. Add `apps/app3` paths and restart dev.
- Using `text-primary` without shade → not generated. Use `text-primary-500` or define `DEFAULT`.
- `className` with arrow functions (e.g., `${() => '...'}`) → produces wrong class string; use real strings.
- Port conflicts → choose unique `devPort` and `analyzerPort`.
- MF `name` must match the remote import key (e.g., `name: 'app3'` and `import('app3/App3')`).

## Reference files

- Host remotes and MF config: `packages/@config/webpack-config/module-federation.ts`
- App enums: `packages/@config/webpack-config/enums.ts`
- Tailwind config: `packages/shared/tailwind.config.js`
- Shared webpack base: `packages/@config/webpack-config/webpack.*.ts`
- Example app template: `apps/header`
