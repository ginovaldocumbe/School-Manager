import React from 'react';
import { School } from './../../../files/TableEscola';
import Topo from './../../../components/AdminComp/topo/topo';
import Cards from './../../../components/AdminComp/cards_estatistica/cards_estatistica'
import Filtro from '../../../components/AdminComp/filtro/filtro';
import { AiOutlineUser } from "react-icons/ai";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useState } from 'react';
import Form from './../../../components/AdminComp/new_add/new_add'
import Table from 'react-bootstrap/Table';
import { AiOutlineClose } from "react-icons/ai";
import './escola.module.css'

const MySwal = withReactContent(Swal)




function t() {
  Swal.bindClickHandler()
  const { value: formValues } = Swal.fire({
    allowOutsideClick: false,

    title: 'Multiple inputs',
    html:
      '<label>Nomes<label/>' +
      '<input placeholder="Teste" id="swal-input1" class="swal2-input">' +
      '<input id="swal-input2" class="swal2-input">',
    focusConfirm: false,
    preConfirm: () => {
      return [
        document.getElementById('swal-input1').value,
        document.getElementById('swal-input2').value
      ]
    }
  }).bindClickHandler('data-swal-toast-template')

  if (formValues) {
    Swal.fire(JSON.stringify(formValues))
  }

}
const current = new Date();
const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;


function Escola() {
  const [abrir, setAbrir] = useState(false);
  function AbrirForm() {
    setAbrir(!abrir);
  }

  if (abrir) {
    document.body.classList.add("active-modal");
  }

  const [tipoE, setTipoE] = useState();


  return (

    <div className=" overflow-y-auto h-full">
      <Topo texto="Escola" />
      <div className='flex flex-row items-center w-full justify-between pr-5 mb-3 '>
        <button onClick={AbrirForm} className='flex flex-row items-center bg-sky-800 text-white rounded-md ml-2 px-9 py-2'>
          <AiOutlineUser />
          <p className='ml-2'>Nova Escola</p>
        </button>
        <div>{date}</div>
      </div>
      {abrir && (
        <div>
          <Form tipo="Escola" className="bg-red-800" />
          <button onClick={AbrirForm} className='z-30 top-[20%] right-[27%] absolute bg-red-600 rounded-full'>
            <AiOutlineClose className='text-2xl text-white' />
          </button>
        </div>

      )}

      <Cards />
      <div className='px-3 shadow-md'>
        <Filtro titulo="Escola" />
        <Table striped>
          <thead>
            <tr>
              {School.map((data) => (
                <th className=''>{data.titulo}</th>
              ))}
              <th>Accoes</th>
            </tr>
          </thead>
          <tbody>
            <tr className='mb-5 '>
              <td className=' '>001</td>
              <td className=' '>Futterkiste</td>
              <td className=' '>Maria Anders</td>
              <td className=' '>maria@gmail.com</td>
              <td>Activo</td>
              <td className=' '>
                <div className='h-10 w-10 bg-red-600 rounded-full'></div>
              </td>
              <td className='flex flex-row '>
                <div className='h-10 mr-2 w-16 bg-red-500 rounded-md flex items-center justify-center text-white'>Apagar</div>
                <div className='h-10 w-16 bg-green-500 rounded-md flex items-center justify-center text-white'>Editar</div>
              </td>
            </tr>
            <tr className='mb-5 '>
              <td className=' '>001</td>
              <td className=' '>Futterkiste</td>
              <td className=' '>Maria Anders</td>
              <td className=' '>maria@gmail.com</td> 
              <td>Activo</td>
              <td className=' '>
                <div className='h-10 w-10 bg-red-600 rounded-full'></div>
              </td>
              <td className='flex flex-row '>
                <div className='h-10 mr-2 w-16 bg-red-500 rounded-md flex items-center justify-center text-white'>Apagar</div>
                <div className='h-10 w-16 bg-green-500 rounded-md flex items-center justify-center text-white'>Editar</div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}


export default Escola;
