import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BadgeCheck,
  Clock,
  Server,
  Activity,
  HardDrive,
  Cpu,
  RefreshCcw,
  Database,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
    incidents: 0,
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
    incidents: 1,
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
    incidents: 0,
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
    incidents: 3,
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
    incidents: 0,
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
    incidents: 0,
  },
];

const ServerStatus = () => {
  const getStatusIcon = (status: string) => {
    if (status === "Healthy") {
      return <CheckCircle className="h-5 w-5 text-aktivGreen-base" />;
    } else if (status === "Degraded") {
      return <AlertTriangle className="h-5 w-5 text-amber-500" />;
    } else {
      return <AlertTriangle className="h-5 w-5 text-loss" />;
    }
  };

  const getStatusColor = (status: string) => {
    if (status === "Healthy") {
      return "text-aktivGreen-base";
    } else if (status === "Degraded") {
      return "text-amber-500";
    } else {
      return "text-loss";
    }
  };

  const getUsageColor = (usage: number) => {
    if (usage > 80) return "#ef4444";
    if (usage > 60) return "#f59e0b";
    return "#a0b41c";
  };

  return (
    <div className="space-y-6">
      {/* <div className="mb-6 bg-gradient-to-r from-aktivGreen-base to-aktivGreen-tertiary rounded-xl p-6 text-white shadow-md">
        <h1 className="text-2xl font-bold">Microservices Status</h1>
        <p className="text-sm opacity-90 mt-1">
          Overview of all running services and their performance metrics
        </p>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {microservices.map((service) => (
          <Card
            key={service.name}
            className="border border-aktivGreen-base/20 hover:shadow-md transition-shadow"
          >
            <CardHeader className="pb-2 bg-aktivGreen-base/5 border-b border-aktivGreen-base/20">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg text-aktivGreen-quaternary">
                  {service.name}
                </CardTitle>
                <div className="flex items-center">
                  {getStatusIcon(service.status)}
                  <span
                    className={`ml-2 text-sm font-medium ${getStatusColor(
                      service.status
                    )}`}
                  >
                    {service.status}
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="grid gap-4">
                <div className="flex items-center justify-between border-b pb-2">
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-aktivGreen-base" />
                    <span className="text-sm">Uptime</span>
                  </div>
                  <span className="text-sm font-medium">{service.uptime}</span>
                </div>

                <div className="flex items-center justify-between border-b pb-2">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-aktivGreen-base" />
                    <span className="text-sm">Response Time</span>
                  </div>
                  <span className="text-sm font-medium">
                    {service.responseTime}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b pb-2">
                  <div className="flex items-center gap-2">
                    <Activity className="h-4 w-4 text-aktivGreen-base" />
                    <span className="text-sm">Connections</span>
                  </div>
                  <span className="text-sm font-medium">
                    {service.activeConnections}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Cpu className="h-4 w-4 text-aktivGreen-base" />
                      <span className="text-sm">CPU</span>
                    </div>
                    <span className="text-sm">{service.cpuUsage}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${service.cpuUsage}%`,
                        backgroundColor: getUsageColor(service.cpuUsage),
                      }}
                    ></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Server className="h-4 w-4 text-aktivGreen-base" />
                      <span className="text-sm">Memory</span>
                    </div>
                    <span className="text-sm">{service.memoryUsage}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${service.memoryUsage}%`,
                        backgroundColor: getUsageColor(service.memoryUsage),
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border border-aktivGreen-base/20 shadow-md">
        <CardHeader className="bg-aktivGreen-base/5 border-b border-aktivGreen-base/20">
          <div className="flex items-center justify-between">
            <CardTitle className="text-aktivGreen-quaternary">
              System Events
            </CardTitle>
            <div className="flex items-center text-sm text-muted-foreground">
              <RefreshCcw className="h-4 w-4 mr-1" />
              Last updated: {new Date().toLocaleString()}
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Events</TabsTrigger>
              <TabsTrigger value="errors">Errors</TabsTrigger>
              <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="space-y-4">
                <div className="p-4 border rounded-lg border-aktivGreen-base/20 bg-white shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <AlertTriangle className="h-4 w-4 mr-2 text-amber-500" />
                      <span className="text-sm font-medium">
                        Notification Service Performance Degradation
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      Today, 09:15 AM
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Notification Service is experiencing higher than normal
                    response times. Team is investigating.
                  </p>
                </div>

                <div className="p-4 border rounded-lg border-aktivGreen-base/20 bg-white shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-aktivGreen-base" />
                      <span className="text-sm font-medium">
                        Payment API Maintenance Completed
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      Yesterday, 02:30 PM
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Scheduled maintenance completed successfully. All systems
                    operational.
                  </p>
                </div>

                <div className="p-4 border rounded-lg border-aktivGreen-base/20 bg-white shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Database className="h-4 w-4 mr-2 text-aktivGreen-base" />
                      <span className="text-sm font-medium">
                        Database Optimization
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      2 days ago, 11:45 PM
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Automated database optimization completed on all services.
                    Performance improved by 15%.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="errors">
              <div className="space-y-4">
                <div className="p-4 border rounded-lg border-aktivGreen-base/20 bg-white shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <AlertTriangle className="h-4 w-4 mr-2 text-amber-500" />
                      <span className="text-sm font-medium">
                        Notification Service Performance Degradation
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      Today, 09:15 AM
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Notification Service is experiencing higher than normal
                    response times. Team is investigating.
                  </p>
                </div>
                <div className="p-4 border rounded-lg border-aktivGreen-base/20 bg-white shadow-sm">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-start">
                      <AlertTriangle className="h-4 w-4 mr-2 mt-0.5 text-amber-500" />
                      <div>
                        <span className="text-sm font-medium">
                          Payment API Intermittent Errors
                        </span>
                        <p className="text-sm text-muted-foreground mt-1">
                          Some payment transactions experienced delays. Issue
                          resolved within 15 minutes.
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      3 days ago, 03:42 PM
                    </span>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="maintenance">
              <div className="space-y-4">
                <div className="p-4 border rounded-lg border-aktivGreen-base/20 bg-white shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-aktivGreen-base" />
                      <span className="text-sm font-medium">
                        Payment API Maintenance Completed
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      Yesterday, 02:30 PM
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Scheduled maintenance completed successfully. All systems
                    operational.
                  </p>
                </div>

                <div className="p-4 border rounded-lg border-aktivGreen-base/20 bg-white shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Database className="h-4 w-4 mr-2 text-aktivGreen-base" />
                      <span className="text-sm font-medium">
                        Database Optimization
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      2 days ago, 11:45 PM
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Automated database optimization completed on all services.
                    Performance improved by 15%.
                  </p>
                </div>

                <div className="p-4 border rounded-lg border-aktivGreen-base/20 bg-white shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Server className="h-4 w-4 mr-2 text-aktivGreen-base" />
                      <span className="text-sm font-medium">
                        System Updates Scheduled
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      Next week, Monday 02:00 AM
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Planned maintenance for all services. Expected downtime: 30
                    minutes.
                  </p>
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
