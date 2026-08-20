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
        "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium",
        {
          "bg-gray-800 text-gray-300 border border-gray-700": variant === "default",
          "bg-blue-500/10 text-blue-400 border border-blue-500/20": variant === "primary",
          "bg-gray-800 text-gray-400 border border-gray-700": variant === "secondary",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
