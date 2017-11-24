import React from 'react';
import ReactDOM from 'react-dom';

import './global.css';

import Header from './components/Header';
import VideoContainer from './components/VideoContainer';
import TextImage from './components/TextImage';
import FullImage from './components/FullImage';
import Map from './components/Map/';

import { quemSomos, oqueFazemos, nossoProposito, colabore } from './config/conteudo.js';

const App = () => (
  <div>
    <Header />
    <VideoContainer />
    <hr className='separator' />
    <TextImage title={quemSomos.title} img={quemSomos.image} content={quemSomos.content} />
    <TextImage title={nossoProposito.title} img={nossoProposito.image} content={nossoProposito.content} />
    <FullImage backgroundImage={oqueFazemos.backgroundImage} />
    <TextImage title={colabore.title} img={colabore.image} content={colabore.content} />
    <Map />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'));
