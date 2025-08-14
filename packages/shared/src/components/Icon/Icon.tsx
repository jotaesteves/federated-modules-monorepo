import {
  GraphIcon,
  ContactIcon,
  DocumentationIcon,
  PersonIcon,
  PinIcon,
  RiskIcon,
  UserIcon,
  PhoneCallIcon,
  MakePhoneCallIcon,
  CallCenterWorkerIcon,
  RingCallIcon,
  CellPhoneIcon,
  BellIcon,
  ShoppingBagIcon,
} from '@/assets/icons';
import * as React from 'react';
import { cn } from '@/lib/utils';

export interface IconProps {
  type:
    | 'contact'
    | 'graph'
    | 'documentation'
    | 'person'
    | 'pin'
    | 'risk'
    | 'user'
    | 'phoneCall'
    | 'makePhoneCall'
    | 'ringCall'
    | 'callCenterWorker'
    | 'cellPhone'
    | 'bell'
    | 'shoppingBag';
  rounded?: boolean;
  size?: 'sm' | 'lg';
  className?: string;
}

const Icon: React.FC<IconProps> = ({ type, rounded, size = 'sm', className }) => {
  const iconsMap: Record<IconProps['type'], React.FC> = {
    graph: GraphIcon,
    contact: ContactIcon,
    documentation: DocumentationIcon,
    person: PersonIcon,
    pin: PinIcon,
    risk: RiskIcon,
    user: UserIcon,
    phoneCall: PhoneCallIcon,
    makePhoneCall: MakePhoneCallIcon,
    ringCall: RingCallIcon,
    callCenterWorker: CallCenterWorkerIcon,
    cellPhone: CellPhoneIcon,
    bell: BellIcon,
    shoppingBag: ShoppingBagIcon,
  };

  const IconComponent = iconsMap[type];
  if (!IconComponent) return null;

  const baseClasses = 'inline-flex items-center justify-center p-[6px] h-fit';

  const sizeClasses = {
    sm: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const radiusClasses = rounded ? 'rounded-full' : 'rounded-sm';

  return (
    <span className={cn(baseClasses, sizeClasses[size], radiusClasses, className)}>
      <IconComponent />
    </span>
  );
};

export default Icon;
