import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const EXPENSE_COLORS = ["#a0b41c", "#b9cb49", "#8a9919", "#c6d566", "#738015"];

type ExpenseData = {
  name: string;
  value: number;
  color: string;
};

type TimeSeriesData = {
  date: string;
  income: number;
  expenses: number;
};

type CashFlowChartsProps = {
  expenseData: ExpenseData[];
  timeSeriesData: TimeSeriesData[];
  categoryComparisonData: Array<{
    category: string;
    income: number;
    expenses: number;
  }>;
};

const CashFlowCharts = ({
  expenseData,
  timeSeriesData,
  categoryComparisonData,
}: CashFlowChartsProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 dashboard-section">
      <Card className="lg:col-span-1 animate-fade-in [animation-delay:400ms]">
        <CardHeader>
          <CardTitle>Loans taken out by Category</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={expenseData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  nameKey="name"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {expenseData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        entry.color ||
                        EXPENSE_COLORS[index % EXPENSE_COLORS.length]
                      }
                    />
                  ))}
                </Pie>
                <Legend
                  layout="horizontal"
                  verticalAlign="bottom"
                  align="center"
                />
                <Tooltip formatter={(value) => [`${value} SEK`, "Amount"]} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="lg:col-span-1 animate-fade-in [animation-delay:500ms]">
        <CardHeader>
          <CardTitle>Cash Flow Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="area">
            <TabsList className="mb-4">
              <TabsTrigger value="area">Area</TabsTrigger>
              <TabsTrigger value="bar">Bar</TabsTrigger>
            </TabsList>
            <TabsContent value="area">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={timeSeriesData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`${value} SEK`, ""]} />
                    <Area
                      type="monotone"
                      dataKey="income"
                      name="Income"
                      stroke="#a0b41c"
                      fill="rgba(160, 180, 28, 0.2)"
                    />
                    <Area
                      type="monotone"
                      dataKey="expenses"
                      name="Expenses"
                      stroke="#ef4444"
                      fill="rgba(239, 68, 68, 0.2)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            <TabsContent value="bar" className="h-[300px]">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={categoryComparisonData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`${value} SEK`, ""]} />
                    <Legend />
                    <Bar dataKey="income" name="Income" fill="#a0b41c" />
                    <Bar dataKey="expenses" name="Expenses" fill="#ef4444" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default CashFlowCharts;
