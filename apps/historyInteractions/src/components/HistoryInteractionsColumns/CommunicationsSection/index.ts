// Main components
export { CommunicationsSectionContainer } from './components/CommunicationsSectionContainer';
export { CommunicationSection } from './components/containers/CommunicationSection';

// UI Components
export { CallCard } from './components/ui/CallCard';
export { SmsCard } from './components/ui/SmsCard';
export { EmailCard } from './components/ui/EmailCard';

// Hooks
export { useCommunicationData } from './hooks/useCommunicationData';
export { useCommunicationConfig } from './hooks/useCommunicationConfig';

// Types
export type {
  CallData,
  SmsData,
  EmailData,
  CommunicationType,
  CommunicationConfig,
  CommunicationData,
} from './types/communication.types';

// Utils
export {
  getCommunicationConfig,
  formatCallDirection,
  generateCallName,
  generateEmailName,
} from './utils/communication.utils';

// Mock Data
export { mockCallData, mockSmsData, mockEmailData } from './mock-data/mock-communication-data';
