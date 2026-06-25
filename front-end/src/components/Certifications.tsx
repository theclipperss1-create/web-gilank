import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, CheckCircle, ExternalLink, X } from "lucide-react";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  verifyUrl: string;
}

interface CertificationsProps {
  t: any;
}

export const Certifications: React.FC<CertificationsProps> = ({ t }) => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const certificates: Certificate[] = t.certifications.list;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } },
  };

  return (
    <section id="certifications" className="px-6 md:px-12 lg:px-24 py-32 md:py-48 bg-canvas relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 max-w-2xl">
          <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-accent mb-3 block">
            {t.certifications.subtitle}
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white">
            {t.certifications.title}
          </h2>
        </div>

        {/* Bento Grid 2.0 (Asymmetric - 3 Columns Grid) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onClick={() => setSelectedCert(cert)}
              className="group p-8 rounded-[2.5rem] liquid-glass flex flex-col justify-between min-h-[260px] hover-glow-emerald cursor-pointer transition-all duration-500 relative overflow-hidden"
            >
              {/* Background gradient blur */}
              <div className="absolute top-0 right-0 w-[40%] h-[40%] rounded-full bg-accent/2 blur-2xl pointer-events-none" />

              {/* Card Header */}
              <div className="flex justify-between items-start">
                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 text-accent">
                  <Award className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-white/40">{cert.date}</span>
              </div>

              {/* Card Title & Issuer */}
              <div className="mt-8">
                <span className="text-xs font-semibold uppercase text-accent tracking-wider mb-2 block">
                  {cert.issuer}
                </span>
                <h3 className="text-lg md:text-xl font-display font-bold text-white group-hover:text-accent transition-colors duration-300 tracking-tight">
                  {cert.title}
                </h3>
              </div>

              {/* Tap to view text */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-white/40 group-hover:text-white/70 transition-colors duration-300">
                <span>ID: {cert.credentialId.slice(0, 10)}...</span>
                <span className="flex items-center gap-1">
                  <span>View Details</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Pop-up Verification Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="relative w-full max-w-md p-8 rounded-[2.5rem] bg-surface border border-white/10 shadow-2xl z-10 text-center"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-6 right-6 p-2 rounded-full border border-white/5 hover:border-white/10 text-white/60 hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="mx-auto w-16 h-16 rounded-full bg-accent-muted flex items-center justify-center text-accent mb-6">
                <Award className="w-8 h-8" />
              </div>

              <span className="text-xs font-bold uppercase text-accent tracking-widest block mb-2">
                {selectedCert.issuer}
              </span>

              <h4 className="text-xl md:text-2xl font-display font-bold text-white tracking-tight leading-tight mb-4">
                {selectedCert.title}
              </h4>

              {/* Status & Credential ID */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 mb-8 text-left space-y-3 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-white/40">Status:</span>
                  <span className="text-accent flex items-center gap-1 font-semibold">
                    <CheckCircle className="w-3.5 h-3.5" /> Verified
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">Issued:</span>
                  <span className="text-white/80">{selectedCert.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">Credential ID:</span>
                  <span className="text-white/80 select-all">{selectedCert.credentialId}</span>
                </div>
              </div>

              {/* Action Button */}
              <a
                href={selectedCert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 bg-accent hover:bg-accent-hover text-canvas font-bold rounded-full transition-colors duration-300"
              >
                <span>{t.certifications.verify}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
