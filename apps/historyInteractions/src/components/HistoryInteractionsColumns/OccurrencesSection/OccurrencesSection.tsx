import React from 'react';
import { OccurrencesSectionContainer } from './components/OccurrencesSectionContainer';
import type { ComplainsData, IncidentsData, MemosData } from './types/occurrence.types';

interface OccurrencesSectionProps {
  complains?: ComplainsData[];
  incidents?: IncidentsData[];
  memos?: MemosData[];
}

export const OccurrencesSection: React.FC<OccurrencesSectionProps> = (props) => {
  return <OccurrencesSectionContainer {...props} />;
};
