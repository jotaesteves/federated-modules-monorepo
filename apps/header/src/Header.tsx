import React, { useState } from 'react';

import logoUrl from './assets/logo.svg';
import HeaderTabs from './components/HeaderTabs';
import Icon from 'shared/components/Icon';

export type User = {
  firstName: string;
  lastName: string;
  email: string;
};

interface NavbarDropdown {
  title: string;
  icon: React.ReactNode;
}

const Header: React.FC = () => {
  // const { navigateTo, isCurrentPage } = useNavigation();
  // const { theme, setTheme, isDark } = useTheme();

  // User data - could come from global store in the future
  const user: User = {
    firstName: 'Alexandra',
    lastName: 'Rosália Umberto',
    email: 'alexandra@example.com',
  };

  const navbarDropdowns: NavbarDropdown[] = [
    {
      title: 'Smart IZI',
      icon: <Icon type="cellPhone" className="p-0 mr-[0.625rem]" />,
    },
    {
      title: 'Alertas',
      icon: <Icon type="bell" className="p-0 mr-[0.625rem]" />,
    },
    {
      title: 'Vendas',
      icon: <Icon type="shoppingBag" className="p-0 mr-[0.625rem]" />,
    },
  ];

  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const handleNavClick = (title: string, event: React.MouseEvent) => {
    event.preventDefault();
    // Map navigation items to existing pages or handle new navigation
    const pageMap: Record<string, string> = {
      'Smart IZI': 'home',
      Alertas: 'about',
      Vendas: 'services',
    };

    if (pageMap[title]) {
      //TODO: navigateTo(pageMap[title]);
    }
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  return (
    <header>
      <div className="flex pl-[35px] pr-[34.6px] text-black bg-white h-[122px]">
        <div
          className="flex-grow flex items-start justify-between pt-[2.3125rem]"
          style={{ width: '70%' }}
        >
          {/* Logo and name section */}
          <div className="flex items-center">
            <img
              src={logoUrl}
              alt="Logo"
              className="h-[52px] w-auto inline-block mr-[1.1875rem]"
              onError={(e) => {
                // Fallback if logo doesn't exist
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <h4 className="font-bold text-zinc-700 text-xl leading-6">
              {user.firstName} <br /> {user.lastName}
            </h4>
          </div>

          {/* Navigation section */}
          <div className="flex-1 flex justify-end items-start">
            <ul className="flex">
              {navbarDropdowns.map((item) => (
                <li key={item.title} className="mx-2">
                  <button
                    className={`flex items-center text-zinc-700 text-xl font-medium hover:text-primary-500 px-2 rounded transition-colors ${
                      //isCurrentPage(item.title.toLowerCase()) ? 'bg-blue-100 text-blue-700' : ''
                      () => `bg-blue-100 text-blue-700`
                    }`}
                    onClick={(e) => handleNavClick(item.title, e)}
                  >
                    {item.icon}
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Vertical line */}
        <div className="border-l border-gray-300 h-12 mx-4"></div>

        {/* Right section (30%) - user profile and controls */}
        <div className="flex items-center justify-start" style={{ width: '30%' }}>
          {/* User dropdown */}
          <div className="relative">
            <button
              className="w-8 h-8 rounded-md border border-gray-300 flex items-center text-gray-600 hover:text-blue-600 hover:border-blue-300 transition-colors"
              onClick={toggleUserDropdown}
            >
              <span className="mx-auto">👤</span>
            </button>

            {/* User dropdown menu */}
            {isUserDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-10">
                <div className="py-1">
                  <div className="px-4 py-2 text-sm text-gray-700 border-b">
                    <div className="font-medium">
                      {user.firstName} {user.lastName}
                    </div>
                    <div className="text-gray-500">{user.email}</div>
                  </div>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    🌙 Dark Mode
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    ⚙️ Settings
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    🚪 Logout
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Call center controls - rounded pill shaped with 5 circles inside */}
          <div className="ml-4 bg-primary-500 rounded-full px-2 py-2 flex items-center space-x-2">
            <button
              className="w-6 h-6 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              title="Pause"
            >
              <span>⏸︎</span>
            </button>
            <button
              className="w-6 h-6 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              title="Transfer"
            >
              <span>↗️</span>
            </button>
            <button
              className="w-6 h-6 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              title="Send"
            >
              <span>📤</span>
            </button>
            <button
              className="w-6 h-6 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              title="Call"
            >
              <span>📞</span>
            </button>
            <button
              className="w-6 h-6 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              title="Phone"
            >
              <span>☎️</span>
            </button>
          </div>
        </div>
      </div>
      <HeaderTabs />
    </header>
  );
};

export default Header;
