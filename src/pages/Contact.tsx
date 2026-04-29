'use client';

import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react';
import type { FormEvent } from 'react';
import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', phone: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000);
    setFormState({ name: '', phone: '', message: '' });
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-bg-section border-b border-border-card">
        <div className="section-padding py-16 text-center sm:py-20">
          <motion.h1 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.6 }}
             className="text-3xl sm:text-4xl md:text-6xl font-display font-bold italic mb-4"
          >
            Contactez-nous
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-text-secondary text-base sm:text-lg"
          >
            Nous sommes à votre écoute pour toutes vos demandes d'intervention ou de devis.
          </motion.p>
        </div>
      </section>

      <section className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Info Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-display font-bold mb-8 sm:mb-10 italic underline decoration-brand-light underline-offset-8">Coordonnées</h2>
          
          <div className="space-y-8 sm:space-y-10">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex items-start gap-4 sm:gap-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-main/10 rounded-2xl flex items-center justify-center shrink-0">
                <Phone className="text-brand-light" size={28} />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1 uppercase tracking-wider">Téléphone</h4>
                <a href="tel:+237697050329" className="text-xl sm:text-2xl font-display text-text-secondary hover:text-brand-light transition-colors">+237 6 97 05 03 29</a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex items-start gap-4 sm:gap-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-main/10 rounded-2xl flex items-center justify-center shrink-0">
                <Mail className="text-brand-light" size={28} />
              </div>
              <div className="min-w-0">
                <h4 className="text-lg font-bold mb-1 uppercase tracking-wider">Email</h4>
                <a href="mailto:lotchouangfotso@gmail.com" className="break-all text-base sm:text-xl text-text-secondary hover:text-brand-light transition-colors">lotchouangfotso@gmail.com</a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex items-start gap-4 sm:gap-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-main/10 rounded-2xl flex items-center justify-center shrink-0">
                <MapPin className="text-brand-light" size={28} />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1 uppercase tracking-wider">Localisation</h4>
                <p className="text-lg sm:text-xl text-text-secondary">Douala, Cameroun</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex items-start gap-4 sm:gap-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-main/10 rounded-2xl flex items-center justify-center shrink-0">
                <Clock className="text-brand-light" size={28} />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1 uppercase tracking-wider">Horaires</h4>
                <p className="text-lg sm:text-xl text-text-secondary">Disponible tous les jours</p>
                <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 text-green-400 text-xs font-bold rounded-full border border-green-500/20">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Intervention rapide
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Form Column */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card"
        >
          <h2 className="text-2xl sm:text-3xl font-display font-bold mb-8 italic">Envoyez-nous un message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold uppercase tracking-widest text-text-secondary mb-2">Nom complet</label>
              <input 
                type="text" 
                required 
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full bg-bg-main border border-border-card rounded-xl p-4 focus:outline-none focus:border-brand-main transition-all text-white" 
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label className="block text-sm font-bold uppercase tracking-widest text-text-secondary mb-2">Téléphone</label>
              <input 
                type="tel" 
                required 
                value={formState.phone}
                onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                className="w-full bg-bg-main border border-border-card rounded-xl p-4 focus:outline-none focus:border-brand-main transition-all text-white" 
                placeholder="+237 ..."
              />
            </div>
            <div>
              <label className="block text-sm font-bold uppercase tracking-widest text-text-secondary mb-2">Message / Besoins</label>
              <textarea 
                rows={5} 
                required 
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full bg-bg-main border border-border-card rounded-xl p-4 focus:outline-none focus:border-brand-main transition-all text-white resize-none" 
                placeholder="Décrivez votre projet ou votre urgence..."
              />
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all ${
                isSent ? 'bg-green-600 text-white' : 'btn-gradient'
              }`}
            >
              {isSent ? (
                <>Message envoyé !</>
              ) : (
                <>
                  Envoyer la demande
                  <Send size={20} />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </section>

      {/* CTA Final */}
      <section className="section-padding mb-12 text-center sm:mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-brand-deep p-6 sm:rounded-[2rem] sm:p-12 group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-main blur-[100px] opacity-20 -mr-32 -mt-32" />
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-white mb-6">Besoin d’une intervention urgente ?</h2>
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center gap-5 sm:gap-8">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href="tel:+237697050329" 
              className="flex items-center justify-center gap-3 sm:gap-4 text-xl sm:text-3xl font-display font-bold text-white hover:text-brand-light transition-all outline outline-1 outline-white/20 px-5 sm:px-8 py-4 rounded-2xl hover:bg-white/5"
            >
              <Phone size={32} />
              Appelez maintenant
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href="https://wa.me/237697050329" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 text-xl sm:text-2xl font-display font-medium text-[#25D366] hover:underline"
            >
              <MessageSquare size={28} />
              WhatsApp direct
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
