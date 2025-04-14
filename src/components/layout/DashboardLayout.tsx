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
            className="p-4 flex justify-between items-center text-aktivGreen-quaternary  bg-aktivGreen-base/5"
            style={{
              paddingBottom: "19px",
            }}
          >
            <div className="flex-1 md:ml-4">
              <h1 className="text-xl font-bold">Cash Flow Dashboard</h1>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                Last updated: {new Date().toLocaleString()}
              </span>
            </div>
          </div>
          <main className="border-t" style={{ padding: 35 }}>
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
