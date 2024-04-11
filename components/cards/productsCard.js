import React, { useState, useEffect } from 'react';
import datos from './../../pages/api/products/index.json';
import { Card, CardContent, CardMedia, Grid, ListSubheader, Typography } from '@mui/material';

const ListServices = ({ servicio }) => {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} style={{ height: '380px' }}>
            <Card style={{ height: '100%' }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={servicio.imagen}
                    alt={servicio.name}
                />
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        {servicio.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Categoría: {servicio.categoria}
                    </Typography>
                </CardContent>
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
