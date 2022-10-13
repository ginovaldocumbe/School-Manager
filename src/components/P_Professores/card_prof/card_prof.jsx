import React from 'react';
import PropTypes from 'prop-types';
import styles from './card_prof.module.css';

const CardProf = (props) => (
  <div className=''>
    <div className='h-40 w-32 bg-white rounded-lg shadow-xl flex flex-col content-around justify-center'>
      <span className='flex justify-center font-extrabold'>{props.tipo}</span>
      <span className=' h-[105px] flex justify-center '>
        <img className='h-full w-full' src={props.imagem}/>
      </span>
      <span className='flex justify-center font-semibold text-sm'>{props.info}</span>
    </div>
  </div>
);


export default CardProf;
