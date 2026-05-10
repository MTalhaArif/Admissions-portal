'use client';

import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Plus } from 'lucide-react';
import { getAllPrograms } from '@/lib/firebase/services/programs';

const columns = [
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'university', headerName: 'University', width: 250 },
  { field: 'programName', headerName: 'Program Name', width: 300 },
  { field: 'level', headerName: 'Level', width: 150 },
  { field: 'tuition', headerName: 'Tuition Fee', width: 150 },
];

export default function AdminProgramsPage() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const result = await getAllPrograms();
        if (result.success && result.data.length > 0) {
          const mappedRows = result.data.map(prog => ({
            id: prog.id,
            university: prog.university,
            programName: prog.name,
            level: prog.level || 'Bachelor',
            tuition: prog.tuition || 'TBD'
          }));
          setRows(mappedRows);
        } else {
          // Fallback mock data
          setRows([
            { id: 'prog_1', university: 'Politecnico di Milano', programName: 'Computer Science', level: 'Master', tuition: '€3,900/year' },
            { id: 'prog_2', university: 'University of Padua', programName: 'Software Engineering', level: 'Bachelor', tuition: '€2,600/year' }
          ]);
        }
      } catch (error) {
        console.error('Error fetching programs:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPrograms();
  }, []);

  return (
    <Box sx={{ height: '100%', width: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 4 }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: '#111927' }}>Programs</Typography>
          <Typography variant="body1" sx={{ color: '#6C737F' }}>Manage academic programs and university partnerships.</Typography>
        </Box>
        <Button variant="contained" color="primary" startIcon={<Plus size={20} />} sx={{ borderRadius: '8px', textTransform: 'none', fontWeight: 600 }}>
          Add Program
        </Button>
      </Box>
      
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
