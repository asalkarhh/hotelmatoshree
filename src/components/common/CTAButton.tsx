import type { ReactNode, ElementType } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

type CTAButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  icon?: ElementType;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  target?: string;
  to?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "ghost" | "whatsapp" | "map";
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-saffron/50";

const variantClasses = {
  primary:
    "bg-brand-red text-brand-cream shadow-[0_18px_35px_rgba(141,48,37,0.24)] hover:-translate-y-0.5 hover:bg-brand-deep",
  secondary:
    "border border-brand-brown/12 bg-white/80 text-brand-brown hover:-translate-y-0.5 hover:border-brand-saffron/40 hover:bg-white",
  ghost: "text-brand-red hover:-translate-y-0.5 hover:text-brand-deep",
  whatsapp:
    "bg-[#25D366] text-white shadow-[0_18px_40px_rgba(37,211,102,0.28)] hover:-translate-y-0.5 hover:bg-[#1fb458]",
  map:
    "bg-[#4285F4] text-white shadow-[0_18px_40px_rgba(66,133,244,0.28)] hover:-translate-y-0.5 hover:bg-[#3367D6]",
};

export function CTAButton({
  children,
  className,
  href,
  icon: Icon = ArrowRight,
  iconPosition = "right",
  onClick,
  target,
  to,
  type = "button",
  variant = "primary",
}: CTAButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], className);
  const iconSize = variant === "whatsapp" ? "shrink-0 h-5 w-5" : "shrink-0 h-4 w-4";
  const content = (
    <>
      {iconPosition === "left" && <Icon className={iconSize} />}
      <span>{children}</span>
      {iconPosition === "right" && <Icon className={iconSize} />}
    </>
  );

  if (to) {
    return (
      <Link className={classes} onClick={onClick} to={to}>
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
