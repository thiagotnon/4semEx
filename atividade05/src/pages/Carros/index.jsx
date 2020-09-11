import React from 'react'
import { Row, Col } from 'react-bootstrap'
import PageComponent from '../../components/PageComponent';
import CardComponent from '../../components/CardComponent';

export default () => {
  const carros = [
    {
      id: 1,
      marca: 'GM',
      modelo: 'Opala',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Chevrolet_Opala_SS_19744.jpg/1200px-Chevrolet_Opala_SS_19744.jpg',
      ano: 1982,
    },
    {
      id: 2,
      marca: 'Model S',
      modelo: 'Tesla',
      img: 'https://cdn.cnn.com/cnnnext/dam/assets/191121212606-tesla-cybertruck-super-169.jpg',
      ano: 2020,
    },
    {
      id: 3,
      marca: 'VW',
      modelo: 'Gol',
      img: 'https://quatrorodas.abril.com.br/wp-content/uploads/2018/05/gol_e_voyage_2019__5_-e1526935145275.jpg?quality=70&strip=info&w=1024',
      ano: 2020,
    },
    {
      id: 4,
      marca: 'Fiat',
      modelo: 'Pálio',
      img: 'https://istoe.com.br/wp-content/uploads/sites/17/2018/02/palio.jpg',
      ano: 2020,
    },
    {
      id: 5,
      marca: 'Fiat',
      modelo: 'Marea',
      img: 'https://conteudo.imguol.com.br/c/noticias/da/2020/07/06/marea-1998-1594076017776_v2_450x253.jpg',
      ano: 2020,
    },
    {
      id: 6,
      marca: 'GM',
      modelo: 'Monza',
      img: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Chevrolet_Monza_1.8_SR_sedan_in_Punta_del_Este_01.JPG',
      ano: 2020,
    },
  ]
  return (
    <>
    <PageComponent title="Carros">
      <Row>
        <>
          {carros.map(({id, marca, modelo, img, ano})=> (
            <Col xs={6} md={4} sm={6} mb={3} key={id}>
              <CardComponent img={img} title={marca}>
                <p>{modelo}</p>
                <p><b>Ano:</b> {ano}</p>
              </CardComponent>
            </Col>
            ))}
          </>
      </Row>
    </PageComponent>

    </>
  );

}

