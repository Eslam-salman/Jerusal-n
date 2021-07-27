import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import oferta1 from '../img/oferta1.jpeg';
import oferta2 from '../img/oferta2.jpeg';
import oferta3 from '../img/oferta3.png';

function OfertasSection(props) {
    return (
             
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={oferta1}
      alt="First slide"
    />
    <Carousel.Caption>
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={oferta2}
      alt="Second slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
     src={oferta3}
      alt="Third slide"
    />

    <Carousel.Caption>
    
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
}

export default OfertasSection;