
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TrendingUp, TrendingDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Transaction = {
  id: string;
  date: string;
  description: string;
  category: string;
  amount: number;
  type: "income" | "expense";
};

type TransactionsTableProps = {
  transactions: Transaction[];
};

const TransactionsTable = ({ transactions }: TransactionsTableProps) => {
  return (
    <div className="dashboard-section">
      <h2 className="dashboard-section-title text-aktivGreen-quaternary">Latest Transactions</h2>
      <div className="rounded-lg border border-aktivGreen-base/20 overflow-hidden">
        <Table>
          <TableHeader className="bg-aktivGreen-base/10">
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id} className="hover:bg-aktivGreen-base/5">
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.description}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className="bg-aktivGreen-base/10 text-aktivGreen-tertiary border-aktivGreen-base/20"
                  >
                    {transaction.category}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div
                    className={cn(
                      "flex items-center space-x-1",
                      transaction.type === "income"
                        ? "text-profit"
                        : "text-loss"
                    )}
                  >
                    {transaction.type === "income" ? (
                      <TrendingUp size={16} />
                    ) : (
                      <TrendingDown size={16} />
                    )}
                    <span className="capitalize">{transaction.type}</span>
                  </div>
                </TableCell>
                <TableCell
                  className={cn(
                    "text-right font-medium",
                    transaction.type === "income"
                      ? "text-profit"
                      : "text-loss"
                  )}
                >
                  {transaction.type === "income" ? "+" : "-"}
                  {transaction.amount.toLocaleString()} SEK
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TransactionsTable;
