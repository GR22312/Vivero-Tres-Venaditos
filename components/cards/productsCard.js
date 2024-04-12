import React, { useState, useEffect } from 'react';
import datos from './../../pages/api/products/index.json';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, ListSubheader, Typography } from '@mui/material';

const ListServices = ({ servicio }) => {
    return (
<Grid item xs={12} sm={6} md={4} lg={3} style={{ height: '400px' }}>
  <Card style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
    <CardMedia
      component="img"
      height="200"
      image={servicio.imagen}
      alt={servicio.name}
    />
    <CardContent style={{ flex: '1 0 auto' }}>
      <Typography variant="h6" gutterBottom>
        {servicio.name}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Clasificación: {servicio.clasificacion}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="large" sx={{ width: '100%' }}>Ver más</Button>
    </CardActions>
  </Card>
</Grid>

    );
};

const ServiciosGrid = () => {
    const [servicios, setServicios] = useState([]);

    useEffect(() => {
        setServicios(datos.productos);
    }, []);

    return (
        <Grid container spacing={2}>


            {servicios.map((servicio) => (
                <ListServices key={servicio.id} servicio={servicio} />
            ))}
        </Grid>
    );
};

export default ServiciosGrid;
