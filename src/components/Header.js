'use client';

import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Container } from '@mui/material';
import { Search, Globe, MapPin, BookOpen, Settings } from 'lucide-react';

export default function Header({ onLoginClick }) {
  return (
    <AppBar position="sticky" color="inherit" elevation={1} sx={{ bgcolor: 'white', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: '80px', display: 'flex', justifyContent: 'space-between' }}>
          
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h5" sx={{ fontWeight: 800, letterSpacing: '-0.5px', color: '#171717', mr: 6, cursor: 'pointer' }}>
              Admissions Turkey
            </Typography>
            
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
              <Button color="inherit" startIcon={<Search size={18} />} sx={{ textTransform: 'none', color: '#555', fontWeight: 500 }}>
                Find Your Study
              </Button>
              <Button color="inherit" startIcon={<Globe size={18} />} sx={{ textTransform: 'none', color: '#555', fontWeight: 500 }}>
                Countries
              </Button>
              <Button color="inherit" startIcon={<MapPin size={18} />} sx={{ textTransform: 'none', color: '#555', fontWeight: 500 }}>
                Branches
              </Button>
              <Button color="inherit" startIcon={<BookOpen size={18} />} sx={{ textTransform: 'none', color: '#555', fontWeight: 500 }}>
                Blogs
              </Button>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button 
              variant="contained" 
              color="primary" 
              disableElevation
              onClick={onLoginClick}
              sx={{ 
                borderRadius: '8px', 
                fontWeight: 600, 
                px: 3, 
                py: 1,
                textTransform: 'none',
              }}
            >
              LOGIN
            </Button>
            <IconButton color="inherit" sx={{ color: '#555' }}>
              <Settings size={22} />
            </IconButton>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
