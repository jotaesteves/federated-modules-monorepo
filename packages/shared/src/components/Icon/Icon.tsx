import {
  GraphIcon,
  ContactIcon,
  DocumentationIcon,
  PersonIcon,
  PinIcon,
  RiskIcon,
  UserIcon,
} from '@/assets/icons';
import * as React from 'react';

interface IconProps {
  icon: 'contact' | 'graph' | 'documentation' | 'person' | 'pin' | 'risk' | 'user';
}

const Icon: React.FC<IconProps> = ({ icon }) => {
  const iconsMap: Record<IconProps['icon'], React.FC> = {
    graph: GraphIcon,
    contact: ContactIcon,
    documentation: DocumentationIcon,
    person: PersonIcon,
    pin: PinIcon,
    risk: RiskIcon,
    user: UserIcon,
  };

  const IconComponent = iconsMap[icon];
  if (!IconComponent) return null;

  return <IconComponent />;
};

export default Icon;
