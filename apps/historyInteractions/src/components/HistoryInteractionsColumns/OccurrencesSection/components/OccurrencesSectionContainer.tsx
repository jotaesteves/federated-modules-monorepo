import React from 'react';
import { OccurrenceSection } from './containers/OccurrenceSection';
import { useOccurrenceData } from '../hooks/useOccurrenceData';
import type { ComplainsData, IncidentsData, MemosData } from '../types/occurrence.types';
import {
  mockComplainsData,
  mockIncidentsData,
  mockMemosData,
} from '../mock-data/mock-occurrences-data';

interface OccurrencesSectionContainerProps {
  complains?: ComplainsData[];
  incidents?: IncidentsData[];
  memos?: MemosData[];
}

export const OccurrencesSectionContainer: React.FC<OccurrencesSectionContainerProps> = ({
  complains = mockComplainsData,
  incidents = mockIncidentsData,
  memos = mockMemosData,
}) => {
  const { complainsItems, incidentsItems, memosItems } = useOccurrenceData({
    complains,
    incidents,
    memos,
  });

  return (
    <div className="grid gap-2 content-start">
      <OccurrenceSection type="complains" items={complainsItems} data={complains} />

      <OccurrenceSection type="incidents" items={incidentsItems} data={incidents} />

      <OccurrenceSection type="memos" items={memosItems} data={memos} />
    </div>
  );
};

// React Preview
const OccurrencesSectionContainerPreview = () => {
  return (
    <div className="p-4">
      <h3 className="mb-4 font-semibold">Occurrences Section Preview</h3>
      <OccurrencesSectionContainer />
    </div>
  );
};

export default OccurrencesSectionContainerPreview;
