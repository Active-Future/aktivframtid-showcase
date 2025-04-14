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
import { Button } from "@/components/ui/button";
import { ArrowLeft, PieChart } from "lucide-react";
import { users } from "@/lib/mockData";
import { DonutChart } from "@/components/ui/donut-chart";

const UserDetail = () => {
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();

  const user = users.find((u) => u.id === userId);

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-96">
        <h2 className="text-2xl font-bold mb-4">User not found</h2>
        <Button onClick={() => navigate("/accounts")}>
          Return to Accounts
        </Button>
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
      <Button
        variant="ghost"
        className="mb-6"
        onClick={() => navigate("/accounts")}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Accounts
      </Button>

      <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
        <Card className="w-full md:w-1/3">
          <CardHeader>
            <CardTitle>{user.name}</CardTitle>
            <CardDescription>{user.personnummer}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Spending:</span>
                <span className="font-medium">
                  {getTotalSpending().toLocaleString()} SEK
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full md:w-2/3">
          <CardHeader>
            <CardTitle>Spending by Category</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center pb-10">
            {/* Added padding-bottom */}
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

      <Card>
        <CardHeader>
          <CardTitle>Purchase History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
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
                    <TableRow key={index}>
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
                      <TableCell className="text-right font-medium">
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
