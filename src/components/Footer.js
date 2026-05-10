'use client';

import React from 'react';
import { Box, Typography, Grid, Container, IconButton } from '@mui/material';
import { Instagram, Facebook, YouTube as Youtube, LinkedIn as Linkedin } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#f5f6fa', pt: 8, pb: 4, mt: 'auto' }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>USEFUL LINK</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, color: '#555' }}>
              <Typography component="a" href="#" sx={{ '&:hover': { color: 'primary.main' } }}>Homepage</Typography>
              <Typography component="a" href="#" sx={{ '&:hover': { color: 'primary.main' } }}>Find Your Study</Typography>
              <Typography component="a" href="#" sx={{ '&:hover': { color: 'primary.main' } }}>Countries</Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>RESOURCES</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, color: '#555' }}>
              <Typography component="a" href="#" sx={{ '&:hover': { color: 'primary.main' } }}>Blog</Typography>
              <Typography component="a" href="#" sx={{ '&:hover': { color: 'primary.main' } }}>Events</Typography>
              <Typography component="a" href="#" sx={{ '&:hover': { color: 'primary.main' } }}>Gallery</Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>COMPANY</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, color: '#555' }}>
              <Typography component="a" href="#" sx={{ '&:hover': { color: 'primary.main' } }}>About Us</Typography>
              <Typography component="a" href="#" sx={{ '&:hover': { color: 'primary.main' } }}>Contact Us</Typography>
              <Typography component="a" href="#" sx={{ '&:hover': { color: 'primary.main' } }}>Privacy Policy</Typography>
              <Typography component="a" href="#" sx={{ '&:hover': { color: 'primary.main' } }}>Terms & Conditions</Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 3 }}>Admissions Turkey</Typography>
            <Typography variant="body2" sx={{ color: '#555', mb: 1 }}>For the love of education.</Typography>
            <Typography variant="body2" sx={{ color: '#555', mb: 3 }}>Providing premium educational services around the globe.</Typography>
            
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton size="small" sx={{ color: '#555' }}><Instagram size={20} /></IconButton>
              <IconButton size="small" sx={{ color: '#555' }}><Facebook size={20} /></IconButton>
              <IconButton size="small" sx={{ color: '#555' }}><Youtube size={20} /></IconButton>
              <IconButton size="small" sx={{ color: '#555' }}><Linkedin size={20} /></IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
