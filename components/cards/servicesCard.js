import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card_img from '../modals/products_img';
import { Chip, Grid } from '@mui/material';
import ImgFull from '../modals/img';

export default function ServicesCards({ services }) {

  const [view, setView] = React.useState(false);

  const [viewImg, setViewImg] = React.useState(false);

  const handleView = () => {
    setView(true);
  }

  const cancelView = () => {
    setView(false);
  }
  const handleViewImg = () => {
    setViewImg(true);
  }
  const cancelViewImg = () => {
    setViewImg(false);
  }

  return (

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
          <Button size="large" sx={{ width: '100%' }}>Ver más</Button>
        </CardActions>

      </Card>
    </Grid>




  );
}
