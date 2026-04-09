import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    text: "DigilabMX transformó nuestro negocio. En dos semanas teníamos un sitio web profesional y un chatbot que atiende clientes por WhatsApp 24/7.",
    name: "María González",
    business: "Clínica Dental Sonríe",
    avatar: "MG",
  },
  {
    text: "Excelente servicio y muy rápidos. El chatbot con IA nos ayudó a captar 3x más leads en el primer mes. ¡Totalmente recomendados!",
    name: "Carlos Ramírez",
    business: "Gimnasio FitPro",
    avatar: "CR",
  },
  {
    text: "Profesionales, atentos y con precios justos. Nuestro e-commerce quedó increíble y las ventas aumentaron desde la primera semana.",
    name: "Ana López",
    business: "Boutique Moda MX",
    avatar: "AL",
  },
  {
    text: "El mejor equipo para digitalizar un negocio local. Nos entendieron perfectamente y entregaron todo antes de tiempo.",
    name: "Roberto Sánchez",
    business: "Despacho Legal Torres",
    avatar: "RS",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-card">
      <div ref={ref} className={`container mx-auto px-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">Testimonios</p>
          <h2 className="text-3xl md:text-4xl font-bold">Lo que dicen nuestros clientes</h2>
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
            ))}
          </div>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 min-h-[80px]">
            "{testimonials[current].text}"
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
              {testimonials[current].avatar}
            </div>
            <div className="text-left">
              <p className="font-semibold">{testimonials[current].name}</p>
              <p className="text-sm text-muted-foreground">{testimonials[current].business}</p>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === current ? "bg-primary w-8" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
