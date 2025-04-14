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

type SidebarProps = {
  sidebarCollapsed: boolean;
};

export function AppSidebar({ sidebarCollapsed }: SidebarProps) {
  const location = useLocation();

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
        "transition-all duration-300  bg-aktivGreen-base/5",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="p-3 flex items-center justify-center h-16 border-b">
        {!isCollapsed ? (
          <img
            src="src/assets/images/logo_with_text.png"
            alt="Logo"
            className="w-32 h-auto object-contain mx-auto my-4"
          />
        ) : (
          <Users size={28} className="text-primary" />
        )}
      </div>
      <SidebarContent>
        <SidebarGroup>
          {!isCollapsed && <SidebarGroupLabel>Main</SidebarGroupLabel>}
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
