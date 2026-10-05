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
    <div className={cn("mb-14", align === "center" && "text-center", className)}>
      <div
        className={cn(
          "mb-4 h-px w-12 bg-gradient-to-r from-accent to-violet",
          align === "center" && "mx-auto"
        )}
      />
      <h2 className="font-display text-3xl font-bold tracking-tight text-bright sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-mute sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
