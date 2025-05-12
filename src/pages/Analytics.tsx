import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Circle } from "lucide-react";

// Mock data
const monthlyData = [
  { month: "Jan", income: 26000000, expenses: 1550000, profit: 26450000 },
  { month: "Feb", income: 28200000, expenses: 1560000, profit: 26640000 },
  { month: "Mar", income: 28400000, expenses: 1570000, profit: 26830000 },
  { month: "Apr", income: 28500000, expenses: 1570000, profit: 26930000 },
  { month: "Maj", income: 28600000, expenses: 1580000, profit: 27020000 },
  { month: "Jun", income: 28400000, expenses: 1570000, profit: 26830000 },
  { month: "Jul", income: 28600000, expenses: 1580000, profit: 27020000 },
  { month: "Aug", income: 28800000, expenses: 1590000, profit: 27210000 },
  { month: "Sep", income: 28400000, expenses: 1570000, profit: 26830000 },
  { month: "Okt", income: 28600000, expenses: 1580000, profit: 27020000 },
  { month: "Nov", income: 28800000, expenses: 1590000, profit: 27210000 },
  { month: "Dec", income: 31449250, expenses: 1700000, profit: 29749250 },
];

const categoryData = [
  { name: "lagkassan", value: 35 },
  { name: "sport cup", value: 20 },
  { name: "utrustning", value: 15 },
  { name: "medlemsavgift", value: 10 },
  { name: "idrottförsäkring", value: 20 },
];

const COLORS = ["#a0b41c", "#b9cb49", "#8a9919", "#c6d566", "#738015"];

const incomeVsExpensesData = [
  { year: "2026", income: 10894950, expenses: 5979000 },
  { year: "2027", income: 54474750, expenses: 9895000 },
  { year: "2028", income: 196812000, expenses: 14040000 },
  { year: "2029", income: 339149250, expenses: 18685000 },
];

const profitData = [
  { year: "2020", amount: 4915950 },
  { year: "2021", amount: 44579750 },
  { year: "2022", amount: 182772000 },
  { year: "2023", amount: 320464250 },
];

const Analytics = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-aktivGreen-quaternary">
        Analys
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card className="border border-aktivGreen-base/20 shadow-md">
          <CardHeader className="bg-aktivGreen-base/10 border-b border-aktivGreen-base/20">
            <CardTitle className="text-aktivGreen-quaternary">
              Månatligt Kassaflöde
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value} SEK`, ""]} />
                  <Legend />
                  <Bar dataKey="income" name="Inkomst" fill="#a0b41c" />
                  <Bar dataKey="expenses" name="Utgifter" fill="#ef4444" />
                  <Bar dataKey="profit" name="Vinst" fill="#8b5cf6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-aktivGreen-base/20 shadow-md">
          <CardHeader className="bg-aktivGreen-base/10 border-b border-aktivGreen-base/20">
            <CardTitle className="text-aktivGreen-quaternary">
              Utgiftsfördelning
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="name"
                    label={({ name, percent }) => `${name}`}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`]} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6 border border-aktivGreen-base/20 shadow-md">
        <CardHeader className="bg-aktivGreen-base/10 border-b border-aktivGreen-base/20">
          <CardTitle className="text-aktivGreen-quaternary">
            Detaljerad Analys
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="incomeVsExpenses">
            <TabsList className="mb-4">
              <TabsTrigger value="incomeVsExpenses">
                Inkomster vs Utgifter
              </TabsTrigger>
              <TabsTrigger value="profit">Vinstutveckling</TabsTrigger>
            </TabsList>
            <TabsContent value="incomeVsExpenses">
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={incomeVsExpensesData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`${value} SEK`, ""]} />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="income"
                      name="Inkomst"
                      stroke="#a0b41c"
                      strokeWidth={2}
                      dot={{ r: 5 }}
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="expenses"
                      name="Utgifter"
                      stroke="#ef4444"
                      strokeWidth={2}
                      dot={{ r: 5 }}
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center p-4 border rounded-lg border-aktivGreen-base/20">
                  <Circle
                    className="text-profit mr-2"
                    size={16}
                    fill="#a0b41c"
                  />
                  <div>
                    <h3 className="text-sm font-medium text-aktivGreen-quaternary">
                      Inkomsttillväxt
                    </h3>
                    <p className="text-2xl font-bold text-aktivGreen-tertiary">
                      +35.3%
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Från 2020 till 2023
                    </p>
                  </div>
                </div>
                <div className="flex items-center p-4 border rounded-lg border-aktivGreen-base/20">
                  <Circle className="text-loss mr-2" size={16} fill="#ef4444" />
                  <div>
                    <h3 className="text-sm font-medium text-aktivGreen-quaternary">
                      Utgiftstillväxt
                    </h3>
                    <p className="text-2xl font-bold text-loss">+26.2%</p>
                    <p className="text-sm text-muted-foreground">
                      Från 2020 till 2023
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="profit">
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={profitData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip
                      formatter={(value) => [`${value} SEK`, "Belopp"]}
                    />
                    <Bar dataKey="amount" name="Vinst" fill="#a0b41c">
                      {profitData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill="#a0b41c" />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 p-4 border rounded-lg border-aktivGreen-base/20">
                <div className="flex items-center">
                  <Circle
                    className="text-primary mr-2"
                    size={16}
                    fill="#a0b41c"
                  />
                  <div>
                    <h3 className="text-sm font-medium text-aktivGreen-quaternary">
                      Vinsttillväxt
                    </h3>
                    <p className="text-2xl font-bold text-aktivGreen-tertiary">
                      +65.0%
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Från 2020 till 2023
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
