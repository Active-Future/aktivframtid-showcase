
import React, { useState, useEffect } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Outlet } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const DashboardLayout = () => {
  // This controls sidebar collapse state for desktop only
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  // Collapse sidebar by default on medium screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024 && window.innerWidth >= 768) {
        setSidebarCollapsed(true);
      } else if (window.innerWidth >= 1024) {
        setSidebarCollapsed(false);
      }
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar sidebarCollapsed={sidebarCollapsed} mobileOpen={mobileMenuOpen} setMobileOpen={setMobileMenuOpen} />
        <div className="flex-1 flex flex-col min-h-screen text-left">
          <div
            className="p-4 flex justify-between items-center bg-aktivGreen-base/10 border-b border-aktivGreen-base/20"
          >
            {isMobile && (
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden mr-2"
              >
                <Menu size={24} />
                <span className="sr-only">Open menu</span>
              </Button>
            )}
            <div className="flex-1">
              <h1 className="text-lg md:text-xl font-bold text-aktivGreen-quaternary truncate">Cash Flow Dashboard</h1>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs md:text-sm text-muted-foreground">
                Last updated: {new Date().toLocaleString()}
              </span>
            </div>
          </div>
          <main className="p-3 md:p-6 lg:p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
