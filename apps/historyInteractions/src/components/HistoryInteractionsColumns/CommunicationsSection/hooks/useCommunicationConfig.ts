import { useMemo } from 'react';
import type { CommunicationConfig, CommunicationType } from '../types/communication.types';
import { getCommunicationConfig } from '../utils/communication.utils';

export const useCommunicationConfig = () => {
  const configs = useMemo(() => getCommunicationConfig(), []);

  const getConfigByType = (type: CommunicationType): CommunicationConfig => {
    return configs[type];
  };

  return {
    configs,
    getConfigByType
  };
};
