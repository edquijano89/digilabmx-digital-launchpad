import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  { name: "Restaurante", type: "web", category: "Sitio Web", url: "https://plantilla1.digilabmx.com", color: "from-primary/80 to-accent/60" },
  { name: "Clínica Dental", type: "web", category: "Sitio Web", url: "https://plantilla2.digilabmx.com", color: "from-accent/80 to-primary/60" },
  { name: "Boutique", type: "web", category: "Sitio Web", url: "https://plantilla3.digilabmx.com", color: "from-primary/70 to-blue-600/60" },
  { name: "Gimnasio", type: "web", category: "Sitio Web", url: "/gimnasio", color: "from-cyan-500/80 to-primary/60" },
  { name: "Despacho Legal", type: "web", category: "Sitio Web", url: "/legal", color: "from-blue-700/80 to-accent/50" },
  { name: "Veterinaria", type: "web", category: "Sitio Web", url: "/veterinaria", color: "from-primary/80 to-cyan-400/60" },
];

const filters = ["Todos"];

const PortfolioSection = () => {
  const [active, setActive] = useState("Todos");
  const { ref, isVisible } = useScrollAnimation();

  const filtered = projects.filter((p) => {
    if (active === "Todos") return true;
    if (active === "Sitios Web") return p.type === "web";
  });

  return (
    <section id="portafolio" className="py-24 bg-background">
      <div
        ref={ref}
        className={`container mx-auto px-4 ${
          isVisible ? "animate-fade-up" : "opacity-0"
        }`}
      >
        <div className="text-center mb-12">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">
            Portafolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Nuestras plantillas
          </h2>
        </div>

        <div className="flex justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-card border border-border cursor-pointer">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-30`}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
                    {p.category}
                  </p>
                  <h3 className="text-xl font-bold">{p.name}</h3>
                </div>

                <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="flex items-center gap-2 text-primary-foreground font-semibold">
                    Ver proyecto <ExternalLink size={16} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-primary font-semibold"
          >
            Ver portafolio completo
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
