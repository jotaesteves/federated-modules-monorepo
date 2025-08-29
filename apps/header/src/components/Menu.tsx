import React from 'react';
import Submenu from './Submenu';
import type { MenuItemProps } from 'src/types/types';
import { getMenusBySidebarId, getSidebarLabelById } from 'src/utils/utils';
import { Link } from 'react-router';
import { cn } from 'shared/lib/utils';

const Menu: React.FC<MenuItemProps> = ({
  isMenuOpen,
  activeItem,
  isSubmenuOpen,
  activeSubmenuItem,
  onSubmenuItemClick,
  onCloseMenu,
}) => {
  const [activeMenuItem, setActiveMenuItem] = React.useState('');

  if (!isMenuOpen || !activeItem) return null;

  const menuItems = getMenusBySidebarId(activeItem);

  const handleClickMenu = (id: string) => {
    setActiveMenuItem(id);
    onSubmenuItemClick(id);
  };

  return (
    <div
      className={`absolute z-10 top-4 left-[18rem] min-h-[calc(100%_-_70px)] max-h-[calc(100%_-_70px)] bg-white shadow-[0px_2px_7px_5px_#00000040] rounded-r-[22px] ${
        isSubmenuOpen ? 'min-w-[53.625rem]' : 'min-w-[24.5rem]'
      }`}
      style={{ clipPath: 'inset(-10px -10px -10px 0)' }}
    >
      <div className="pl-6 pr-10 pb-10 pt-3 flex absolute w-full h-full overflow-hidden">
        <div className="w-[24.5rem]">
          <p className="font-semibold text-gray-800 mb-2 text-[2rem] relative after:content-[''] after:absolute after:-bottom-[5px] after:left-0 after:w-[15%] after:h-[5px] after:bg-primary-500">
            {getSidebarLabelById(activeItem)}
          </p>
          <div className="py-3 flex flex-col overflow-y-auto">
            {menuItems.map((item) => {
              const isPendingActive = activeSubmenuItem === item.id;

              const commonClassName = cn(
                'text-gray-800 font-medium text-xl py-5 text-left pl-10 rounded-[1.25rem] transition-all duration-300 border-b border-gray-100',
                isPendingActive
                  ? 'bg-primary-500/20 text-gray-700' // navegação
                  : 'hover:bg-primary-500/20 hover:text-gray-800'
              );

              if (item.path) {
                return (
                  <Link
                    to={item.path}
                    key={item.id}
                    onClick={() => handleClickMenu(item.id)}
                    className={commonClassName}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => handleClickMenu(item.id)}
                  className={commonClassName}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        <Submenu
          isSubmenuOpen={isSubmenuOpen}
          activeMenuItem={activeMenuItem}
          activeSubmenuItem={activeSubmenuItem}
          onSubmenuItemClick={onCloseMenu}
        />
      </div>
    </div>
  );
};

export default Menu;
