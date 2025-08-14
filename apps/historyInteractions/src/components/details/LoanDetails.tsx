import React from 'react';
import { Badge } from 'shared/components/ui';

interface LoanData {
  id: string;
  accountNumber: string;
  name: string;
  initialValue: string;
  remainingValue: string;
  currency: string;
  status: 'active' | 'inactive';
}

interface LoanDetailsProps {
  loan: LoanData;
}

export const LoanDetails: React.FC<LoanDetailsProps> = ({ loan }) => {
  const progress =
    ((parseFloat(loan.initialValue.replace(/[,\.]/g, '')) -
      parseFloat(loan.remainingValue.replace(/[,\.]/g, ''))) /
      parseFloat(loan.initialValue.replace(/[,\.]/g, ''))) *
    100;

  return (
    <div className="p-6 space-y-6">
      <div className="border-b pb-4">
        <h3 className="text-xl font-semibold text-gray-900">{loan.name}</h3>
        <p className="text-sm text-gray-600">Account: {loan.accountNumber}</p>
        <p className="text-sm text-gray-600">Loan ID: {loan.id}</p>
        <Badge variant={loan.status} className="mt-2">
          {loan.status.toUpperCase()}
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-red-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Outstanding Balance</h4>
          <p className="text-2xl font-bold text-red-600">
            {loan.remainingValue} {loan.currency}
          </p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Original Amount</h4>
          <p className="text-2xl font-bold text-blue-600">
            {loan.initialValue} {loan.currency}
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-medium text-gray-900 mb-4">Loan Progress</h4>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
          <div
            className="bg-green-600 h-4 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>{progress.toFixed(1)}% Paid</span>
          <span>{(100 - progress).toFixed(1)}% Remaining</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Interest Rate</h4>
          <p className="text-lg font-semibold text-gray-700">12.5% APR</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Monthly Payment</h4>
          <p className="text-lg font-semibold text-gray-700">4,523.50 {loan.currency}</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Next Payment</h4>
          <p className="text-lg font-semibold text-gray-700">Feb 15, 2024</p>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-medium text-gray-900">Payment History</h4>
        <div className="space-y-2">
          {[
            {
              date: '2024-01-15',
              amount: '4,523.50',
              principal: '3,200.00',
              interest: '1,323.50',
              status: 'paid',
            },
            {
              date: '2023-12-15',
              amount: '4,523.50',
              principal: '3,180.00',
              interest: '1,343.50',
              status: 'paid',
            },
            {
              date: '2023-11-15',
              amount: '4,523.50',
              principal: '3,160.00',
              interest: '1,363.50',
              status: 'paid',
            },
          ].map((payment, index) => (
            <div key={index} className="p-4 bg-white border rounded">
              <div className="flex justify-between items-center mb-2">
                <p className="font-medium">Payment - {payment.date}</p>
                <Badge variant="active" className="text-xs">
                  {payment.status.toUpperCase()}
                </Badge>
              </div>
              <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                <div>
                  <p>
                    Total: {payment.amount} {loan.currency}
                  </p>
                </div>
                <div>
                  <p>
                    Principal: {payment.principal} {loan.currency}
                  </p>
                </div>
                <div>
                  <p>
                    Interest: {payment.interest} {loan.currency}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
        <h4 className="font-medium text-yellow-800 mb-2">Payment Information</h4>
        <div className="space-y-1 text-sm text-yellow-700">
          <p>• Next payment due: February 15, 2024</p>
          <p>• Auto-pay is enabled from account {loan.accountNumber}</p>
          <p>• Early payment accepted without penalty</p>
        </div>
      </div>

      <div className="flex space-x-3">
        <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
          Make Payment
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
          Payment Schedule
        </button>
        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors">
          Download Statement
        </button>
      </div>
    </div>
  );
};
