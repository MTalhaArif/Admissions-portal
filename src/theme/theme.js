'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E67E22', // Admissions Turkey Orange
    },
    secondary: {
      main: '#1ABC9C', // Admissions Turkey Teal
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'var(--font-inter), Arial, sans-serif',
  },
});

export default theme;
