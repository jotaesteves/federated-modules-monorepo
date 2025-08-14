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
  MessageIcon,
} from '@/assets/icons';
import * as React from 'react';

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
    | 'message';
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
    message: MessageIcon,
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
    <span className={`${baseClasses} ${sizeClasses[size]} ${radiusClasses} ${className}`}>
      <IconComponent />
    </span>
  );
};

export default Icon;
