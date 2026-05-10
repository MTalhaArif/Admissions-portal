'use client';

import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { getAllUsers } from '@/lib/firebase/services/users';

const columns = [
  { field: 'id', headerName: 'ID', width: 220 },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'email', headerName: 'Email', width: 250 },
  { field: 'role', headerName: 'Role', width: 130 },
  { field: 'createdAt', headerName: 'Created At', width: 200 },
];

export default function AdminLeadsPage() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const result = await getAllUsers();
        if (result.success && result.data.length > 0) {
          const mappedRows = result.data.map(user => ({
            id: user.id,
            name: user.name || 'Unknown',
            email: user.email || 'N/A',
            role: user.role || 'user',
            createdAt: user.createdAt ? new Date(user.createdAt).toLocaleString() : 'N/A'
          }));
          setRows(mappedRows);
        } else {
          // Fallback mock data
          setRows([
            { id: 'usr_1', name: 'Talha Arif', email: 'talhaarif31@gmail.com', role: 'admin', createdAt: new Date().toLocaleString() },
            { id: 'usr_2', name: 'John Doe', email: 'john@example.com', role: 'user', createdAt: new Date().toLocaleString() }
          ]);
        }
      } catch (error) {
        console.error('Error fetching leads:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchLeads();
  }, []);

  return (
    <Box sx={{ height: '100%', width: '100%' }}>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: '#111927' }}>Leads</Typography>
      <Typography variant="body1" sx={{ color: '#6C737F', mb: 4 }}>Manage and track prospective students.</Typography>
      
      <Paper elevation={0} sx={{ height: 600, width: '100%', border: '1px solid #E5E7EB', borderRadius: '16px', overflow: 'hidden' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          loading={loading}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10, 25]}
          disableRowSelectionOnClick
          sx={{ border: 'none' }}
        />
      </Paper>
    </Box>
  );
}
