'use client';

import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { MessageCircle } from 'lucide-react';

export default function CTASection() {
  return (
    <Box sx={{ py: 8, bgcolor: '#f5f6fa' }}>
      <Container maxWidth="lg">
        <Box sx={{ 
          bgcolor: 'white', 
          borderRadius: '24px', 
          p: { xs: 4, md: 6 },
          border: '1px solid #eaeaea',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 4
        }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h3" sx={{ fontWeight: 700, color: '#333', mb: 2 }}>
              Not sure what to study?
            </Typography>
            <Typography variant="h6" sx={{ color: '#171717', fontWeight: 600, mb: 3 }}>
              We would be happy to assist you! Contact our agent via WhatsApp.
            </Typography>
            
            <Button 
              variant="contained" 
              color="secondary"
              disableElevation
              startIcon={<MessageCircle size={20} />}
              sx={{ 
                borderRadius: '8px', 
                fontWeight: 600, 
                px: 4, 
                py: 1.5,
                mb: 3,
                textTransform: 'none'
              }}
            >
              SEND A MESSAGE NOW!
            </Button>
            
            <Typography variant="body2" sx={{ color: '#666' }}>
              Consultation with Admissions Turkey&apos;s experts is online and free of charge.
            </Typography>
          </Box>
          
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            {/* Simple placeholder for the illustration shown in the screenshot */}
            <Box sx={{ 
              width: '200px', 
              height: '200px', 
              bgcolor: '#f0f0f0', 
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#999',
              border: '4px dashed #ccc'
            }}>
              Illustration Placeholder
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
