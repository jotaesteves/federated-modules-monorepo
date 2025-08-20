import React from 'react';
import { Badge } from 'shared/components/ui';

interface DepositData {
  id: string;
  name: string;
  balance: string;
  currency: string;
  status: 'active' | 'inactive';
}

interface DepositDetailsProps {
  deposit: DepositData;
}

export const DepositDetails: React.FC<DepositDetailsProps> = ({ deposit }) => {
  return (
    <div className="p-6 space-y-6">
      <div className="border-b pb-4">
        <h3 className="text-xl font-semibold text-gray-900">{deposit.name}</h3>
        <p className="text-sm text-gray-600">Deposit Account: {deposit.id}</p>
        <Badge variant={deposit.status} className="mt-2">
          {deposit.status.toUpperCase()}
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Current Balance</h4>
          <p className="text-2xl font-bold text-blue-600">
            {deposit.balance} {deposit.currency}
          </p>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Interest Rate</h4>
          <p className="text-xl font-bold text-green-600">3.5% APY</p>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Maturity Date</h4>
          <p className="text-lg font-semibold text-purple-600">Dec 31, 2024</p>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-medium text-gray-900 mb-4">Deposit Information</h4>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-600">Initial Deposit:</p>
            <p className="font-medium">
              {deposit.balance} {deposit.currency}
            </p>
          </div>
          <div>
            <p className="text-gray-600">Term:</p>
            <p className="font-medium">12 months</p>
          </div>
          <div>
            <p className="text-gray-600">Start Date:</p>
            <p className="font-medium">Jan 1, 2024</p>
          </div>
          <div>
            <p className="text-gray-600">Auto Renewal:</p>
            <p className="font-medium">Enabled</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-medium text-gray-900">Interest History</h4>
        <div className="space-y-2">
          {[
            { month: 'January 2024', interest: '+58.33', rate: '3.5%' },
            { month: 'February 2024', interest: '+58.33', rate: '3.5%' },
            { month: 'March 2024', interest: '+58.33', rate: '3.5%' },
          ].map((entry, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-3 bg-white border rounded"
            >
              <div>
                <p className="font-medium">{entry.month}</p>
                <p className="text-sm text-gray-600">Interest Rate: {entry.rate}</p>
              </div>
              <p className="font-medium text-green-600">
                +{entry.interest} {deposit.currency}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex space-x-3">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
          Add Funds
        </button>
        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors">
          View Certificate
        </button>
      </div>
    </div>
  );
};
