import React from "react";
import styles from "./SlideBar.module.css";
import { NavLink, Outlet } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import ImagemMain from "../Imagens/NewLogo2.png";
import { useState } from "react";
import { SlideData } from '../../../files/SlideData';
import {SlideDataAdmin} from '../../../files/SlideDataAdmin';
import Calendar from 'color-calendar';
import 'color-calendar/dist/css/theme-basic.css';
import 'color-calendar/dist/css/theme-glass.css';
import Imag from "./../Imagens/stu.png"
import { IoIosNotificationsOutline } from "react-icons/io";


const myEvents = [
  {
    start: '2022-10-07T06:00:00',
    end: '2022-10-09T20:30:00',
    name: 'Primeiro evento',
    url: 'https://www.cssscript.com',
    desc: 'Description 1',
    // more key value pairs here
  },
  {
    start: '2022-10-20T06:00:00',
    end: '2022-10-21T20:30:00',
    name: 'Event 2',
    url: 'https://www.cssscript.com',
  },
  {
    start: '2021-04-16T06:00:00',
    end: '2021-04-17T20:30:00',
    name: 'Event 3',
    url: 'https://www.cssscript.com',
  },
]
const SlideBar = ({ children }) => {
  // new Calendar({
  //   eventsData: myEvents,
  //   id: '#color-calendar',
  //   theme: 'glass',
  //   calendarSize: 'small',
  //   headerBackgroundColor: '#075985',
  //   weekdayDisplayType: 'short',
  //   primaryColor: '#0ea5e9',
  //   disableDayClick: false,
  //   disableMonthArrowClick: false,
  //   // dropShadow: 'based on theme',
  //   // border: 'based on theme',

  //   dateChanged: (currentDate, DateEvents) => {
  //     DateEvents.map((it) =>
  //       console.log(it.name)
  //     )

  //   },
  // })
  let tv = false;
  return (
    <section className='flex '>
      <div className='pl-2 w-56 '>
        <div className={styles.topo}>
          <div className={styles.ImgTop}>
            <img src={ImagemMain} className="img-fluid" />
          </div>
          <span className={styles.topText}>Light Education</span>
        </div>
        {/* <div className={styles.Menu}>
          <BiMenuAltLeft className={styles.MenuBtn} />
        </div> */}
        {tv ?
         SlideData.map((route) => (
          <NavLink activeClassName='active' className='flex flex-row items-center rounded-md text-gray-400 h-10 pl-2 mr-2 hover:bg-gray-200 hover:text-blue-800 visited:bg-sky-800 ' to={route.path} key={route.nome}>
            <div className={styles.Icones}>{route.icone}</div>
            <div className={styles.TextIcon}>{route.nome}</div>
          </NavLink>
        ))
          : 
          SlideDataAdmin.map((route) => (
            <NavLink activeClassName='active' className='flex flex-row items-center rounded-md text-gray-400 h-10 pl-2 mr-2 hover:bg-gray-200 hover:text-blue-800 visited:bg-sky-800 ' to={route.path} key={route.nome}>
              <div className={styles.Icones}>{route.icone}</div>
              <div className={styles.TextIcon}>{route.nome}</div>
            </NavLink>
          ))}

      
        <div className="">
          <img src={Imag} className="h-[80%]" />
          <button className="bg-sky-800 text-white py-1 px-4 rounded-md -translate-y-5 translate-x-7">Convidar</button>
        </div>
        <NavLink to="/">
          <footer className="text-gray-400 pl-2">
            <IoIosLogOut className='' />
            <span className='text-base pl-2'>Sair</span>
          </footer>
        </NavLink>
      </div>
      <main className='w-full h-screen bg-white grid grid-cols-[75%_25%]'>
        {/* {children} */}
        <Outlet />
        <div>
          <div className="flex flex-row justify-between">
            <div className="flex items-center">
              <div className='w-6 h-6 bg-slate-300 rounded-full mr-1'></div>
              <span className="text-sm">Ginovaldo Cumbe</span>
            </div>
            <div className='-translate-y-1'>
              <div className='animate-pulse translate-y-2 translate-x-2 h-2 w-2 bg-red-600 rounded-full text-white text-[8px]'></div>
              <IoIosNotificationsOutline className='text-xl text-gray-400' />
            </div>
          </div>
          <div id="color-calendar"></div>
          <div className="flex flex-col mt-4">
            <h1 className="text-lg font-bold">Evento:</h1>
            <span className="text-sm">Evento clicado</span>
          </div>
          <div className="mt-4">
            <h1 className="font-bold text-lg">Notificações</h1>
            <div className="flex items-center justify-between p-2 h-8 w-full bg-teal-800 rounded-md text-slate-50 ">
              <span className="text-sm">Primeira notificaçao</span>
              <span className="border-2 w-12 flex justify-center rounded-md text-sm">Ver</span>
            </div>
          </div>
        </div>
      </main>

    </section>
  );
};

export default SlideBar;
