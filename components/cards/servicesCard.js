import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card_img from '../modals/products_img';
import { Chip, Grid } from '@mui/material';
import ImgFull from '../modals/img';
import ModalServicios from '../modals/modal_servicios';

export default function ServicesCards({ services }) {

  const [modalOpen, setModalOpen] = useState(false);

  // Función para abrir el modal
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3} style={{ height: '380px' }}>
        <Card style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <CardMedia
            component="img"
            height="200"
            image={services.images}
            alt={services.name}
          />
          <CardContent style={{ flex: '1 0 auto' }}>
            <Typography variant="h6" gutterBottom>
              {services.nombre}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {services.clasificacion}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large" sx={{ width: '100%' }} onClick={handleOpenModal}>Ver más</Button>
          </CardActions>

        </Card>
      </Grid>


      {/* Pasa el estado modalOpen y las funciones handleCloseModal e infoPlanta a ModalPlantas */}
      <ModalServicios
        infoPlanta={services}
        modalOpen={modalOpen}
        handleCloseModal={handleCloseModal}
      />

    </>
  );
}
