import type React from 'react';
import { Badge } from 'shared/components/ui';

interface DebitCardData {
  id: string;
  name: string;
  balance: string;
  currency: string;
  status: 'active' | 'inactive';
}

interface DebitCardDetailsProps {
  card: DebitCardData;
}

export const DebitCardDetails: React.FC<DebitCardDetailsProps> = ({ card }) => {
  return (
    <div className="p-6 space-y-6">
      <div className="border-b pb-4">
        <h3 className="text-xl font-semibold text-gray-900">{card.name}</h3>
        <p className="text-sm text-gray-600">Card Number: **** **** **** {card.id.slice(-4)}</p>
        <Badge variant={card.status} className="mt-2">
          {card.status.toUpperCase()}
        </Badge>
      </div>

      {/* Card Visual */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white shadow-lg">
        <div className="flex justify-between items-start mb-8">
          <div>
            <p className="text-sm opacity-80">Debit Card</p>
            <p className="text-lg font-semibold">{card.name}</p>
          </div>
          <div className="text-right">
            <p className="text-xs opacity-80">Available Balance</p>
            <p className="text-xl font-bold">
              {card.balance} {card.currency}
            </p>
          </div>
        </div>
        <p className="text-lg font-mono tracking-wider mb-4">**** **** **** {card.id.slice(-4)}</p>
        <div className="flex justify-between items-end">
          <div>
            <p className="text-xs opacity-80">Valid Through</p>
            <p className="text-sm font-semibold">12/26</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold">VISA</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Daily Limit</h4>
          <p className="text-lg font-semibold text-gray-700">2,000.00 {card.currency}</p>
          <p className="text-sm text-gray-600">Used today: 150.00 {card.currency}</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Monthly Limit</h4>
          <p className="text-lg font-semibold text-gray-700">50,000.00 {card.currency}</p>
          <p className="text-sm text-gray-600">Used this month: 8,750.00 {card.currency}</p>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-medium text-gray-900">Recent Card Transactions</h4>
        <div className="space-y-2">
          {[
            {
              id: 'tx1',
              date: '2024-01-15',
              merchant: 'Shoprite Supermarket',
              amount: '-85.50',
              location: 'Maputo'
            },
            {
              id: 'tx2',
              date: '2024-01-14',
              merchant: 'ATM Withdrawal',
              amount: '-100.00',
              location: 'Polana'
            },
            {
              id: 'tx3',
              date: '2024-01-13',
              merchant: 'Fuel Station',
              amount: '-75.00',
              location: 'Sommerschield'
            }
          ].map((transaction) => (
            <div
              key={transaction.id}
              className="flex justify-between items-center p-3 bg-white border rounded"
            >
              <div>
                <p className="font-medium">{transaction.merchant}</p>
                <p className="text-sm text-gray-600">
                  {transaction.date} • {transaction.location}
                </p>
              </div>
              <p className="font-medium text-red-600">
                {transaction.amount} {card.currency}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
        <h4 className="font-medium text-yellow-800 mb-2">Security Settings</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Contactless Payments:</span>
            <span className="text-green-600 font-medium">Enabled</span>
          </div>
          <div className="flex justify-between">
            <span>Online Purchases:</span>
            <span className="text-green-600 font-medium">Enabled</span>
          </div>
          <div className="flex justify-between">
            <span>International Transactions:</span>
            <span className="text-red-600 font-medium">Disabled</span>
          </div>
        </div>
      </div>

      <div className="flex space-x-3">
        <button
          type="button"
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
        >
          Block Card
        </button>
        <button
          type="button"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Update Limits
        </button>
        <button
          type="button"
          className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors"
        >
          Request New PIN
        </button>
      </div>
    </div>
  );
};
