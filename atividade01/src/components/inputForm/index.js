import React from 'react'


import css from './inputForm.module.css';

function InputForm({id, label, type, name, placeholder}) {
  return (
    <div className={css.formControl}>
      <label htmlFor={id}>{label}</label>
      <input type={type} name={name} id={id} placeholder={placeholder}/>
    </div>
  )
}

export default InputForm
