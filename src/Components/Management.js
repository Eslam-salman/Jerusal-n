import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import managment from '../img/managment.jpeg';
import  managment3 from '../img/managment3.jpeg';
import  managment2 from '../img/managment2.jpeg';

function Management(props) {
    return (
             
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={managment}
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={managment3}
      alt="Second slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
     src={ managment2}
      alt="Third slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
}

export default Management;