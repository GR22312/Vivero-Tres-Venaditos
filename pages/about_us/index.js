
import React from 'react';
import { Typography, Grid, Avatar, Box } from '@mui/material';

const About_us = () => {
  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom align="center">Acerca de Nosotros</Typography>
      
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Typography variant="body1" gutterBottom align="justify">
            Somos Vivero Tres Venaditos, una empresa dedicada a proporcionar las mejores plantas y servicios de jardinería para nuestros clientes.
          </Typography>
          <Typography variant="body1" gutterBottom align="justify">
            Nuestra misión es crear espacios verdes hermosos y vibrantes que mejoren la calidad de vida y el bienestar de las personas.
          </Typography>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Typography variant="body1" gutterBottom align="justify">
            En Vivero Tres Venaditos nos enorgullecemos de ofrecer una amplia variedad de plantas, desde flores de temporada hasta árboles forestales y endémicos.
          </Typography>
          <Typography variant="body1" gutterBottom align="justify">
            Además, ofrecemos servicios de diseño y mantenimiento de jardines para ayudar a nuestros clientes a crear y mantener espacios verdes hermosos y saludables.
          </Typography>
        </Grid>
        
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom align="center">Nuestro Equipo</Typography>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Avatar src="https://i.pinimg.com/236x/62/32/0f/62320fb09a2e1c008b459cabc5e92cdb.jpg" alt="Miembro del Equipo" sx={{ width: 120, height: 120, margin: 'auto' }} />
          <Typography variant="subtitle1" align="center">Rene Campeche</Typography>
          <Typography variant="body2" align="center">Licenciado</Typography>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Avatar src="https://i.pinimg.com/236x/78/6e/24/786e249c0023cc19ba70ab8604e01612.jpg" alt="Miembro del Equipo" sx={{ width: 120, height: 120, margin: 'auto' }} />
          <Typography variant="subtitle1" align="center">Yaudi</Typography>
          <Typography variant="body2" align="center">Contadora</Typography>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Avatar src="data:image/png;base64,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" alt="Miembro del Equipo" sx={{ width: 120, height: 120, margin: 'auto' }} />
          <Typography variant="subtitle1" align="center">Gloria</Typography>
          <Typography variant="body2" align="center">Cargo</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About_us;
