
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type TimeFilterProps = {
  onFilterChange: (period: string) => void;
  defaultValue?: string;
  className?: string;
  compact?: boolean;
};

const TimeFilter = ({ onFilterChange, defaultValue = "thisWeek", className = "", compact = false }: TimeFilterProps) => {
  return (
    <div className={`${className}`}>
      {!compact && <span className="text-sm font-medium mr-2 text-green-800">Time Period:</span>}
      <Select defaultValue={defaultValue} onValueChange={onFilterChange}>
        <SelectTrigger className={compact ? "w-[130px] bg-green-100 text-green-800" : "w-[180px]"}>
          <SelectValue placeholder="Select time period" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="today">Today</SelectItem>
          <SelectItem value="thisWeek">This Week</SelectItem>
          <SelectItem value="thisMonth">This Month</SelectItem>
          <SelectItem value="thisQuarter">This Quarter</SelectItem>
          <SelectItem value="thisYear">This Year</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default TimeFilter;
