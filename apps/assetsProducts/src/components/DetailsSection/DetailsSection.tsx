import React from 'react';

interface DetailsSectionProps {
  title?: string;
  children?: React.ReactNode;
}

export const DetailsSection: React.FC<DetailsSectionProps> = ({ title = 'Detalhes', children }) => {
  return (
    <div className="col-span-10">
      <div className="sticky top-0 left-0 right-0 z-10 bg-gray-100 p-[4px] rounded-t-xl border-b border-primary-500">
        <h2 className="text-lg font-semibold text-left">{title}</h2>
      </div>
      <section className="bg-white h-[95%] overflow-y-scroll">{children}</section>
    </div>
  );
};
