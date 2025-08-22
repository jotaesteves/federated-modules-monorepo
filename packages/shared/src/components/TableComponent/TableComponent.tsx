import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { ReactNode } from 'react';

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

const TableComponent: React.FC<TableComponentProps> = ({ headers, data }) => {
  return (
    <div className="mt-6">
      <div className="pb-4">Filter fields</div>

      <Table>
        <TableHeader>
          <TableRow>
            {headers.map((header, index) => (
              <TableHead
                key={index}
                className={`font-semibold text[10px] text-gray-800 sticky top-0 z-10 ${header.className ?? ''}`}
              >
                {header.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
      </Table>

      <ScrollArea>
        <div className="max-h-[300px]">
          <Table>
            <TableBody>
              {data.map((row, rowIndex) => (
                <TableRow key={rowIndex} className={row.className}>
                  {row.cells.map((cell, cellIndex) => {
                    const col = headers[cellIndex];
                    const cellClasses = [
                      cell.className ?? '',
                      col.boldColumn ? 'font-semibold' : '',
                    ]
                      .filter(Boolean)
                      .join(' ');

                    return (
                      <TableCell
                        key={cellIndex}
                        className={`text-gray-600 text-xs font-medium ${cellClasses}`}
                      >
                        {cell.content}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <ScrollBar
          id="scroll-bar"
          forceMount
          className="w-2 p-0 rounded-full bg-gray-300/35 [&>div]:bg-primary-500 [&>div]:rounded-full h-[calc(100%_-_1rem)]"
        />
      </ScrollArea>
    </div>
  );
};

export default TableComponent;
