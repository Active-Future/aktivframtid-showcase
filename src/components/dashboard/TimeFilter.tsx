import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

type TimeFilterProps = {
  onFilterChange: (period: string) => void;
};

const TimeFilter = ({ onFilterChange }: TimeFilterProps) => {
  return (
    //ADD COLOR HERE IF HE WANTS FOR THE CARD OF TIME FILTER
    <Card className="mb-6 animate-fade-in">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium">Time Period:</h3>
          <Select defaultValue="thisWeek" onValueChange={onFilterChange}>
            <SelectTrigger
              className="w-[180px] ring-offset-0 focus:ring-0 focus:ring-offset-0"
              style={{ backgroundColor: "rgb(200,212,100)" }}
            >
              <SelectValue
                placeholder="Select time period"
                className="text-white"
              />
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
