import React from 'react';
import Submenu from './Submenu';

interface MenuProps {
  menuOpen: boolean;
  activeItem: string | null;
  submenuOpen: boolean;
  activeSubmenuItem: string | null;
  onSubmenuItemClick: (item: string) => void;
}

const Menu: React.FC<MenuProps> = ({
  menuOpen,
  activeItem,
  submenuOpen,
  activeSubmenuItem,
  onSubmenuItemClick,
}) => {
  const menuItems = ['Canais Digitais', 'Cartões', 'Créditos', 'Reclamações', 'Outros Serviços'];

  if (!menuOpen) return null;

  return (
    <div
      className={`absolute z-10 top-4 left-[18rem] min-h-[calc(100%_-_70px)] max-h-[calc(100%_-_70px)] bg-white shadow-[0px_2px_7px_5px_#00000040] rounded-r-[22px] ${
        submenuOpen ? 'min-w-[58rem]' : 'min-w-[24.5rem]'
      }`}
      style={{ clipPath: 'inset(-10px -10px -10px 0)' }}
    >
      <div className="pl-6 pr-5 pb-10 pt-3 flex absolute w-full h-full overflow-hidden">
        <div className="w-[24.5rem]">
          <p className="font-semibold text-gray-800 mb-2 text-[2rem] relative after:content-[''] after:absolute after:-bottom-[5px] after:left-0 after:w-[15%] after:h-[5px] after:bg-primary-500">
            {activeItem}
          </p>
          <div className="py-3 flex flex-col overflow-y-auto">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => onSubmenuItemClick(item)}
                className={`text-gray-800 font-medium text-xl min-h-16 text-left pl-10 rounded-[1.25rem] hover:bg-primary-500 hover:text-white transition-all duration-300 active:bg-primary-500 active:text-white border-b border-gray-100 ${
                  activeSubmenuItem === item ? 'bg-primary-500 text-white' : ''
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <Submenu submenuOpen={submenuOpen} />
      </div>
    </div>
  );
};

export type { MenuProps };
export default Menu;
