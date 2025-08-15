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
  ComplainsIcon,
  AlertFolderIcon,
  PackageWarningIcon,
} from '@/assets/icons';
import { cn } from '@/lib/utils';

const iconsMap = {
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
  complains: ComplainsIcon,
  alertFolder: AlertFolderIcon,
  packageWarning: PackageWarningIcon,
} as const;

export interface IconProps {
  type: keyof typeof iconsMap;
  rounded?: boolean;
  size?: 'sm' | 'lg';
  className?: string;
}

const Icon: React.FC<IconProps> = ({ type, rounded, size = 'sm', className = '' }) => {
  const IconComponent = iconsMap[type];
  if (!IconComponent) return null;

  const sizeClasses = size === 'lg' ? 'w-10 h-10' : 'w-8 h-8';
  const radiusClasses = rounded ? 'rounded-full' : 'rounded-md';

  return (
    <span
      className={cn(
        'inline-flex items-center justify-center p-[6px] h-fit',
        sizeClasses,
        radiusClasses,
        className
      )}
    >
      <IconComponent />
    </span>
  );
};

export default Icon;
