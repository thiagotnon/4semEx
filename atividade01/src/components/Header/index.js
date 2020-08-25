import React from 'react'
import {Link} from 'react-router-dom';

import css from './header.module.css';

function Header() {
  return (
    <div className={css.navContainer}>
      <div className={css.navContainerContent}>
        <Link to="/">Início</Link>
        <Link to="/formulario">Formulário</Link>
        <Link to="/tabelas">Tabelas</Link>
      </div>
    </div>
  )
}

export default Header
