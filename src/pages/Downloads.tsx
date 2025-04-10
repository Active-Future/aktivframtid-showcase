
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, FileDown, Users, Clock } from "lucide-react";

// Mock data
const dailyData = [
  { name: "00:00", downloads: 12 },
  { name: "03:00", downloads: 5 },
  { name: "06:00", downloads: 8 },
  { name: "09:00", downloads: 45 },
  { name: "12:00", downloads: 67 },
  { name: "15:00", downloads: 89 },
  { name: "18:00", downloads: 53 },
  { name: "21:00", downloads: 30 },
];

const weeklyData = [
  { name: "Mon", downloads: 145 },
  { name: "Tue", downloads: 178 },
  { name: "Wed", downloads: 168 },
  { name: "Thu", downloads: 190 },
  { name: "Fri", downloads: 205 },
  { name: "Sat", downloads: 120 },
  { name: "Sun", downloads: 95 },
];

const monthlyData = [
  { name: "Jan", downloads: 1245 },
  { name: "Feb", downloads: 1078 },
  { name: "Mar", downloads: 1568 },
  { name: "Apr", downloads: 1390 },
  { name: "May", downloads: 1205 },
  { name: "Jun", downloads: 1320 },
  { name: "Jul", downloads: 1095 },
  { name: "Aug", downloads: 1185 },
  { name: "Sep", downloads: 1305 },
  { name: "Oct", downloads: 1450 },
  { name: "Nov", downloads: 1520 },
  { name: "Dec", downloads: 1380 },
];

const yearlyData = [
  { name: "2020", downloads: 12450 },
  { name: "2021", downloads: 15780 },
  { name: "2022", downloads: 18950 },
  { name: "2023", downloads: 22340 },
  { name: "2024", downloads: 9876 },
];

// Stats cards data
const downloadStats = [
  {
    title: "Total Downloads",
    value: "79,341",
    icon: Download,
    change: "+12.5%",
    period: "vs. last year",
    color: "bg-gradient-to-r from-green-500 to-green-700",
  },
  {
    title: "Average Daily",
    value: "247",
    icon: Clock,
    change: "+8.3%",
    period: "vs. last month",
    color: "bg-gradient-to-r from-green-400 to-green-600",
  },
  {
    title: "Unique Users",
    value: "14,523",
    icon: Users,
    change: "+15.2%",
    period: "vs. last quarter",
    color: "bg-gradient-to-r from-green-300 to-green-500",
  },
  {
    title: "File Size",
    value: "1.2 TB",
    icon: FileDown,
    change: "+9.7%",
    period: "vs. last year",
    color: "bg-gradient-to-r from-green-200 to-green-400",
  },
];

const Downloads = () => {
  const [selectedTab, setSelectedTab] = useState("weekly");

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-green-800">Download Statistics</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {downloadStats.map((stat, index) => (
          <Card key={index} className="overflow-hidden border-green-200">
            <div className={`h-2 ${stat.color}`}></div>
            <CardContent className="pt-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <h3 className="text-2xl font-bold mt-1 text-green-800">{stat.value}</h3>
                </div>
                <div className="p-2 bg-green-100 rounded-full text-green-700">
                  <stat.icon size={20} />
                </div>
              </div>
              <div className="mt-3 flex items-center text-sm">
                <span className="text-green-600 font-medium">{stat.change}</span>
                <span className="text-muted-foreground ml-1">{stat.period}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mb-6 border-green-200">
        <CardHeader className="bg-green-50 border-b border-green-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <CardTitle className="text-green-800">Download Frequency</CardTitle>
            <Tabs value={selectedTab} onValueChange={setSelectedTab}>
              <TabsList className="bg-green-100 text-green-800">
                <TabsTrigger value="daily" className="data-[state=active]:bg-green-700 data-[state=active]:text-white">
                  Daily
                </TabsTrigger>
                <TabsTrigger value="weekly" className="data-[state=active]:bg-green-700 data-[state=active]:text-white">
                  Weekly
                </TabsTrigger>
                <TabsTrigger value="monthly" className="data-[state=active]:bg-green-700 data-[state=active]:text-white">
                  Monthly
                </TabsTrigger>
                <TabsTrigger value="annual" className="data-[state=active]:bg-green-700 data-[state=active]:text-white">
                  Annual
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>
        <CardContent className="pt-6 pb-2">
          <div className="h-[400px]">
            <TabsContent value="daily" className="h-full m-0">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dailyData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value} downloads`]} />
                  <Bar dataKey="downloads" fill="#a0b41c" name="Downloads" />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>
            
            <TabsContent value="weekly" className="h-full m-0">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={weeklyData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorDownloads" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#a0b41c" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#a0b41c" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value} downloads`]} />
                  <Area 
                    type="monotone" 
                    dataKey="downloads" 
                    stroke="#a0b41c" 
                    fillOpacity={1} 
                    fill="url(#colorDownloads)" 
                    name="Downloads"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </TabsContent>
            
            <TabsContent value="monthly" className="h-full m-0">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value} downloads`]} />
                  <Bar dataKey="downloads" fill="#a0b41c" name="Downloads" />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>
            
            <TabsContent value="annual" className="h-full m-0">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={yearlyData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorYearlyDownloads" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#a0b41c" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#a0b41c" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value} downloads`]} />
                  <Area 
                    type="monotone" 
                    dataKey="downloads" 
                    stroke="#a0b41c" 
                    fillOpacity={1} 
                    fill="url(#colorYearlyDownloads)" 
                    name="Downloads"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </TabsContent>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Downloads;
