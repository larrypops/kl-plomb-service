'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { Target, ShieldCheck, Heart, Eye, CheckCircle2 } from 'lucide-react';

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const expertise = [
    { title: "Installation sanitaire complète", icon: <CheckCircle2 size={20} className="text-brand-light" /> },
    { title: "Réseaux hydrauliques", icon: <CheckCircle2 size={20} className="text-brand-light" /> },
    { title: "Dépannage rapide", icon: <CheckCircle2 size={20} className="text-brand-light" /> },
    { title: "Travaux sur chantier", icon: <CheckCircle2 size={20} className="text-brand-light" /> }
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-bg-section border-b border-border-card">
        <div className="section-padding py-16 text-center sm:py-24">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mb-6 italic"
          >
            À propos de KL Plomb Service Futur
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="text-base sm:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
          >
            KL Plomb Service Futur SARL est une entreprise spécialisée dans la plomberie et les installations hydrauliques au Cameroun. 
            Basée à Douala, notre mission est de fournir des services fiables, rapides et professionnels.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card flex flex-col gap-6"
        >
          <div className="w-14 h-14 bg-brand-main/10 rounded-xl flex items-center justify-center">
            <Target size={32} className="text-brand-light" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold">Notre mission</h2>
          <ul className="space-y-4 text-text-secondary">
            <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="flex items-center gap-3">
              <span className="text-brand-light">👉</span> Offrir des solutions de plomberie durables
            </motion.li>
            <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="flex items-center gap-3">
              <span className="text-brand-light">👉</span> Garantir la satisfaction client absolue
            </motion.li>
            <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="flex items-center gap-3">
              <span className="text-brand-light">👉</span> Intervenir rapidement en cas d’urgence
            </motion.li>
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card flex flex-col gap-6"
        >
          <div className="w-14 h-14 bg-brand-main/10 rounded-xl flex items-center justify-center">
            <Eye size={32} className="text-brand-light" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold">Notre vision</h2>
          <p className="text-text-secondary leading-relaxed">
            Devenir une référence incontournable en plomberie au Cameroun en apportant des solutions modernes, fiables et respectueuses des normes internationales.
          </p>
        </motion.div>
      </section>

      {/* Expertise & Engagement */}
      <section className="bg-bg-section section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl font-display font-bold mb-8 italic flex items-center gap-3">
              <ShieldCheck className="text-brand-light" /> 
              Notre Expertise
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {expertise.map((item, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 p-4 bg-bg-card border border-border-card rounded-xl"
                >
                  {item.icon}
                  <span className="font-medium">{item.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl font-display font-bold mb-8 italic flex items-center gap-3">
              <Heart className="text-brand-light" /> 
              Notre Engagement
            </motion.h2>
            <div className="space-y-4">
              {[
                { title: "Travail de qualité", desc: "Précision et durabilité dans chaque geste." },
                { title: "Respect des délais", desc: "Ponctualité et efficacité pour vos projets." },
                { title: "Transparence", desc: "Honnêteté sur les tarifs et les solutions proposées." },
                { title: "Professionnalisme", desc: "Une attitude exemplaire sur tous nos chantiers." }
              ].map((item, index) => (
                <motion.div key={index} variants={itemVariants} className="flex gap-4">
                  <span className="text-brand-light font-bold text-xl leading-none pt-1">👉</span>
                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-text-secondary text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Call */}
      <section className="section-padding text-center py-20 sm:py-32">
        <h2 className="text-2xl md:text-4xl font-display font-bold mb-8">
          Faites confiance à KL Plomb pour tous vos projets hydrauliques.
        </h2>
        <Link href="/contact" className="btn-gradient w-full px-8 py-4 text-lg sm:w-auto sm:px-12 sm:py-5 sm:text-xl">
          Contactez-nous aujourd’hui
        </Link>
      </section>
    </div>
  );
}
