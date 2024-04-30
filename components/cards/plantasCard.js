import React, { useState, useEffect } from 'react';
import datos from './../../pages/api/plantas/index.json';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, TextField, Typography, Select, MenuItem, InputLabel, FormControl, Box } from '@mui/material';

const ListPlantas = ({ servicio }) => {
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

const PlantasGrid = () => {
    const [servicios, setServicios] = useState([]);
    const [filtroNombre, setFiltroNombre] = useState('');
    const [filtroCategoria, setFiltroCategoria] = useState('Todas las categorías');

    useEffect(() => {
        setServicios(datos.productos);
    }, []);

    // Función para manejar cambios en el campo de entrada
    const handleFiltroNombreChange = (e) => {
        setFiltroNombre(e.target.value);
    };

    // Función para manejar cambios en el menú desplegable de categorías
    const handleFiltroCategoriaChange = (e) => {
        setFiltroCategoria(e.target.value);
    };

    // Filtra los servicios según el filtro ingresado por nombre y categoría
    const serviciosFiltrados = servicios.filter((servicio) =>
        servicio.name.toLowerCase().includes(filtroNombre.toLowerCase()) &&
        (filtroCategoria === 'Todas las categorías' || servicio.clasificacion === filtroCategoria)
    );

    return (
        <div>
            {/* Contenedor para ubicar los filtros en la misma línea */}
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                {/* Campo de entrada para el filtro por nombre */}
                <TextField
                    label="Filtrar por nombre"
                    variant="outlined"
                    value={filtroNombre}
                    onChange={handleFiltroNombreChange}
                    fullWidth
                    sx={{ marginRight: 2,backgroundColor: "white" }}
                />
                
                {/* Menú desplegable para el filtro por categoría */}
                <FormControl variant="outlined" fullWidth  sx={{ backgroundColor: "white" }}>
                    <InputLabel id="filtro-categoria-label">Filtrar por categoría</InputLabel>
                    <Select
                        labelId="filtro-categoria-label"
                        id="filtro-categoria"
                        value={filtroCategoria}
                        onChange={handleFiltroCategoriaChange}
                        label="Filtrar por categoría"
                    >
                        <MenuItem value="Todas las categorías">Todas las categorías</MenuItem>
                        <MenuItem value="Plantas de interior">Plantas de interior</MenuItem>
                        <MenuItem value="Plantas de interior y exterior">Plantas de interior y exterior</MenuItem>
                        {/* Agrega más categorías según sea necesario */}
                    </Select>
                </FormControl>
            </Box>
            
            {/* Muestra un mensaje si no se encuentran servicios filtrados */}
            {serviciosFiltrados.length === 0 && (
                <Typography variant="h6" color="textSecondary" align="center" mb={2}>
                    No se encontró nada relacionado con el filtro seleccionado
                </Typography>
            )}

            {/* Grid de servicios filtrados */}
            <Grid container spacing={2}>
                {serviciosFiltrados.map((servicio) => (
                    <ListPlantas key={servicio.id} servicio={servicio} />
                ))}
            </Grid>
        </div>
    );
};

export default PlantasGrid;
