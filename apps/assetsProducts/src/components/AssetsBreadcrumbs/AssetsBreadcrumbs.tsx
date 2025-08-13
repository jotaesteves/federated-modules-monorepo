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
    <div className="mb-4 px-2">
      <Breadcrumb>
        <BreadcrumbList>
          {breadcrumbs.items.map((item, index) => (
            <React.Fragment key={`${item.label}-${index}`}>
              <BreadcrumbItem>
                <BreadcrumbPage className="font-medium text-primary-600">
                  {item.label}
                </BreadcrumbPage>
              </BreadcrumbItem>
              {index < breadcrumbs.items.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};
