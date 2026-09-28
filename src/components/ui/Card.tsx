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
        "border border-line bg-panel",
        hover && "transition-colors duration-300 hover:border-accent/40",
        className
      )}
    >
      {children}
    </div>
  );
}
