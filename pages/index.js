import React from "react";
import { Paper, Typography, CardMedia, Grid, Button, Card } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    "https://www.arqhys.com/wp-content/uploads/2017/03/tipos-de-viveros.jpg",
    "https://viverosducasse.com/wp-content/uploads/2022/04/381931c8-795e-4eb8-b4ea-548d27452549.jpg",
    "https://viverolucas.com.mx/img/bn-1.jpeg",
    "https://www.viverospoza.com/wp-content/uploads/2014/02/IMG_20180111_105536-edit-cut.jpg",
    "https://www.agronegocios.es/wp-content/uploads/2023/04/Viveros-Hernandorena.jpg"
    // Aqui se agregan más URLs de imágenes si es necesario
  ];

  const imageWidth = "100%";
  const imageHeight = "400px";

  const handleButtonClick = (path) => {
    router.push(path);
  };

  const Categorias = () => {

  };

  return (
    <Paper>
      {/* Slider de imágenes */}
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index}`}
              style={{ width: imageWidth, height: imageHeight, objectFit: "cover" }}
            />
          </div>
        ))}
      </Slider>

      <Typography
        variant="h3"
        gutterBottom
        align="center"
        sx={{ mt: 8, fontWeight: "bold" }}
      >
        Bienvenido a nuestro Vivero Los Tres Venaditos
      </Typography>

      <Typography
        variant="h6"
        gutterBottom
        align="center"
        sx={{ my: 0,mb: 0, padding: 0 }}
      >
        Cualquier variedad de plantas y árboles la encuentras con nosotros.
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={2} md={6}>
          <CardMedia
            component="img"
            image="../img/logo/logo2.png"
            alt="logo"
          />
        </Grid>
      </Grid>

    {/* Sección de botones con imágenes */}
<Grid container spacing={2} justifyContent="center" sx={{ mt: -2 }}>
    {[
        { text: "Venta de plantas", path: "/plant_catalog", img: "https://cdn.pixabay.com/photo/2017/07/25/14/34/rose-2538361_1280.jpg" },
        { text: "Venta de árboles", path: "/tree_catalog", img: "https://sembralia.com/cdn/shop/articles/cherries-1595610_640.jpg?v=1648560525" },
        { text: "Servicios", path: "/services_catalog", img: "https://jardineriapro.com/img/mantenimiento.jpg" },
        { text: "Otros productos", path: "/otros_productos", img: "https://serveiestacio.com/blog/wp-content/uploads/2019/05/abonos-y-fertilizantes-para-plantas-1400x930.jpg" },
    ].map(({ text, path, img }, index) => (
        <Grid item key={index} xs={12} sm={6} md={3} sx={{ textAlign: "center" }}>
            <Button
                variant="outlined"
                fullWidth
                onClick={() => handleButtonClick(path)}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 300, // Establece una altura fija para el botón
                    padding: 2, // Establece un padding uniforme
                    color: "black"
                }}
            >
                <CardMedia
                    component="img"
                    alt={text}
                    image={img}
                    sx={{
                        width: "100%", // La imagen toma todo el ancho del contenedor
                        height: "auto", // Permite que la imagen ajuste su altura automáticamente
                        borderRadius: 1, // Borde redondeado
                        objectFit: "cover", // Ajusta la imagen para cubrir el área
                        maxHeight: "200px", // Altura máxima de la imagen
                        resolution: '72dpi' // Puedes establecer una resolución específica en puntos por pulgada
                    }}
                />
                <Typography variant="h6" sx={{ mt: 1, fontWeight: "bold", textAlign: "center", color: "black"}}>
                    {text}
                </Typography>
            </Button>
        </Grid>
    ))}
</Grid>


    </Paper>
  );
}

export default Home;