import React from 'react';

interface AssetsHeaderProps {
  leftTitle: string;
  rightTitle: string;
}

export const AssetsHeader: React.FC<AssetsHeaderProps> = ({ leftTitle, rightTitle }) => {
  return (
    <div className="col-span-2 mb-2 sticky top-0 left-0 right-0 z-10 ">
      <div className="bg-gradient-to-r from-primary-500 via-primary-700 to-purple-800 text-white p-1 rounded-t-2xl">
        <div className="flex items-center px-[26px]">
          <h2 className="text-lg font-semibold flex-1 text-left">{leftTitle}</h2>
          <div className="h-6 border-r border-white"></div>
          <h2 className="text-lg font-semibold flex-1 text-left pl-[26px]">{rightTitle}</h2>
        </div>
      </div>
    </div>
  );
};
