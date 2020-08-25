import React from 'react'
import Header from '../../components/Header';
import Title from '../../components/Title';

import css from './tables.module.css';

function TablesPage() {
  const randomNumber = Math.floor(100000 + Math.random() * 900000);
  const randomNumberThree = Math.floor(100 + Math.random() * 900);
  console.log(randomNumber);
  return (
    <div>
      <Header />
      <Title title="Tabelas" />
      <div className="container">
      <div className={css.tableBox}>
      <table>
        <thead>
          <tr>
            <th>Nome Completo</th>
            <th>Matrícula</th>
            <th>Telefone</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Orion</td>
            <td>{randomNumberThree * 2}</td>
            <td>{randomNumber * 3}</td>
            <td>email@exemplo.com</td>
          </tr>
          <tr>
            <td>Maria</td>
            <td>{randomNumberThree * 4}</td>
            <td>{randomNumber * 5}</td>
            <td>email@exemplo.com</td>
          </tr>
          <tr>
            <td>Antônio</td>
            <td>{randomNumberThree * 6}</td>
            <td>{randomNumber * 2}</td>
            <td>email@exemplo.com</td>
          </tr>
          <tr>
            <td>João</td>
            <td>{randomNumberThree * 6}</td>
            <td>{randomNumber * 7}</td>
            <td>email@exemplo.com</td>
          </tr>

          <tr>
            <td>José</td>
            <td>{randomNumberThree * 2}</td>
            <td>{randomNumber * 2}</td>
            <td>email@exemplo.com</td>
          </tr>

        </tbody>
      </table>
      </div>
      </div>
    </div>
  )
}

export default TablesPage;
