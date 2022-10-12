import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button(props) {

  return (
    <button className='btn btn-primary'>{props.funcao}</button>
  )
};


export default Button;
