import { React, useState, useRef } from 'react';
import { MultiSelect } from 'primereact/multiselect';


const citySelectItems = [
  { label: 'New York', value: 'NY' },
  { label: 'Rome', value: 'RM' },
  { label: 'London', value: 'LDN' },
  { label: 'Istanbul', value: 'IST' },
  { label: 'Paris', value: 'PRS' }
];


const cities = [
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
];


function Filtro(props) {
  const [selectedCities1, setSelectedCities1] = useState(null);


  return (
    <div>
      <span>{props.titulo}</span>
      <div>
        <h5>Basic</h5>
        <MultiSelect value={selectedCities1} options={cities} onChange={(e) => setSelectedCities1(e.value)} optionLabel="name" placeholder="Select a City" maxSelectedLabels={3} />
      </div>
    </div>
  );
}

export default Filtro;
