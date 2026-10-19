'use client';

import React, { useState } from 'react';
import Header from './Header';
import PrypcoMenu from './PrypcoMenu';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Header onOpenMenu={() => setIsMenuOpen(true)} />
      <PrypcoMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
