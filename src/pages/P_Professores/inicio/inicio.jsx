import React from 'react';
import PropTypes from 'prop-types';
import styles from './inicio.module.css';
import Teacher from './../../../Imagens/teacher2.jpg'
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Nav from '../../../components/nav/nav'



const Inicio = () => (
  <div className="h-screen overflow-x-hidden">
    <Nav />
   
    <div className='h-full w-[250%] -ml-52'>
      <img className='h-full w-[100%]' src={Teacher} />
    </div>
  </div>
);


export default Inicio;
