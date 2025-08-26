import React from 'react';
import { Link } from 'react-router-dom';
import type { SubmenuItemProps } from 'src/types/types';
import { getSubmenuLinksBySubmenuId, getSubmenusByMenuId } from 'src/utils/utils';

const Submenu: React.FC<SubmenuItemProps> = ({
  isSubmenuOpen,
  activeMenuItem,
  onSubmenuItemClick,
}) => {
  if (!isSubmenuOpen || !activeMenuItem) return null;

  const submenus = getSubmenusByMenuId(activeMenuItem);

  return (
    <div className="w-[28rem] pl-6 mt-14 overflow-y-auto scroll-custom-bar h-[calc(100%_-_70px)]">
      {submenus.map((submenu) => {
        const submenuLinks = getSubmenuLinksBySubmenuId(submenu.id);

        return (
          <div key={submenu.id}>
            <p className="uppercase p-4 bg-gray-100 rounded-lg text-gray-800 opacity-60 m-0 font-semibold">
              {submenu.label}
            </p>
            <div className="flex flex-col overflow-y-auto">
              {submenuLinks.map((link) => (
                <Link
                  to={link.path}
                  key={link.id}
                  onClick={() => onSubmenuItemClick(link)}
                  className="flex flex-col justify-center text-gray-800 font-medium text-xl py-5 text-left pl-10 rounded-[1.25rem] hover:bg-primary-500/20 transition-all duration-300 active:bg-primary-500 active:text-white border-b border-gray-100"
                >
                  {link.label}
                  {link.description && (
                    <span className="font-medium text-gray-800 text-xs">{link.description}</span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Submenu;
