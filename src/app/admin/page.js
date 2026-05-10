'use client';

import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Paper, CircularProgress } from '@mui/material';
import { getAllUsers } from '@/lib/firebase/services/users';
import { getAllPrograms } from '@/lib/firebase/services/programs';

export default function AdminDashboardPage() {
  const [stats, setStats] = useState([
    { title: 'Total Leads', value: '...', color: '#10B981' },
    { title: 'Active Applications', value: '...', color: '#3B82F6' },
    { title: 'Universities', value: '...', color: '#F59E0B' },
    { title: 'Programs', value: '...', color: '#6366F1' },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [usersResult, programsResult] = await Promise.all([
          getAllUsers(),
          getAllPrograms()
        ]);

        const usersCount = usersResult.success ? usersResult.data.length : 1245; // Fallback to mock
        const programsCount = programsResult.success ? programsResult.data.length : 3450;

        setStats([
          { title: 'Total Leads', value: usersCount.toLocaleString(), color: '#10B981' },
          { title: 'Active Applications', value: '850', color: '#3B82F6' },
          { title: 'Universities', value: '124', color: '#F59E0B' },
          { title: 'Programs', value: programsCount.toLocaleString(), color: '#6366F1' },
        ]);
      } catch (error) {
        console.error('Error fetching admin stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: '#111927' }}>Dashboard</Typography>
      <Typography variant="body1" sx={{ color: '#6C737F', mb: 4 }}>Overview of your Admissions Turkey administration panel.</Typography>
      
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={3} mb={4}>
          {stats.map((stat, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Paper elevation={0} sx={{ p: 3, borderRadius: '16px', border: '1px solid #E5E7EB' }}>
                <Typography variant="overline" sx={{ color: '#6C737F', fontWeight: 600 }}>{stat.title}</Typography>
                <Typography variant="h4" sx={{ fontWeight: 700, mt: 1, color: stat.color }}>{stat.value}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
      
      {/* Calendar placeholder for Admin Dashboard */}
      <Paper elevation={0} sx={{ p: 3, borderRadius: '16px', border: '1px solid #E5E7EB', minHeight: '400px' }}>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>Calendar / Recent Activity</Typography>
        <Box sx={{ 
          height: '300px', 
          bgcolor: '#F9FAFB', 
          borderRadius: '8px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          border: '1px dashed #D1D5DB'
        }}>
          <Typography sx={{ color: '#9CA3AF' }}>Full Calendar Implementation</Typography>
        </Box>
      </Paper>
    </Box>
  );
}
