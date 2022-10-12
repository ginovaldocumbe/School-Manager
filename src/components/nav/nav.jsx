import React from 'react';
import PropTypes from 'prop-types';
import styles from './nav.module.css';
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useState } from "react"
function Nav() {
  const [abrir, setAbrir] = useState(false);
  function AbrirNav(){

  }
  return (
    <div className='text-2xl fixed text-black flex flex-row justify-between w-full items-ceenter px-2 pt-2'>
      <HiOutlineMenuAlt2 className='' />
      <div className='h-8 w-8 bg-slate-100 rounded-full'></div>
    </div>
  );
}


export default Nav;
