
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
    <div className={cn("p-4 rounded-2xl bg-white/80 backdrop-blur-sm slide-in", className)}>
      <p className="text-sm text-gray-600 mb-2">{title}</p>
      <div className="flex flex-col items-start gap-2">
        <span className="text-2xl font-semibold">{value}</span>
        <span 
          className={cn(
            "px-3 py-1 rounded-full text-sm font-medium",
            status === "stable" && "bg-[#D1FAE5]",
            status === "up" && "bg-[#FEF3C7]",
            status === "down" && "bg-[#FEE2E2]"
          )}
        >
          {status}
        </span>
      </div>
    </div>
  );
};
