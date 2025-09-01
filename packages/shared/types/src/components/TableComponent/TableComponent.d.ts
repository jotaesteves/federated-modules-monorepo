import type { ReactNode } from 'react';
import type React from 'react';
interface TableHeaderData {
  label: string;
  className?: string;
  boldColumn?: boolean;
}
interface TableCellData {
  content: ReactNode;
  className?: string;
}
interface TableRowData {
  cells: TableCellData[];
  className?: string;
}
interface TableComponentProps {
  headers: TableHeaderData[];
  data: TableRowData[];
}
declare const TableComponent: React.FC<TableComponentProps>;
export default TableComponent;
//# sourceMappingURL=TableComponent.d.ts.map
