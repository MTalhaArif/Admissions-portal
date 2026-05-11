'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CountriesGrid from '@/components/CountriesGrid';

export default function CountriesPage() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header onLoginClick={() => { window.location.href = '/'; }} />
      <Box sx={{ flexGrow: 1, py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, textAlign: 'center' }}>
            Study Destinations
          </Typography>
          <Typography variant="h6" sx={{ color: '#6C737F', mb: 6, textAlign: 'center', maxWidth: '700px', mx: 'auto' }}>
            Explore our diverse range of top study destinations around the world. We offer comprehensive support for universities in these regions.
          </Typography>
        </Container>
        <CountriesGrid />
      </Box>
      <Footer />
    </Box>
  );
}
