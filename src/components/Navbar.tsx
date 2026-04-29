'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, MessageSquare, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'À Propos', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-main/80 backdrop-blur-md border-b border-border-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-3">
        <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <Image
            src="/images/logo.jpg"
            alt="Logo KL Plomb Service Futur SARL"
            width={44}
            height={44}
            priority
            className="h-10 w-10 shrink-0 rounded-lg object-cover sm:h-11 sm:w-11"
          />
          <div className="flex min-w-0 flex-col">
            <span className="truncate font-display font-bold text-base leading-none sm:text-lg">PLOMB SERVICE</span>
            <span className="text-[10px] text-brand-light font-medium tracking-[0.2em] uppercase">Futur SARL</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm font-medium transition-colors hover:text-brand-light ${
                pathname === link.path ? 'text-brand-light' : 'text-text-secondary'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a href="tel:+237697050329" className="btn-gradient flex items-center gap-2 px-5 py-2.5 text-sm">
            <Phone size={16} />
            Appeler
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="shrink-0 md:hidden text-text-primary" onClick={() => setIsOpen(!isOpen)} aria-label="Ouvrir le menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-card border-b border-border-card overflow-hidden"
          >
            <div className="flex flex-col p-4 sm:p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition-colors ${
                    pathname === link.path ? 'text-brand-light' : 'text-text-secondary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://wa.me/237697050329"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-medium"
              >
                <MessageSquare size={20} />
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
