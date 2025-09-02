/** biome-ignore-all lint/correctness/useUniqueElementIds: id is used for unique  */
'use client';

import * as React from 'react';
import type { DateRange } from 'react-day-picker';
import Icon from '@/components/Icon';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

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
    <div className="flex flex-col gap-3 max-w-[200px]">
      <Popover open={open} onOpenChange={handleOpenChange}>
        <PopoverTrigger asChild>
          <Button
            id="date"
            type="button"
            variant="outline"
            className="w-fit h-fit justify-between gap-3 items-center font-normal border border-[#A9ABAD] rounded-3xl text-[10px] py-[5px] px-3"
          >
            {range?.from && range?.to && range.from.getTime() !== range.to.getTime() ? (
              <div className="flex gap-2">
                <span>{range.from.toLocaleDateString()}</span>
                <span>-</span>
                <span>{range.to.toLocaleDateString()}</span>
              </div>
            ) : range?.from ? (
              <div className="flex gap-1">
                <span>{range.from.toLocaleDateString()}</span>
                <span>-</span>
                <span>...</span>
              </div>
            ) : (
              <span>Select date range</span>
            )}
            <Icon type="calendar" className="p-0 w-3 h-3" size="sm" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          {range && (
            <div className="bg-white px-3">
              <div className="pb-1 pt-2 text-xs text-gray-800 font-semibold border-b border-gray-800 flex items-center justify-center gap-4">
                <div className="flex gap-1">
                  {range?.from && range?.to ? (
                    <>
                      <span>{range.from.toLocaleDateString()}</span>
                      <span>-</span>
                      <span>{range.to.toLocaleDateString()}</span>
                    </>
                  ) : null}
                </div>
                <Icon type="calendar" className="p-0 w-3 h-3" />
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
