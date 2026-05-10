'use client';

import React, { useState } from 'react';
import { Box, Typography, Paper, Button, Chip } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Plus } from 'lucide-react';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'companyName', headerName: 'Company Name', width: 250 },
  { field: 'contactPerson', headerName: 'Contact Person', width: 200 },
  { field: 'email', headerName: 'Email Address', width: 250 },
  { 
    field: 'status', 
    headerName: 'Status', 
    width: 150,
    renderCell: (params) => (
      <Chip 
        label={params.value} 
        size="small" 
        color={params.value === 'Active' ? 'success' : 'default'} 
        sx={{ fontWeight: 600, borderRadius: '6px' }}
      />
    )
  },
];

export default function AdminCompaniesPage() {
  const [rows] = useState([
    { id: 'comp_1', companyName: 'Global Edu Partners', contactPerson: 'Sarah Jenkins', email: 'sarah@globaledu.com', status: 'Active' },
    { id: 'comp_2', companyName: 'Future Studies Agency', contactPerson: 'Michael Chang', email: 'm.chang@futurestudies.org', status: 'Active' },
    { id: 'comp_3', companyName: 'Elite Admissions Group', contactPerson: 'Robert Fox', email: 'rfox@eliteadmissions.co', status: 'Inactive' },
  ]);

  return (
    <Box sx={{ height: '100%', width: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 4 }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: '#111927' }}>Companies</Typography>
          <Typography variant="body1" sx={{ color: '#6C737F' }}>Manage partner agencies and B2B educational companies.</Typography>
        </Box>
        <Button variant="contained" color="primary" startIcon={<Plus size={20} />} sx={{ borderRadius: '8px', textTransform: 'none', fontWeight: 600 }}>
          Add Company
        </Button>
      </Box>
      
      <Paper elevation={0} sx={{ height: 600, width: '100%', border: '1px solid #E5E7EB', borderRadius: '16px', overflow: 'hidden' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: { paginationModel: { page: 0, pageSize: 10 } },
          }}
          pageSizeOptions={[5, 10, 25]}
          disableRowSelectionOnClick
          sx={{ border: 'none' }}
        />
      </Paper>
    </Box>
  );
}
