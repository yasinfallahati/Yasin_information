import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950",
          "disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-blue-500 text-white shadow-lg shadow-blue-500/20 hover:bg-blue-400 hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98]":
              variant === "primary",
            "border border-gray-700 bg-transparent text-gray-50 hover:bg-gray-800":
              variant === "secondary",
            "text-gray-300 hover:text-gray-50 hover:bg-gray-800":
              variant === "ghost",
          },
          {
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-sm": size === "md",
            "px-8 py-3.5 text-base": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
