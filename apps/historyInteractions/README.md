# HistoryInteractions

A microfrontend for displaying customer interaction history in the call center application. Provides a comprehensive view of all customer touchpoints including phone calls, emails, chats, and other communication channels.

## Features

- **Interaction History**: Complete list of customer interactions with filtering capabilities
- **Statistics Dashboard**: Key metrics and KPIs for interaction performance
- **Multi-channel Support**: Tracks interactions across phone, email, chat, WhatsApp, SMS
- **Real-time Filters**: Filter by date range, channel, and status
- **Satisfaction Tracking**: Customer satisfaction ratings and analytics
- **Agent Performance**: Track which agents handled specific interactions

## Development

- **Development server**: `pnpm dev` (runs on http://localhost:3009)
- **Production build**: `pnpm build`
- **Testing**: `pnpm test`
- **Linting**: `pnpm lint`

## Usage in Main App

The HistoryInteractions microfrontend is consumed by the main app and accessible via the `/history-interactions` route.

### Route Integration

```tsx
import React, { lazy, Suspense } from 'react';

const HistoryInteractions = lazy(() => import('historyInteractions/HistoryInteractions'));

export default function HistoryInteractionsPage() {
  return (
    <Suspense fallback={<div>Loading Histórico de Interações...</div>}>
      <HistoryInteractions />
    </Suspense>
  );
}
```

### Navigation Integration

The app integrates with the global navigation system and can be accessed through:

- Header tabs navigation
- Direct URL navigation
- Global store navigation calls

## Components

### Main Components

- **HistoryInteractions**: Main container component
- **InteractionsList**: Displays paginated list of interactions
- **InteractionFilters**: Filter controls for date, channel, and status
- **InteractionStats**: Statistics and KPI dashboard

### Data Models

#### Interaction

```typescript
interface Interaction {
  id: string;
  date: string;
  time: string;
  channel: 'phone' | 'email' | 'chat' | 'whatsapp' | 'sms';
  type: string;
  subject: string;
  agent: string;
  status: 'completed' | 'pending' | 'escalated' | 'cancelled';
  duration: string;
  satisfaction?: number; // 1-5 rating
}
```

## Styling

Uses Tailwind CSS for styling with the shared design system. All styles are scoped to prevent conflicts with other microfrontends.

## Module Federation

Exposes the main component at `./HistoryInteractions` for consumption by the shell application.

## Technical Stack

- **React 19**: UI framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **React Helmet**: Document head management
- **React Router**: Client-side routing
- **Webpack 5**: Module federation and bundling

## Architecture

Follows the federated modules architecture with:

- Independent development and deployment
- Shared dependencies for optimal performance
- Integration with global state management
- Responsive design for multiple screen sizes

## Future Enhancements

- **Advanced Analytics**: More detailed interaction analytics
- **Export Functionality**: Export interaction data to CSV/PDF
- **Real-time Updates**: WebSocket integration for live updates
- **Voice Transcription**: Integration with call recording systems
- **AI Insights**: Machine learning-powered interaction insights
