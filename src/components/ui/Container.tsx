import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
}

export default function Container({ children, className, as: Tag = "div" }: ContainerProps) {
  return (
    <Tag className={cn("mx-auto max-w-6xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </Tag>
  );
}
