import React from 'react';
import Card from '../../../components/P_Professores/card_prof/card_prof'
import Ava from './../../../Imagens/ava.png'
// import Form from './../../../components/P_Professores/form/form'
const Notas = () => (
  <div className="bg-blue-300 h-screen flex flex-col items-center justifify-center pt-16">
    <div className='flex flex-row gap-3 ml-3  w-full justify-center'>
      <Card
        tipo="Notas"
        info="aproveitamento"
        imagem={Ava} />

      <Card
        tipo="Notas"
        info="aproveitamento"
        imagem={Ava} />

    </div>
    {/* <Form /> */}
    Notas Component
  </div>
);


export default Notas;
