import { useState } from "react";
import { Send, MessageCircle, Mail, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", business: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <section id="contacto" className="py-24 bg-background">
      <div ref={ref} className={`container mx-auto px-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">Contacto</p>
          <h2 className="text-3xl md:text-4xl font-bold">Hablemos de tu proyecto</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                required
                type="text"
                placeholder="Nombre"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
              <input
                type="text"
                placeholder="Negocio"
                value={form.business}
                onChange={(e) => setForm({ ...form, business: e.target.value })}
                className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                required
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
              <input
                type="tel"
                placeholder="Teléfono"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
            <select
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors"
            >
              <option value="">Servicio de interés</option>
              <option value="web">Sitio Web Profesional</option>
              <option value="chatbot">Chatbot con IA</option>
              <option value="ecommerce">E-commerce</option>
              <option value="mantenimiento">Mantenimiento y Soporte</option>
              <option value="otro">Otro</option>
            </select>
            <textarea
              placeholder="Cuéntanos sobre tu proyecto..."
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all"
            >
              <Send size={18} /> Enviar mensaje
            </button>
            {submitted && (
              <p className="text-accent text-center font-medium animate-fade-up">
                ✅ ¡Mensaje enviado! Te contactaremos pronto.
              </p>
            )}
          </form>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-6">Información de contacto</h3>
              <div className="space-y-4">
                <a
                  href="https://wa.me/524446500910"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <MessageCircle className="text-accent" size={20} />
                  +52 444 650 0910
                </a>
                <a
                  href="mailto:contacto@digilabmx.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="text-accent" size={20} />
                  contacto@digilabmx.com
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="text-accent" size={20} />
                  Lun - Vie: 9:00 AM - 6:00 PM
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Síguenos</h3>
              <div className="flex gap-4">
                {["Instagram", "Facebook", "WhatsApp", "LinkedIn"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/30 transition-all text-xs font-bold"
                  >
                    {s[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
