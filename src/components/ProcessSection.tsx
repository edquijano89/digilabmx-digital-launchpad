import { Search, FileText, Code, Rocket } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  { icon: Search, num: "01", title: "Consulta", desc: "Analizamos tu negocio y necesidades" },
  { icon: FileText, num: "02", title: "Propuesta", desc: "Te presentamos solución y presupuesto en 24h" },
  { icon: Code, num: "03", title: "Desarrollo", desc: "Construimos tu solución digital" },
  { icon: Rocket, num: "04", title: "Lanzamiento", desc: "Publicamos y te enseñamos a usarlo" },
];

const ProcessSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="proceso" className="py-24 bg-surface-light text-surface-light-foreground">
      <div ref={ref} className={`container mx-auto px-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">Proceso</p>
          <h2 className="text-3xl md:text-4xl font-bold">¿Cómo funciona?</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
          {steps.map((s, i) => (
            <div key={s.num} className="relative text-center" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="relative z-10 w-16 h-16 mx-auto rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                <s.icon className="text-primary" size={24} />
              </div>
              <span className="text-xs font-bold text-primary tracking-widest">{s.num}</span>
              <h3 className="text-lg font-bold mt-1 mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
