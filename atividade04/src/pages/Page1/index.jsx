import React from 'react'
import { Alert, Jumbotron, Row, Col, Container } from 'react-bootstrap'


export default () => {
  return (
    <>
    <Jumbotron>
      <Container>
        <Row>
          <Col>
            <h1>Página 1</h1>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
      <Alert variant="danger">
        <strong>Atenção!</strong> Isto é um alerta do React Bootstrap
      </Alert>
      <Alert variant="primary">
        <strong>Atenção!</strong> Isto é um alerta do React Bootstrap
      </Alert>
      <Alert variant="success">
        <strong>Atenção!</strong> Isto é um alerta do React Bootstrap
      </Alert>
      <Alert variant="warning">
        <strong>Atenção!</strong> Isto é um alerta do React Bootstrap
      </Alert>
      <Alert variant="secondary">
        <strong>Atenção!</strong> Isto é um alerta do React Bootstrap
      </Alert>
    </>
  );

}