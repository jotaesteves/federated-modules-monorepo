/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import Icon, { IconProps } from 'shared/components/Icon';

// Declare global navigation helper interface
declare global {
  interface Window {
    microFrontendNavigation?: {
      navigateTo: (path: string) => void;
      getRouteFromTab?: (tab: string) => string;
      getTabFromRoute?: (route: string) => string;
    };
  }
}

const sidebarItems: Omit<SideBarNavItemProps, 'expanded' | 'onOpenSubmenu'>[] = [
  { icon: 'home', label: 'Início', path: '/inicio' },
  { icon: 'register', label: 'Registos', path: '/registos' },
  { icon: 'makePhoneCall', label: 'Outbounds', path: '/outbounds' },
  { icon: 'shopBag', label: 'Vendas', path: '/vendas' },
  { icon: 'info', label: 'Scripts', path: '/scripts' },
  { icon: 'files', label: 'Documentação', path: '/documentacao' },
  { icon: 'graph2', label: "KPI's", path: '/kpis' },
];

const bottomSidebarItems: Omit<SideBarNavItemProps, 'expanded' | 'onOpenSubmenu'>[] = [
  { icon: 'config', label: 'Definições', path: '/definicoes' },
  { icon: 'search', label: 'Pesquisa', path: '/pesquisa' },
];

interface SideBarNavItemProps {
  icon: IconProps['type'];
  label: string;
  path: string;
  expanded: boolean;
  onOpenSubmenu: (label: string) => void;
}

function SideBarNavItem({ icon, label, path, expanded, onOpenSubmenu }: SideBarNavItemProps) {
  const handleClick = () => {
    console.log('SideBarNavItem clicked:', { path, expanded });
    console.log('window.microFrontendNavigation:', window.microFrontendNavigation);

    onOpenSubmenu(label);

    // Use global navigation helper to navigate
    if (typeof window !== 'undefined' && window.microFrontendNavigation) {
      console.log('Attempting navigation to:', path);
      window.microFrontendNavigation.navigateTo(path);
    } else {
      console.error('Navigation helper not available');
      // Fallback to window.location
      if (typeof window !== 'undefined') {
        window.location.href = path;
      }
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`flex items-center gap-3 pl-10 pr-7 min-h-[4rem] max-h-[4rem] text-gray-700 transition-all duration-300 relative rounded-r-[20px] group hover:bg-primary-500 text-left cursor-pointer ${expanded ? 'w-full' : 'w-fit'}`}
        style={{ zIndex: 1 }}
      >
        <Icon
          type={icon}
          className="p-0 w-[25px] h-[25px] group-hover:text-white transition-all duration-300"
          size="sm"
        />
        <span
          className={`transition-all duration-300 whitespace-nowrap font-medium text-gray-800 text-xl group-hover:text-white ${
            expanded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
          }`}
          style={{
            pointerEvents: expanded ? 'auto' : 'none',
            width: expanded ? 'auto' : '0',
            overflow: expanded ? 'visible' : 'hidden',
          }}
        >
          {label}
        </span>
      </button>
    </>
  );
}

const SideBarNav: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const submenuRef = React.useRef<HTMLDivElement>(null);

  const handleOpenSubmenu = (label: string) => {
    setActiveItem(label);
    setSubmenuOpen(true);
  };

  return (
    <nav
      className={`fixed h-[calc(100vh_-_122px_-_72px)] justify-between flex flex-col items-center py-3 gap-2 bg-white transition-all duration-300 ${
        expanded && 'w-72 shadow-[0_4px_4px_0_#00000040] border border-gray-100'
      }`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => {
        setExpanded(false);
        setSubmenuOpen(false);
        setActiveItem(null);
      }}
      style={{
        minWidth: expanded ? '18rem' : '6.525rem',
        maxWidth: expanded ? '18rem' : '6.525rem',
      }}
    >
      <div className="flex-1 overflow-y-auto min-h-0 w-full flex flex-col overflow-x-hidden">
        {sidebarItems.map((item) => (
          <SideBarNavItem
            key={item.label}
            {...item}
            expanded={expanded}
            onOpenSubmenu={handleOpenSubmenu}
          />
        ))}
      </div>
      <div className="flex flex-col w-full">
        {bottomSidebarItems.map((item) => (
          <SideBarNavItem
            key={item.label}
            {...item}
            expanded={expanded}
            onOpenSubmenu={handleOpenSubmenu}
          />
        ))}
      </div>

      {submenuOpen && (
        <div
          ref={submenuRef}
          className="absolute z-10 top-4 left-[18rem] h-[calc(100%_-_70px)] bg-white shadow-[0px_2px_7px_5px_#00000040] rounded-r-[22px] min-w-[29.125rem]"
        >
          <SubMenuNav activeItem={activeItem} />
        </div>
      )}
    </nav>
  );
};

const SubMenuNav: React.FC<{ activeItem: string | null }> = ({ activeItem }) => {
  return (
    <div className="flex flex-col space-y-2 text-gray-600 pl-6 ml-2 pr-5 pb-10 pt-3">
      <div className="font-semibold text-gray-800 mb-2">{activeItem}</div>
      <button className="text-left pl-4">SubItem 1</button>
      <button className="text-left pl-4">SubItem 2</button>
      <button className="text-left pl-4">SubItem 3</button>
    </div>
  );
};

export default SideBarNav;
