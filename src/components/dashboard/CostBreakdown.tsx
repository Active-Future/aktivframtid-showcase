
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Progress } from "@/components/ui/progress";

const COST_COLORS = ["#a0b41c", "#718F00", "#4C6C00", "#2C4A00", "#5ced73", "#d8e182", "#8a9919"];

type CostData = {
  name: string;
  value: number;
  color: string;
};

type CostBreakdownProps = {
  costData: CostData[];
  totalCost: number;
};

const CostBreakdown = ({ costData, totalCost }: CostBreakdownProps) => {
  const sortedCostData = [...costData].sort((a, b) => b.value - a.value);

  return (
    <Card className="animate-fade-in [animation-delay:400ms] border-green-200">
      <CardHeader className="bg-green-50 border-b border-green-100">
        <CardTitle className="text-green-800">Cost Breakdown</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={costData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  dataKey="value"
                  nameKey="name"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {costData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        entry.color ||
                        COST_COLORS[index % COST_COLORS.length]
                      }
                    />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value.toLocaleString()} SEK`, ""]} />
                <Legend layout="horizontal" verticalAlign="bottom" align="center" />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-4">
            <div className="mb-4">
              <h3 className="text-lg font-medium text-[#4C6C00] mb-1">Total Cost</h3>
              <p className="text-2xl font-bold">{totalCost.toLocaleString()} SEK</p>
            </div>

            <div className="space-y-3">
              {sortedCostData.map((item, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">{item.name}</span>
                    <span className="text-sm font-medium">{item.value.toLocaleString()} SEK</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress 
                      value={(item.value / totalCost) * 100} 
                      className="h-2"
                      style={{ 
                        backgroundColor: "#eaeaea",
                        "--primary": item.color || COST_COLORS[index % COST_COLORS.length]
                      } as React.CSSProperties}
                    />
                    <span className="text-xs text-muted-foreground">
                      {((item.value / totalCost) * 100).toFixed(1)}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CostBreakdown;
