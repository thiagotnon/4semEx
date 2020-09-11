import React from 'react'
import { Card } from 'react-bootstrap';

export default ({img, title, children}) => {

  return (
    <>
      <Card style={{marginBottom: '20px'}}>
        <Card.Img variant="top" src={img} style={{objectFit: 'cover', height: '200px'}}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {children}
          </Card.Text>
        </Card.Body>
      </Card>
      
    </>
  );

}