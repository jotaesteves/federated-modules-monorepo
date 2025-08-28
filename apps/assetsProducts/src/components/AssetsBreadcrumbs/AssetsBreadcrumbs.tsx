import React from 'react';
import { Breadcrumbs } from 'shared/components';
import { useAssets } from '../../context/AssetsContext';

export const AssetsBreadcrumbs: React.FC = () => {
  const { breadcrumbs, activeItem } = useAssets();

  if (!activeItem || breadcrumbs.items.length === 0) {
    return null;
  }

  return <Breadcrumbs items={breadcrumbs.items} className="px-2 bg-white" />;
};
