
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
} from "@/components/ui/sidebar";
import { LayoutDashboard, Users, BarChart3, Server, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "./Logo";

type SidebarProps = {
  sidebarCollapsed: boolean;
};

export function AppSidebar({ sidebarCollapsed }: SidebarProps) {
  const location = useLocation();

  const mainMenuItems = [
    {
      title: "Dashboard",
      url: "/",
      icon: LayoutDashboard,
    },
    {
      title: "Accounts",
      url: "/accounts",
      icon: Users,
    },
    {
      title: "Analytics",
      url: "/analytics",
      icon: BarChart3,
    },
    {
      title: "Downloads",
      url: "/downloads",
      icon: Download,
    },
    {
      title: "Server Status",
      url: "/server-status",
      icon: Server,
    },
  ];

  return (
    <Sidebar
      className={cn(
        "transition-all duration-300 bg-green-50",
        sidebarCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="p-3 flex items-center justify-start h-16 border-b">
        {!sidebarCollapsed ? (
          <Logo className="ml-0" />
        ) : (
          <img 
            src="/lovable-uploads/2c723bd4-c86f-4c64-9555-34a70241ca67.png" 
            alt="AF Logo" 
            className="h-6" 
          />
        )}
      </div>
      <SidebarContent>
        <SidebarGroup>
          {!sidebarCollapsed && <SidebarGroupLabel className="text-green-800">Main</SidebarGroupLabel>}
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
                          ? "text-green-700 font-medium"
                          : "text-green-800",
                        sidebarCollapsed ? "justify-center" : ""
                      )}
                    >
                      <item.icon size={20} />
                      {!sidebarCollapsed && <span>{item.title}</span>}
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
