'use client';

import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Grid, Paper, CircularProgress, TextField, InputAdornment } from '@mui/material';
import { Search, GraduationCap } from 'lucide-react';
import { getAllPrograms } from '@/lib/firebase/services/programs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ProgramsPage() {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const result = await getAllPrograms();
        if (result.success && result.data.length > 0) {
          setPrograms(result.data);
        } else {
          // Mock fallback
          setPrograms([
            { id: '1', university: 'Politecnico di Milano', name: 'Computer Science', level: 'Master', tuition: '€3,900/year' },
            { id: '2', university: 'University of Padua', name: 'Software Engineering', level: 'Bachelor', tuition: '€2,600/year' },
            { id: '3', university: 'Sapienza University of Rome', name: 'Artificial Intelligence', level: 'Master', tuition: '€2,900/year' },
            { id: '4', university: 'Bocconi University', name: 'International Management', level: 'Master', tuition: '€14,000/year' },
          ]);
        }
      } catch (error) {
        console.error("Failed to load programs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPrograms();
  }, []);

  const filteredPrograms = programs.filter(p => 
    p.name?.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.university?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: '#fafafa' }}>
      <Header onLoginClick={() => { window.location.href = '/'; }} />
      
      <Box sx={{ flexGrow: 1, py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, color: '#111927' }}>
              Find Your Study Program
            </Typography>
            <Typography variant="h6" sx={{ color: '#6C737F', mb: 4, maxWidth: '600px', mx: 'auto' }}>
              Explore hundreds of premier degree programs from our global partner universities.
            </Typography>
            
            <TextField 
              placeholder="Search by university or program name..."
              variant="outlined"
              fullWidth
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ maxWidth: '600px', bgcolor: 'white', borderRadius: 2 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search color="#9ca3af" />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
              <CircularProgress />
            </Box>
          ) : (
            <Grid container spacing={4}>
              {filteredPrograms.map((program, idx) => (
                <Grid item xs={12} md={6} key={program.id || idx}>
                  <Paper 
                    elevation={0} 
                    sx={{ 
                      p: 4, 
                      borderRadius: '16px', 
                      border: '1px solid #eaeaea',
                      transition: 'transform 0.2s, box-shadow 0.2s',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
                        borderColor: 'primary.main'
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                      <Box sx={{ bgcolor: 'rgba(26, 188, 156, 0.1)', p: 1.5, borderRadius: '12px' }}>
                        <GraduationCap color="#1ABC9C" size={28} />
                      </Box>
                      <Box>
                        <Typography variant="h5" sx={{ fontWeight: 700, color: '#111927', mb: 0.5 }}>
                          {program.name}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: 'primary.main', fontWeight: 600, mb: 2 }}>
                          {program.university}
                        </Typography>
                        
                        <Grid container spacing={2}>
                          <Grid item xs={6}>
                            <Typography variant="body2" sx={{ color: '#6C737F', fontWeight: 600 }}>Degree Level</Typography>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>{program.level || 'Bachelor'}</Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography variant="body2" sx={{ color: '#6C737F', fontWeight: 600 }}>Tuition Fee</Typography>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>{program.tuition || 'TBD'}</Typography>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                  </Paper>
                </Grid>
              ))}
              
              {filteredPrograms.length === 0 && (
                <Box sx={{ width: '100%', textAlign: 'center', py: 10 }}>
                  <Typography variant="h6" color="textSecondary">No programs found matching "{searchTerm}".</Typography>
                </Box>
              )}
            </Grid>
          )}
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
