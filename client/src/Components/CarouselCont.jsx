

import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const CarouselCont = () => {
  return (
    <div>
         <Carousel controls={false} fade={true}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="/c1.png" 
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="/c2.png" 
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="/c3.png" 
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="/c4.png" 
          alt="fourth slide"
        />
        
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CarouselCont