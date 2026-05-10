'use client';

import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, Box, Typography, TextField, Button, IconButton, CircularProgress } from '@mui/material';
import { X } from 'lucide-react';
import { loginUser } from '@/lib/firebase/services/auth';

export default function LoginModal({ open, onClose, onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Attempt Firebase login
    const result = await loginUser(email, password);
    
    if (result.success) {
      onLoginSuccess(email, result.user);
    } else {
      setError(result.error);
    }
    setLoading(false);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth PaperProps={{ sx: { borderRadius: '16px', p: 1 } }}>
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: 1 }}>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>Login</Typography>
        <IconButton onClick={onClose} size="small" disabled={loading}>
          <X size={20} />
        </IconButton>
      </DialogTitle>
      
      <DialogContent>
        <Typography variant="body2" sx={{ color: '#666', mb: 3 }}>
          Please enter your login information
        </Typography>
        
        {error && (
          <Typography variant="body2" sx={{ color: 'error.main', mb: 2, bgcolor: 'error.light', p: 1, borderRadius: 1 }}>
            {error}
          </Typography>
        )}
        
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
          <TextField 
            label="Email Address" 
            variant="outlined" 
            fullWidth 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
          
          <Box>
            <TextField 
              label="Password" 
              type="password" 
              variant="outlined" 
              fullWidth 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
            <Typography variant="body2" sx={{ textAlign: 'right', mt: 1, color: 'primary.main', cursor: 'pointer', fontWeight: 600 }}>
              Forgot your password?
            </Typography>
          </Box>
          
          <Button 
            type="submit"
            variant="contained" 
            color="primary" 
            size="large"
            disableElevation
            fullWidth
            disabled={loading}
            sx={{ borderRadius: '8px', fontWeight: 700, py: 1.5, mt: 1 }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'LOGIN'}
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
