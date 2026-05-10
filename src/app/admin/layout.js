'use client';

import React from 'react';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, AppBar, Toolbar, IconButton, Avatar, Collapse } from '@mui/material';
import { LayoutDashboard, Users, BookOpen, GraduationCap, Building2, Bell, Menu, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const drawerWidth = 260;

export default function AdminLayout({ children }) {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f4f6f8' }}>
      <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, bgcolor: 'white', color: 'text.primary', elevation: 0, borderBottom: '1px solid #eaeaea' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton edge="start" color="inherit">
            <Menu size={20} />
          </IconButton>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton>
              <Bell size={20} />
            </IconButton>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, cursor: 'pointer' }}>
              <Avatar sx={{ width: 32, height: 32 }} src="https://i.pravatar.cc/150?img=11" />
              <Typography variant="body2" fontWeight="600">Admin User</Typography>
              <ChevronDown size={16} />
            </Box>
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
            bgcolor: '#1c2536',
            color: '#9da4ae',
            borderRight: 'none'
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box sx={{ p: 3, display: 'flex', alignItems: 'center' }}>
          <Typography variant="h5" sx={{ fontWeight: 800, color: 'white', letterSpacing: '-0.5px' }}>
            Admissions Turkey Admin
          </Typography>
        </Box>
        
        <List sx={{ px: 2, pt: 2, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          <ListItem component={Link} href="/admin" sx={{ borderRadius: '8px', bgcolor: 'rgba(255, 255, 255, 0.04)', color: 'white' }}>
            <ListItemIcon sx={{ minWidth: 40, color: 'primary.main' }}><LayoutDashboard size={20} /></ListItemIcon>
            <ListItemText primary="Dashboard" primaryTypographyProps={{ fontWeight: 600, fontSize: '0.875rem' }} />
          </ListItem>
          <ListItem component={Link} href="/admin/leads" sx={{ borderRadius: '8px', '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.04)', color: 'white' } }}>
            <ListItemIcon sx={{ minWidth: 40, color: 'inherit' }}><Users size={20} /></ListItemIcon>
            <ListItemText primary="Leads" primaryTypographyProps={{ fontWeight: 600, fontSize: '0.875rem' }} />
          </ListItem>
          <ListItem component={Link} href="/admin/programs" sx={{ borderRadius: '8px', '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.04)', color: 'white' } }}>
            <ListItemIcon sx={{ minWidth: 40, color: 'inherit' }}><GraduationCap size={20} /></ListItemIcon>
            <ListItemText primary="Programs" primaryTypographyProps={{ fontWeight: 600, fontSize: '0.875rem' }} />
          </ListItem>
          <ListItem component={Link} href="/admin/study-types" sx={{ borderRadius: '8px', '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.04)', color: 'white' } }}>
            <ListItemIcon sx={{ minWidth: 40, color: 'inherit' }}><BookOpen size={20} /></ListItemIcon>
            <ListItemText primary="Study-types" primaryTypographyProps={{ fontWeight: 600, fontSize: '0.875rem' }} />
          </ListItem>
          <ListItem component={Link} href="/admin/companies" sx={{ borderRadius: '8px', '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.04)', color: 'white' } }}>
            <ListItemIcon sx={{ minWidth: 40, color: 'inherit' }}><Building2 size={20} /></ListItemIcon>
            <ListItemText primary="Companies" primaryTypographyProps={{ fontWeight: 600, fontSize: '0.875rem' }} />
          </ListItem>
        </List>
      </Drawer>
      
      <Box component="main" sx={{ flexGrow: 1, p: 4, mt: 8 }}>
        {children}
      </Box>
    </Box>
  );
}
