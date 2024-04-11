// pages/api/datos.js
//import datos from './../../pages/api/products/index.json';
// Componente que consume los datos del archivo JSON
import React, { useState, useEffect } from 'react';
import datos from './../../pages/api/services/index.json';
import { Container, Grid } from '@mui/material';
import ServicesCards from './servicesCard';

function ListServices() {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    setServicios(datos.servicios);
  }, []);

  return (
    <div>
      {/*<Container>
        
      {servicios.map(servicio => (

      <ProductCards products ={producto} />

      ))}

      </Container>*/}

      <Grid container spacing={2}>
        {servicios.map((servicio) => (
          <Grid  item xs={12} sm={6} md={4} key={servicio.id}>
            <ServicesCards services={servicio} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ListServices;
