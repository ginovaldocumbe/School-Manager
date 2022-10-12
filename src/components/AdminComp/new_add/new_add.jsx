import React from 'react';
import PropTypes from 'prop-types';
import styles from './new_add.module.css';

const NewAdd = () => (
  <div className="absolute backdrop-blur-md top-0 left-0 w-full h-full z-20 flex items-center justify-center ">
    <div className='bg-slate-700 h-96 w-[40rem] text-white flex items-center justify-center rounded-md'> NewAdd Component</div>
  </div>
);

NewAdd.propTypes = {};

NewAdd.defaultProps = {};

export default NewAdd;
