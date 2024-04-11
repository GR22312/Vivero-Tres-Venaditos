import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Container from '@mui/material/Container';
import { Avatar, IconButton } from '@mui/material';
import { Assignment, ContactPage, Devices, Group, Info, Menu, Nature, NaturePeopleRounded, NaturePeopleSharp, SearchOutlined } from '@mui/icons-material';
import { useRouter } from "next/router";
import PeopleIcon from "@mui/icons-material/People";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import ConstructionIcon from "@mui/icons-material/Construction";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from '@mui/icons-material/Home'

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function TemporaryDrawer({props,children}) {
  
  const router = useRouter();

  const handleHomeClick = () => {
    router.push("/")
  } 
  const handleProductsClick = () => {
    router.push("/products")
  }  
  const handleAboutUsClick = () => {
    router.push("/about_us")
  }  
  const handleContactUsClick = () => {
    router.push("/contact_us")
  }  
  const handleServicesClick = () => {
    router.push("/services")
  }

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Inicio', 'Productos', 'Servicios', 'Acerca de nosotros','Contactanos'].map((text, index) => (
            <ListItem key={text} disablePadding>
  <ListItemButton onClick={() => {
    switch(index) {
      case 0:
        handleHomeClick();
        break;
      case 1:
        handleProductsClick();
        break;
      case 2:
        handleServicesClick();
        break;
      case 3:
        handleAboutUsClick();
        break;
      case 4:
        handleContactUsClick();
        break;
      default:
        break;
    }
  }}>
    <ListItemIcon>
      {index === 0 ? (
        <HomeIcon />
      ) : index === 1 ? (
        <NaturePeopleRounded />
      ) : index === 2 ? (
        <Assignment />
      ) : index === 3 ? (
        <SearchOutlined />
      ) : (
        <ContactPage />
      )}
    </ListItemIcon>
    <ListItemText primary={text} />
  </ListItemButton>
</ListItem>


        ))}
      </List>


 {/*    <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
        */}
    </Box>
  );





  return (

    <div>
      <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
      <AppBar sx={{ backgroundColor: '#169447' }}>
  <Toolbar>
    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={toggleDrawer(true)}>
      <Menu />
    </IconButton>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src="../img/logo/logo.png" alt="Logo" style={{ maxHeight: 40, borderRadius: '15%', boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)', marginRight: '10px' }} />  

      <Typography variant="h6" component="div" sx={{ 
  //fontFamily: 'Arial, sans-serif', // Cambiar la fuente
  fontWeight: 'bold', // Ajustar el grosor del texto
  color: '#ffffff', // Cambiar el color del texto
  letterSpacing: '2px', // Ajustar el espacio entre letras
  textAlign: 'center', // Centrar el texto
  //textDecoration: 'underline', // Añadir subrayado
  // Otros estilos personalizados...
}}>
  Vivero Tres Venaditos
</Typography>


    </div>
  </Toolbar>
</AppBar>

      </ElevationScroll>
      <Toolbar />
      <Container>
        
      
       <Box sx={{ my: 2 }}>
       <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      {children}
    </div>
            </Box>
      </Container>
    </React.Fragment>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
