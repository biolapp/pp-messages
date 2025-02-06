
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "confirmed" | "new";
  className?: string;
}

export const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  return (
    <span
      className={cn(
        "px-3 py-1 rounded-full text-sm font-medium",
        status === "confirmed" && "bg-status-confirmed-bg text-status-confirmed-text",
        status === "new" && "bg-status-new-bg text-status-new-text",
        className
      )}
    >
      {status === "confirmed" ? "Confirmed" : "New"}
    </span>
  );
};
