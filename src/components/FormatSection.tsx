import { motion } from "framer-motion";

const stages = [
  { number: "01", title: "Fase de Liga", desc: "6 partidos por equipo en formato de liga" },
  { number: "02", title: "Clasificación Top 16", desc: "Los 16 mejores equipos avanzan" },
  { number: "03", title: "Octavos de Final", desc: "Eliminatorias a doble partido" },
  { number: "04", title: "Cuartos de Final", desc: "Los 8 mejores se enfrentan" },
  { number: "05", title: "Semifinales", desc: "Ida y vuelta por un lugar en la final" },
  { number: "06", title: "Gran Final", desc: "Partido único en sede emblemática" },
];

const FormatSection = () => {
  return (
    <section id="format" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-muted/30" />
      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl text-gradient-gold mb-4">
            Formato Competitivo e Innovador
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            El sistema garantiza enfrentamientos emocionantes desde la primera jornada hasta la final.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {stages.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group relative bg-gradient-card border border-border rounded-sm p-8 hover:border-primary/40 transition-all shadow-card"
            >
              <span className="font-display text-5xl text-primary/20 group-hover:text-primary/40 transition-colors">
                {s.number}
              </span>
              <h3 className="font-display text-2xl text-foreground mt-2 mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm font-body">{s.desc}</p>
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-gold opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormatSection;
