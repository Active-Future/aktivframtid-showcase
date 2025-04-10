
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';

type TimeFilterProps = {
  onFilterChange: (period: string) => void;
};

const TimeFilter = ({ onFilterChange }: TimeFilterProps) => {
  return (
    <Card className="mb-6 animate-fade-in">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium">Time Period:</h3>
          <Select defaultValue="thisWeek" onValueChange={onFilterChange}>
            <SelectTrigger className="w-[180px]">
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
      </CardContent>
    </Card>
  );
};

export default TimeFilter;
