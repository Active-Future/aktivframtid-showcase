
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { LayoutDashboard, Users, BarChart3, Server, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logoImage from "@/assets/images/logo_with_text.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";

type SidebarProps = {
  sidebarCollapsed: boolean;
  mobileOpen?: boolean;
  setMobileOpen?: (open: boolean) => void;
};

export function AppSidebar({ sidebarCollapsed, mobileOpen = false, setMobileOpen }: SidebarProps) {
  const location = useLocation();
  const { isMobile } = useSidebar();

  // Only apply collapsed state on desktop (md and above)
  // Always expanded on mobile
  const isCollapsed = window.matchMedia("(min-width: 768px)").matches
    ? sidebarCollapsed
    : false;

  const mainMenuItems = [
    {
      title: "Dashboard",
      url: "/",
      icon: LayoutDashboard,
    },
    {
      title: "Konton",
      url: "/accounts",
      icon: Users,
    },
    {
      title: "Analys",
      url: "/analytics",
      icon: BarChart3,
    },
    {
      title: "Serverstatus",
      url: "/server-status",
      icon: Server,
    },
  ];

  // Mobile sidebar with Sheet component
  if (isMobile) {
    return (
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="left" className="p-0 bg-aktivGreen-base/5 w-[85vw] max-w-[300px]">
          <div className="p-3 flex items-center justify-between h-16 border-b">
            <img
              src={logoImage}
              alt="Logotyp"
              className="w-32 h-auto object-contain"
            />
            <Button variant="ghost" size="icon" onClick={() => setMobileOpen?.(false)}>
              <X size={24} />
              <span className="sr-only">Stäng</span>
            </Button>
          </div>
          <div className="overflow-y-auto h-[calc(100vh-4rem)]">
            <div className="p-4">
              <ul className="space-y-2">
                {mainMenuItems.map((item) => (
                  <li key={item.title}>
                    <Link
                      to={item.url}
                      onClick={() => setMobileOpen?.(false)}
                      className={cn(
                        "flex items-center space-x-3 p-3 rounded-md transition-colors",
                        location.pathname === item.url ||
                          (item.url !== "/" &&
                            location.pathname.startsWith(item.url))
                          ? "bg-aktivGreen-base/20 text-aktivGreen-quaternary font-medium"
                          : "hover:bg-aktivGreen-base/10"
                      )}
                    >
                      <item.icon size={20} />
                      <span>{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  // Desktop sidebar
  return (
    <Sidebar
      className={cn(
        "transition-all duration-300 bg-aktivGreen-base/5 hidden md:flex",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="p-3 flex items-center justify-center h-16 border-b">
        {!isCollapsed ? (
          <img
            src={logoImage}
            alt="Logotyp"
            className="w-32 h-auto object-contain mx-auto my-4"
          />
        ) : (
          <Users size={28} className="text-primary" />
        )}
      </div>
      <SidebarContent>
        <SidebarGroup>
          {!isCollapsed && <SidebarGroupLabel>Huvudmeny</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu>
              {mainMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={item.url}
                      className={cn(
                        "flex items-center space-x-2",
                        location.pathname === item.url ||
                          (item.url !== "/" &&
                            location.pathname.startsWith(item.url))
                          ? "text-primary font-medium"
                          : "",
                        isCollapsed ? "justify-center" : ""
                      )}
                    >
                      <item.icon size={20} />
                      {!isCollapsed && <span>{item.title}</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
