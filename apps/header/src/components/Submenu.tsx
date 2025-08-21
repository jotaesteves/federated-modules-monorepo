import React from 'react';
import { SubmenuItemProps } from 'src/types/types';
import { getSubmenuLinksBySubmenuId, getSubmenusByMenuId } from 'src/utils/utils';

const Submenu: React.FC<SubmenuItemProps> = ({ submenuOpen, activeMenuItem }) => {
  if (!submenuOpen || !activeMenuItem) return null;

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
                <button
                  key={link.id}
                  className="group flex flex-col justify-center text-gray-800 font-medium text-xl py-5 text-left pl-10 rounded-[1.25rem] hover:bg-primary-500 hover:text-white transition-all duration-300 active:bg-primary-500 active:text-white border-b border-gray-100"
                >
                  {link.label}
                  {link.description && (
                    <span className="font-medium text-gray-800 text-xs group-hover:text-white">
                      {link.description}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Submenu;
