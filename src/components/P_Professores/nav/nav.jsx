import React from 'react';
import PropTypes from 'prop-types';
import styles from './nav.module.css';
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useState } from "react"
import Menu from '../menu/menu'
import { Outlet } from 'react-router-dom'


function Nav() {
  const [abrir, setAbrir] = useState(false);
  function AbrirNav() {
    setAbrir(!abrir)
  }

  const [navi, setNavi] = useState()
  return (
    <div>
      
      <div className='text-2xl fixed top-0 text-black flex flex-row justify-between w-full items-ceenter px-2 pt-2 md:px-0'>
        {abrir && (
          <Menu
            setAbrir={setAbrir}
            setNavi={setNavi}
          />
        )}

        <div className='md:z-20 left-0'>
          <HiOutlineMenuAlt2 className='' onClick={AbrirNav} />
        </div>
        <div className='h-8 w-8 bg-slate-100 rounded-full'></div>
      </div>
      <Outlet />
    </div>
  );
}


export default Nav;
