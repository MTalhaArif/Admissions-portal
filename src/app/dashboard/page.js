'use client';

import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, CircularProgress } from '@mui/material';
import { getUserApplications } from '@/lib/firebase/services/applications';
import { auth } from '@/lib/firebase/config';
import { onAuthStateChanged } from 'firebase/auth';

const MOCK_APPS = [
  { id: 'APP-1029', university: 'Politecnico di Milano', program: 'Computer Science', status: 'In Review', date: 'Oct 12, 2024' },
  { id: 'APP-1030', university: 'University of Padua', program: 'Software Engineering', status: 'Accepted', date: 'Oct 15, 2024' },
];

export default function DashboardPage() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Fetch real data from Firebase
        const result = await getUserApplications(user.uid);
        if (result.success && result.data.length > 0) {
          // Map Firebase data to table format
          const mappedApps = result.data.map(app => ({
            id: app.id.slice(0, 8).toUpperCase(),
            university: app.university || 'Unknown University',
            program: app.program || 'Unknown Program',
            status: app.status,
            date: new Date(app.submittedAt).toLocaleDateString()
          }));
          setApplications(mappedApps);
        } else {
          // If no apps or error, fallback to mock data for demonstration
          setApplications(MOCK_APPS);
        }
      } else {
        // Not logged in, use mock data
        setApplications(MOCK_APPS);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>My Applications</Typography>
      <Typography variant="body1" sx={{ color: '#666', mb: 4 }}>Track and manage your university applications.</Typography>
      
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <TableContainer component={Paper} elevation={0} sx={{ borderRadius: '12px', border: '1px solid #eaeaea' }}>
          <Table>
            <TableHead sx={{ bgcolor: '#fafafa' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 600 }}>Application ID</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>University</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Program</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Date</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {applications.map((row, idx) => (
                <TableRow key={row.id || idx} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell sx={{ fontWeight: 500 }}>{row.university}</TableCell>
                  <TableCell>{row.program}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>
                    <Chip 
                      label={row.status} 
                      size="small" 
                      color={row.status === 'Accepted' ? 'success' : 'warning'} 
                      sx={{ fontWeight: 600, borderRadius: '6px' }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}
