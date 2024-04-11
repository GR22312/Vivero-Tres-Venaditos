import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(3, images.length), // Mostrar hasta un máximo de 3 imágenes
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1224, // Para pantallas grandes como tablets
        settings: {
          slidesToShow: Math.min(1, images.length),
        }
      },
      {
        breakpoint: 768, // Para pantallas medianas como smartphones en modo horizontal
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480, // Para pantallas pequeñas como smartphones en modo vertical
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div style={{ maxWidth: '100%', margin: '0 auto' }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} style={{ maxWidth: '100%' }}>
            <img src={image} alt={`Slide ${index}`} style={{ width: '100%', height: 'auto' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
