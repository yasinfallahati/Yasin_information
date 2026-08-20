import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "center" | "start";
}

export default function SectionTitle({ title, subtitle, className, align = "center" }: SectionTitleProps) {
  return (
    <div className={cn("mb-12", align === "center" && "text-center", className)}>
      <h2 className="text-3xl font-bold tracking-tight text-gray-50 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-gray-300">{subtitle}</p>
      )}
    </div>
  );
}
