// Main components
export { OccurrencesSectionContainer } from './components/OccurrencesSectionContainer';
export { OccurrenceSection } from './components/containers/OccurrenceSection';

// UI Components
export { ComplaintCard } from './components/ui/ComplaintCard';
export { IncidentCard } from './components/ui/IncidentCard';
export { MemoCard } from './components/ui/MemoCard';

// Hooks
export { useOccurrenceData } from './hooks/useOccurrenceData';
export { useOccurrenceConfig } from './hooks/useOccurrenceConfig';

// Types
export type {
  ComplainsData,
  IncidentsData,
  MemosData,
  OccurrenceType,
  OccurrenceConfig,
  BadgeVariant,
  OccurrenceData,
} from './types/occurrence.types';

// Utils
export {
  getBadgeConfig,
  getOccurrenceConfig,
  formatCurrency,
  generateMemoContent,
} from './utils/occurrence.utils';

// Mock Data
export {
  mockComplainsData,
  mockIncidentsData,
  mockMemosData,
} from './mock-data/mock-occurrences-data';
