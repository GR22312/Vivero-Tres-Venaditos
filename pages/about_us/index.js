
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
          <Avatar src="https://www.svgrepo.com/show/382099/female-avatar-girl-face-woman-user-2.svg" alt="Miembro del Equipo" sx={{ width: 120, height: 120, margin: 'auto' }} />
          <Typography variant="subtitle1" align="center">Yaudi</Typography>
          <Typography variant="body2" align="center">Contadora</Typography>
        </Grid>

        
        <Grid item xs={12} md={4}>
          <Avatar src="https://www.shareicon.net/data/512x512/2016/09/15/829466_man_512x512.png" alt="Miembro del Equipo" sx={{ width: 120, height: 120, margin: 'auto' }} />
          <Typography variant="subtitle1" align="center">Rene Campeche</Typography>
          <Typography variant="body2" align="center">Licenciado</Typography>
        </Grid>
        
        
        <Grid item xs={12} md={4}>
          <Avatar src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png" alt="Miembro del Equipo" sx={{ width: 120, height: 120, margin: 'auto' }} />
          <Typography variant="subtitle1" align="center">Gloria</Typography>
          <Typography variant="body2" align="center">Contadora</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About_us;
