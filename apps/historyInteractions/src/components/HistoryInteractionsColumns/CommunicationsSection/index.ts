// Main components
export { CommunicationsSectionContainer } from './components/CommunicationsSectionContainer';
export { CommunicationSection } from './components/containers/CommunicationSection';

// UI Components
export { CallCard } from './components/ui/CallCard';
export { EmailCard } from './components/ui/EmailCard';
export { SmsCard } from './components/ui/SmsCard';
export { useCommunicationConfig } from './hooks/useCommunicationConfig';
// Hooks
export { useCommunicationData } from './hooks/useCommunicationData';
// Mock Data
export { mockCallData, mockEmailData, mockSmsData } from './mock-data/mock-communication-data';
// Types
export type {
  CallData,
  CommunicationConfig,
  CommunicationData,
  CommunicationType,
  EmailData,
  SmsData
} from './types/communication.types';
// Utils
export {
  formatCallDirection,
  generateCallName,
  generateEmailName,
  getCommunicationConfig
} from './utils/communication.utils';
