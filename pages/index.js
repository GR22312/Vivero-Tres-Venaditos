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
    "https://probosque.edomex.gob.mx/sites/probosque.edomex.gob.mx/files/images/prodPlan/viverosForestales5.jpg",
    "https://agrosabio.com/wp-content/uploads/2023/05/vivero-forestal-26-1024x592.jpg?v=1685582685",
    "https://previews.123rf.com/images/arinahabich/arinahabich1305/arinahabich130501432/19553092-flores-de-primavera-en-exhibici%C3%B3n-en-el-vivero-local-.jpg",
    // Agrega más URLs de imágenes si es necesario
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
        { text: "Venta de plantas", path: "/products", img: "https://cdn.pixabay.com/photo/2017/07/25/14/34/rose-2538361_1280.jpg" },
        { text: "Venta de árboles", path: "/venta_arboles", img: "https://sembralia.com/cdn/shop/articles/cherries-1595610_640.jpg?v=1648560525" },
        { text: "Servicios", path: "/servicios", img: "https://jardineriapro.com/img/mantenimiento.jpg" },
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
                <Typography variant="h6" sx={{ mt: 1, fontWeight: "bold", textAlign: "center" }}>
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