
import { cn } from "@/lib/utils";

interface AppCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const AppCard = ({ children, className, ...props }: AppCardProps) => {
  return (
    <div
      className={cn(
        "bg-health-card rounded-3xl p-4 shadow-lg backdrop-blur-sm animate-fade-in",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
