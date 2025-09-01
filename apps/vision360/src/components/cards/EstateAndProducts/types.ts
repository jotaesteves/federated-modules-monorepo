export interface FinancialItem {
  name: string;
  amount: string;
  currency: string;
}

export interface FinancialSection {
  title: string;
  total: {
    amount: string;
    currency: string;
  };
  items: FinancialItem[];
}

export interface EstateAndProductsData {
  assets: FinancialSection;
  liabilities: FinancialSection;
}
