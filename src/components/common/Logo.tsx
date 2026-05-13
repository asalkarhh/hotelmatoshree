import { Link } from "react-router-dom";
import logoMark from "../../assets/logos/matoshree-mark.svg";
import { cn } from "../../utils/cn";

type LogoProps = {
  className?: string;
  compact?: boolean;
  showTagline?: boolean;
};

export function Logo({ className, compact = false, showTagline = true }: LogoProps) {
  return (
    <Link className={cn("flex items-center gap-3", className)} to="/">
      <img
        alt="Matoshree Group"
        className={compact ? "h-11 w-11 rounded-2xl" : "h-[52px] w-[52px] rounded-[22px]"}
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
