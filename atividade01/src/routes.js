import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import TablesPage from './pages/TablesPage';
import Forms from './pages/Forms';

function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/tabelas" component={TablesPage} />
      <Route path="/formulario" component={Forms} />
    </BrowserRouter>
  )
}

export default Routes
