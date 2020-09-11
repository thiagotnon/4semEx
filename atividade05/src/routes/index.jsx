import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Carros from '../pages/Carros';
import Header from '../components/Header';
import Student from '../components/Student';

export default () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Page1} />
        <Route exact path="/pagina1" component={Page1} />
        <Route exact path="/pagina2" component={Page2} />
        <Route exact path="/carros" component={Carros} />
        <Route exact path="/alunos" component={Student} />
      </BrowserRouter>
    </>
  );

}