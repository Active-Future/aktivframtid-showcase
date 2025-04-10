
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
import { Briefcase, TrendingUp, ShoppingBag, Building, LaptopIcon, Plane, Package } from "lucide-react";

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

const getIconForCostType = (costType: string) => {
  switch(costType.toLowerCase()) {
    case 'salaries':
      return <Briefcase size={18} />;
    case 'marketing':
      return <TrendingUp size={18} />;
    case 'equipment':
      return <ShoppingBag size={18} />;
    case 'office rent':
      return <Building size={18} />;
    case 'software':
      return <LaptopIcon size={18} />;
    case 'travel':
      return <Plane size={18} />;
    default:
      return <Package size={18} />;
  }
};

const CostBreakdown = ({ costData, totalCost }: CostBreakdownProps) => {
  const sortedCostData = [...costData].sort((a, b) => b.value - a.value);

  return (
    <Card className="animate-fade-in [animation-delay:400ms] border border-aktivGreen-base/20 shadow-md">
      <CardHeader className="bg-aktivGreen-base/10 border-b border-aktivGreen-base/20">
        <CardTitle className="text-aktivGreen-quaternary">Cost Breakdown</CardTitle>
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
            <div className="mb-4 bg-aktivGreen-base/5 p-4 rounded-lg border border-aktivGreen-base/20">
              <h3 className="text-lg font-medium text-aktivGreen-quaternary mb-1">Total Cost</h3>
              <p className="text-2xl font-bold">{totalCost.toLocaleString()} SEK</p>
            </div>

            <div className="space-y-4">
              {sortedCostData.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-full" style={{backgroundColor: `${item.color}20`}}>
                        {getIconForCostType(item.name)}
                      </div>
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <span className="font-medium">{item.value.toLocaleString()} SEK</span>
                  </div>
                  <div className="mt-2">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-full rounded-full" 
                          style={{
                            width: `${(item.value / totalCost) * 100}%`,
                            backgroundColor: item.color || COST_COLORS[index % COST_COLORS.length] 
                          }}
                        ></div>
                      </div>
                      <span className="text-xs whitespace-nowrap">
                        {((item.value / totalCost) * 100).toFixed(1)}%
                      </span>
                    </div>
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
