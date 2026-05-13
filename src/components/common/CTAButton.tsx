import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

type CTAButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  icon?: LucideIcon;
  onClick?: () => void;
  target?: string;
  to?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "ghost";
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-saffron/50";

const variantClasses = {
  primary:
    "bg-brand-red text-brand-cream shadow-[0_18px_35px_rgba(141,48,37,0.24)] hover:-translate-y-0.5 hover:bg-brand-deep",
  secondary:
    "border border-brand-brown/12 bg-white/80 text-brand-brown hover:-translate-y-0.5 hover:border-brand-saffron/40 hover:bg-white",
  ghost: "text-brand-red hover:-translate-y-0.5 hover:text-brand-deep",
};

export function CTAButton({
  children,
  className,
  href,
  icon: Icon = ArrowRight,
  onClick,
  target,
  to,
  type = "button",
  variant = "primary",
}: CTAButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], className);
  const content = (
    <>
      <span>{children}</span>
      <Icon className="h-4 w-4" />
    </>
  );

  if (to) {
    return (
      <Link className={classes} to={to}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={classes} href={href} onClick={onClick} rel="noreferrer" target={target}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} type={type}>
      {content}
    </button>
  );
}
