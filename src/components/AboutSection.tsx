import { Zap, Target, Headphones, Rocket } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const values = [
  { icon: Zap, label: "Innovación", desc: "Tecnología de vanguardia" },
  { icon: Target, label: "Resultados", desc: "Enfocados en tu ROI" },
  { icon: Headphones, label: "Soporte", desc: "Siempre disponibles" },
  { icon: Rocket, label: "Rapidez", desc: "Entrega en días" },
];

const stats = [
  { value: "", label: "Proyectos entregados" },
  { value: "", label: "Clientes satisfechos" },
  { value: "", label: "Años en el mercado" },
  { value: "", label: "Chatbots desplegados" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="nosotros" className="py-24 bg-surface-light text-surface-light-foreground">
      <div ref={ref} className={`container mx-auto px-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">Sobre nosotros</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Somos <span className="text-primary">DigilabMX</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Somos una agencia digital apasionada por ayudar a pequeñas y medianas empresas a dar el salto digital. Combinamos diseño moderno para crear herramientas que generan resultados.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Creemos que cada negocio local merece una presencia digital profesional. Por eso hacemos que la tecnología sea accesible, rápida y efectiva.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {values.map((v) => (
              <div
                key={v.label}
                className="bg-background/50 border border-border/30 rounded-xl p-6 text-center hover:border-primary/30 transition-colors"
              >
                <v.icon className="mx-auto mb-3 text-primary" size={28} />
                <h3 className="font-semibold mb-1">{v.label}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-black text-primary mb-1">{s.value}</p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
