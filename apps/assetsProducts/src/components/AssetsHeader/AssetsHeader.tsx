import type React from 'react';

interface AssetsHeaderProps {
  leftTitle: string;
  rightTitle: string;
}

export const AssetsHeader: React.FC<AssetsHeaderProps> = ({ leftTitle, rightTitle }) => {
  return (
    <div className="mb-2 sticky top-0 left-0 right-0 z-10">
      <div className="bg-gradient-to-r from-primary-500 to-[#A03996] text-white p-1">
        <div className="flex items-center px-[19px]">
          <h2 className="text-lg font-semibold flex-1 text-left">{leftTitle}</h2>
          <div className="h-6 border-r border-white"></div>
          <h2 className="text-lg font-semibold flex-1 text-left pl-[26px]">{rightTitle}</h2>
        </div>
      </div>
    </div>
  );
};
