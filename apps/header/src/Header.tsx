import React, { useState } from 'react';

import logoUrl from './assets/logo.svg';
import HeaderTabs from './components/HeaderTabs';
import Icon from 'shared/components/Icon';
import HeaderModal from './components/HeaderModal';

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
  const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);

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

  const handleTransferClick = () => {
    setIsTransferModalOpen(true);
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
          <div className="h-[3.5rem] ml-4 bg-primary-500 rounded-full p-[0.6425rem] flex items-center space-x-2">
            <button
              className="w-[2.1875rem] h-[2.1875rem] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              title="Pause"
            >
              <Icon type="pause" rounded className="text-zinc-700" />
            </button>
            <button
              className="w-[2.1875rem] h-[2.1875rem] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              title="Transfer"
              onClick={handleTransferClick}
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
            >
              <Icon type="dialPad" rounded className="text-zinc-700 w-[50px] h-auto" />
            </button>
          </div>
        </div>
      </div>
      <HeaderTabs />
      <HeaderModal
        isOpen={isTransferModalOpen}
        onOpenChange={setIsTransferModalOpen}
        title="Transferir Chamada"
        footer={
          <div className="flex justify-end space-x-2">
            <button
              onClick={() => setIsTransferModalOpen(false)}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
            >
              Cancelar
            </button>
            <button
              onClick={() => {
                // Lógica para transferir chamada
                console.log('Transferindo chamada...');
                setIsTransferModalOpen(false);
              }}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Transferir
            </button>
          </div>
        }
      >
        <div className="space-y-4">
          <p>Selecione o destino para transferir a chamada:</p>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="radio" name="transfer" value="supervisor" />
              <span>Supervisor</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="transfer" value="tecnico" />
              <span>Técnico</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="transfer" value="outro" />
              <span>Outro departamento</span>
            </label>
          </div>
        </div>
      </HeaderModal>
    </header>
  );
};

export default Header;
