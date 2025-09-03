import type React from 'react';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';

interface DetailsSectionProps {
  title?: string;
  children?: React.ReactNode;
}

export const DetailsSection: React.FC<DetailsSectionProps> = ({ title = 'Detalhes', children }) => {
  return (
    <div className="col-span-10 flex flex-col max-h-full min-h-0">
      <div className="sticky top-0 left-0 right-0 z-10 bg-gray-100 p-[4px] rounded-t-xl border-b border-primary-500 flex-shrink-0">
        <h2 className="text-lg font-semibold text-left">{title}</h2>
      </div>
      <Breadcrumbs />
      {/** biome-ignore lint/correctness/useUniqueElementIds: //TODO: maybe change this one */}
      <section className="bg-white flex-1 overflow-y-auto min-h-0" id="detailsRef">
        {children}
      </section>
    </div>
  );
};
