
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PieChart } from "lucide-react";
import { users } from "@/lib/mockData";
import { DonutChart } from "@/components/ui/donut-chart";

const UserDetail = () => {
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();

  const user = users.find((u) => u.id === userId);

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-96">
        <h2 className="text-2xl font-bold mb-4 text-aktivGreen-quaternary">User not found</h2>
      </div>
    );
  }

  // Calculate total spending by category
  const spendingByCategory = user.purchases.reduce((acc, purchase) => {
    if (!acc[purchase.category]) {
      acc[purchase.category] = 0;
    }
    acc[purchase.category] += purchase.amount;
    return acc;
  }, {} as Record<string, number>);

  // Prepare data for the donut chart
  const chartData = Object.entries(spendingByCategory).map(([name, value]) => ({
    name,
    value,
  }));

  const getTotalSpending = () => {
    return user.purchases.reduce(
      (total, purchase) => total + purchase.amount,
      0
    );
  };

  // Function to determine category color
  const getCategoryColor = (category: string) => {
    const colorMap: Record<string, string> = {
      "Team Accounts": "#a0b41c",
      Cups: "#c9db4c",
      Equipment: "#8c9e0f",
      Memberships: "#d2e07f",
      "Market Sales": "#5e6a0a",
    };
    return colorMap[category] || "#a0b41c";
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
        <Card className="w-full md:w-1/3 border-aktivGreen-base/20">
          <CardHeader className="bg-aktivGreen-base/10 border-b border-aktivGreen-base/20">
            <CardTitle className="text-aktivGreen-quaternary">{user.name}</CardTitle>
            <CardDescription>{user.personnummer}</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Spending:</span>
                <span className="font-medium text-aktivGreen-quaternary">
                  {getTotalSpending().toLocaleString()} SEK
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full md:w-2/3 border-aktivGreen-base/20">
          <CardHeader className="bg-aktivGreen-base/10 border-b border-aktivGreen-base/20">
            <CardTitle className="text-aktivGreen-quaternary">Spending by Category</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center pb-10">
            <div className="w-full max-w-xs">
              <DonutChart
                data={chartData}
                innerRadius={60}
                outerRadius={100}
                dataKey="value"
                nameKey="name"
                colors={Object.keys(spendingByCategory).map(getCategoryColor)}
                valueFormatter={(value) => `${value.toLocaleString()} SEK`}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-aktivGreen-base/20">
        <CardHeader className="bg-aktivGreen-base/10 border-b border-aktivGreen-base/20">
          <CardTitle className="text-aktivGreen-quaternary">Purchase History</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="rounded-md border border-aktivGreen-base/20">
            <Table>
              <TableHeader className="bg-aktivGreen-base/5">
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead className="text-right">Amount (SEK)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {user.purchases.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={4}
                      className="text-center py-10 text-muted-foreground"
                    >
                      No purchases found
                    </TableCell>
                  </TableRow>
                ) : (
                  user.purchases.map((purchase, index) => (
                    <TableRow key={index} className="hover:bg-aktivGreen-base/5">
                      <TableCell>{purchase.date}</TableCell>
                      <TableCell>{purchase.description}</TableCell>
                      <TableCell>
                        <span
                          className="inline-block px-2 py-1 rounded-full text-xs font-medium"
                          style={{
                            backgroundColor:
                              getCategoryColor(purchase.category) + "30",
                            color: getCategoryColor(purchase.category),
                          }}
                        >
                          {purchase.category}
                        </span>
                      </TableCell>
                      <TableCell className="text-right font-medium text-aktivGreen-quaternary">
                        {purchase.amount.toLocaleString()} SEK
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserDetail;
