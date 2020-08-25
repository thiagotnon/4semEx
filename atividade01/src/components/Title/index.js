import React from 'react';

import css from './title.module.css';

function Title({title}) {
  return (
    <div className={css.titleContainer}>
      <div className={css.titleContainerContent}>
        <h1>{title}</h1>
      </div>
    </div>
  )
}

export default Title
