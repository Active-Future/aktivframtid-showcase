
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TransactionsTable from '@/components/dashboard/TransactionsTable';

// Mock data - in a real app, this would come from an API
const mockAllTransactions = [
  { id: '1', date: '2023-12-01', description: 'Månadslön', category: 'lön', amount: 9500, type: 'income' as const },
  { id: '2', date: '2023-12-03', description: 'Lägenhetshyra', category: 'boende', amount: 2500, type: 'expense' as const },
  { id: '3', date: '2023-12-05', description: 'Mataffär', category: 'mat', amount: 150, type: 'expense' as const },
  { id: '4', date: '2023-12-08', description: 'Frilansprojekt', category: 'frilans', amount: 1200, type: 'income' as const },
  { id: '5', date: '2023-12-10', description: 'Bensinstation', category: 'transport', amount: 60, type: 'expense' as const },
  { id: '6', date: '2023-12-12', description: 'Restaurang middag', category: 'mat', amount: 85, type: 'expense' as const },
  { id: '7', date: '2023-12-15', description: 'Frilansprojekt', category: 'frilans', amount: 1300, type: 'income' as const },
  { id: '8', date: '2023-12-18', description: 'Biobiljetter', category: 'nöje', amount: 35, type: 'expense' as const },
  { id: '9', date: '2023-12-20', description: 'Online shopping', category: 'shopping', amount: 120, type: 'expense' as const },
  { id: '10', date: '2023-12-22', description: 'Räkningar', category: 'förbrukning', amount: 200, type: 'expense' as const },
  { id: '11', date: '2023-12-25', description: 'Mataffär', category: 'mat', amount: 130, type: 'expense' as const },
  { id: '12', date: '2023-12-28', description: 'Månadskort transport', category: 'transport', amount: 80, type: 'expense' as const },
  { id: '13', date: '2023-11-01', description: 'Månadslön', category: 'lön', amount: 9500, type: 'income' as const },
  { id: '14', date: '2023-11-03', description: 'Lägenhetshyra', category: 'boende', amount: 2500, type: 'expense' as const },
  { id: '15', date: '2023-11-07', description: 'Bilreparation', category: 'transport', amount: 350, type: 'expense' as const },
  { id: '16', date: '2023-11-12', description: 'Bonusbetalning', category: 'lön', amount: 1500, type: 'income' as const },
  { id: '17', date: '2023-11-15', description: 'Frilansprojekt', category: 'frilans', amount: 800, type: 'income' as const },
  { id: '18', date: '2023-11-18', description: 'Årlig försäkring', category: 'försäkring', amount: 1200, type: 'expense' as const },
  { id: '19', date: '2023-11-22', description: 'Hembättring', category: 'boende', amount: 450, type: 'expense' as const },
  { id: '20', date: '2023-11-25', description: 'Semestershopping', category: 'shopping', amount: 520, type: 'expense' as const },
];

const incomeTransactions = mockAllTransactions.filter(t => t.type === 'income');
const expenseTransactions = mockAllTransactions.filter(t => t.type === 'expense');

const Transactions = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-aktivGreen-quaternary">Transaktioner</h1>
      
      <Card className="border border-aktivGreen-base/20 shadow-md">
        <CardHeader className="bg-aktivGreen-base/10 border-b border-aktivGreen-base/20">
          <CardTitle className="text-aktivGreen-quaternary">Transaktionshistorik</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">Alla Transaktioner</TabsTrigger>
              <TabsTrigger value="income">Inkomster</TabsTrigger>
              <TabsTrigger value="expenses">Utgifter</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <TransactionsTable transactions={mockAllTransactions} />
            </TabsContent>
            <TabsContent value="income">
              <TransactionsTable transactions={incomeTransactions} />
            </TabsContent>
            <TabsContent value="expenses">
              <TransactionsTable transactions={expenseTransactions} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Transactions;
