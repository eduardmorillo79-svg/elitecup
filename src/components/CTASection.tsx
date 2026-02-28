import { motion } from "framer-motion";
import { useState } from "react";

const CTASection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-muted/20" />
      {/* Gold accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-gold" />

      <div className="relative container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-gradient-gold mb-6">
            Sé Parte de la Nueva Historia del Fútbol Europeo
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 font-body">
            Regístrate para recibir noticias exclusivas, calendario de partidos y contenido especial del torneo.
          </p>

          {submitted ? (
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-primary font-body font-semibold text-lg"
            >
              ¡Gracias! Te mantendremos informado.
            </motion.p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu email"
                required
                className="flex-1 px-5 py-4 bg-muted border border-border rounded-sm text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-4 font-body font-semibold text-sm uppercase tracking-wider bg-gradient-gold text-primary-foreground rounded-sm hover:opacity-90 transition-opacity shadow-gold"
              >
                Regístrate Ahora
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
