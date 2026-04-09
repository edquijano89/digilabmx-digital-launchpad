import { Monitor, MessageSquare, Settings, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Monitor,
    title: "Sitios Web Profesionales",
    desc: "Diseño responsive, optimizado para SEO, entrega en días. Tu presencia digital lista para vender.",
    features: ["Landing pages", "E-commerce", "Portafolios", "Sitios corporativos"],
  },
  {
    icon: MessageSquare,
    title: "Chatbots con IA",
    desc: "Chatbots inteligentes entrenados con la información de tu negocio. Atienden, venden y captan leads.",
    features: ["Atención 24/7", "Integración WhatsApp", "Respuestas automáticas", "Captación de leads"],
  },
  {
    icon: Settings,
    title: "Mantenimiento y Soporte",
    desc: "Actualización, hosting y soporte técnico continuo para que tu negocio nunca se detenga.",
    features: ["Hosting incluido", "Actualizaciones", "Soporte técnico", "Monitoreo 24/7"],
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="servicios" className="py-24 bg-background">
      <div ref={ref} className={`container mx-auto px-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">Servicios</p>
          <h2 className="text-3xl md:text-4xl font-bold">Lo que hacemos por tu negocio</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <s.icon className="text-primary" size={26} />
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{s.desc}</p>
              <ul className="space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Ver todos los servicios <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
