
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type TimeFilterProps = {
  onFilterChange: (period: string) => void;
};

const TimeFilter = ({ onFilterChange }: TimeFilterProps) => {
  const [selectedFilter, setSelectedFilter] = useState("thisWeek");

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
    onFilterChange(filter);
  };

  const filters = [
    { id: "thisWeek", label: "This Week" },
    { id: "lastWeek", label: "Last Week" },
    { id: "thisMonth", label: "This Month" },
    { id: "thisQuarter", label: "This Quarter" },
    { id: "thisYear", label: "This Year" },
  ];

  return (
    <div className="flex overflow-x-auto pb-4 mb-6 no-scrollbar">
      <div className="flex space-x-2">
        {filters.map((filter) => (
          <Button
            key={filter.id}
            variant="outline"
            size="sm"
            onClick={() => handleFilterClick(filter.id)}
            className={cn(
              "border-aktivGreen-base/20 text-aktivGreen-quaternary transition-all whitespace-nowrap",
              selectedFilter === filter.id
                ? "bg-aktivGreen-base text-white hover:bg-aktivGreen-base/90"
                : "bg-background hover:bg-aktivGreen-base/10"
            )}
          >
            {filter.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TimeFilter;
