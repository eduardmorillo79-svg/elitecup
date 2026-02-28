import { Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/20 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl text-gradient-gold mb-2">Elite European Cup</h3>
            <p className="text-muted-foreground text-sm font-body">
              La nueva era del fútbol de clubes en Europa.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            <p className="font-body font-semibold text-sm text-foreground uppercase tracking-wider mb-1">
              Enlaces
            </p>
            {["Inicio", "Formato", "Equipos", "Contacto"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-muted-foreground text-sm font-body hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social */}
          <div>
            <p className="font-body font-semibold text-sm text-foreground uppercase tracking-wider mb-3">
              Síguenos
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Twitter, label: "Twitter" },
                { icon: Youtube, label: "YouTube" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-sm border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-xs font-body">
            © 2026 Elite European Cup. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
