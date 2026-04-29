'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { Phone, MessageSquare, CheckCircle2, Droplets, Wrench, Building2, ShieldCheck, MapPin, ArrowRight } from 'lucide-react';

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const services = [
    {
      title: "Installation Sanitaire",
      desc: "Installation complète de salles de bain, pose de lavabos, douches, et WC modernes.",
      icon: <Droplets className="text-brand-light" size={32} />
    },
    {
      title: "Réseaux Hydrauliques",
      desc: "Tuyauterie domestique et industrielle, systèmes de distribution d'eau performants.",
      icon: <Wrench className="text-brand-light" size={32} />
    },
    {
      title: "Dépannage & Maintenance",
      desc: "Réparation de fuites urgentes, débouchage de canalisation et entretien préventif.",
      icon: <ShieldCheck className="text-brand-light" size={32} />
    },
    {
      title: "Travaux sur Chantier",
      desc: "Plomberie bâtiment, coordination avec ingénieurs pour constructions neuves.",
      icon: <Building2 className="text-brand-light" size={32} />
    }
  ];

  const gallery = [
    "/images/image-01.jpg",
    "/images/image-02.jpg",
    "/images/image-03.jpg",
    "/images/image-04.jpg"
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/image-04.jpg"
            alt="Installation de plomberie réalisée par KL Plomb Service"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-bg-main via-bg-main/90 to-transparent" />
        
        <div className="relative section-padding w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-main/10 border border-brand-main/20 text-brand-light text-xs font-semibold uppercase tracking-wider mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-brand-light animate-pulse" />
              Expertisé & Certifié
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              Votre expert en <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-main to-brand-light">plomberie</span> au Cameroun
            </h1>
            <p className="text-xl text-text-secondary mb-10 max-w-lg leading-relaxed">
              Installation, dépannage et maintenance de vos systèmes hydrauliques avec professionnalisme et rapidité.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+237697050329" 
                className="btn-gradient flex items-center gap-2 text-lg"
              >
                <Phone size={20} />
                Appeler maintenant
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/237697050329" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 px-8 py-4 rounded-full border border-border-card bg-bg-card hover:bg-border-card transition-all font-medium"
              >
                <MessageSquare size={20} className="text-[#25D366]" />
                WhatsApp
              </motion.a>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex flex-wrap gap-6 text-sm text-text-secondary"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 color="#2563EB" size={18} />
                Intervention rapide
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 color="#2563EB" size={18} />
                Disponible 7j/7
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 color="#2563EB" size={18} />
                Service professionnel
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 3 }}
            transition={{ duration: 1, delay: 0.2, ease: "backOut" }}
            className="hidden lg:block relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border border-border-card shadow-2xl">
              <Image 
                src="/images/equipe-01.jpg" 
                alt="Technicien KL Plomb Service sur intervention" 
                width={828}
                height={1080}
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-6 -left-6 glass-card p-6 border-l-4 border-l-brand-main"
            >
              <p className="text-3xl font-display font-bold text-white leading-none">100%</p>
              <p className="text-xs text-text-secondary uppercase tracking-widest mt-1">Satisfaction Client</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-bg-section section-padding" id="services">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-display font-bold mb-4 italic">Nos services de plomberie</motion.h2>
          <motion.p variants={itemVariants} className="text-text-secondary max-w-2xl mx-auto">
            Des solutions complètes pour tous vos besoins en installation et maintenance hydraulique.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glass-card flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-brand-main/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-main/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative"
          >
             <div className="aspect-video rounded-3xl overflow-hidden border border-border-card shadow-2xl">
               <Image
                src="/images/equipe-02.jpg"
                alt="Qualité de travail KL Plomb Service"
                width={828}
                height={1090}
                className="w-full h-full object-cover"
              />
             </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-main/10 blur-3xl rounded-full -z-10" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 italic">Pourquoi choisir KL Plomb Service Futur ?</h2>
            
            <div className="space-y-6">
              {[
                "Expertise terrain confirmée",
                "Intervention rapide à Douala et environs",
                "Matériel professionnel de pointe",
                "Travail propre, durable et garanti",
                "Disponibilité totale 7j/7"
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-brand-main/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 color="#38BDF8" size={14} />
                  </div>
                  <span className="text-lg text-text-secondary font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 p-8 bg-bg-card rounded-2xl border-l-4 border-l-brand-light"
            >
              <p className="text-xl font-display font-medium italic text-text-secondary">
                "Toujours dans le professionnalisme"
              </p>
              <footer className="mt-2 text-brand-light font-bold">— KL Plomb Team</footer>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Zones Section */}
      <section className="bg-brand-main py-10 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 py-10"
        >
          <div>
             <h2 className="text-3xl font-display font-bold text-white mb-2">Nous intervenons partout au Cameroun</h2>
             <p className="text-white/80">Douala, Yaoundé, Bafoussam et autres villes sur demande.</p>
          </div>
          <div className="flex gap-4">
             {["Douala", "Yaoundé", "Bafoussam"].map((city, i) => (
               <motion.div 
                key={city} 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20 text-white font-medium"
               >
                 <MapPin size={16} />
                 {city}
               </motion.div>
             ))}
          </div>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 italic">Nos réalisations</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Découvrez quelques exemples de nos installations réalisées avec précision et professionnalisme.
          </p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {gallery.map((img, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="aspect-square rounded-2xl overflow-hidden border border-border-card group cursor-pointer"
            >
              <img 
                src={img} 
                alt={`Réalisation plomberie ${i + 1}`} 
                width={828}
                height={1200}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Quick Contact / CTA */}
      <section className="section-padding mb-20 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card py-16 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-brand-main/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Besoin d’un plombier maintenant ?</h2>
          <p className="text-text-secondary mb-10 text-lg">Nos experts sont prêts à intervenir pour résoudre tous vos problèmes de plomberie.</p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+237697050329" 
              className="btn-gradient flex items-center gap-3 text-xl px-10 py-5"
            >
              <Phone size={24} />
              +237 6 97 05 03 29
            </motion.a>
            <Link href="/contact" className="flex items-center gap-2 text-brand-light font-bold hover:underline">
              Obtenir un devis rapide
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
