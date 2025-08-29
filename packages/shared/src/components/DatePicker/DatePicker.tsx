'use client';

import * as React from 'react';
import { ChevronDownIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import type { DateRange } from 'react-day-picker';
import Icon from '@/components/Icon';

const DatePicker: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [range, setRange] = React.useState<DateRange | undefined>(undefined);
  const [month, setMonth] = React.useState<Date>(new Date());
  const [isFirstSelection, setIsFirstSelection] = React.useState(true);

  const handleSelect = (newRange: DateRange | undefined) => {
    if (isFirstSelection && newRange?.from && !newRange?.to) {
      setRange(newRange);
      setIsFirstSelection(false);
      return;
    }

    if (!isFirstSelection && newRange?.from && newRange?.to) {
      setRange(newRange);
      setMonth(newRange.from);
      setOpen(false);
      setIsFirstSelection(true);
    }

    setRange(newRange);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (newOpen) {
      setIsFirstSelection(true);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <Popover open={open} onOpenChange={handleOpenChange}>
        <PopoverTrigger asChild>
          <Button variant="outline" id="date" className="w-64 justify-between font-normal">
            {range?.from && range?.to && range.from.getTime() !== range.to.getTime()
              ? `${range.from.toLocaleDateString()} - ${range.to.toLocaleDateString()}`
              : range?.from
                ? `${range.from.toLocaleDateString()} - ...`
                : 'Select date range'}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          {range && (
            <div className="bg-white px-3">
              <div className="pb-1 pt-2 text-xs text-gray-800 font-semibold border-b border-gray-800 flex items-center justify-center gap-4">
                <div className="flex gap-4">
                  {range?.from && range?.to ? (
                    <>
                      <span>{range.from.toLocaleDateString()}</span>
                      <span>-</span>
                      <span>{range.to.toLocaleDateString()}</span>
                    </>
                  ) : null}
                </div>
                <Icon type="calendary" className="p-0 w-3 h-3" />
              </div>
            </div>
          )}

          <Calendar
            mode="range"
            numberOfMonths={1}
            captionLayout="label"
            selected={range}
            month={month}
            onMonthChange={setMonth}
            onSelect={handleSelect}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DatePicker;
