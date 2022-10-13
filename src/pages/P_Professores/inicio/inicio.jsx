import React from 'react';
import PropTypes from 'prop-types';
import styles from './inicio.module.css';
import Teacher from './../../../Imagens/teacher2.jpg'
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Nav from '../../../components/P_Professores/nav/nav'

const Inicio = () => (
  <div className="h-full overflow-hidden">
    <Nav />
    <div className='h-full overflow-hidden w-[270%] -ml-[220px]'>
      <img className='h-full w-[100%]' src={Teacher} />
    </div>
  </div>
);


export default Inicio;
