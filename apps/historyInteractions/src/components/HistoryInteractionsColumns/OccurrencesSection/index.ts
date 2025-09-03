// Main components

export { OccurrenceSection } from './components/containers/OccurrenceSection';
export { OccurrencesSectionContainer } from './components/OccurrencesSectionContainer';

// UI Components
export { ComplaintCard } from './components/ui/ComplaintCard';
export { IncidentCard } from './components/ui/IncidentCard';
export { MemoCard } from './components/ui/MemoCard';
export { useOccurrenceConfig } from './hooks/useOccurrenceConfig';
// Hooks
export { useOccurrenceData } from './hooks/useOccurrenceData';
// Mock Data
export {
  mockComplainsData,
  mockIncidentsData,
  mockMemosData
} from './mock-data/mock-occurrences-data';
// Types
export type {
  BadgeVariant,
  ComplainsData,
  IncidentsData,
  MemosData,
  OccurrenceConfig,
  OccurrenceData,
  OccurrenceType
} from './types/occurrence.types';
// Utils
export {
  formatCurrency,
  generateMemoContent,
  getBadgeConfig,
  getOccurrenceConfig
} from './utils/occurrence.utils';
