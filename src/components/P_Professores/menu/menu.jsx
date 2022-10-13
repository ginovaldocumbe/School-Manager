import React from 'react';
import PropTypes from 'prop-types';
import './menu.module.css';
import { IoMdClose } from "react-icons/io";
import { Professores } from '../../../files/SlideProfessores'
import { Link, Outlet } from 'react-router-dom'
function Menu({ setAbrir }, props) {
  function Abrir() {
    setAbrir(false)
  }




  return (
    <div className="flex flex-col items-center justify-center bg-white w-full h-screen absolute inset-0 md:w-[170px] md:top-8">
      <div onClick={Abrir} className='bg-white w-fit animation-Abrires fixed right-2 top-3 md:hidden'><IoMdClose /></div>

      <div className='flex flex-col  justify-center text-left'>
        {Professores.map((p) => (
          <Link onClick={Abrir} to={p.path} activeClassName='active' className="text-black flex flex-row mb-2 text-left items-center">
            <span className='mr-5 text-[22px]'>{p.icone}</span>
            <span className=' font-semibold'>{p.nome}</span>
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
