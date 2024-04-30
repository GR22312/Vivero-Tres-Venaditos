import React from 'react';
import { Typography, Grid, Avatar, Divider, Box, IconButton } from '@mui/material';
import { Phone, LocationOn, Email } from '@mui/icons-material';

const ContactUs = () => {
  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom align="center">Contáctanos</Typography>
      
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Avatar src="../img/logo/userLogo.png" alt="Rene Campeche Lopez" sx={{ width: 225, height: 210, mb: 2 }} />
            <Typography variant="h5" gutterBottom align="center">Rene Campeche Lopez</Typography>
            <Typography variant="subtitle1" align="center">Propietario</Typography>
          </Box>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>Contamos con:</Typography>
          <Typography variant="body1" gutterBottom>
          Variedad de plantas, flor de temporada, árboles forestales y endémicos.
          Servicio de diseño y mantenimiento de jardines.
          </Typography>
        </Grid>
        
        <Grid item xs={12}>
          <Divider />
        </Grid>
        
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>Datos de contacto</Typography>
          <Typography variant="h8" gutterBottom>Cualquier duda con respecto a los productos o servicios que ofrecemos puedes contactar con nosotros de la siguiente forma:</Typography>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Typography variant="body1" gutterBottom><Phone /> Teléfono fijo: 244 44 637 22</Typography>
          <Typography variant="body1" gutterBottom><Phone /> Celular: 222 792 91 29 / 244 111 90 15</Typography>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Typography variant="body1" gutterBottom><LocationOn /> Ubicación: 5 Norte 634, Centro Atlixco, Puebla CP: 74200</Typography>
          <Typography variant="body1" gutterBottom><Email /> Email: tresvenaditos7210@gmail.com</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;
