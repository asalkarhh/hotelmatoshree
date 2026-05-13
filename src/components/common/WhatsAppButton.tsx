import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "../../utils/whatsapp";

type WhatsAppButtonProps = {
  message: string;
  phoneNumber: string;
};

export function WhatsAppButton({ message, phoneNumber }: WhatsAppButtonProps) {
  return (
    <a
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(37,211,102,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#1fb458] sm:bottom-6 sm:right-6"
      href={buildWhatsAppLink(phoneNumber, message)}
      rel="noreferrer"
      target="_blank"
    >
      <MessageCircle className="h-5 w-5" />
      <span>WhatsApp</span>
    </a>
  );
}
