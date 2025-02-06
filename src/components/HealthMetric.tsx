
import { cn } from "@/lib/utils";

interface HealthMetricProps {
  title: string;
  value: string;
  status: "stable" | "up" | "down";
  className?: string;
}

export const HealthMetric = ({ title, value, status, className }: HealthMetricProps) => {
  const statusColors = {
    stable: "bg-metric-stable/20 text-metric-stable",
    up: "bg-metric-up/20 text-metric-up",
    down: "bg-metric-down/20 text-metric-down",
  };

  return (
    <div className={cn("p-4 rounded-2xl bg-white/80 backdrop-blur-sm", className)}>
      <p className="text-sm text-gray-600 mb-2">{title}</p>
      <div className="flex flex-col items-start gap-2">
        <span className="text-2xl font-semibold">{value}</span>
        <span 
          className={cn(
            "px-3 py-1 rounded-full text-sm font-medium",
            status === "stable" && "bg-metric-stable/10 text-metric-stable",
            status === "up" && "bg-metric-up/10 text-metric-up",
            status === "down" && "bg-metric-down/10 text-metric-down"
          )}
        >
          {status}
        </span>
      </div>
    </div>
  );
};
