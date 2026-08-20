import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-gray-700 bg-gray-800",
        hover && "transition-all duration-300 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5",
        className
      )}
    >
      {children}
    </div>
  );
}
