import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowUpDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTransactions, setFilteredTransactions] =
    useState(transactions);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Transaction;
    direction: "ascending" | "descending";
  } | null>({ key: "date", direction: "descending" });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.trim() === "") {
      setFilteredTransactions(transactions);
    } else {
      const filtered = transactions.filter(
        (transaction) =>
          transaction.description.toLowerCase().includes(term.toLowerCase()) ||
          transaction.category.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredTransactions(filtered);
    }
  };

  const handleSort = (key: keyof Transaction) => {
    let direction: "ascending" | "descending" = "ascending";

    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }

    const sortedData = [...filteredTransactions].sort((a, b) => {
      if (a[key] < b[key]) return direction === "ascending" ? -1 : 1;
      if (a[key] > b[key]) return direction === "ascending" ? 1 : -1;
      return 0;
    });

    setFilteredTransactions(sortedData);
    setSortConfig({ key, direction });
  };

  const handleCategoryFilter = (category: string) => {
    if (category === "all") {
      setFilteredTransactions(transactions);
    } else {
      const filtered = transactions.filter(
        (transaction) => transaction.category === category
      );
      setFilteredTransactions(filtered);
    }
  };

  // Extract unique categories for filter
  const categories = [
    "all",
    ...Array.from(new Set(transactions.map((t) => t.category))),
  ];

  return (
    <Card className="dashboard-section animate-fade-in [animation-delay:600ms]">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center justify-between space-y-2 md:space-y-0">
          <CardTitle>Recent Transactions</CardTitle>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search transactions..."
                className="pl-8 w-full md:w-[200px]"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            <Select defaultValue="all" onValueChange={handleCategoryFilter}>
              <SelectTrigger className="w-full md:w-[150px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <Button
                    variant="ghost"
                    onClick={() => handleSort("date")}
                    className="flex items-center"
                  >
                    Date
                    <ArrowUpDown size={14} className="ml-1" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    onClick={() => handleSort("description")}
                    className="flex items-center"
                  >
                    Description
                    <ArrowUpDown size={14} className="ml-1" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    onClick={() => handleSort("category")}
                    className="flex items-center"
                  >
                    Category
                    <ArrowUpDown size={14} className="ml-1" />
                  </Button>
                </TableHead>
                <TableHead className="text-right">
                  <Button
                    variant="ghost"
                    onClick={() => handleSort("amount")}
                    className="flex items-center justify-end ml-auto"
                  >
                    Amount
                    <ArrowUpDown size={14} className="ml-1" />
                  </Button>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTransactions.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={4}
                    className="text-center py-10 text-muted-foreground"
                  >
                    No transactions found
                  </TableCell>
                </TableRow>
              ) : (
                filteredTransactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>{transaction.description}</TableCell>
                    <TableCell>
                      <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-secondary">
                        {transaction.category}
                      </span>
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
                      {Math.abs(transaction.amount).toLocaleString()} SEK
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionsTable;
