import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Avatar } from '@mui/material';

const TESTIMONIALS = [
  {
    name: 'Emily Watson',
    university: 'University of Padua',
    quote: "Admissions Turkey made my dream of studying in Italy a reality! Their guidance through the complex visa and application process was invaluable.",
    avatar: 'https://i.pravatar.cc/150?img=47'
  },
  {
    name: 'Ahmed Hassan',
    university: 'Politecnico di Milano',
    quote: "I couldn't have navigated the scholarship options without their expert team. Highly recommend to any student looking to study abroad.",
    avatar: 'https://i.pravatar.cc/150?img=12'
  },
  {
    name: 'Sophia Rossi',
    university: 'Sapienza University of Rome',
    quote: "From the initial consultation to arriving in Rome, the support I received was outstanding. A truly professional service.",
    avatar: 'https://i.pravatar.cc/150?img=32'
  }
];

export default function Testimonials() {
  return (
    <Box sx={{ py: 10, bgcolor: '#fafafa' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" sx={{ fontWeight: 800, mb: 2 }}>
          Find out what students are saying
        </Typography>
        <Typography variant="body1" align="center" sx={{ color: '#666', mb: 8, maxWidth: '600px', mx: 'auto' }}>
          Join thousands of successful students who have achieved their global education dreams with our dedicated support.
        </Typography>

        <Grid container spacing={4}>
          {TESTIMONIALS.map((testimonial, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Card elevation={0} sx={{ height: '100%', borderRadius: '16px', border: '1px solid #eaeaea', p: 2 }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Typography variant="body1" sx={{ color: '#444', fontStyle: 'italic', mb: 4, flexGrow: 1 }}>
                    "{testimonial.quote}"
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar src={testimonial.avatar} sx={{ width: 50, height: 50 }} />
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, lineHeight: 1.2 }}>
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="primary" sx={{ fontWeight: 600 }}>
                        {testimonial.university}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
