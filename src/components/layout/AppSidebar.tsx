
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
import { LayoutDashboard, Users, BarChart3, Server } from "lucide-react";
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
      title: "Server Status",
      url: "/server-status",
      icon: Server,
    },
  ];

  return (
    <Sidebar
      className={cn(
        "transition-all duration-300 bg-aktivGreen-base bg-opacity-10",
        sidebarCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="p-3 flex items-center justify-start h-16 border-b border-aktivGreen-base border-opacity-20">
        {!sidebarCollapsed ? (
          <Logo className="ml-0" />
        ) : (
          <img 
            src="/lovable-uploads/af-red-with-text.png" 
            alt="AF Logo" 
            className="h-6" 
          />
        )}
      </div>
      <SidebarContent>
        <SidebarGroup>
          {!sidebarCollapsed && <SidebarGroupLabel className="text-aktivGreen-quaternary">Main</SidebarGroupLabel>}
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
                          ? "text-aktivGreen-tertiary font-medium"
                          : "text-aktivGreen-quaternary",
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
