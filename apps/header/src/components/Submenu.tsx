import React from 'react';

interface SubmenuProps {
  submenuOpen: boolean;
}

const Submenu: React.FC<SubmenuProps> = ({ submenuOpen }) => {
  const submenuItems = [
    'Acessos',
    'Cancelamento/Bloqueio',
    'Limites Transaccionais',
    'Recargas',
    'Erros da Aplicação',
    'Dúvidas de Instalação App - Smart IZI',
    'Libertação OTP',
  ];

  if (!submenuOpen) return null;

  return (
    <div className="w-[28rem] pl-6 mt-14 overflow-y-auto scroll-custom-bar h-[calc(100%_-_70px)]">
      <div>
        <p className="uppercase p-4 bg-gray-100 rounded-lg text-gray-800 opacity-60 m-0 font-semibold">
          Mobile Banking (IZI/SMART IZI)
        </p>
        <div className="flex flex-col overflow-y-auto">
          {submenuItems.map((subItem) => (
            <button
              key={subItem}
              className="text-gray-800 font-medium text-xl min-h-16 text-left pl-10 rounded-[1.25rem] hover:bg-primary-500 hover:text-white transition-all duration-300 active:bg-primary-500 active:text-white border-b border-gray-100"
            >
              {subItem}
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="uppercase p-4 bg-gray-100 rounded-lg text-gray-800 opacity-60 m-0 font-semibold">
          Mobile Banking (IZI/SMART IZI)
        </p>
        <div className="flex flex-col overflow-y-auto">
          {submenuItems.map((subItem) => (
            <button
              key={subItem}
              className="text-gray-800 font-medium text-xl min-h-16 text-left pl-10 rounded-[1.25rem] hover:bg-primary-500 hover:text-white transition-all duration-300 active:bg-primary-500 active:text-white border-b border-gray-100"
            >
              {subItem}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export type { SubmenuProps };
export default Submenu;
