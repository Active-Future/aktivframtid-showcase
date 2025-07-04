
import React from "react";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  TrendingUpIcon,
  TrendingDownIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type SummaryCardProps = {
  title: string;
  value: string;
  percentage: number;
  icon: React.ReactNode;
  trend: "up" | "down";
  className?: string;
};

const SummaryCard = ({
  title,
  value,
  percentage,
  icon,
  trend,
  className,
}: SummaryCardProps) => {
  return (
    <Card className={cn("transition-all hover:shadow-md border-aktivGreen-base/20", className)}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h3 className="text-2xl font-bold mt-1 text-aktivGreen-quaternary">{value}</h3>
          </div>
          <div
            className={cn(
              "p-3 rounded-full",
              trend === "up" ? "bg-aktivGreen-base/10 text-profit" : "bg-red-50 text-loss"
            )}
          >
            {icon}
          </div>
        </div>
        <div className="flex items-center mt-3 text-sm">
          <span
            className={cn(
              "flex items-center",
              trend === "up" ? "text-profit" : "text-loss"
            )}
          >
            {trend === "up" ? (
              <TrendingUpIcon size={16} className="mr-1" />
            ) : (
              <TrendingDownIcon size={16} className="mr-1" />
            )}
            {percentage}%
          </span>
          <span className="text-muted-foreground ml-2">jämfört med föregående period</span>
        </div>
      </CardContent>
    </Card>
  );
};

type CashFlowSummaryProps = {
  earnings: number;
  spendings: number;
  earningsPercentage: number;
  spendingsPercentage: number;
  earningsTrend: "up" | "down";
  spendingsTrend: "up" | "down";
};

const CashFlowSummary = ({
  earnings,
  spendings,
  earningsPercentage,
  spendingsPercentage,
  earningsTrend,
  spendingsTrend,
}: CashFlowSummaryProps) => {
  const netCash = earnings - spendings;
  const isProfit = netCash >= 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 dashboard-section">
      <SummaryCard
        title="Totala Inkomster"
        value={`${earnings.toLocaleString()} SEK`}
        percentage={earningsPercentage}
        icon={<ArrowUpIcon />}
        trend={earningsTrend}
        className="animate-fade-in [animation-delay:100ms]"
      />

      <SummaryCard
        title="Totala Utgifter"
        value={`${spendings.toLocaleString()} SEK`}
        percentage={spendingsPercentage}
        icon={<ArrowDownIcon />}
        trend={spendingsTrend === "up" ? "down" : "up"}
        className="animate-fade-in [animation-delay:200ms]"
      />

      <Card
        className={cn(
          "transition-all hover:shadow-md animate-fade-in [animation-delay:300ms] border-aktivGreen-base/20",
          isProfit ? "border-profit/20" : "border-loss/20"
        )}
      >
        <CardContent className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Nettokassastatus
              </p>
              <h3
                className={cn(
                  "text-2xl font-bold mt-1",
                  isProfit ? "text-profit" : "text-loss"
                )}
              >
                {isProfit
                  ? `+${netCash.toLocaleString()} SEK`
                  : `-${Math.abs(netCash).toLocaleString()} SEK`}
              </h3>
            </div>
            <div
              className={cn(
                "p-3 rounded-full",
                isProfit ? "bg-aktivGreen-base/10 text-profit" : "bg-red-50 text-loss"
              )}
            >
              {isProfit ? <TrendingUpIcon /> : <TrendingDownIcon />}
            </div>
          </div>
          <div className="flex items-center mt-3">
            <span
              className={cn("text-sm", isProfit ? "text-profit" : "text-loss")}
            >
              {isProfit ? "Vinst" : "Förlust"}
            </span>
            <span className="text-sm text-muted-foreground ml-2">
              för aktuell period
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CashFlowSummary;
