'use client';

import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

export default function Hero() {
  return (
    <Box sx={{ 
      backgroundColor: '#f5f6fa', 
      py: { xs: 8, md: 12 },
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
        <Typography variant="h2" component="h1" sx={{ 
          fontWeight: 800, 
          color: '#171717',
          mb: 2,
          fontSize: { xs: '2.5rem', md: '4rem' },
          letterSpacing: '-1px'
        }}>
          Turning Ambition into <Box component="span" sx={{ color: 'primary.main' }}>Achievement</Box>
        </Typography>
        
        <Typography variant="h6" sx={{ 
          color: '#555', 
          mb: 4, 
          fontWeight: 400,
          maxWidth: '80%',
          mx: 'auto'
        }}>
          Explore premier study abroad programs with Admissions Turkey, your gateway to global education. Discover diverse courses, expert guidance, and personalized support to elevate your academic journey and career prospects.
        </Typography>
        
        <Button 
          variant="contained" 
          color="primary" 
          size="large"
          disableElevation
          sx={{ 
            borderRadius: '8px', 
            fontWeight: 600, 
            px: 4, 
            py: 1.5,
            fontSize: '1.1rem',
            textTransform: 'none'
          }}
        >
          Start Your University Search Here!
        </Button>
      </Container>
      
      {/* Decorative background elements can go here */}
    </Box>
  );
}
