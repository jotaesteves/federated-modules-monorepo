import type React from 'react';
import { Badge } from 'shared/components/ui';

interface CreditCardData {
  id: string;
  name: string;
  cardNumber: string;
  accountNumber: string;
  initialValue: string;
  remainingValue: string;
  currency: string;
  status: 'active' | 'inactive' | 'blocked';
}

interface CreditCardDetailsProps {
  card: CreditCardData;
}

export const CreditCardDetails: React.FC<CreditCardDetailsProps> = ({ card }) => {
  const usedCredit =
    parseFloat(card.initialValue.replace(/[,.]/g, '')) -
    parseFloat(card.remainingValue.replace(/[,.]/g, ''));
  const usagePercentage = (usedCredit / parseFloat(card.initialValue.replace(/[,.]/g, ''))) * 100;

  return (
    <div className="p-6 space-y-6">
      <div className="border-b pb-4">
        <h3 className="text-xl font-semibold text-gray-900">{card.name}</h3>
        <p className="text-sm text-gray-600">Card: {card.cardNumber}</p>
        <p className="text-sm text-gray-600">Account: {card.accountNumber}</p>
        <Badge variant={card.status} className="mt-2">
          {card.status.toUpperCase()}
        </Badge>
      </div>

      {/* Credit Card Visual */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-6 rounded-xl text-white shadow-lg">
        <div className="flex justify-between items-start mb-8">
          <div>
            <p className="text-sm opacity-80">Credit Card</p>
            <p className="text-lg font-semibold">{card.name}</p>
          </div>
          <div className="text-right">
            <p className="text-xs opacity-80">Available Credit</p>
            <p className="text-xl font-bold">
              {card.remainingValue} {card.currency}
            </p>
          </div>
        </div>
        <p className="text-lg font-mono tracking-wider mb-4">{card.cardNumber}</p>
        <div className="flex justify-between items-end">
          <div>
            <p className="text-xs opacity-80">Valid Through</p>
            <p className="text-sm font-semibold">12/27</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold">MASTERCARD</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-orange-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Credit Limit</h4>
          <p className="text-2xl font-bold text-orange-600">
            {card.initialValue} {card.currency}
          </p>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Available Credit</h4>
          <p className="text-2xl font-bold text-green-600">
            {card.remainingValue} {card.currency}
          </p>
        </div>
      </div>

      {/* Credit Usage Bar */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-medium text-gray-900 mb-4">Credit Utilization</h4>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
          <div
            className={`h-4 rounded-full transition-all duration-300 ${
              usagePercentage > 80
                ? 'bg-red-500'
                : usagePercentage > 50
                  ? 'bg-yellow-500'
                  : 'bg-green-500'
            }`}
            style={{ width: `${usagePercentage}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>{usagePercentage.toFixed(1)}% Used</span>
          <span>
            {usedCredit.toLocaleString()} {card.currency} of {card.initialValue} {card.currency}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Interest Rate</h4>
          <p className="text-lg font-semibold text-gray-700">18.9% APR</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Minimum Payment</h4>
          <p className="text-lg font-semibold text-gray-700">250.00 {card.currency}</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Payment Due</h4>
          <p className="text-lg font-semibold text-gray-700">Feb 20, 2024</p>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-medium text-gray-900">Recent Transactions</h4>
        <div className="space-y-2">
          {[
            {
              id: 'tx1',
              date: '2024-01-15',
              merchant: 'Online Shopping',
              amount: '-125.00',
              category: 'Shopping'
            },
            {
              id: 'tx2',
              date: '2024-01-14',
              merchant: 'Restaurant',
              amount: '-45.50',
              category: 'Dining'
            },
            {
              id: 'tx3',
              date: '2024-01-13',
              merchant: 'Gas Station',
              amount: '-65.00',
              category: 'Fuel'
            },
            {
              id: 'tx4',
              date: '2024-01-12',
              merchant: 'Payment Received',
              amount: '+500.00',
              category: 'Payment'
            }
          ].map((transaction) => (
            <div
              key={transaction.id}
              className="flex justify-between items-center p-3 bg-white border rounded"
            >
              <div>
                <p className="font-medium">{transaction.merchant}</p>
                <p className="text-sm text-gray-600">
                  {transaction.date} • {transaction.category}
                </p>
              </div>
              <p
                className={`font-medium ${
                  transaction.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {transaction.amount} {card.currency}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
        <h4 className="font-medium text-red-800 mb-2">Payment Reminder</h4>
        <p className="text-sm text-red-700">
          Your minimum payment of 250.00 {card.currency} is due on February 20, 2024. Avoid late
          fees by setting up auto-pay.
        </p>
      </div>

      <div className="flex space-x-3">
        <button
          type="button"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Make Payment
        </button>
        <button
          type="button"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
        >
          Set Auto-Pay
        </button>
        <button
          type="button"
          className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors"
        >
          View Statement
        </button>
      </div>
    </div>
  );
};
