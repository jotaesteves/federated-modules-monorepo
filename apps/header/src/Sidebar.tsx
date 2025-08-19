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

const sidebarItems: Omit<SideBarNavItemProps, 'expanded'>[] = [
  { icon: 'home', label: 'Início', path: '/inicio' },
  { icon: 'register', label: 'Registos', path: '/registos' },
  { icon: 'makePhoneCall', label: 'Outbounds', path: '/outbounds' },
  { icon: 'shopBag', label: 'Vendas', path: '/vendas' },
  { icon: 'info', label: 'Scripts', path: '/scripts' },
  { icon: 'files', label: 'Documentação', path: '/documentacao' },
  { icon: 'graph2', label: "KPI's", path: '/kpis' },
];

const bottomSidebarItems: Omit<SideBarNavItemProps, 'expanded'>[] = [
  { icon: 'config', label: 'Definições', path: '/definicoes' },
  { icon: 'search', label: 'Pesquisa', path: '/pesquisa' },
];

interface SideBarNavItemProps {
  icon: IconProps['type'];
  label: string;
  path: string;
  expanded: boolean;
  onClick?: () => void;
  isActive?: boolean;
}

function SideBarNavItem({ icon, label, path, expanded, onClick, isActive }: SideBarNavItemProps) {
  const handleClick = () => {
    console.log('SideBarNavItem clicked:', { path, expanded });
    console.log('window.microFrontendNavigation:', window.microFrontendNavigation);

    if (onClick) onClick();

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
        className={`flex items-center gap-3 pl-10 pr-7 h-[4rem] text-gray-700 transition-all duration-300 relative rounded-r-[20px] group hover:bg-primary-500 text-left cursor-pointer ${expanded ? 'w-full' : 'w-fit'}`}
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

      {isActive && (
        <div className="ml-14 mt-2">
          <SubMenuNav />
        </div>
      )}
    </>
  );
}

const SideBarNav: React.FC = () => {
  const [expanded, setExpanded] = useState(true);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <nav
      className={`relative justify-between flex flex-col items-center pt-3 pb-[4.375rem] space-y-2 bg-white h-full transition-all duration-300 overflow-hidden ${
        expanded && 'w-72 shadow-[0_4px_4px_0_#00000040] border border-gray-100'
      }`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(true)}
      style={{
        minWidth: expanded ? '18rem' : '6.525rem',
        maxWidth: expanded ? '18rem' : '6.525rem',
        minHeight: '100%',
      }}
    >
      <div className="flex-1 overflow-y-auto min-h-0 w-full flex flex-col overflow-x-hidden">
        {sidebarItems.map((item) => (
          <SideBarNavItem
            key={item.label}
            {...item}
            expanded={expanded}
            isActive={activeItem === item.label}
            onClick={() => setActiveItem((prev) => (prev === item.label ? null : item.label))}
          />
        ))}
      </div>
      <div className="flex flex-col flex-shrink-0 w-full">
        {bottomSidebarItems.map((item) => (
          <SideBarNavItem
            key={item.label}
            {...item}
            expanded={expanded}
            onClick={() => setActiveItem((prev) => (prev === item.label ? null : item.label))}
          />
        ))}
      </div>
    </nav>
  );
};

const SubMenuNav: React.FC = () => {
  return (
    <div className="flex flex-col space-y-2 text-gray-600">
      <button className="text-left pl-4">SubItem 1</button>
      <button className="text-left pl-4">SubItem 2</button>
      <button className="text-left pl-4">SubItem 3</button>
    </div>
  );
};

export default SideBarNav;
