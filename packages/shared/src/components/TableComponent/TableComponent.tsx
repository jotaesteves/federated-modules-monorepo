/** biome-ignore-all lint/suspicious/noArrayIndexKey: for now no id is provided for columns, //TODO: add unique ids for each column and cells */
/** biome-ignore-all lint/correctness/useUniqueElementIds: the id is used for custom events and css */
import type { ReactNode } from 'react';
import React from 'react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { cn } from '@/lib/utils';

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
  const [tableHeight, setTableHeight] = React.useState(0);

  const updateHeight = () => {
    const detailsEl = document.getElementById('detailsRef');
    const filterEl = document.getElementById('detailsScrollArea');

    if (detailsEl && filterEl) {
      const detailsHeight = detailsEl.offsetHeight;

      const prevEl = filterEl.previousElementSibling as HTMLElement | null;
      const scrollAreaHeight = prevEl ? prevEl.offsetHeight + 64 : 0;

      const finalHeight = detailsHeight - scrollAreaHeight;

      setTableHeight(finalHeight);
    }
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: avoids hook to trigger on each change
  React.useEffect(() => {
    updateHeight();
    window.addEventListener('resize', updateHeight);

    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  return (
    <div className="mt-6 h-full">
      <div className="pb-4">Filter fields</div>

      <ScrollArea id="detailsScrollArea" className="pr-4" style={{ height: `${tableHeight}px` }}>
        <Table className="h-full">
          <TableHeader>
            <TableRow>
              {headers.map((header, index) => (
                <TableHead
                  key={index}
                  className={cn(
                    'font-semibold text-2xs leading-tight text-gray-800 bg-white',
                    header.className,
                    index < headers.length - 1 && 'pr-4'
                  )}
                >
                  {header.label ?? ''}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody className="overflow-y-auto">
            {data.map((row, rowIndex) => (
              <TableRow key={rowIndex} className={row.className}>
                {row.cells.map((cell, cellIndex) => {
                  const col = headers[cellIndex];
                  const cellClasses = [cell.className ?? '', col?.boldColumn ? 'font-semibold' : '']
                    .filter(Boolean)
                    .join(' ');

                  return (
                    <TableCell
                      key={cellIndex}
                      className={cn(
                        'text-gray-600 text-2xs leading-tight font-medium',
                        row.cells.length - 1 !== cellIndex && 'pr-3',
                        cellClasses
                      )}
                    >
                      {cell.content}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <ScrollBar
          forceMount
          className="w-2 p-0 rounded-full bg-gray-300/35 [&>div]:bg-primary-500 [&>div]:rounded-full h-[calc(100%_-_1rem)]"
        />
        <ScrollBar
          orientation="horizontal"
          forceMount
          className="h-2 p-0 rounded-full bg-gray-300/35 [&>div]:bg-primary-500 [&>div]:rounded-full w-[calc(100%_-_1rem)]"
        />
      </ScrollArea>
    </div>
  );
};

export default TableComponent;
