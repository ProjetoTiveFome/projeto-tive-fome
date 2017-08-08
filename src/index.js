import React from 'react';
import ReactDOM from 'react-dom';

import './global.css';

import Header from './components/header/header.js';
import Video from './components/video.js';
import TextImage from './components/text-image.js';
import FullImage from './components/full-image.js';
import Map from './components/map.js';

import * as conteudo from './config/conteudo.js';

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Video />
        <hr className='separator' />
        <TextImage title={conteudo.quemSomos.title} img={conteudo.quemSomos.image} content={conteudo.quemSomos.content}/>
        <TextImage title={conteudo.nossoProposito.title} img={conteudo.nossoProposito.image} content={conteudo.nossoProposito.content}/>
        <FullImage />
        <TextImage title={conteudo.colabore.title} img={conteudo.colabore.image} content={conteudo.colabore.content}/>
        <Map />
      </div>
    )
  }
}

// <Mapa />

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
