import React from 'react'
import { Alert } from 'react-bootstrap'
import PageComponent from '../../components/PageComponent';


export default () => {
  return (
    <>
     <PageComponent title="Página 1">
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
    </PageComponent>
      
    </>
  );

}