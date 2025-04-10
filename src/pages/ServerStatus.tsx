
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BadgeCheck, Clock, Server, Activity, HardDrive, Cpu, RefreshCcw, Database, AlertTriangle, CheckCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const microservices = [
  {
    name: "Customer API",
    status: "Healthy",
    uptime: "99.98%",
    responseTime: "110ms",
    cpuUsage: 32,
    memoryUsage: 45,
    diskUsage: 58,
    activeConnections: 187,
    lastRestartTime: "3 days ago",
    incidents: 0
  },
  {
    name: "Payment API",
    status: "Healthy",
    uptime: "99.95%",
    responseTime: "125ms",
    cpuUsage: 38,
    memoryUsage: 52,
    diskUsage: 63,
    activeConnections: 205,
    lastRestartTime: "5 days ago",
    incidents: 1
  },
  {
    name: "Customer Service",
    status: "Healthy",
    uptime: "99.99%",
    responseTime: "95ms",
    cpuUsage: 28,
    memoryUsage: 39,
    diskUsage: 52,
    activeConnections: 142,
    lastRestartTime: "7 days ago",
    incidents: 0
  },
  {
    name: "Notification Service",
    status: "Degraded",
    uptime: "99.75%",
    responseTime: "160ms",
    cpuUsage: 65,
    memoryUsage: 72,
    diskUsage: 81,
    activeConnections: 103,
    lastRestartTime: "12 hours ago",
    incidents: 3
  },
  {
    name: "Event Management Service",
    status: "Healthy",
    uptime: "99.97%",
    responseTime: "115ms",
    cpuUsage: 35,
    memoryUsage: 48,
    diskUsage: 60,
    activeConnections: 154,
    lastRestartTime: "4 days ago",
    incidents: 0
  },
  {
    name: "Admin API",
    status: "Healthy",
    uptime: "99.96%",
    responseTime: "130ms",
    cpuUsage: 41,
    memoryUsage: 56,
    diskUsage: 67,
    activeConnections: 89,
    lastRestartTime: "2 days ago",
    incidents: 0
  }
];

const ServerStatus = () => {
  const getStatusIcon = (status: string) => {
    if (status === "Healthy") {
      return <CheckCircle className="h-5 w-5 text-profit" />;
    } else if (status === "Degraded") {
      return <AlertTriangle className="h-5 w-5 text-amber-500" />;
    } else {
      return <AlertTriangle className="h-5 w-5 text-loss" />;
    }
  };

  const getStatusColor = (status: string) => {
    if (status === "Healthy") {
      return "text-profit";
    } else if (status === "Degraded") {
      return "text-amber-500";
    } else {
      return "text-loss";
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Microservices Status</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {microservices.map((service) => (
          <Card key={service.name} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{service.name}</CardTitle>
                <div className="flex items-center">
                  {getStatusIcon(service.status)}
                  <span className={`ml-2 text-sm font-medium ${getStatusColor(service.status)}`}>{service.status}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center justify-between border-b pb-2">
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Uptime</span>
                  </div>
                  <span className="text-sm font-medium">{service.uptime}</span>
                </div>
                
                <div className="flex items-center justify-between border-b pb-2">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Response Time</span>
                  </div>
                  <span className="text-sm font-medium">{service.responseTime}</span>
                </div>
                
                <div className="flex items-center justify-between border-b pb-2">
                  <div className="flex items-center gap-2">
                    <Activity className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Connections</span>
                  </div>
                  <span className="text-sm font-medium">{service.activeConnections}</span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Cpu className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">CPU</span>
                    </div>
                    <span className="text-sm">{service.cpuUsage}%</span>
                  </div>
                  <Progress value={service.cpuUsage} className="h-2" 
                    style={{
                      "--progress-background": service.cpuUsage > 80 ? "#ef4444" : service.cpuUsage > 60 ? "#f59e0b" : "#a0b41c"
                    } as React.CSSProperties} 
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Server className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Memory</span>
                    </div>
                    <span className="text-sm">{service.memoryUsage}%</span>
                  </div>
                  <Progress value={service.memoryUsage} className="h-2" 
                    style={{
                      "--progress-background": service.memoryUsage > 80 ? "#ef4444" : service.memoryUsage > 60 ? "#f59e0b" : "#a0b41c"
                    } as React.CSSProperties} 
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>System Events</CardTitle>
            <div className="flex items-center text-sm text-muted-foreground">
              <RefreshCcw className="h-4 w-4 mr-1" />
              Last updated: {new Date().toLocaleString()}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Events</TabsTrigger>
              <TabsTrigger value="errors">Errors</TabsTrigger>
              <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <AlertTriangle className="h-4 w-4 mr-2 text-amber-500" />
                      <span className="text-sm font-medium">Notification Service Performance Degradation</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Today, 09:15 AM</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Notification Service is experiencing higher than normal response times. Team is investigating.</p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-profit" />
                      <span className="text-sm font-medium">Payment API Maintenance Completed</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Yesterday, 02:30 PM</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Scheduled maintenance completed successfully. All systems operational.</p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Database className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm font-medium">Database Optimization</span>
                    </div>
                    <span className="text-xs text-muted-foreground">2 days ago, 11:45 PM</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Automated database optimization completed on all services. Performance improved by 15%.</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="errors">
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <AlertTriangle className="h-4 w-4 mr-2 text-amber-500" />
                      <span className="text-sm font-medium">Notification Service Performance Degradation</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Today, 09:15 AM</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Notification Service is experiencing higher than normal response times. Team is investigating.</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-start">
                      <AlertTriangle className="h-4 w-4 mr-2 mt-0.5 text-amber-500" />
                      <div>
                        <span className="text-sm font-medium">Payment API Intermittent Errors</span>
                        <p className="text-sm text-muted-foreground mt-1">Some payment transactions experienced delays. Issue resolved within 15 minutes.</p>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">3 days ago, 03:42 PM</span>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="maintenance">
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-profit" />
                      <span className="text-sm font-medium">Payment API Maintenance Completed</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Yesterday, 02:30 PM</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Scheduled maintenance completed successfully. All systems operational.</p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Database className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm font-medium">Database Optimization</span>
                    </div>
                    <span className="text-xs text-muted-foreground">2 days ago, 11:45 PM</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Automated database optimization completed on all services. Performance improved by 15%.</p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Server className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm font-medium">System Updates Scheduled</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Next week, Monday 02:00 AM</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Planned maintenance for all services. Expected downtime: 30 minutes.</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServerStatus;
