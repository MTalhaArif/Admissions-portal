'use client';

import React, { useState } from 'react';
import { Box, Typography, Paper, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Plus } from 'lucide-react';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'name', headerName: 'Study Type Name', width: 300 },
  { field: 'description', headerName: 'Description', width: 400 },
  { field: 'activePrograms', headerName: 'Active Programs', width: 150 },
];

export default function AdminStudyTypesPage() {
  const [rows] = useState([
    { id: 'st_1', name: 'Bachelor Degree', description: 'Undergraduate academic degree awarded by colleges and universities.', activePrograms: 145 },
    { id: 'st_2', name: 'Master Degree', description: 'Postgraduate academic degree.', activePrograms: 89 },
    { id: 'st_3', name: 'Language Course', description: 'Intensive short-term or long-term language preparation.', activePrograms: 24 },
    { id: 'st_4', name: 'PhD / Doctorate', description: 'Advanced research postgraduate degree.', activePrograms: 12 },
  ]);

  return (
    <Box sx={{ height: '100%', width: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 4 }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: '#111927' }}>Study Types</Typography>
          <Typography variant="body1" sx={{ color: '#6C737F' }}>Manage categories of study available to students.</Typography>
        </Box>
        <Button variant="contained" color="primary" startIcon={<Plus size={20} />} sx={{ borderRadius: '8px', textTransform: 'none', fontWeight: 600 }}>
          Add Study Type
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
