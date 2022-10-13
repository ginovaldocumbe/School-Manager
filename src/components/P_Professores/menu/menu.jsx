import React from 'react';
import PropTypes from 'prop-types';
import './menu.module.css';
import styles from './menu.module.css';
import { IoMdClose } from "react-icons/io";
import { Professores } from '../../../files/SlideProfessores'
import { Link, Outlet } from 'react-router-dom'
function Menu({ setAbrir }, props) {
  function Abrir() {
    setAbrir(false)
  }




  return (
    <div className="flex flex-col items-center justify-center bg-white w-full h-screen absolute inset-0 md:w-[170px] md:top-8">
      <div className={styles.custom1}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" className={styles.custom2} viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className={styles.custom3}></path>
        </svg>
      </div>

      <div onClick={Abrir} className='text-red-800 w-fit animation-Abrires fixed right-2 top-3 md:hidden z-30'><IoMdClose /></div>

      <div className='flex flex-col z-10 justify-center text-left'>
        {Professores.map((p) => (
          <Link onClick={Abrir} to={p.path} activeClassName='active' className="flex flex-row items-center rounded-md text-slate-600 h-10 pl-2 mr-2  hover:bg-gray-200 hover:text-blue-800 visited:bg-sky-800">
            <span className='mr-5 text-[22px] md:text-base'>{p.icone}</span>
            <span className=' font-semibold md:text-lg'>{p.nome}</span>
          </Link>
        ))}
      </div>
      <div ClassName="custom-shape-divider-top-1665619751">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
      {/* <Outlet /> */}
    </div>
  );
}
export default Menu;
