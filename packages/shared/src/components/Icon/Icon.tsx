import {
  GraphIcon,
  ContactIcon,
  DocumentationIcon,
  PersonIcon,
  PinIcon,
  RiskIcon,
  UserIcon,
} from '@/assets/icons';
import { clsx } from 'clsx';
import * as React from 'react';

interface IconProps {
  type: 'contact' | 'graph' | 'documentation' | 'person' | 'pin' | 'risk' | 'user';
  backgroundColor?: string;
  rounded?: boolean;
  size?: 'sm' | 'lg';
}

const Icon: React.FC<IconProps> = ({ type, backgroundColor, rounded, size = 'lg' }) => {
  const iconsMap: Record<IconProps['type'], React.FC> = {
    graph: GraphIcon,
    contact: ContactIcon,
    documentation: DocumentationIcon,
    person: PersonIcon,
    pin: PinIcon,
    risk: RiskIcon,
    user: UserIcon,
  };

  const IconComponent = iconsMap[type];
  if (!IconComponent) return null;

  const baseClasses = 'inline-flex items-center justify-center p-[6px]';

  const sizeClasses = {
    sm: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const radiusClasses = rounded ? 'rounded-full' : 'rounded-sm';
  const backgroundClasses = backgroundColor ? `bg-${backgroundColor}` : '';

  return (
    <span className={`${baseClasses} ${sizeClasses[size]} ${radiusClasses} ${backgroundClasses}`}>
      <IconComponent />
    </span>
  );
};

export default Icon;
