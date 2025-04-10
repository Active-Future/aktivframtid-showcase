
import { cn } from "@/lib/utils";
import React from "react";

interface HighlightProps {
  children: React.ReactNode;
  className?: string;
}

export function Highlight({ children, className }: HighlightProps) {
  return (
    <span
      className={cn(
        "bg-aktivGreen-base bg-opacity-20 text-aktivGreen-quaternary px-2 py-0.5 rounded font-medium",
        className
      )}
    >
      {children}
    </span>
  );
}
