import { Link } from "react-router-dom";
import logoMark from "../../assets/new/Dam_Biryani_Logo.png";
import { cn } from "../../utils/cn";

type LogoProps = {
  className?: string;
  compact?: boolean;
  showTagline?: boolean;
};

export function Logo({ className, compact = false, showTagline = true }: LogoProps) {
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
            ? "h-12 w-12 rounded-2xl bg-white object-contain p-1.5"
            : "h-14 w-14 rounded-[22px] bg-white object-contain p-1.5"
        }
        src={logoMark}
      />
      <div className="min-w-0">
        <p className="font-display text-xl font-semibold text-brand-deep sm:text-2xl">
          Matoshree Group
        </p>
        {showTagline ? (
          <p className="truncate text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-brand-red/72 sm:text-[0.72rem]">
            Hotel + Tea Franchise
          </p>
        ) : null}
      </div>
    </Link>
  );
}
