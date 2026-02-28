import { motion } from "framer-motion";
import { Trophy, Coins, Star, Smartphone, Vote } from "lucide-react";

const benefits = [
  { icon: Trophy, title: "Mayor Competitividad", desc: "Formato que garantiza partidos intensos desde la primera fase" },
  { icon: Coins, title: "Premios Equitativos", desc: "Distribución económica más justa para todos los clubes participantes" },
  { icon: Star, title: "Equipos Emergentes", desc: "Oportunidades reales para clubes que buscan hacer historia" },
  { icon: Smartphone, title: "Experiencia Digital", desc: "Contenido exclusivo, estadísticas y streaming para los fanáticos" },
  { icon: Vote, title: "Votación MVP en Vivo", desc: "Los fanáticos eligen al mejor jugador de cada partido en tiempo real" },
];

const BenefitsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl text-gradient-gold mb-4">
            ¿Por Qué la EEC es Diferente?
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex items-start gap-6 bg-gradient-card border border-border rounded-sm p-6 hover:border-primary/30 transition-colors shadow-card"
            >
              <div className="shrink-0 w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center">
                <b.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground mb-1">{b.title}</h3>
                <p className="text-muted-foreground text-sm font-body">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
