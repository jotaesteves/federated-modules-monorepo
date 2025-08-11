import React from 'react';

interface ChannelsServicesHeaderProps {
  leftTitle: string;
  rightTitle: string;
}

export const ChannelsServicesHeader: React.FC<ChannelsServicesHeaderProps> = ({
  leftTitle,
  rightTitle,
}) => {
  return (
    <div className="col-span-2 mb-2 sticky top-0 left-0 right-0 z-10">
      <div className="bg-gradient-to-r from-primary-500 via-primary-700 to-purple-800 text-white p-1 rounded-t-xl">
        <div className="grid grid-cols-3 items-center px-2">
          <h2 className="text-lg font-semibold text-left">{leftTitle}</h2>
          <div className="flex justify-center">
            <div className="h-6 border-r border-white"></div>
          </div>
          <h2 className="text-lg font-semibold text-right">{rightTitle}</h2>
        </div>
      </div>
    </div>
  );
};
