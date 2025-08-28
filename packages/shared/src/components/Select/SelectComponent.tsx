import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

interface SelectItemType {
  value: string;
  label: string | React.ReactNode;
}

interface SelectProps {
  name?: string;
  placeholder?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  items: SelectItemType[];
}

const SelectComponent: React.FC<SelectProps> = ({
  name,
  placeholder,
  value,
  onValueChange,
  items,
}) => {
  return (
    <Select name={name} value={value} onValueChange={onValueChange}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {items.map((item) => (
          <SelectItem key={item.value} value={item.value} className="flex items-center">
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectComponent;
