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
  ExclamationIcon,
  ChevronRightIcon,
  HomeIcon,
  RegisterIcon,
  FilesIcon,
  InfoIcon,
  Graph2Icon,
  ConfigIcon,
  SearchIcon,
  EyeIcon,
  CloseBlackIcon,
  Phone2Icon,
  CloseIcon,
  CalendaryIcon,
} from '@/assets/icons';
import { PlayIcon } from '@/assets/icons/PlayIcon';
import { cn } from '@/lib/utils';
import React from 'react';

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
  exclamation: ExclamationIcon,
  chevronRight: ChevronRightIcon,
  home: HomeIcon,
  register: RegisterIcon,
  files: FilesIcon,
  info: InfoIcon,
  graph2: Graph2Icon,
  config: ConfigIcon,
  search: SearchIcon,
  eye: EyeIcon,
  closeBlack: CloseBlackIcon,
  play: PlayIcon,
  phone2: Phone2Icon,
  close: CloseIcon,
  calendary: CalendaryIcon,
} as const;

export type IconType = keyof typeof iconsMap;

export interface IconProps {
  type: keyof typeof iconsMap;
  rounded?: boolean;
  size?: 'sm' | 'lg';
  className?: string;
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({ type, rounded, size = 'sm', className = '', onClick }) => {
  const IconComponent = iconsMap[type];
  if (!IconComponent) return null;
  const sizeClasses = size === 'lg' ? 'w-10 h-10' : 'w-8 h-8';
  const radiusClasses = rounded ? 'rounded-full' : 'rounded-md';

  return (
    <span
      onClick={onClick}
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
