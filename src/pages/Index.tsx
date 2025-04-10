
import React, { useState } from 'react';
import CashFlowSummary from '@/components/dashboard/CashFlowSummary';
import CashFlowCharts from '@/components/dashboard/CashFlowCharts';
import TransactionsTable from '@/components/dashboard/TransactionsTable';
import TimeFilter from '@/components/dashboard/TimeFilter';
import CostBreakdown from '@/components/dashboard/CostBreakdown'; 

// Mock data for expenses
const mockExpenseData = [
  { name: 'Team Accounts', value: 1200, color: '#a0b41c' },
  { name: 'Cups', value: 2500, color: '#b9cb49' },
  { name: 'Equipment', value: 450, color: '#8a9919' },
  { name: 'Memberships', value: 350, color: '#c6d566' },
  { name: 'Market Sales', value: 400, color: '#738015' },
];

// Mock data for time series
const mockTimeSeriesData = [
  { date: 'Jan', income: 8000, expenses: 6200 },
  { date: 'Feb', income: 7800, expenses: 5900 },
  { date: 'Mar', income: 9500, expenses: 7100 },
  { date: 'Apr', income: 8900, expenses: 6700 },
  { date: 'May', income: 9200, expenses: 6500 },
  { date: 'Jun', income: 8700, expenses: 7100 },
  { date: 'Jul', income: 9600, expenses: 7400 },
  { date: 'Aug', income: 10200, expenses: 7800 },
  { date: 'Sep', income: 9800, expenses: 7200 },
  { date: 'Oct', income: 10500, expenses: 7900 },
  { date: 'Nov', income: 11000, expenses: 8200 },
  { date: 'Dec', income: 12000, expenses: 8800 },
];

// Mock data for category comparison
const mockCategoryComparisonData = [
  { category: 'Team Accounts', income: 9500, expenses: 0 },
  { category: 'Cups', income: 2500, expenses: 0 },
  { category: 'Equipment', income: 0, expenses: 2500 },
  { category: 'Memberships', income: 0, expenses: 1200 },
  { category: 'Market Sales', income: 0, expenses: 450 },
];

// Mock data for transactions
const mockTransactions = [
  { id: '1', date: '2023-12-01', description: 'Monthly Salary', category: 'salary', amount: 9500, type: 'income' as const },
  { id: '2', date: '2023-12-03', description: 'Equipment Purchase', category: 'equipment', amount: 2500, type: 'expense' as const },
  { id: '3', date: '2023-12-05', description: 'Team Account Fees', category: 'team', amount: 150, type: 'expense' as const },
  { id: '4', date: '2023-12-08', description: 'Market Sales Revenue', category: 'sales', amount: 1200, type: 'income' as const },
  { id: '5', date: '2023-12-10', description: 'Cup Purchases', category: 'cups', amount: 60, type: 'expense' as const },
  { id: '6', date: '2023-12-12', description: 'Membership Fees', category: 'membership', amount: 85, type: 'expense' as const },
  { id: '7', date: '2023-12-15', description: 'Equipment Rental', category: 'equipment', amount: 1300, type: 'income' as const },
  { id: '8', date: '2023-12-18', description: 'Team Account Payment', category: 'team', amount: 35, type: 'expense' as const },
  { id: '9', date: '2023-12-20', description: 'Market Sales Revenue', category: 'sales', amount: 120, type: 'income' as const },
  { id: '10', date: '2023-12-22', description: 'Cup Purchases', category: 'cups', amount: 200, type: 'expense' as const },
  { id: '11', date: '2023-12-25', description: 'Membership Renewal', category: 'membership', amount: 130, type: 'expense' as const },
  { id: '12', date: '2023-12-28', description: 'Equipment Purchase', category: 'equipment', amount: 80, type: 'expense' as const },
];

// Mock data for cost breakdown
const mockCostData = [
  { name: 'Salaries', value: 45000, color: '#a0b41c' },
  { name: 'Marketing', value: 18000, color: '#b9cb49' },
  { name: 'Equipment', value: 12500, color: '#8a9919' },
  { name: 'Office Rent', value: 8500, color: '#c6d566' },
  { name: 'Software', value: 5200, color: '#738015' },
  { name: 'Travel', value: 3500, color: '#5c6711' },
  { name: 'Miscellaneous', value: 2800, color: '#d8e182' },
];

const Dashboard = () => {
  const [timePeriod, setTimePeriod] = useState('thisWeek');
  
  // In a real app, this data would change based on the selected time period
  const earnings = 12000;
  const spendings = 8000;
  const totalCost = mockCostData.reduce((acc, cost) => acc + cost.value, 0);
  
  const handleTimeFilterChange = (period: string) => {
    setTimePeriod(period);
    // In a real app, you would fetch new data based on the selected time period
    console.log(`Filter changed to: ${period}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <TimeFilter onFilterChange={handleTimeFilterChange} />
      </div>
      
      <CashFlowSummary 
        earnings={earnings} 
        spendings={spendings} 
        earningsPercentage={5.2} 
        spendingsPercentage={3.8}
        earningsTrend="up"
        spendingsTrend="up"
      />
      
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <h2 className="dashboard-section-title text-green-800">Financial Overview</h2>
        <TimeFilter 
          onFilterChange={handleTimeFilterChange} 
          compact={true} 
          className="mt-2 md:mt-0"
        />
      </div>
      
      <CashFlowCharts 
        expenseData={mockExpenseData} 
        timeSeriesData={mockTimeSeriesData}
        categoryComparisonData={mockCategoryComparisonData}
      />

      <CostBreakdown 
        costData={mockCostData}
        totalCost={totalCost}
      />
      
      <TransactionsTable transactions={mockTransactions} />
    </div>
  );
};

export default Dashboard;
