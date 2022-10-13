import React from 'react';
import PropTypes from 'prop-types';
import styles from './formulario.module.css';
import Form from 'react-bootstrap/Form';
const Formulario = () => (
  <div >
    <div className="px-16">
      <div className='flex flex-col mb-4'>
        <span className='text-slate-500'>Data</span>
        <input type='date' className='border-[1px] border-slate-500 p-1 px-4 outline-0 rounded-md focus:border-blue-500' />
      </div>
      <div className='mb-3'>
        <span className='text-slate-500'>Nr estudante</span>
        <Form.Select aria-label="Default select example">
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </div>
      <div>
        <span className='text-slate-500'>Presenca</span>
        <Form.Select aria-label="Default select example">
          <option value="1">Falta</option>
          <option value="2">Presente</option>
        </Form.Select>
      </div>
    </div>
  </div>
);


export default Formulario;
