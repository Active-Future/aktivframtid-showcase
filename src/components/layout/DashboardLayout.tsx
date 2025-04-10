
import React, { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/layout/AppSidebar';
import { Outlet } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const DashboardLayout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const isMobile = useIsMobile();

  // Auto-collapse sidebar on mobile by default
  React.useEffect(() => {
    if (isMobile) {
      setSidebarCollapsed(true);
    }
  }, [isMobile]);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar sidebarCollapsed={sidebarCollapsed} />
        <div className="flex-1 flex flex-col min-h-screen">
          <div className="p-2 sm:p-4 border-b flex justify-between items-center bg-gradient-to-r from-aktivGreen-base to-aktivGreen-tertiary text-white shadow-md">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="text-white hover:bg-white/10"
              >
                {sidebarCollapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </Button>
              <h1 className="text-lg sm:text-xl font-bold ml-2">AktivFramtid Dashboard</h1>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-sm">Last updated: {new Date().toLocaleString()}</span>
            </div>
          </div>
          <main className={cn(
            "flex-1 mx-auto py-4 sm:py-6 px-2 sm:px-4 w-full", 
            sidebarCollapsed ? "md:pl-20" : "md:pl-64",
            "max-w-full md:max-w-7xl transition-all duration-300"
          )}>
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
