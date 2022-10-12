import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ImgForm from './../Imagens/form.png'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { BsCloudUpload } from "react-icons/bs";
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Portugues',
  'Matematica',
  'Quimica',
  'Fisica',
  'Ingles',

];

function Formulario(props) {

  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  function verTipo() {
    if (props.tipo == "professores") {
      return (
        <div className='flex flex-col '>
          <InputLabel className='font-none' id="demo-multiple-checkbox-label">Disciplinas por lecionar</InputLabel>
          <Select
            className='w-64 h-7 rounded-lg'
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput label="Tag" />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={personName.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </div>
      )
    } else if (props.tipo == "Estudante") {
      return (
        <div className='flex justify-around'>
          <Dropdown>
            <Dropdown.Toggle className='bg-inherit !border-[1px] border-black text-slate-500 hover:!shadow-lg hover:shadow-cyan-500/50 hover:!border-[2px] focus:!border-[2px] focus:!border-blue-400' variant="" id="-">
              Classe
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle className='bg-inherit !border-[1px] border-black text-slate-500 hover:!shadow-lg hover:shadow-cyan-500/50 hover:!border-[2px] focus:!border-[2px] focus:!border-blue-400' variant="" id="-">
              Seccao
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      )
    }
  }
  return (
    <div className="grid h-[70%] mx-3 shadow-md overflow-hidden animate-testes">
      {/* <div className='  '>
      <img className='max-w-full h-auto' src={ImgForm} />
    </div> */}
      <div className='h-auto flex flex-col items-center'>
        <h1 className='font-bold text-lg mb-3'>Novo {props.tipo}</h1>
        <div className='h-32 w-32 mb-2 -ml-9 rounded-full flex items-center justify-center border-dashed border-2 border-sky-600 text-sky-600 hover:shadow-lg hover:shadow-cyan-500/50'>
          <div className='flex flex-col items-center'>
            <BsCloudUpload className='text-xl' />
            <span className='text-xs'>Carregar fotografia</span>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='flex flex-row gap-10 mb-3'>
            <div className='flex flex-col'>
              <label className='text-gray-400'>Apelido</label>
              <input className='w-64 pl-2 border-[1px] border-slate-300 rounded-md outline-none focus:border-[2px] focus:border-blue-400 ' type="text" />
            </div>
            <div className='flex flex-col'>
              <label className='text-gray-400'>Nomes</label>
              <input className='w-72 pl-2 border-[1px] border-slate-300 rounded-md outline-none focus:border-[2px] focus:border-blue-400 ' type="text" />
            </div>
          </div>
          <div className='flex flex-row gap-10 mb-3'>
            <div className='flex flex-col'>
              <label className='text-gray-400'>E-mail</label>
              <input className='w-64 pl-2 border-[1px] border-slate-300 rounded-md outline-none focus:border-[2px] focus:border-blue-400 ' type="email" />
            </div>
            <div className='flex flex-col'>
              <label className='text-gray-400'>Data-nascimento</label>
              <input className='w-72 pl-2 border-[1px] border-slate-300 rounded-md outline-none focus:border-[2px] focus:border-blue-400 ' type="date" />
            </div>
          </div>
          <div className='grid grid-cols-2 gap-10'>
            
            {verTipo()}
            <div className='flex flex-col'>
              <label className='text-gray-400'>Sexo</label>
              <div className='flex mt-2'>
                <div className='mr-5'>
                  <label className='mr-2'>M</label>
                  <input type="radio" />
                </div>
                <div>
                  <label className='mr-2'>F</label>
                  <input type="radio" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex clex-row gap-12 mt-3'>
          <button className='bg-sky-800 text-white p-2 px-4 rounded-lg shadow-lg shadow-red-500/50 '>Salvar</button>
          <button className='border-[1px] border-sky-800 p-2 px-4 rounded-lg shadow-lg shadow-red-500/50  hover:border-none hover:bg-red-500 hover:text-white'>Cancelar</button>

        </div>
      </div>

    </div>
  );
}



export default Formulario;
