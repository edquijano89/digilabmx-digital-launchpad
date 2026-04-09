import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/524446500910"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse-glow"
    style={{ boxShadow: "0 0 20px rgba(34,197,94,0.4)" }}
    aria-label="WhatsApp"
  >
    <MessageCircle className="text-foreground" size={26} />
  </a>
);

export default WhatsAppButton;
