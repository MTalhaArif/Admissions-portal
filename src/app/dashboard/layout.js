'use client';

import React from 'react';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, AppBar, Toolbar, IconButton, Avatar } from '@mui/material';
import { LayoutDashboard, FileText, Settings, LogOut, Bell } from 'lucide-react';
import Link from 'next/link';

const drawerWidth = 260;

export default function DashboardLayout({ children }) {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f5f6fa' }}>
      <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, bgcolor: 'white', color: 'text.primary', elevation: 1 }}>
        <Toolbar sx={{ justifyContent: 'flex-end', gap: 2 }}>
          <IconButton>
            <Bell size={20} />
          </IconButton>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Typography variant="body2" fontWeight="600">Talha Arif</Typography>
            <Avatar sx={{ bgcolor: 'primary.main', width: 32, height: 32 }}>T</Avatar>
          </Box>
        </Toolbar>
      </AppBar>
      
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            borderRight: '1px solid #eaeaea'
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box sx={{ p: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h5" sx={{ fontWeight: 800, color: '#171717', letterSpacing: '-0.5px' }}>
            Admissions Turkey
          </Typography>
        </Box>
        
        <List sx={{ px: 2 }}>
          <ListItem component={Link} href="/dashboard" sx={{ borderRadius: '8px', mb: 1, '&:hover': { bgcolor: '#f0f0f0' } }}>
            <ListItemIcon sx={{ minWidth: 40 }}><LayoutDashboard size={20} /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem sx={{ borderRadius: '8px', mb: 1, bgcolor: 'rgba(230, 126, 34, 0.1)', color: 'primary.main' }}>
            <ListItemIcon sx={{ minWidth: 40, color: 'primary.main' }}><FileText size={20} /></ListItemIcon>
            <ListItemText primary="My Applications" primaryTypographyProps={{ fontWeight: 600 }} />
          </ListItem>
          <ListItem sx={{ borderRadius: '8px', mb: 1, '&:hover': { bgcolor: '#f0f0f0' } }}>
            <ListItemIcon sx={{ minWidth: 40 }}><Settings size={20} /></ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
        
        <Box sx={{ flexGrow: 1 }} />
        
        <List sx={{ px: 2, pb: 3 }}>
          <ListItem component={Link} href="/" sx={{ borderRadius: '8px', color: 'error.main', '&:hover': { bgcolor: 'error.light', color: 'white' } }}>
            <ListItemIcon sx={{ minWidth: 40, color: 'inherit' }}><LogOut size={20} /></ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
      
      <Box component="main" sx={{ flexGrow: 1, p: 4, mt: 8 }}>
        {children}
      </Box>
    </Box>
  );
}
