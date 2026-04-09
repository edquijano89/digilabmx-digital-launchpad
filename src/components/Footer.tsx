import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <a href="#inicio" className="text-xl font-bold mb-4 block">
              <span className="text-gradient">Digilab</span>MX
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Agencia digital mexicana especializada en sitios web profesionales y chatbots con inteligencia artificial para PyMEs.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Links rápidos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Inicio", "Nosotros", "Servicios", "Portafolio", "Precios", "Contacto"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="hover:text-foreground transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Recibe tips de digitalización</h4>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setEmail("");
              }}
              className="flex gap-2"
            >
              <input
                type="email"
                required
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-card border border-border rounded-lg px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Suscribir
              </button>
            </form>
            <div className="flex gap-3 mt-6">
              {["Ig", "Fb", "Wa", "Li"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/30 transition-all text-xs font-bold"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          © 2025 DigilabMX — Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
};

export default Footer;
