import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import verduras from '../img/verduras.jpeg';
import verduras2 from '../img/verduras2.jpeg';
import verduras3 from '../img/verduras3.jpeg';
function VerdurasSection(props) {
    return (
            
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={verduras}
      alt="First slide"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={verduras2}
      alt="Second slide"
    />

    <Carousel.Caption>
      
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
     src={verduras3}
      alt="Third slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
}

export default VerdurasSection;