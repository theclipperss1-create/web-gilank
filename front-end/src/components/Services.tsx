import React from "react";
import { 
  Code2, 
  Smartphone, 
  Database, 
  ShieldCheck, 
  Zap, 
  LifeBuoy 
} from "lucide-react";

interface ServiceItem {
  name: string;
  description: string;
}

interface ServicesProps {
  t: any;
}

export const Services: React.FC<ServicesProps> = ({ t }) => {
  const services: ServiceItem[] = t.services.list;

  const icons = [
    <Code2 className="w-6 h-6 text-accent" />,
    <Smartphone className="w-6 h-6 text-accent" />,
    <Database className="w-6 h-6 text-accent" />,
    <ShieldCheck className="w-6 h-6 text-accent" />,
    <Zap className="w-6 h-6 text-accent" />,
    <LifeBuoy className="w-6 h-6 text-accent" />
  ];

  return (
    <section id="services" className="px-6 md:px-12 lg:px-24 py-28 md:py-40 bg-canvas relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[40%] h-[40%] rounded-full bg-accent/3 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-20 max-w-2xl">
          <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-accent mb-3 block">
            {t.services.subtitle}
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white leading-tight">
            {t.services.title}
          </h2>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-[2.5rem] liquid-glass flex flex-col justify-between min-h-[220px] hover-glow-white transition-all duration-500 relative overflow-hidden"
            >
              {/* Decorative top-right gradient */}
              <div className="absolute top-0 right-0 w-[30%] h-[30%] rounded-full bg-accent/2 blur-2xl pointer-events-none transition-all duration-500 group-hover:bg-accent/5" />

              {/* Icon Slot */}
              <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center mb-6 group-hover:border-accent/30 group-hover:bg-accent-muted transition-all duration-300">
                {icons[index] || <Code2 className="w-6 h-6 text-accent" />}
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-lg md:text-xl font-display font-bold text-white group-hover:text-accent transition-colors duration-300 tracking-tight">
                  {service.name}
                </h3>
                <p className="text-xs md:text-sm text-zinc-400 mt-3 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
