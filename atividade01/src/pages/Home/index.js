import React from 'react'
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Title from '../../components/Title';

import css from './home.module.css';

function Home() {
  return (
    <div>
      <Header />
      <Title title="Entendendo o HTML" />
      <div className="container">
        <h3>Parágrafo</h3>

        <p>Vivamus blandit a velit vel porta. </p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus congue purus, ac blandit lorem finibus at. Praesent hendrerit et ante ut luctus. Morbi condimentum, metus a bibendum tempor, ligula tortor suscipit erat, at ullamcorper justo orci id velit. Phasellus eget quam at eros tincidunt viverra. Mauris scelerisque massa ex. Donec sollicitudin convallis nulla in dignissim. Pellentesque eu iaculis ligula. Integer consequat lacus in magna vulputate aliquam. Etiam lacinia felis ut ultricies consequat. Pellentesque rhoncus, tellus nec rhoncus molestie, arcu tellus tincidunt arcu, eget tincidunt magna nulla vitae massa. Donec urna nisi, faucibus a sem eu, vehicula tincidunt diam. Maecenas non aliquet ipsum, ut cursus velit. Phasellus ac erat imperdiet, bibendum erat vitae, mollis enim. Suspendisse vehicula tristique nunc quis scelerisque.</p>

        <p>Duis non ex sed mauris vulputate gravida ac non libero. Nulla blandit, metus ut posuere elementum, orci mauris pharetra diam, sed malesuada quam neque commodo dui. Suspendisse nec nibh pulvinar, congue libero eu, dapibus ante. Phasellus elementum finibus nibh, et efficitur eros volutpat vel. Pellentesque felis justo, semper et nisi ut, posuere sodales urna. Pellentesque id cursus est, sit amet blandit tellus. Vestibulum turpis elit, rhoncus non ultrices a, rhoncus in enim. Nulla at eros et orci consectetur aliquet vel sit amet est. Donec luctus sem at neque rutrum, ut dictum libero bibendum. Sed rhoncus justo vitae mauris auctor, a rhoncus dui molestie. Pellentesque non luctus ex.</p>
        
        <h3>Imagens</h3>

        <div className={css.imageBox}>
          <img src="https://picsum.photos/580/300" alt="Imagem"/>
          <img src="https://picsum.photos/seed/picsum/580/300" alt="Imagem"/>
        </div>

        <h3>Links</h3>
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">Cliquqe aqui para ir para o site do Google</a>

        <p>Vamos para a <Link to="/" target="_blank" rel="noopener noreferrer">página 1?</Link></p>
        <p>Vamos para a <Link to="/tabelas" tLinkrget="_blank" rel="noopener noreferrer">página 2?</Link></p>

        <h3>Listas</h3>
        <h4>Lista Não Ordenada</h4>
        <ul>
          <li>Distrito Federal
              <ol>
                <li>Brasília</li>
                <li>Ceilândia</li>
                <li>Asa Sul</li>
                <li>Asa Norte</li>
              </ol>
          </li>
          <li>Goiás</li>
          <li>São Paulo</li>
          <li>Rio de Janeiro</li>
        </ul>
        <h4>Lista Ordenada</h4>
        <ol>
          <li>Distrito Federal</li>
          <li>Goiás</li>
          <li>São Paulo</li>
          <li>Rio de Janeiro</li>
        </ol>

      </div>
    </div>
  )
}

export default Home
