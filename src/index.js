import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Sobre from './Sobre';
import QuemSomos from './QuemSomos';
import Proposito from './Proposito';
import ComoAjudamos from './ComoAjudamos';
import Colabore from './Colabore';
import Mapa from './Mapa';

ReactDOM.render(
  <Header />,
  document.getElementById('header')
);

ReactDOM.render(
    <Sobre />,
    document.getElementById('sobre')
);

ReactDOM.render(
    <QuemSomos />,
    document.getElementById('quemsomos')
);

ReactDOM.render(
    <Proposito />,
    document.getElementById('proposito')
);

ReactDOM.render(
    <ComoAjudamos />,
    document.getElementById('ajudamos')
);

ReactDOM.render(
    <Colabore />,
    document.getElementById('colabore')
);

ReactDOM.render(
    <Mapa />,
    document.getElementById('mapa')
);
