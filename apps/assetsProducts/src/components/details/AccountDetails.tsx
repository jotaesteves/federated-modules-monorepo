import type React from 'react';
import { Badge } from 'shared/components/ui';

interface AccountData {
  id: string;
  name: string;
  balance: string;
  currency: string;
  status: 'active' | 'inactive';
}

interface AccountDetailsProps {
  account: AccountData;
}

export const AccountDetails: React.FC<AccountDetailsProps> = ({ account }) => {
  return (
    <div className="p-6 space-y-6">
      <div className="border-b pb-4">
        <h3 className="text-xl font-semibold text-gray-900">{account.name}</h3>
        <p className="text-sm text-gray-600">Account Number: {account.id}</p>
        <Badge variant={account.status} className="mt-2">
          {account.status.toUpperCase()}
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Account Balance</h4>
          <p className="text-2xl font-bold text-green-600">
            {account.balance} {account.currency}
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Account Type</h4>
          <p className="text-gray-700">Checking Account</p>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-medium text-gray-900">Recent Transactions</h4>
        <div className="space-y-2">
          {[
            {
              id: 'tx1',
              date: '2024-01-15',
              description: 'Direct Deposit',
              amount: '+2,500.00',
              type: 'credit'
            },
            {
              id: 'tx2',
              date: '2024-01-14',
              description: 'ATM Withdrawal',
              amount: '-100.00',
              type: 'debit'
            },
            {
              id: 'tx3',
              date: '2024-01-13',
              description: 'Online Purchase',
              amount: '-45.50',
              type: 'debit'
            }
          ].map((transaction) => (
            <div
              key={transaction.id}
              className="flex justify-between items-center p-3 bg-white border rounded"
            >
              <div>
                <p className="font-medium">{transaction.description}</p>
                <p className="text-sm text-gray-600">{transaction.date}</p>
              </div>
              <p
                className={`font-medium ${
                  transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {transaction.amount} {account.currency}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex space-x-3">
        <button
          type="button"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Transfer Money
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
