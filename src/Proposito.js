import React, { Component } from 'react';
import './Proposito.css';
const Grid = require('react-bootstrap').Grid;
const Row = require('react-bootstrap').Row;
const Col = require('react-bootstrap').Col;
const proposito = require('./img/proposito.svg');

class Proposito extends Component {
    render() {
        return (
            <Grid>
                <Row className="nosso-proposito">
                    <Col md={6} mdOffset={1}>
                        <h2>Nosso Propósito</h2>
                        <p>
                            O Projeto Tive Fome existe para fornecer ajuda e esperança para
                            pessoas com fome, sem-teto e a famílias da cidade de
                            Campinas-SP, mas também despertar nas pessoas o desejo de
                            ajudar o próximo. Começamos com a distribuição de alimentos
                            aos moradores de rua e essa continua sendo nossa prioridade.
                        </p>
                        <p>
                            Sempre que possível, preparamos marmitas ou
                            cachorros-quentes, mesmo quando nosso caixa está baixo,
                            procuramos levar ao menos leite com achocolatado e pão com
                            margarina.
                        </p>
                        <p>
                            O importante é que toda sexta-feira à noite, sem falta, estamos
                            em frente à Catedral Metropolitana de Campinas, distribuindo
                            alimentos. Com o crescimento do grupo, foi inevitável não
                            expandirmos nossas frentes de atuação. Hoje também
                            arrecadamos roupas e cobertores para levar aos moradores de
                            ruas. Ademais, também montamos cestas básicas e levamos
                            doações a famílias carentes assistidas pelo Projeto.
                        </p>
                    </Col>
                    <Col md={5} className="regulariza-altura">
                        <figure>
                            <img src={proposito} alt="Somos um grupo de amigos"/>
                        </figure>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Proposito;