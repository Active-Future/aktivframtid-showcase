
import * as React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { ChartContainer, ChartTooltipContent, ChartConfig } from "./chart";
import { useIsMobile } from "@/hooks/use-mobile";

interface DonutChartProps {
  data: Array<{ name: string; value: number }>;
  innerRadius?: number;
  outerRadius?: number;
  dataKey?: string;
  nameKey?: string;
  colors?: string[];
  valueFormatter?: (value: number) => string;
}

export const DonutChart = ({
  data,
  innerRadius = 60,
  outerRadius = 100,
  dataKey = "value",
  nameKey = "name",
  colors = ["#a0b41c", "#718F00", "#4C6C00", "#2C4A00", "#5ced73", "#d8e182", "#8a9919"],
  valueFormatter = (value: number) => `${value}`,
}: DonutChartProps) => {
  const isMobile = useIsMobile();
  
  // Adjust sizes for mobile
  const mobileInnerRadius = innerRadius * 0.8;
  const mobileOuterRadius = outerRadius * 0.8;

  // Create config for the chart tooltip
  const chartConfig: ChartConfig = data.reduce((acc, item, index) => {
    acc[item[nameKey as keyof typeof item] as string] = {
      color: colors[index % colors.length],
    };
    return acc;
  }, {} as ChartConfig);

  // Calculate total for percentage calculation
  const total = data.reduce((sum, item) => sum + item[dataKey as keyof typeof item] as number, 0);

  // Custom label renderer to avoid overlapping
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }: any) => {
    // Only show labels for segments with percent > 5%
    if (percent < 0.05) return null;
    // On mobile, only show for segments with percent > 10%
    if (isMobile && percent < 0.1) return null;

    const RADIAN = Math.PI / 180;
    // Calculate the position for the label
    const radius = outerRadius * 1.2;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    // Position the text anchor based on which side of the chart the label is
    const textAnchor = x > cx ? 'start' : 'end';

    return (
      <text 
        x={x} 
        y={y} 
        fill={colors[index % colors.length]}
        textAnchor={textAnchor}
        dominantBaseline="central"
        fontSize={isMobile ? "10" : "12"}
        fontWeight="600"
      >
        {`${name} ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <ChartContainer className="h-full w-full" config={chartConfig}>
      <div className="h-[200px] sm:h-[250px] lg:h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              innerRadius={isMobile ? mobileInnerRadius : innerRadius}
              outerRadius={isMobile ? mobileOuterRadius : outerRadius}
              fill="#8884d8"
              dataKey={dataKey}
              nameKey={nameKey}
              paddingAngle={2}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                  strokeWidth={1}
                />
              ))}
            </Pie>
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0];
                  const value = data.value as number;
                  return (
                    <div className="rounded-lg border bg-background p-2 shadow-md">
                      <div className="flex flex-col gap-0.5">
                        <p className="text-sm font-medium">{data.name}</p>
                        <p className="text-xs">
                          {valueFormatter(value)}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {`${(value / total * 100).toFixed(1)}%`}
                        </p>
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </ChartContainer>
  );
};
