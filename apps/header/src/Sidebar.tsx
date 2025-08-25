import React, { useState } from 'react';
import Icon from 'shared/components/Icon';
import Menu from './components/Menu';
import { bottomSidebarMapData, sidebarMapData } from 'src/data/menuData';
import type { SidebarItemProps } from 'src/types/types';
import { getMenusBySidebarId } from 'src/utils/utils';
import { Link } from 'react-router-dom';
import { cn } from 'shared/lib/utils';

declare global {
  interface Window {
    microFrontendNavigation?: {
      navigateTo: (path: string) => void;
      getRouteFromTab?: (tab: string) => string;
      getTabFromRoute?: (route: string) => string;
    };
  }
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  item,
  expanded,
  onOpenMenu,
  className = '',
  isActive,
  hasMenu,
}) => {
  const handleClick = () => {
    console.log('SidebarItem clicked:', { id: item.id, path: item.path, expanded, hasMenu });

    if (hasMenu) {
      onOpenMenu(item.label);
      return;
    }
  };

  const buttonContent = (
    <>
      <Icon
        type={item.icon}
        className={cn(
          'p-0 w-[25px] h-[25px] transition-all duration-300',
          isActive ? 'text-white' : 'group-hover:text-white'
        )}
        size="sm"
      />
      <span
        className={cn(
          'transition-all duration-300 whitespace-nowrap font-medium text-xl',
          isActive ? 'text-white' : 'text-gray-800 group-hover:text-white',
          expanded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
        )}
        style={{
          pointerEvents: expanded ? 'auto' : 'none',
          width: expanded ? 'auto' : '0',
          overflow: expanded ? 'visible' : 'hidden',
        }}
      >
        {item.label}
      </span>
    </>
  );

  const commonClassName = cn(
    'flex items-center gap-3 pl-10 pr-7 min-h-[4rem] max-h-[4rem] transition-all duration-300 relative rounded-r-[20px] group text-left cursor-pointer',
    expanded ? 'w-full' : 'w-fit',
    isActive ? 'bg-primary-500 text-white' : 'text-gray-700 hover:bg-primary-500',
    className
  );

  if (item.path) {
    return (
      <Link
        to={item.path || `/${item.id}`}
        onClick={handleClick}
        className={commonClassName}
        style={{ zIndex: 1 }}
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <button type="button" onClick={handleClick} className={commonClassName} style={{ zIndex: 1 }}>
      {buttonContent}
    </button>
  );
};

const SideBarNav: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [activeSubmenuItem, setActiveSubmenuItem] = useState<string | null>(null);

  const handleMouseEnter = () => setExpanded(true);

  const handleMouseLeave = () => {
    setExpanded(false);
    handleCloseMenu();
  };

  const handleOpenMenu = (label: string) => {
    setExpanded(true);
    setActiveItem(label);
    setIsMenuOpen(true);
    setIsSubmenuOpen(false);
    setActiveSubmenuItem(null);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
    setActiveItem(null);
    setIsSubmenuOpen(false);
    setActiveSubmenuItem(null);
  };

  const handleSubmenuItemClick = (item: string) => {
    setActiveSubmenuItem(item);
    setIsSubmenuOpen(true);
  };

  const hasMenu = (sidebarId: string): boolean => {
    const menus = getMenusBySidebarId(sidebarId);
    return menus.length > 0;
  };

  const handleCloseMenuAndSidebar = () => {
    handleCloseMenu();
    setExpanded(false);
  };

  return (
    <nav
      className={cn(
        'fixed z-50 h-[calc(100vh_-_122px_-_72px)] justify-between flex flex-col items-center py-3 gap-2 bg-white transition-all duration-300',
        expanded && 'w-72 shadow-[0_4px_4px_0_#00000040] border border-gray-100'
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        minWidth: expanded ? '18rem' : '6.525rem',
        maxWidth: expanded ? '18rem' : '6.525rem',
      }}
    >
      <div className="flex-1 overflow-y-auto min-h-0 w-full flex flex-col overflow-x-hidden">
        {sidebarMapData.map((item) => (
          <SidebarItem
            key={item.id}
            item={item}
            expanded={expanded}
            onOpenMenu={() => handleOpenMenu(item.label)}
            onCloseMenu={handleCloseMenu}
            isActive={activeItem === item.label}
            hasMenu={hasMenu(item.id || item.label)}
          />
        ))}
      </div>

      <div className="flex flex-col w-full">
        {bottomSidebarMapData.map((item) => (
          <SidebarItem
            key={item.id}
            item={item}
            expanded={expanded}
            onOpenMenu={() => handleOpenMenu(item.label)}
            onCloseMenu={handleCloseMenu}
            isActive={activeItem === item.label}
            hasMenu={hasMenu(item.id || item.label)}
          />
        ))}
      </div>

      <Menu
        isMenuOpen={isMenuOpen}
        activeItem={activeItem}
        isSubmenuOpen={isSubmenuOpen}
        activeSubmenuItem={activeSubmenuItem}
        onSubmenuItemClick={handleSubmenuItemClick}
        onCloseMenu={handleCloseMenuAndSidebar}
      />
    </nav>
  );
};

export default SideBarNav;
