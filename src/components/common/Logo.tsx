import { Link } from "react-router-dom";
import logoMark from "../../assets/new/Dam_Biryani_Logo.png";
import { cn } from "../../utils/cn";

type LogoProps = {
  className?: string;
  compact?: boolean;
  showTagline?: boolean;
  theme?: "light" | "dark";
};

export function Logo({ className, compact = false, showTagline = true, theme = "dark" }: LogoProps) {
  return (
    <Link
      className={cn("flex items-center gap-3", className)}
      onClick={() => {
        if (window.location.pathname === "/") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
      to="/"
    >
      <img
        alt="Matoshree Group"
        className={
          compact
            ? "h-16 w-auto object-contain"
            : "h-24 w-auto object-contain"
        }
        src={logoMark}
      />
      <div className="min-w-0">
        <p className={cn("font-display text-xl font-semibold sm:text-2xl", theme === "dark" ? "text-brand-deep" : "text-brand-cream")}>
          Matoshree Group
        </p>
        {showTagline ? (
          <p className={cn("truncate text-[0.68rem] font-semibold uppercase tracking-[0.28em] sm:text-[0.72rem]", theme === "dark" ? "text-brand-red/72" : "text-brand-red")}>
            Hotel + Tea Franchise
          </p>
        ) : null}
      </div>
    </Link>
  );
}
