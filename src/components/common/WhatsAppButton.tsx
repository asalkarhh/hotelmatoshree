import { buildWhatsAppLink } from "../../utils/whatsapp";
import { cn } from "../../utils/cn";
import { WhatsAppIcon } from "./WhatsAppIcon";

type WhatsAppButtonProps = {
  message: string;
  phoneNumber: string;
  className?: string;
};

export function WhatsAppButton({ message, phoneNumber, className }: WhatsAppButtonProps) {
  return (
    <a
      aria-label="Chat on WhatsApp"
      className={cn("inline-flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(37,211,102,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#1fb458]", className)}
      href={buildWhatsAppLink(phoneNumber, message)}
      rel="noopener noreferrer"
      target="_blank"
    >
      <WhatsAppIcon className="h-5 w-5" />
      <span>WhatsApp</span>
    </a>
  );
}
