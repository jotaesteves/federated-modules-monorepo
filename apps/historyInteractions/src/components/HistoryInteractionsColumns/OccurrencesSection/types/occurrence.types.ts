import type { IconType } from 'shared/components/Icon';

export interface ComplainsData {
  id: string;
  complainId: string;
  badge: 'SUBMITED' | 'COMPLETE';
  transferName: string;
  transferValue: string;
  startDate: string;
  endDate: string;
}

export interface IncidentsData {
  id: string;
  name: string;
  accountNumber: string;
  status: 'active' | 'blocked';
}

export interface MemosData {
  id: string;
  name: string;
  accountNumber: string;
  initialValue: string;
  currency: string;
  status: string;
}

export type OccurrenceType = 'complains' | 'incidents' | 'memos';

export interface OccurrenceConfig {
  type: OccurrenceType;
  title: string;
  iconType: IconType;
}

export interface BadgeVariant {
  variant: 'blocked' | 'active';
  label: string;
}

export type OccurrenceData = ComplainsData | IncidentsData | MemosData;
