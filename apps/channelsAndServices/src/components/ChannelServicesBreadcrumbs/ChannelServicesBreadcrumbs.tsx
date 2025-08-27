import React from 'react';
import { Breadcrumbs } from 'shared/components';
import { useChannelsServices } from '../../context/ChannelsServicesContext';

export const ChannelServicesBreadcrumbs: React.FC = () => {
  const { breadcrumbs, activeItem } = useChannelsServices();

  if (!activeItem || breadcrumbs.items.length === 0) {
    return null;
  }

  return <Breadcrumbs items={breadcrumbs.items} className="px-2 bg-white" />;
};
