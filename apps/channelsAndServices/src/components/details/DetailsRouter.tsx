import React from 'react';
import { useChannelsServices } from '../../context/ChannelsServicesContext';
import { AccountDetails } from './MobileBankingDetails';
import { DepositDetails } from './MillenniumLineDetails';
import { DebitCardDetails } from './InsuranceDetails';
import { LoanDetails } from './InternetBankingDetails';
import { CreditCardDetails } from './ExtractsDetails';

export const DetailsRouter: React.FC = () => {
  const { activeItem } = useChannelsServices();

  if (!activeItem) {
    return (
      <div className="p-6 text-center content-center h-full">
        <div className="max-w-md mx-auto">
          <div className="mb-4 text-6xl">📊</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Select an item to view details
          </h3>
          <p className="text-gray-600">
            Click on any account, deposit, card, or loan from the left panel to see detailed
            information here.
          </p>
        </div>
      </div>
    );
  }

  switch (activeItem.type) {
    case 'mobile':
      return <AccountDetails account={activeItem.data} />;
    case 'internet':
      return <LoanDetails loan={activeItem.data} />;
    case 'millennium-line':
      return <DepositDetails deposit={activeItem.data} />;
    case 'insurance':
      return <DebitCardDetails card={activeItem.data} />;
    case 'extracts':
      return <CreditCardDetails card={activeItem.data} />;
    default:
      return (
        <div className="p-6 text-center">
          <div className="max-w-md mx-auto">
            <div className="mb-4 text-6xl">❓</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Unknown item type</h3>
            <p className="text-gray-600">
              The selected item type is not recognized. Please try selecting a different item.
            </p>
          </div>
        </div>
      );
  }
};
