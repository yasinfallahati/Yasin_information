import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "center" | "start";
}

export default function SectionTitle({
  title,
  subtitle,
  className,
  align = "center",
}: SectionTitleProps) {
  return (
    <div className={cn("mb-12", align === "center" && "text-center", className)}>
      <h2 className="font-display text-3xl font-bold tracking-tight text-bright sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-sm text-mute sm:text-base">{subtitle}</p>}
    </div>
  );
}
