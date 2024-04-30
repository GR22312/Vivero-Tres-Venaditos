// pages/api/datos.js
//import datos from './../../pages/api/products/index.json';
// Componente que consume los datos del archivo JSON
import React, { useState, useEffect } from 'react';
import datos from './../../pages/api/servicios/index.json';
import { Container, Grid, List, ListSubheader } from '@mui/material';
import ServicesCards from './servicesCard';

function ListServices() {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    setServicios(datos.servicios);
  }, []);

  return (

    <>
    <List
        fullWidth
        sx={{
            width: '100%',
            bgcolor: 'grey.200',
            borderRadius: '8px',
            padding: '16px',
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
            <ListSubheader
                sx={{
                    bgcolor: '#063d79',
                    color: 'white',
                    borderRadius: '8px 8px 0 0',
                    padding: '16px',
                }}
                component="div"
                id="nested-list-subheader"
            >
                Los servicios que nosotros podemos brindar, se muestran a continuacion:
            </ListSubheader>
        }
    />

<Grid container spacing={2}>
{servicios.map((servicio) => (
            <ServicesCards key={servicio.id} services={servicio} />
        ))}
</Grid>
</>
  );
}

export default ListServices;
