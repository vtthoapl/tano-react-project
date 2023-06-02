import React, { Component } from 'react';
import Bootstrap, { Carousel, BImg } from 'bootstrap-4-react';
import iphone1 from '../images/iphone-1.png';
import iphone2 from '../images/iphone-2.png';
import '../Carousel/carousel.css';

const first_src =
  'data:image/svg+xml;charset=UTF-8,' +
  '<svg%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20width%3D"286"%20height%3D"180"%20viewBox%3D"0%200%20286%20180"%20preserveAspectRatio%3D"none">' +
  '<g%20fill%3D"rgba(255%2C255%2C255%2C.75)"%20font-family%3D"Helvetica%2C%20monospace"%20font-size%3D"14pt">' +
  '<rect%20width%3D"286"%20height%3D"180"%20fill%3D"#777"%2F>' +
  '<g><text%20x%3D"99.4296875"%20y%3D"96.6">First slide<%2Ftext><%2Fg>' +
  '<%2Fg><%2Fsvg>';

const second_src = first_src.replace('First', 'Second');
const third_src = first_src.replace('First', 'Third');

export default class CarouselPage extends Component {
  componentWillMount() {
    window.setTimeout(
      () => Bootstrap.carousel('#carouselExampleControls'),
      2000
    );
  }

  render() {
    return (
      <Carousel w="100" id="carouselExampleControls">
        <Carousel.Inner>
          <Carousel.Item active>
            <BImg display="block" w="30" src={iphone1} />
            <Carousel.Caption display="none md-block">
              <h2 className="carousel-title">MEGABOOM</h2>
              <h1 className="carousel-price">$110,000,000</h1>
              <a href="#carouselExampleFade" className="btn btn-success btn-lg">
                ORDER TICKETS
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <BImg display="block" w="30" src={iphone2} />
            <Carousel.Caption display="none md-block">
              <h5 className="carousel-title">MEGABOOM</h5>
              <h1 className="carousel-price">$110,000,000</h1>
              <a href="#carouselExampleFade" className="btn btn-success btn-lg">
                ORDER TICKETS
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="nopic-caption">
            {/* <Carousel.Caption className='nopic-caption' display="none md-block">
            </Carousel.Caption> */}
            <h5 className="carousel-title">MEGABOOM</h5>
            <h1 className="carousel-price">$110,000,000</h1>
            <a href="#carouselExampleFade" className="btn btn-success btn-lg">
              ORDER TICKETS
            </a>
          </Carousel.Item>
        </Carousel.Inner>
        <Carousel.Prev href="#carouselExampleControls">
          <Carousel.Prev.Icon />
        </Carousel.Prev>
        <Carousel.Next href="#carouselExampleControls">
          <Carousel.Next.Icon />
        </Carousel.Next>
      </Carousel>
    );
  }
}
