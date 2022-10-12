import React from 'react';
import PropTypes from 'prop-types';
import styles from './topo.module.css';
import { BsSearch } from "react-icons/bs";


function Topo(props) {
  return (
    <div className="top w-full flex justify-between items-center pl-2 py-1 pr-3 ">
      <h1 className='text-xl font-bold text-black'>{props.texto}</h1>
      <div className='flex items-center bg-slate-100 pr-1 py-1 rounded-xl'>
        <input className='outline outline-none rounded-md mr-2 pl-5 bg-transparent' placeholder='Pesquisar' />
        <BsSearch className='bg-blue-900 text-white text-2xl p-1 rounded-full'/>
      </div>
    </div>
  );
}


export default Topo;
