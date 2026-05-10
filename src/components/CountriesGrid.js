'use client';

import React from 'react';
import { Box, Typography, Grid, Container, Button, Paper } from '@mui/material';
import { ArrowRight } from 'lucide-react';

const countries = [
  { name: 'Türkiye', code: 'TR', emoji: '🇹🇷' },
  { name: 'United Arab Emirates', code: 'AE', emoji: '🇦🇪' },
  { name: 'Italy', code: 'IT', emoji: '🇮🇹' },
  { name: 'Canada', code: 'CA', emoji: '🇨🇦' },
];

export default function CountriesGrid() {
  return (
    <Box sx={{ py: 10, bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ fontWeight: 700, textAlign: 'center', mb: 2 }}>
          Most favorite countries to study
        </Typography>
        <Typography variant="body1" sx={{ color: '#666', textAlign: 'center', mb: 6 }}>
          Admissions Turkey offers various destinations to study. Let&apos;s choose your destination.
        </Typography>
        
        <Grid container spacing={4} justifyContent="center">
          {countries.map((country) => (
            <Grid item xs={6} md={3} key={country.code}>
              <Paper 
                elevation={0}
                sx={{ 
                  p: 3, 
                  textAlign: 'center', 
                  borderRadius: '16px',
                  border: '1px solid #eaeaea',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    borderColor: 'primary.main',
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 24px rgba(0,0,0,0.05)'
                  }
                }}
              >
                <Typography sx={{ fontSize: '3rem', mb: 1 }}>{country.emoji}</Typography>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>{country.name}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button 
            variant="contained" 
            color="secondary"
            disableElevation
            endIcon={<ArrowRight size={18} />}
            sx={{ 
              borderRadius: '8px', 
              fontWeight: 600, 
              px: 4, 
              py: 1.5,
              textTransform: 'none'
            }}
          >
            SHOW ALL COUNTRIES
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
