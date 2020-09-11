import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'


export default ({title, children}) => {
  return (
    <>
    <Jumbotron>
      <Container>
       <h1>{title}</h1>

      </Container>
    </Jumbotron>

      <Container>
        {children}
      </Container>
    </>
  );
}