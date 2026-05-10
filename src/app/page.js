'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import CountriesGrid from '@/components/CountriesGrid';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import LoginModal from '@/components/LoginModal';

export default function Home() {
  const [loginOpen, setLoginOpen] = useState(false);

  const handleLoginSuccess = (email, user) => {
    // If the user email indicates admin, route to admin panel, else user dashboard
    if (email.includes('admin')) {
      window.location.href = '/admin';
    } else {
      window.location.href = '/dashboard';
    }
  };

  return (
    <>
      <Header onLoginClick={() => setLoginOpen(true)} />
      <main>
        <Hero />
        <ServicesGrid />
        <CountriesGrid />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
      
      <LoginModal 
        open={loginOpen} 
        onClose={() => setLoginOpen(false)} 
        onLoginSuccess={handleLoginSuccess} 
      />
    </>
  );
}
