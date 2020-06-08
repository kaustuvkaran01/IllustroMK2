import React, { Component } from 'react'
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
class ImgCarousel extends Component {
  render() {
    return (
      <Container>
        <Carousel showThumbs={false} infiniteLoop={true}>
          <CarouselImg style={{ background: "url(https://source.unsplash.com/collection/190727/1600x900)"}}>
            <span>This is slide 1</span>
          </CarouselImg>
          <CarouselImg style={{ background: "url(https://source.unsplash.com/collection/erondu/daily)"}}>
            <span>This is slide 2</span>
          </CarouselImg>
          <CarouselImg style={{ background: "url(https://source.unsplash.com/collection/jackie/daily)"}}>
            <span>This is slide 3</span>
          </CarouselImg>
        </Carousel>
      </Container>
    );
  }
}
export default ImgCarousel;

const Container = styled.div`
  z-index: 0;
  height: 85vh;
  width: 99vw;
  span {
    color: var(--main-dark);
  }
`;

const CarouselImg = styled.div`
  height: 100vh;
  width:auto
  color: #091921;
 
  .span {
    height: 10rem;
    padding:10rem;
    opacity: 0.5;
  }
`;