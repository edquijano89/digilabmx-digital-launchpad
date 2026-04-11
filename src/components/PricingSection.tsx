import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const plans = [
  {
    name: "Profesional",
    price: "$2500",
    period: "MXN + IVA",
    desc: "Para emprendedores y PyMES",
    features: [
      "Sitio web hasta 5 páginas",
      "Correo electrónico empresarial",
      "Integración WhatsApp",
      "SEO avanzado",
      "Hosting",
      "Tráfico ilimitado",
      "Pago único",
    ],
    popular: true,
  },
];

const PricingSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="precios" className="py-24 bg-surface-light text-surface-light-foreground">
      <div
        ref={ref}
        className={`container mx-auto px-4 ${
          isVisible ? "animate-fade-up" : "opacity-0"
        }`}
      >
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">
            Precios
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Planes para cada negocio
          </h2>
        </div>

        {/* 🔥 Contenedor centrado */}
        <div className="flex justify-center">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative w-full max-w-md rounded-2xl p-8 border transition-all hover:-translate-y-1 ${
                p.popular
                  ? "bg-primary/5 border-primary/30 shadow-lg shadow-primary/10"
                  : "bg-background/50 border-border/30"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                  Más popular
                </span>
              )}

              <h3 className="text-xl font-bold mb-1">{p.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>

              <div className="mb-6">
                <span className="text-4xl font-black">{p.price}</span>
                <span className="text-muted-foreground text-sm ml-1">
                  {p.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className="text-accent shrink-0" size={16} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`block text-center py-3 rounded-xl font-semibold transition-all ${
                  p.popular
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-border hover:border-primary/40"
                }`}
              >
                Empezar ahora
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-10">
          ¿Necesitas algo personalizado?{" "}
          <a href="#contacto" className="text-primary font-semibold">
            Contáctanos
          </a>
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
