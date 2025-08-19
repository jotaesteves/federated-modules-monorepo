import React from 'react';
import { Badge } from '../ui/badge';

export interface CardLabeledValuePairProps {
  leftHeading: React.ReactNode;
  rightHeading?: React.ReactNode;
  leftValue: React.ReactNode;
  rightValue?: React.ReactNode;
  badgeVariant?: 'active' | 'blocked' | 'inactive';
  badgeText?: string;
}

const CardLabeledValuePair: React.FC<CardLabeledValuePairProps> = ({
  leftHeading,
  rightHeading,
  leftValue,
  rightValue,
  badgeVariant,
  badgeText,
}) => (
  <>
    <div className="flex justify-between items-center">
      <p className="text-2xs text-gray-500 font-medium uppercase">{leftHeading}</p>
      {rightHeading && (
        <p className="text-2xs text-gray-500 font-medium uppercase">{rightHeading}</p>
      )}
    </div>
    <div className="flex justify-between">
      <p className="flex items-center text-xs">
        <span className="text-base font-semibold mr-2">{leftValue}</span>
        {badgeVariant && <Badge variant={badgeVariant}>{(badgeText || '').toUpperCase()}</Badge>}
      </p>
      {rightValue && (
        <p>
          <span className="text-base font-semibold">{rightValue}</span>
        </p>
      )}
    </div>
  </>
);

export default CardLabeledValuePair;
