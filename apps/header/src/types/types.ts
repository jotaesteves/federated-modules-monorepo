import type { IconProps } from 'shared/components';

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
  onOpenMenu: (id: string) => void;
  onCloseMenu: () => void;
  className?: string;
  isActive?: boolean;
  isPendingActive: boolean;
  hasMenu: boolean;
}

export interface MenuItemProps {
  isMenuOpen: boolean;
  activeItem: string | null;
  isPendingActive: boolean;
  isSubmenuOpen: boolean;
  activeSubmenuItem: string | null;
  onSubmenuItemClick: (item: string) => void;
  onCloseMenu: () => void;
}

export interface SubmenuItemProps {
  isSubmenuOpen: boolean;
  activeMenuItem?: string;
  activeSubmenuItem: string | null;
  onSubmenuItemClick: (link: SubmenuLinkItemProps) => void;
}
