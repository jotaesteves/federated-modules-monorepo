import React, { useState } from 'react';
import Icon, { IconProps } from 'shared/components/Icon';
import Menu from './components/Menu';

declare global {
  interface Window {
    microFrontendNavigation?: {
      navigateTo: (path: string) => void;
      getRouteFromTab?: (tab: string) => string;
      getTabFromRoute?: (route: string) => string;
    };
  }
}

interface NavItemProps {
  icon: IconProps['type'];
  label: string;
  path: string;
}

interface SidebarItemProps {
  item: NavItemProps;
  expanded: boolean;
  onOpenMenu: (label: string) => void;
  className?: string;
  isActive?: boolean;
}

const sidebarItems: NavItemProps[] = [
  { icon: 'home', label: 'Início', path: '/inicio' },
  { icon: 'register', label: 'Registos', path: '/registos' },
  { icon: 'makePhoneCall', label: 'Outbounds', path: '/outbounds' },
  { icon: 'shoppingBag', label: 'Vendas', path: '/vendas' },
  { icon: 'info', label: 'Scripts', path: '/scripts' },
  { icon: 'files', label: 'Documentação', path: '/documentacao' },
  { icon: 'graph2', label: "KPI's", path: '/kpis' },
];

const bottomSidebarItems: NavItemProps[] = [
  { icon: 'config', label: 'Definições', path: '/definicoes' },
  { icon: 'search', label: 'Pesquisa', path: '/pesquisa' },
];

const SidebarItem: React.FC<SidebarItemProps> = ({
  item,
  expanded,
  onOpenMenu,
  className = '',
  isActive,
}) => {
  const handleClick = () => {
    console.log('SidebarItem clicked:', { path: item.path, expanded });
    console.log('window.microFrontendNavigation:', window.microFrontendNavigation);

    onOpenMenu(item.label);

    // Use global navigation helper to navigate
    if (typeof window !== 'undefined' && window.microFrontendNavigation) {
      console.log('Attempting navigation to:', item.path);
      window.microFrontendNavigation.navigateTo(item.path);
    } else {
      console.error('Navigation helper not available');
      // Fallback to window.location
      if (typeof window !== 'undefined') {
        window.location.href = item.path;
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center gap-3 pl-10 pr-7 min-h-[4rem] max-h-[4rem] text-gray-700 transition-all duration-300 relative rounded-r-[20px] group hover:bg-primary-500 text-left cursor-pointer ${
        expanded ? 'w-full' : 'w-fit'
      } ${className}`}
      style={{ zIndex: 1 }}
    >
      <Icon
        type={item.icon}
        className="p-0 w-[25px] h-[25px] group-hover:text-white transition-all duration-300"
        size="sm"
      />
      <span
        className={`transition-all duration-300 whitespace-nowrap font-medium text-xl 
          ${isActive ? 'text-white' : 'text-gray-800'} 
          group-hover:text-white
          ${expanded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}
        `}
        style={{
          pointerEvents: expanded ? 'auto' : 'none',
          width: expanded ? 'auto' : '0',
          overflow: expanded ? 'visible' : 'hidden',
        }}
      >
        {item.label}
      </span>
    </button>
  );
};

const SideBarNav: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [activeSubmenuItem, setActiveSubmenuItem] = useState<string | null>(null);

  const handleMouseEnter = () => setExpanded(true);

  const handleMouseLeave = () => {
    setExpanded(false);
    setMenuOpen(false);
    setActiveItem(null);
    setSubmenuOpen(false);
    setActiveSubmenuItem(null);
  };

  const handleOpenMenu = (label: string) => {
    setActiveItem(label);
    setMenuOpen(true);
    setSubmenuOpen(false);
    setActiveSubmenuItem(null);
  };

  const handleSubmenuItemClick = (item: string) => {
    setActiveSubmenuItem(item);
    setSubmenuOpen(true);
  };

  return (
    <nav
      className={`fixed h-[calc(100vh_-_122px_-_72px)] justify-between flex flex-col items-center py-3 gap-2 bg-white transition-all duration-300 ${
        expanded && 'w-72 shadow-[0_4px_4px_0_#00000040] border border-gray-100'
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        minWidth: expanded ? '18rem' : '6.525rem',
        maxWidth: expanded ? '18rem' : '6.525rem',
      }}
    >
      <div className="flex-1 overflow-y-auto min-h-0 w-full flex flex-col overflow-x-hidden">
        {sidebarItems.map((item) => (
          <SidebarItem
            key={item.label}
            item={item}
            expanded={expanded}
            onOpenMenu={handleOpenMenu}
            isActive={activeItem === item.label}
            className={activeItem === item.label ? 'active bg-primary-500 text-white' : ''}
          />
        ))}
      </div>

      <div className="flex flex-col w-full">
        {bottomSidebarItems.map((item) => (
          <SidebarItem
            key={item.label}
            item={item}
            expanded={expanded}
            onOpenMenu={handleOpenMenu}
            isActive={activeItem === item.label}
            className={activeItem === item.label ? 'active bg-primary-500 text-white' : ''}
          />
        ))}
      </div>

      <Menu
        menuOpen={menuOpen}
        activeItem={activeItem}
        submenuOpen={submenuOpen}
        activeSubmenuItem={activeSubmenuItem}
        onSubmenuItemClick={handleSubmenuItemClick}
      />
    </nav>
  );
};

export default SideBarNav;
