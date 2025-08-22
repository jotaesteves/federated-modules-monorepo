# Module Federation Navigation Solution

This document explains the navigation solution implemented for the Module Federation architecture in this monorepo.

## Overview

The navigation system enables communication between the **Host application (Main)** and **Remote applications (Header, etc.)** for seamless navigation without violating the Module Federation principle that only the host should own the React Router.

## Architecture

### Key Principles

1. **Host owns React Router**: Only the main application manages routing
2. **Remotes communicate intent**: Remote apps communicate navigation requests through events
3. **Event-driven communication**: Custom events bridge the gap between host and remotes
4. **No shared router dependencies**: Remotes don't import React Router components

## Implementation

### Host Application (Main)

The host application uses the `useNavigationService` hook to:

1. Listen for navigation requests from remotes
2. Update React Router when remotes request navigation
3. Notify remotes when the location changes

```typescript
// In App.tsx
import { useNavigationService } from './hooks/useNavigationService';

const App: React.FC = () => {
  // Initialize navigation service integration
  useNavigationService();

  return (
    <Routes>
      {/* Your routes */}
    </Routes>
  );
};
```

### Remote Applications (Header)

Remote applications use custom events to:

1. Request navigation changes
2. Listen for location updates from the host
3. Update their internal state based on current location

```typescript
// In HeaderTabs.tsx
const RemoteNavigation = {
  navigate(path: NavigationPath): void {
    window.dispatchEvent(
      new CustomEvent('mf-navigate', {
        detail: { path },
      })
    );
  },

  onLocationChange(callback: (path: NavigationPath | null) => void): () => void {
    const handler = (event: Event) => {
      const customEvent = event as CustomEvent;
      const { path } = customEvent.detail;
      callback(path);
    };

    window.addEventListener('mf-location-changed', handler);
    return () => window.removeEventListener('mf-location-changed', handler);
  },
};
```

## Navigation Flow

1. **User clicks tab in Header (Remote)**:

   ```
   User Click → HeaderTabs → RemoteNavigation.navigate() → Custom Event 'mf-navigate'
   ```

2. **Host receives navigation request**:

   ```
   Custom Event → useNavigationService → React Router navigate()
   ```

3. **Host notifies location change**:

   ```
   React Router location change → useNavigationService → Custom Event 'mf-location-changed'
   ```

4. **Header updates active tab**:
   ```
   Custom Event → HeaderTabs state update → UI reflects active tab
   ```

## Path Mapping

The system maps between navigation paths (used for communication) and router paths (used by React Router):

| Navigation Path       | Router Path              | Description               |
| --------------------- | ------------------------ | ------------------------- |
| `vision360`           | `/vision-360`            | Vision 360 page           |
| `personalData`        | `/personal-data`         | Personal Data page        |
| `assetsProducts`      | `/assets-products`       | Assets & Products page    |
| `channelsAndServices` | `/channels-and-services` | Channels & Services page  |
| `historyInteractions` | `/history-interactions`  | History Interactions page |

## Custom Events

### `mf-navigate`

**Direction**: Remote → Host
**Purpose**: Request navigation to a specific path
**Payload**: `{ path: NavigationPath, params?: Record<string, string> }`

### `mf-location-changed`

**Direction**: Host → Remote
**Purpose**: Notify about location changes
**Payload**: `{ path: NavigationPath | null }`

## Benefits

1. **Separation of Concerns**: Clear boundaries between host and remote responsibilities
2. **No Import Dependencies**: Remotes don't need to import React Router
3. **Framework Agnostic**: Could work with different routing libraries
4. **Event-Driven**: Loose coupling through custom events
5. **Type Safety**: TypeScript interfaces ensure consistent communication

## Usage Example

### Adding a New Tab

1. **Add to navigation types**:

```typescript
type NavigationPath = 'vision360' | 'personalData' | 'newTab' | ...;
```

2. **Add to path mapping** (in both host and remote):

```typescript
case 'new-page': return 'newTab';  // Host
case 'newTab': return '/new-page'; // Host
```

3. **Add to HeaderTabs**:

```typescript
const tabs = [
  // ...existing tabs
  { value: 'newTab' as NavigationPath, label: 'New Tab' },
];
```

4. **Add route to main App**:

```typescript
<Route path="new-page/*" element={<NewPage />} />
```

## Best Practices

1. **Consistent Naming**: Use camelCase for navigation paths, kebab-case for router paths
2. **Error Handling**: Always provide fallbacks for missing navigation services
3. **Cleanup**: Always unsubscribe from event listeners in useEffect cleanup
4. **Type Safety**: Use TypeScript interfaces for all communication payloads

## Troubleshooting

### Active Tab Not Updating

- Check that both host and remote are using the same path mapping
- Verify event listeners are properly set up
- Ensure cleanup functions are called

### Navigation Not Working

- Check browser console for event dispatch/listening
- Verify the host's `useNavigationService` hook is being called
- Confirm React Router routes match the expected paths

### Type Errors

- Ensure `NavigationPath` type is consistent across all files
- Check that custom event payloads match expected interfaces
