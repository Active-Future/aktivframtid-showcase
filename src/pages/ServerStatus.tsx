
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
    name: "Kund API",
    status: "Healthy",
    uptime: "99.98%",
    responseTime: "110ms",
    cpuUsage: 32,
    memoryUsage: 45,
    diskUsage: 58,
    activeConnections: 187,
    lastRestartTime: "3 dagar sedan",
    incidents: 0,
  },
  {
    name: "Betalnings API",
    status: "Healthy",
    uptime: "99.95%",
    responseTime: "125ms",
    cpuUsage: 38,
    memoryUsage: 52,
    diskUsage: 63,
    activeConnections: 205,
    lastRestartTime: "5 dagar sedan",
    incidents: 1,
  },
  {
    name: "Kundtjänst",
    status: "Healthy",
    uptime: "99.99%",
    responseTime: "95ms",
    cpuUsage: 28,
    memoryUsage: 39,
    diskUsage: 52,
    activeConnections: 142,
    lastRestartTime: "7 dagar sedan",
    incidents: 0,
  },
  {
    name: "Aviseringstjänst",
    status: "Degraded",
    uptime: "99.75%",
    responseTime: "160ms",
    cpuUsage: 65,
    memoryUsage: 72,
    diskUsage: 81,
    activeConnections: 103,
    lastRestartTime: "12 timmar sedan",
    incidents: 3,
  },
  {
    name: "Evenemangshantering",
    status: "Healthy",
    uptime: "99.97%",
    responseTime: "115ms",
    cpuUsage: 35,
    memoryUsage: 48,
    diskUsage: 60,
    activeConnections: 154,
    lastRestartTime: "4 dagar sedan",
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
    lastRestartTime: "2 dagar sedan",
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
                    {service.status === "Healthy" ? "Fungerande" : 
                     service.status === "Degraded" ? "Nedsatt" : "Problem"}
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="grid gap-4">
                <div className="flex items-center justify-between border-b pb-2">
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-aktivGreen-base" />
                    <span className="text-sm">Upptid</span>
                  </div>
                  <span className="text-sm font-medium">{service.uptime}</span>
                </div>

                <div className="flex items-center justify-between border-b pb-2">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-aktivGreen-base" />
                    <span className="text-sm">Svarstid</span>
                  </div>
                  <span className="text-sm font-medium">
                    {service.responseTime}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b pb-2">
                  <div className="flex items-center gap-2">
                    <Activity className="h-4 w-4 text-aktivGreen-base" />
                    <span className="text-sm">Anslutningar</span>
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
                      <span className="text-sm">Minne</span>
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
              Systemhändelser
            </CardTitle>
            <div className="flex items-center text-sm text-muted-foreground">
              <RefreshCcw className="h-4 w-4 mr-1" />
              Senast uppdaterad: {new Date().toLocaleString()}
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">Alla Händelser</TabsTrigger>
              <TabsTrigger value="errors">Fel</TabsTrigger>
              <TabsTrigger value="maintenance">Underhåll</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="space-y-4">
                <div className="p-4 border rounded-lg border-aktivGreen-base/20 bg-white shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <AlertTriangle className="h-4 w-4 mr-2 text-amber-500" />
                      <span className="text-sm font-medium">
                        Aviseringstjänsten har nedsatt prestanda
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      Idag, 09:15
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Aviseringstjänsten upplever längre svarstider än normalt. Teamet undersöker.
                  </p>
                </div>

                <div className="p-4 border rounded-lg border-aktivGreen-base/20 bg-white shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-aktivGreen-base" />
                      <span className="text-sm font-medium">
                        Betalnings-API underhåll slutfört
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      Igår, 14:30
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Planerat underhåll slutfördes framgångsrikt. Alla system är i drift.
                  </p>
                </div>

                <div className="p-4 border rounded-lg border-aktivGreen-base/20 bg-white shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Database className="h-4 w-4 mr-2 text-aktivGreen-base" />
                      <span className="text-sm font-medium">
                        Databasoptimering
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      2 dagar sedan, 23:45
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Automatiserad databasoptimering slutförd för alla tjänster. Prestandan förbättrades med 15%.
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
                        Aviseringstjänsten har nedsatt prestanda
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      Idag, 09:15
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Aviseringstjänsten upplever längre svarstider än normalt. Teamet undersöker.
                  </p>
                </div>
                <div className="p-4 border rounded-lg border-aktivGreen-base/20 bg-white shadow-sm">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-start">
                      <AlertTriangle className="h-4 w-4 mr-2 mt-0.5 text-amber-500" />
                      <div>
                        <span className="text-sm font-medium">
                          Betalnings-API tillfälliga fel
                        </span>
                        <p className="text-sm text-muted-foreground mt-1">
                          Vissa betalningstransaktioner upplevde förseningar. Problemet löstes inom 15 minuter.
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      3 dagar sedan, 15:42
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
                        Betalnings-API underhåll slutfört
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      Igår, 14:30
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Planerat underhåll slutfördes framgångsrikt. Alla system är i drift.
                  </p>
                </div>

                <div className="p-4 border rounded-lg border-aktivGreen-base/20 bg-white shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Database className="h-4 w-4 mr-2 text-aktivGreen-base" />
                      <span className="text-sm font-medium">
                        Databasoptimering
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      2 dagar sedan, 23:45
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Automatiserad databasoptimering slutförd för alla tjänster. Prestandan förbättrades med 15%.
                  </p>
                </div>

                <div className="p-4 border rounded-lg border-aktivGreen-base/20 bg-white shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Server className="h-4 w-4 mr-2 text-aktivGreen-base" />
                      <span className="text-sm font-medium">
                        Systemuppdateringar planerade
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      Nästa vecka, måndag 02:00
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Planerat underhåll för alla tjänster. Förväntad driftstopp: 30 minuter.
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
