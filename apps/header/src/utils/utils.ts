import { menuMapData, submenuLinks, submenuMapData } from 'src/data/menuData';
import type { MenuItem, SubmenuItem, SubmenuLinkItemProps } from 'src/types/types';

// Buscar todos os menus de um sidebar
export const getMenusBySidebarId = (sidebarId: string): MenuItem[] => {
  return menuMapData.filter((menu) => menu.parentSidebarId === sidebarId.toLowerCase());
};

// Buscar todos os submenus de um menu
export const getSubmenusByMenuId = (menuId: string): SubmenuItem[] => {
  return submenuMapData.filter((submenu) => submenu.parentMenuId === menuId);
};

// Buscar todos os links de um submenu
export const getSubmenuLinksBySubmenuId = (submenuId: string): SubmenuLinkItemProps[] => {
  return submenuLinks.filter((link) => link.parentSubmenuId === submenuId);
};
