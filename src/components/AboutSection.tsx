import { motion } from "framer-motion";
import { Users, BarChart3, ShieldCheck, Gamepad2 } from "lucide-react";

const features = [
  { icon: Users, title: "24 Equipos", desc: "Los mejores clubes clasificados de toda Europa" },
  { icon: BarChart3, title: "Estadísticas en Tiempo Real", desc: "Tecnología avanzada para cada partido" },
  { icon: ShieldCheck, title: "VAR con IA", desc: "Arbitraje mejorado con inteligencia artificial" },
  { icon: Gamepad2, title: "Experiencia Interactiva", desc: "Contenido digital exclusivo para fanáticos" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl text-gradient-gold mb-6">
            Una Nueva Era del Fútbol Europeo
          </h2>
          <p className="text-muted-foreground text-lg font-body leading-relaxed">
            La Elite European Cup (EEC) nace con el objetivo de revolucionar el fútbol de clubes
            en Europa. Con un formato más dinámico y competitivo, el torneo ofrece más oportunidades
            para equipos emergentes y garantiza partidos de alto nivel en cada jornada.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-gradient-card border border-border rounded-sm p-8 text-center hover:border-primary/30 transition-colors shadow-card"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-sm bg-primary/10 flex items-center justify-center">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm font-body">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
