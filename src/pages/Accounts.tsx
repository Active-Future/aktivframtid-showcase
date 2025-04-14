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
import { Search, Wallet, FileText, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import { users } from "@/lib/mockData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Accounts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.trim() === "") {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter(
        (user) =>
          user.name.toLowerCase().includes(term.toLowerCase()) ||
          user.personnummer.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  };

  const getTotalSpending = (userId: string) => {
    const user = users.find((u) => u.id === userId);
    if (!user) return 0;

    return user.purchases.reduce(
      (total, purchase) => total + purchase.amount,
      0
    );
  };

  return (
    <Card className="border border-aktivGreen-base/20 shadow-md">
      <CardHeader className="bg-aktivGreen-base/10 border-b border-aktivGreen-base/20">
        <div className="flex flex-col md:flex-row md:items-center justify-between space-y-2 md:space-y-0">
          <CardTitle className="text-aktivGreen-quaternary">
            User Accounts
          </CardTitle>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-aktivGreen-tertiary" />
            <Input
              placeholder="Search by name or personnummer"
              className="pl-8 w-full md:w-[300px] border-aktivGreen-base/30 focus:border-aktivGreen-base focus:ring-aktivGreen-base rounded-lg"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="rounded-lg border border-aktivGreen-base/20 overflow-hidden">
          <Table>
            <TableHeader className="bg-aktivGreen-base/10">
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Personnummer</TableHead>
                <TableHead>Invoices</TableHead>
                <TableHead className="text-right">
                  Total Spending (SEK)
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={4}
                    className="text-center py-10 text-muted-foreground"
                  >
                    No users found
                  </TableCell>
                </TableRow>
              ) : (
                filteredUsers.map((user) => (
                  <TableRow
                    key={user.id}
                    className="hover:bg-aktivGreen-base/5"
                  >
                    <TableCell>
                      <Link
                        to={`/accounts/${user.id}`}
                        className="flex items-center hover:underline text-aktivGreen-tertiary font-medium"
                      >
                        {user.name}
                      </Link>
                    </TableCell>
                    <TableCell>{user.personnummer}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <FileText size={16} className="text-aktivGreen-base" />
                        <Badge
                          variant="outline"
                          className="bg-aktivGreen-base/10 text-aktivGreen-tertiary border-aktivGreen-base/20"
                        >
                          {user.purchases.length} invoices
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell className="text-right font-medium">
                      {getTotalSpending(user.id).toLocaleString()} SEK
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

export default Accounts;
