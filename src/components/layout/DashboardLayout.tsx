
import React, { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/layout/AppSidebar';
import { Outlet } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const DashboardLayout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar sidebarCollapsed={sidebarCollapsed} />
        <div className="flex-1 flex flex-col min-h-screen">
          <div className="p-4 border-b flex justify-between items-center bg-green-100">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              >
                {sidebarCollapsed ? <ChevronRightIcon className="text-green-800" /> : <ChevronLeftIcon className="text-green-800" />}
              </Button>
              <h1 className="text-xl font-bold ml-2 text-green-800">AktivFramtid Dashboard</h1>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-green-800">Last updated: {new Date().toLocaleString()}</span>
            </div>
          </div>
          <main className={cn("flex-1 container mx-auto py-6 px-4", sidebarCollapsed ? "md:pl-20" : "md:pl-64")}>
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
