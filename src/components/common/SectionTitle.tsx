import { cn } from "../../utils/cn";

type SectionTitleProps = {
  align?: "left" | "center";
  className?: string;
  description: string;
  eyebrow: string;
  title: string;
};

export function SectionTitle({
  align = "left",
  className,
  description,
  eyebrow,
  title,
}: SectionTitleProps) {
  return (
    <div className={cn(align === "center" && "mx-auto max-w-3xl text-center", className)}>
      <span className="accent-badge">{eyebrow}</span>
      <h2 className="section-title mt-5 text-balance">{title}</h2>
      <p className="body-copy mt-4 max-w-2xl">{description}</p>
    </div>
  );
}
