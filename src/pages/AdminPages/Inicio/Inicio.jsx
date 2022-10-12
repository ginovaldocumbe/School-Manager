import React from 'react';
import PropTypes from 'prop-types';
import styles from './Inicio.module.css';
import Topo from './../../../components/AdminComp/topo/topo';
import Carousel from 'react-bootstrap/Carousel';
import Fi from './../../../components/AdminComp/Imagens/1.jpg'
import Fi1 from './../../../components/AdminComp/Imagens/2.jpg'
import Fi2 from './../../../components/AdminComp/Imagens/3.jpg'
import Fi3 from './../../../components/AdminComp/Imagens/4.jpg'


const Inicio = () => (
  <div className="h-screen overflow-y-hidden flex flex-col content-between">
    <Topo texto="Inicio" />
    <Carousel className=' relative !bottom-0' fade>
      <Carousel.Item>
        <img
          className="d-block w-full h-full relative bottom-0"
          src={Fi}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block relative bottom-0"
          src={Fi1}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='!relative bottom-0'>
        <img
          className="relative bottom-0"
          src={Fi3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
);

Inicio.propTypes = {};

Inicio.defaultProps = {};

export default Inicio;
