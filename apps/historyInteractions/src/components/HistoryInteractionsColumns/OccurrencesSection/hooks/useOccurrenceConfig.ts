import { useMemo } from 'react';
import type { OccurrenceConfig, OccurrenceType } from '../types/occurrence.types';
import { getOccurrenceConfig } from '../utils/occurrence.utils';

export const useOccurrenceConfig = () => {
  const configs = useMemo(() => getOccurrenceConfig(), []);

  const getConfigByType = (type: OccurrenceType): OccurrenceConfig => {
    return configs[type];
  };

  return {
    configs,
    getConfigByType
  };
};
