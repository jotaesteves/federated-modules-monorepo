import React, { useState } from 'react';

import logoUrl from './assets/logo.svg';
import HeaderTabs from './components/HeaderTabs';
import { Icon } from 'shared/components';
import DialCall from 'src/components/DialCall';

export type User = {
  firstName: string;
  lastName: string;
  email: string;
};

interface NavbarDropdown {
  title: string;
  icon: React.ReactNode;
}

export default function Header() {
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
  const [isPaused, setIsPaused] = useState(false);
  const [isDialOpen, setIsDialOpen] = useState(false);

  const handleNavClick = (title: string, event: React.MouseEvent) => {
    event.preventDefault();
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const togglePausePlay = () => {
    setIsPaused((prev) => !prev);
  };

  const toggleDialCall = () => {
    setIsDialOpen((prev) => !prev);
  };

  return (
    <header>
      <div className="flex pl-[35px] pr-[34.6px] text-black bg-white h-[122px]">
        <div className="w-[70%] flex-grow flex items-start justify-between pt-[2.3125rem]">
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
        <div className="border-l border-gray-300 h-[5.6875rem] ml-[1.8125rem] mt-[19px]"></div>

        <div className="flex items-center justify-start pl-[36px] w-[30%]">
          {/* User dropdown */}
          <div className="relative">
            <button
              className="w-[3.5rem] h-[3.5rem] rounded-md border border-primary-500 flex items-center"
              onClick={toggleUserDropdown}
            >
              <Icon
                type="personMale"
                className="text-zinc-700 items-end p-0 w-[2.1875rem] h-[2.1875rem]"
              />
              <Icon type="personMalePolygon" className="p-0 flex-start items-end pb-1" />
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
          <div className="h-[3.5rem] ml-4 bg-primary-500 rounded-full p-[0.6425rem] flex items-center space-x-2 relative">
            {isPaused ? (
              <button
                className="relative w-[2.1875rem] h-[2.1875rem] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                onClick={togglePausePlay}
                title="Play"
              >
                <Icon type="play" rounded className="text-zinc-700" />
                <span className="text-primary-500 italic text-xs font-medium absolute -bottom-7 left-1/2 whitespace-nowrap">
                  Em espera...
                </span>
              </button>
            ) : (
              <button
                className="w-[2.1875rem] h-[2.1875rem] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                onClick={togglePausePlay}
                title="Pause"
              >
                <Icon type="pause" rounded className="text-zinc-700" />
              </button>
            )}
            <button
              className="w-[2.1875rem] h-[2.1875rem] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              title="Transfer"
            >
              <Icon type="send" rounded className="text-zinc-700 w-[50px] h-auto" />
            </button>
            <button
              className="w-[2.1875rem] h-[2.1875rem] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              title="Send"
            >
              <Icon type="share" rounded className="text-zinc-700 w-[50px] h-auto" />
            </button>
            <button
              className="w-[2.1875rem] h-[2.1875rem] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              title="Call"
            >
              <Icon type="callback" rounded className="text-zinc-700 w-[50px] h-auto" />
            </button>
            <button
              className="w-[2.1875rem] h-[2.1875rem] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              title="Phone"
              onClick={toggleDialCall}
            >
              <Icon type="dialPad" rounded className="text-zinc-700 w-[50px] h-auto" />
            </button>

            {isDialOpen && <DialCall toggleDialCall={toggleDialCall} />}
          </div>
        </div>
      </div>
      <HeaderTabs />
    </header>
  );
}
