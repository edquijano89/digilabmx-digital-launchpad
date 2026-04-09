import { MessageCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-gradient-cta relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>
      <div ref={ref} className={`container mx-auto px-4 text-center relative z-10 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
          ¿Listo para digitalizar tu negocio?
        </h2>
        <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-10">
          Agenda una consulta y recibe una propuesta
        </p>
        <a
          href="#contacto"
          className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-all"
        >
          Agendar consulta 
        </a>
        <div className="flex items-center justify-center gap-6 mt-8">
          <a
            href="https://wa.me/524446500910"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          >
            <MessageCircle size={20} /> WhatsApp
          </a>
          <a
            href="https://www.facebook.com/people/Digilabmx/61579950442991/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          >
            📸 Facebook
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
