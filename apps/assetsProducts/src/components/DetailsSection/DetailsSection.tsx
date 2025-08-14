import React from 'react';
import { AssetsBreadcrumbs } from '../AssetsBreadcrumbs/AssetsBreadcrumbs';

interface DetailsSectionProps {
  title?: string;
  children?: React.ReactNode;
}

export const DetailsSection: React.FC<DetailsSectionProps> = ({ title = 'Detalhes', children }) => {
  return (
    <div className="col-span-10 flex flex-col max-h-full min-h-0 rounded-2xl overflow-hidden ">
      <div className="sticky top-0 left-0 right-0 z-10 bg-[#E7E9EA] py-[4px] border-b border-primary-500 flex-shrink-0 px-[26px]">
        <h2 className="text-lg font-semibold text-left">{title}</h2>
      </div>
      <div className="bg-white px-5 py-1">
        <AssetsBreadcrumbs />
      </div>
      <section className="bg-white flex-1 overflow-y-auto min-h-0 scroll-custom">
        {children}
      </section>
    </div>
  );
};
