import { IconProps } from 'shared/components/Icon';

export interface NavItemProps {
  id: string;
  icon: IconProps['type'];
  label: string;
  path?: string;
}

export interface SidebarItem extends NavItemProps {
  menuIds?: string[];
}

export interface MenuItem extends Omit<NavItemProps, 'icon'> {
  parentSidebarId: string;
  submenuIds?: string[];
}

export interface SubmenuItem extends Omit<NavItemProps, 'icon' | 'path'> {
  parentMenuId: string;
  submenuLinksIds: string[];
}

export interface SubmenuLinkItemProps extends Omit<NavItemProps, 'icon'> {
  parentSubmenuId: string;
  description?: string;
  path: string;
}

export interface SidebarItemProps {
  item: NavItemProps;
  expanded: boolean;
  onOpenMenu: (label: string) => void;
  onCloseMenu: () => void;
  className?: string;
  isActive?: boolean;
  hasMenu: boolean;
}

export interface MenuItemProps {
  menuOpen: boolean;
  activeItem: string | null;
  submenuOpen: boolean;
  activeSubmenuItem: string | null;
  onSubmenuItemClick: (item: string) => void;
}

export interface SubmenuItemProps {
  submenuOpen: boolean;
  activeMenuItem?: string;
}
