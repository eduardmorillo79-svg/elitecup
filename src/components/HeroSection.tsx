import { motion } from "framer-motion";
import heroStadium from "@/assets/hero-stadium.webp";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroStadium}
          alt="Estadio europeo iluminado de noche"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-sm md:text-base uppercase tracking-[0.3em] text-primary mb-4">
            Temporada 2026
          </p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-gradient-gold leading-none mb-4">
            Elite European Cup
          </h1>
          <p className="font-display text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-6">
            Donde nacen las nuevas leyendas del fútbol europeo
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-2xl mx-auto text-muted-foreground text-base md:text-lg mb-10 font-body"
        >
          La Elite European Cup es un torneo anual que reúne a los 24 mejores clubes
          de Europa en una competencia innovadora que combina pasión, tecnología y espectáculo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#about"
            className="inline-flex items-center justify-center px-8 py-4 font-body font-semibold text-sm uppercase tracking-wider bg-gradient-gold text-primary-foreground rounded-sm hover:opacity-90 transition-opacity shadow-gold"
          >
            Descubre el Torneo
          </a>
          <a
            href="#format"
            className="inline-flex items-center justify-center px-8 py-4 font-body font-semibold text-sm uppercase tracking-wider border border-primary/40 text-primary rounded-sm hover:bg-primary/10 transition-colors"
          >
            Ver Equipos Clasificados
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
