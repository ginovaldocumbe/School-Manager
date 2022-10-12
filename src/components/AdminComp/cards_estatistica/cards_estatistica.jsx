import React from 'react';
import PropTypes from 'prop-types';
import styles from './cards_estatistica.module.css';
import { BsFillPieChartFill, BsBarChartLineFill } from "react-icons/bs";
import { AiOutlineLineChart,AiOutlineAreaChart } from "react-icons/ai";



const CardsEstatistica = () => (
  <div className='flex justify-between px-2 mt-10 mb-10 gap-2'>
    <div className=' w-64 h-40 bg-orange-200 rounded-md'>
      <AiOutlineLineChart className='text-orange-300 text-9xl z-0 mt-4' />
      <div className=' -translate-y-36 text-black z-20 w-full flex flex-col items-end justify-center mt-3 pr-4'>
        <span className='text-xl z-10 mb-3'>Total</span>
        <p className='z-10 text-5xl'>2045</p>
      </div>
    </div>
    <div className='w-64 h-40 bg-green-200 rounded-md 0'>
      <BsFillPieChartFill className=' text-green-300 text-8xl mt-12 z-0 ' />
      <div className='-translate-y-36 text-black z-20 w-full flex flex-col items-end justify-center mt-3 pr-4'>
        <span className='text-xl z-10 mb-3'>Novos</span>
        <p className='z-10 text-5xl'>2045</p>
      </div>
    </div>
    <div className='w-64 h-40 bg-sky-200 rounded-md '>
      <BsBarChartLineFill className=' text-sky-300 mt-4 text-9xl z-0' />
      <div className='-translate-y-36 text-black z-20 w-full flex flex-col items-end justify-center mt-3 pr-4'>
        <span className='text-xl z-10 mb-3'>Inativos</span>
        <p className='z-10 text-5xl'>2045</p>
      </div>
    </div>
    <div className='w-64 h-40 bg-purple-200 rounded-md '>
      <AiOutlineAreaChart className=' text-purple-300 mt-4 text-9xl z-0' />
      <div className='-translate-y-36 text-black z-20 w-full flex flex-col items-end justify-center mt-3 pr-4'>
        <span className='text-xl z-10 mb-3'>Inativos</span>
        <p className='z-10 text-5xl'>2045</p>
      </div>
    </div>
  </div>
);

CardsEstatistica.propTypes = {};

CardsEstatistica.defaultProps = {};

export default CardsEstatistica;
