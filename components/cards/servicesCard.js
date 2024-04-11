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

export default function ServicesCards({services}) {
  
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
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={services.nombre}
        onClick={handleView}
        height="140"
        image={services.images}//"/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>

        <Typography gutterBottom variant="h5" component="div">          
            {services.nombre}
        </Typography>
        <Grid item xs={12}>
              <Chip color='success' fontWeight="normal" sx={{ fontWeight: '600' }} label={`$${services.precio}`} />
        </Grid>
        
        <Typography>
            {services.descripcion}
        </Typography>

      </CardContent>
      <CardActions>
        <Button size="large" sx={{ width: '100%' }}>Ver más</Button>
        {/*<Button size="small">Learn More</Button>*/}
      </CardActions>

      <Card_img open={view} cancelView={cancelView} imageUrl={services.imagen} nombrePlanta = {services.nombre} descripcionPlanta={services.descripcion}/>
      <ImgFull open={viewImg} cancelView={cancelViewImg} imageUrl={services.imagen} />
    </Card>

    
  );
}
