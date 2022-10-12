import React from 'react';
import { Prof } from './../../../files/TableProf';
import Topo from './../../../components/AdminComp/topo/topo';
import Cards from './../../../components/AdminComp/cards_estatistica/cards_estatistica'
import Filtro from '../../../components/AdminComp/filtro/filtro';
import { AiOutlineUser } from "react-icons/ai";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useState } from 'react';
import Form from './../../../components/AdminComp/formulario/formulario'
import Table from 'react-bootstrap/Table';
import { AiOutlineClose } from "react-icons/ai";
import './Professores.module.css'

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
function Professores() {
  const [abrir, setAbrir] = useState(false);
  function AbrirForm() {
    setAbrir(!abrir);
  }

  

  return (

    <div className=" overflow-y-auto h-full">
      <Topo texto="Professores" />
      <div className='flex flex-row items-center w-full justify-between pr-5 mb-3 '>
        <button onClick={AbrirForm} className='flex flex-row items-center bg-sky-800 text-white rounded-md ml-2 px-9 py-2'>
          <AiOutlineUser />
          <p className='ml-2'>Novo professor</p>
        </button>
        <div>{date}</div>
      </div>
      {abrir && (
        <Form tipo = "professores" className="bg-red-800" />
      )}

      <Cards />
      <div className='px-3 shadow-md'>
        <Filtro titulo="Professores" />

        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              {Prof.map((data) => (
                <th className=''>{data.titulo}</th>
              ))}
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr className='mb-5 '>
              <td className=''>
                <div className='h-10 w-10 bg-red-600 rounded-full'></div>
              </td>
              <td className=' '>001</td>
              <td className=' '>Futterkiste</td>
              <td className=' '>Maria Anders</td>
              <td className=' '>maria@gmail.com</td>
              <td className=' '>M</td>
              <td className=' '>21.05.2001</td>
              <td className=' '>IMAP</td>
              <td className='flex flex-row '>
                <div className='h-10 mr-2 w-16 bg-red-500 rounded-md flex items-center justify-center text-white'>Apagar</div>
                <div className='h-10 w-16 bg-green-500 rounded-md flex items-center justify-center text-white'>Activar</div>
              </td>
            </tr>
            <tr >
              <td className=''>
                <div className='h-10 w-10 bg-red-600 rounded-full'></div>
              </td>
              <td>001</td>
              <td>Futterkiste</td>
              <td>Maria Anders</td>
              <td>maria@gmail.com</td>
              <td>M</td>
              <td>21.05.2001</td>
              <td>IMAP</td>
              <td className='flex flex-row'>
                <div className='h-10 mr-2 w-16 bg-red-500 rounded-md flex items-center justify-center text-white'>Apagar</div>
                <div className='h-10 w-16 bg-green-500 rounded-md flex items-center justify-center text-white'>Activar</div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}


export default Professores;
