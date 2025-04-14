
import React, { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Outlet } from "react-router-dom";
import { cn } from "@/lib/utils";

const DashboardLayout = () => {
  // This controls sidebar collapse state for desktop only
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar sidebarCollapsed={sidebarCollapsed} />
        <div className="flex-1 flex flex-col min-h-screen text-left">
          <div
            className="p-4 flex justify-between items-center bg-aktivGreen-base/10 border-b border-aktivGreen-base/20"
            style={{
              paddingBottom: "19px",
            }}
          >
            <div className="flex-1 md:ml-4">
              <h1 className="text-xl font-bold text-aktivGreen-quaternary">Cash Flow Dashboard</h1>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                Last updated: {new Date().toLocaleString()}
              </span>
            </div>
          </div>
          <main className="p-4 md:p-6 lg:p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
