import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carne1 from '../img/Carne1.png';
import pescado1 from '../img/pescado1.jpeg';
import pescado2 from '../img/pescado2.jpeg';
function CarneSection(props) {
    return (
        
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Carne1}
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pescado1}
      alt="Second slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
     src={pescado2}
      alt="Third slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
}

export default CarneSection;