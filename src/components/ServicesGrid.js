import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { Search, FileCheck, Send, CheckCircle } from 'lucide-react';

const SERVICES = [
  {
    icon: <Search size={40} color="#1ABC9C" />,
    title: 'Free Consultation',
    description: 'Our expert counselors will help you find the best universities and programs tailored to your academic profile and career goals.',
  },
  {
    icon: <FileCheck size={40} color="#E67E22" />,
    title: 'Document Checking',
    description: 'We meticulously review your academic transcripts, motivational letters, and CV to ensure they meet university standards.',
  },
  {
    icon: <Send size={40} color="#3B82F6" />,
    title: 'University Apply',
    description: 'Leave the complex application portals to us. We handle the entire submission process on your behalf to secure your admission.',
  },
  {
    icon: <CheckCircle size={40} color="#10B981" />,
    title: 'Visa Support',
    description: 'Navigating study visas is crucial. We provide step-by-step guidance for visa appointments, financial proof, and interviews.',
  }
];

export default function ServicesGrid() {
  return (
    <Box sx={{ py: 10, bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" sx={{ fontWeight: 800, mb: 2 }}>
          Why Choose Admissions Turkey?
        </Typography>
        <Typography variant="body1" align="center" sx={{ color: '#666', mb: 8, maxWidth: '600px', mx: 'auto' }}>
          We provide end-to-end support to ensure your transition to studying abroad is as smooth as possible.
        </Typography>

        <Grid container spacing={4}>
          {SERVICES.map((service, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Paper 
                elevation={0} 
                sx={{ 
                  p: 4, 
                  height: '100%', 
                  borderRadius: '16px', 
                  border: '1px solid #eaeaea',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.08)'
                  }
                }}
              >
                <Box sx={{ mb: 3 }}>
                  {service.icon}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.6 }}>
                  {service.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
