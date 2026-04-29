'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-section border-t border-border-card pt-14 pb-10 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="flex items-center gap-3 mb-6">
            <Image
              src="/images/logo.jpg"
              alt="Logo KL Plomb Service Futur SARL"
              width={36}
              height={36}
              className="h-9 w-9 rounded object-cover"
            />
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm leading-none">PLOMB SERVICE</span>
              <span className="text-[8px] text-brand-light font-medium tracking-[0.2em] uppercase">Futur SARL</span>
            </div>
          </Link>
          <p className="text-text-secondary text-sm mb-6 max-w-xs">
            Expert en plomberie et installations hydrauliques au Cameroun. Toujours dans le professionnalisme.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-bg-card rounded-lg border border-border-card text-brand-light hover:bg-brand-main hover:text-white transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" className="p-2 bg-bg-card rounded-lg border border-border-card text-brand-light hover:bg-brand-main hover:text-white transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="p-2 bg-bg-card rounded-lg border border-border-card text-brand-light hover:bg-brand-main hover:text-white transition-all">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6">Liens Rapides</h4>
          <ul className="space-y-4 text-sm text-text-secondary">
            <li><Link href="/" className="hover:text-brand-light transition-colors">Accueil</Link></li>
            <li><Link href="/about" className="hover:text-brand-light transition-colors">À propos</Link></li>
            <li><Link href="/contact" className="hover:text-brand-light transition-colors">Contact</Link></li>
            <li><a href="#" className="hover:text-brand-light transition-colors">Nos Services</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6">Nos Services</h4>
          <ul className="space-y-4 text-sm text-text-secondary">
            <li>Installation Sanitaire</li>
            <li>Réseau Hydraulique</li>
            <li>Dépannage & Maintenance</li>
            <li>Travaux sur Chantier</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6">Coordonnées</h4>
          <ul className="space-y-4 text-sm text-text-secondary">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-brand-light shrink-0" />
              <span>Douala, Cameroun</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-brand-light shrink-0" />
              <a href="tel:+237697050329">+237 6 97 05 03 29</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-brand-light shrink-0" />
              <a href="mailto:lotchouangfotso@gmail.com" className="break-all">lotchouangfotso@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-14 sm:mt-20 pt-8 border-t border-border-card/50 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-xs text-text-secondary">
        <p>&copy; {currentYear} KL Plomb Service Futur SARL. Tous droits réservés.</p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <a href="#" className="hover:text-brand-light transition-colors">Mentions Légales</a>
          <a href="#" className="hover:text-brand-light transition-colors">Précision & Professionnalisme</a>
        </div>
      </div>
    </footer>
  );
}
