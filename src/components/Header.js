'use client';

import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton } from '@mui/material';
import { Search, Globe, MapPin, BookOpen, User, LogOut } from 'lucide-react';
import Link from 'next/link';
import { auth } from '@/lib/firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import { logoutUser } from '@/lib/firebase/services/auth';

export default function Header({ onLoginClick }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if auth is available before subscribing to prevent crash on mock fallback
    if (auth && typeof auth.onAuthStateChanged === 'function') {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
      return () => unsubscribe();
    } else {
      // Mock mode fallback
      setUser(null);
    }
  }, []);

  const handleLogout = async () => {
    await logoutUser();
    window.location.href = '/';
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: 'white', color: 'text.primary', elevation: 0, borderBottom: '1px solid #eaeaea' }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <Box component={Link} href="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
            <Typography variant="h5" sx={{ fontWeight: 900, letterSpacing: '-1px' }}>
              Admissions Turkey
            </Typography>
          </Box>
          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
            <Button component={Link} href="/programs" color="inherit" startIcon={<Search size={18} />} sx={{ textTransform: 'none', fontWeight: 600 }}>Find Your Study</Button>
            <Button component={Link} href="/countries" color="inherit" startIcon={<Globe size={18} />} sx={{ textTransform: 'none', fontWeight: 600 }}>Countries</Button>
            <Button component={Link} href="#" color="inherit" startIcon={<MapPin size={18} />} sx={{ textTransform: 'none', fontWeight: 600 }}>Branches</Button>
            <Button component={Link} href="#" color="inherit" startIcon={<BookOpen size={18} />} sx={{ textTransform: 'none', fontWeight: 600 }}>Blogs</Button>
          </Box>
          
          <Box>
            {user ? (
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <Button 
                  component={Link} 
                  href={user.email?.includes('admin') ? '/admin' : '/dashboard'} 
                  variant="contained" 
                  color="primary" 
                  startIcon={<User size={18} />}
                  sx={{ borderRadius: '8px', fontWeight: 700, px: 3, py: 1 }}
                  disableElevation
                >
                  {user.email?.includes('admin') ? 'Admin Panel' : 'Dashboard'}
                </Button>
                <IconButton onClick={handleLogout} color="error" title="Logout">
                  <LogOut size={20} />
                </IconButton>
              </Box>
            ) : (
              <Button 
                variant="contained" 
                color="primary" 
                onClick={onLoginClick}
                sx={{ borderRadius: '8px', fontWeight: 700, px: 4, py: 1 }}
                disableElevation
              >
                LOGIN
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
