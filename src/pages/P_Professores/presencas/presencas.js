import React from 'react';
import PropTypes from 'prop-types';
import styles from './presencas.module.css';
import Card from '../../../components/P_Professores/card_prof/card_prof'
import Ava from './../../../Imagens/ava.png'
import Form from './../../../components/P_Professores/formulario/formulario'
import Table from 'react-bootstrap/Table';
const Presencas = () => (
  <div className="pt-12">
    <div className='flex flex-row gap-3 ml-3  w-full justify-center mb-4'>
      <Card
        tipo="Presencas"
        info="media 12/d"
        imagem={Ava} />

      <Card
        tipo="Faltas"
        info="media 12/d"
        imagem={Ava} />

    </div>
    <Form />

    <Table className='mt-3' striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Apelido</th>
          <th>Nomes</th>
          <th>Presenca</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>P</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>P</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry </td>
          <td>the Bird</td>
          <td>F</td>
        </tr>
      </tbody>
    </Table>
  </div>
);

Presencas.propTypes = {};

Presencas.defaultProps = {};

export default Presencas;
