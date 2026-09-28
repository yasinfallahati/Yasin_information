import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary";
  className?: string;
}

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 text-xs font-medium",
        {
          "border border-line bg-panel text-soft": variant === "default",
          "border border-line bg-elevated text-bright": variant === "primary",
          "border border-line bg-ink text-mute": variant === "secondary",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
