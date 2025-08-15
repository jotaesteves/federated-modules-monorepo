import React from 'react';
import type { MemosData } from '../../types/occurrence.types';

interface MemoCardProps {
  memo: MemosData;
}

export const MemoCard: React.FC<MemoCardProps> = ({ memo }) => {
  return (
    <div className="flex flex-col w-full space-y-1">
      <h3 className="text-sm font-bold">Memo - {memo.name}</h3>
      <p>Número de conta - {memo.accountNumber}</p>
      <div className="flex justify-between items-center">
        <p className="text-xs text-gray-500">Data</p>
        <p className="text-xs text-gray-500 text-right">17/01/2024</p>
      </div>
    </div>
  );
};

// React Preview
const MemoCardPreview = () => {
  const mockMemo: MemosData = {
    id: '1',
    name: 'Seguro de Vida',
    accountNumber: '1122334455',
    initialValue: '150,000.00',
    currency: 'MZN',
    status: 'ativo',
  };

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="mb-4 font-semibold">Memo Card Preview</h3>
      <MemoCard memo={mockMemo} />
    </div>
  );
};

export default MemoCardPreview;
