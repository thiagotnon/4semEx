import React from 'react'
import PageComponent from '../../components/PageComponent';
import { Table } from 'react-bootstrap';


export default () => {
  const studends = [
    {id: 1, nome: 'João da Silva', telefone: '(61) 98765-4321', endereco: 'ABCDEF', nota: 10},
    {id: 2, nome: 'Maria da Silva', telefone: '(61) 98765-4321', endereco: 'ABCDEF', nota: 7},
    {id: 3, nome: 'Antônio da Silva', telefone: '(61) 98765-4321', endereco: 'ABCDEF', nota: 4},
    {id: 4, nome: 'João das Couves', telefone: '(61) 98765-4321', endereco: 'ABCDEF', nota: 1},
    {id: 5, nome: 'Francisco da Silva', telefone: '(61) 98765-4321', endereco: 'ABCDEF', nota: 6.8},
    {id: 6, nome: 'Anna da Silva', telefone: '(61) 98765-4321', endereco: 'ABCDEF', nota: 7.2},
    {id: 7, nome: 'Aline da Silva', telefone: '(61) 98765-4321', endereco: 'ABCDEF', nota: 8.8},
    {id: 8, nome: 'Teresa da Silva', telefone: '(61) 98765-4321', endereco: 'ABCDEF', nota: 9},
    {id: 9, nome: 'Victor da Silva', telefone: '(61) 98765-4321', endereco: 'ABCDEF', nota: 9.5},
    {id: 10, nome: 'Thiago da Silva', telefone: '(61) 98765-4321', endereco: 'ABCDEF', nota: 7},
    {id: 11, nome: 'Gabriel da Silva', telefone: '(61) 98765-4321', endereco: 'ABCDEF', nota: 5},
    {id: 12, nome: 'João da Silva', telefone: '(61) 98765-4321', endereco: 'ABCDEF', nota: 2.3},
]
  return (
    <>
     <PageComponent title="Alunos">
     <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Telefone</th>
          <th>Endereço</th>
          <th>Nota</th>
        </tr>
      </thead>
      <tbody>
        {studends.map(({id, nome, telefone, endereco, nota})=> (
          <tr key={id}>
          <td>{id}</td>
          <td>{nome}</td>
          <td>{telefone}</td>
          <td>{endereco}</td>
          <td>{nota}</td>
        </tr>
        ))}
  </tbody>
</Table>
    </PageComponent>
      
    </>
  );

}