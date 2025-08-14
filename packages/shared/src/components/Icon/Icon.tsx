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
  CallDotsIcon,
  MessageCircleDotsIcon,
  EmailIcon,
  MessageIcon,
  HistoryIcon,
  CellPhoneIcon,
  BellIcon,
  ShoppingBagIcon,
  PersonMaleIcon,
  PersonMalePolygonIcon,
  PauseIcon,
  SendIcon,
  ShareIcon,
  CallBackIcon,
  DialPadIcon,
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
  callDots: CallDotsIcon,
  messageCircleDots: MessageCircleDotsIcon,
  email: EmailIcon,
  message: MessageIcon,
  history: HistoryIcon,
  cellPhone: CellPhoneIcon,
  bell: BellIcon,
  shoppingBag: ShoppingBagIcon,
  personMale: PersonMaleIcon,
  personMalePolygon: PersonMalePolygonIcon,
  pause: PauseIcon,
  send: SendIcon,
  share: ShareIcon,
  callback: CallBackIcon,
  dialPad: DialPadIcon,
} as const;

export type IconType = keyof typeof iconsMap;

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
