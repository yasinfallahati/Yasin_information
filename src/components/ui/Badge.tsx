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
        "inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-medium tracking-wide",
        {
          "border border-line bg-panel text-soft": variant === "default",
          "border border-accent/25 bg-accent/10 text-accent-strong": variant === "primary",
          "border border-line bg-ink text-mute": variant === "secondary",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
