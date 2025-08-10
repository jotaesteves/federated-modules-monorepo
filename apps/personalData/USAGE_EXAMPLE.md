# Using the PersonalData Microfrontend

This microfrontend has been created based on the Vision360 template and exposes a `PersonalData` component.

## How to use in the main app

### Method 1: Lazy loading (Recommended)

```tsx
import React, { lazy, Suspense } from 'react';

const PersonalData = lazy(() => import('personalData/PersonalData'));

export default function PersonalDataRoute() {
  return (
    <Suspense fallback={<div>Loading Personal Data...</div>}>
      <PersonalData />
    </Suspense>
  );
}
```

### Method 2: Direct import (for development)

```tsx
import React from 'react';
import PersonalData from 'personalData/PersonalData';

export default function PersonalDataPage() {
  return <PersonalData />;
}
```

## Development

- **Development server**: `npm run dev` (runs on <http://localhost:3006>)
- **Production build**: `npm run build`
- **Testing**: `npm run test`
- **Linting**: `npm run lint`

## Module Federation Configuration

- **Name**: `personalData`
- **Dev Port**: 3006
- **Analyzer Port**: 4006
- **Exposes**: `./PersonalData` → `./src/PersonalData`

## Components included

The PersonalData microfrontend includes:

- **PersonalDataCard**: Main personal data display card
- **EstateAndProducts**: Estate and products information
- **ChannelsAndServices**: Communication channels and services
- **Incidents**: Incidents tracking
- **LastContact**: Last contact information

All components are styled with Tailwind CSS and use the shared design system.
