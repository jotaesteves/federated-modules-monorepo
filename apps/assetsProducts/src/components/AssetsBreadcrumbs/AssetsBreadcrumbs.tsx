import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from 'shared/components/ui';
import { useAssets } from '../../context/AssetsContext';

export const AssetsBreadcrumbs: React.FC = () => {
  const { breadcrumbs, activeItem } = useAssets();

  if (!activeItem || breadcrumbs.items.length === 0) {
    return null;
  }

  return (
    <div className="px-2">
      <Breadcrumb>
        <BreadcrumbList>
          {breadcrumbs.items.map((item, index) => (
            <React.Fragment key={`${item.label}-${index}`}>
              <BreadcrumbItem>
                <BreadcrumbPage className="font-medium text-xs">{item.label}</BreadcrumbPage>
              </BreadcrumbItem>
              {index < breadcrumbs.items.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};
