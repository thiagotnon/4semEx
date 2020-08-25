import React from 'react'
import Select from 'react-select';

import {useHistory} from 'react-router-dom';

import Header from '../../components/Header'
import Title from '../../components/Title'
import InputForm from '../../components/inputForm'


import css from './forms.module.css';
const uf = [
  { value: 'Distrito Federal - DF', label: 'Distrito Federal - DF' },
];
const cidade = [
  { value: 'Brasília', label: 'Brasília' },
];
function Forms() {
  const history = useHistory();
  const handleClick = () => {
    history.goBack();
  }
  return (
      <div>
      <Header />
      <Title title="Cadastro de cliente" />
      <div className="container">
        <form>
        <InputForm label="Nome" type="text" id="nome" placeholder="Digite um nome"/>
        <InputForm label="Telefone" type="tel" id="telefone" placeholder="Digite um telefone"/>
        <InputForm label="E-mail" type="email" id="email" placeholder="Digite um e-mail"/>
        <InputForm label="Senha" type="password" id="senha" placeholder="Digite uma senha"/>
        <div className={css.sexo}>
          <InputForm label="Masculino" type="radio" name="sexo" id="masc"/>
        </div>
        <div className={css.sexo}>
          <InputForm label="Feminino" type="radio" name="sexo" id="fem"/>
        </div>
        <Select placeholder="Selecione a UF" className = {css.formSelect} options = {uf} />
        <Select placeholder="Selecione a Cidade" className = {css.formSelect} options = {cidade} />

        <fieldset>
          <legend>Hobbies</legend>
          <InputForm label="Música" type="checkbox" />
          <InputForm label="Futebol" type="checkbox" />
          <InputForm label="Teatro" type="checkbox" />
          <InputForm label="Jogos" type="checkbox" />
          <InputForm label="Cozinhar" type="checkbox" />
        </fieldset>
        <div className={css.boxText}>
          <label htmlFor="obs">Observação</label>
          <textarea name="Observação" id="obs"  cols="30" rows="10"></textarea>
        </div>
        <div className="buttonGroup">
          <button className="button" type="button">Enviar</button>
          <button className="button" type="reset">Limpar</button>
          <button className="button" type="button" onClick={handleClick}>Voltar</button>
        </div>
        </form>
        
      </div>
    </div>
  )
}

export default Forms;
