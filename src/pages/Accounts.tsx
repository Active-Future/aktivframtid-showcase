
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
import { Search, Wallet, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { users } from "@/lib/mockData";
import { Badge } from "@/components/ui/badge";

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
    <div>
      <div className="mb-6 bg-green-600 rounded-lg p-4 text-white">
        <h1 className="text-2xl font-bold">User Accounts</h1>
        <p className="text-sm opacity-90">Manage and view all user accounts and their spending</p>
      </div>

      <Card className="border border-green-200">
        <CardHeader className="bg-green-50 border-b border-green-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between space-y-2 md:space-y-0">
            <CardTitle className="text-green-800">Active Users</CardTitle>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-green-600" />
              <Input
                placeholder="Search by name or personnummer"
                className="pl-8 w-full md:w-[300px] border-green-200 focus:border-green-400 focus:ring-green-400"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="rounded-md border border-green-200">
            <Table>
              <TableHeader className="bg-green-50">
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>personnummer</TableHead>
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
                    <TableRow key={user.id}>
                      <TableCell>
                        <Link
                          to={`/accounts/${user.id}`}
                          className="flex items-center hover:underline text-green-700"
                        >
                          <span className="font-medium">{user.name}</span>
                        </Link>
                      </TableCell>
                      <TableCell>{user.personnummer}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <FileText size={16} className="text-green-600" />
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
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
    </div>
  );
};

export default Accounts;
