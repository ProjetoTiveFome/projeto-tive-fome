import React, { Component } from 'react';
import './QuemSomos.css';
const Grid = require('react-bootstrap').Grid;
const Row = require('react-bootstrap').Row;
const Col = require('react-bootstrap').Col;
const quemSomosFigure = require('./img/quemsomos.svg');

class QuemSomos extends Component {
    render() {
        return (
            <Grid>
                <Row id="quem-somos" className="quem-somos">
                    <Col md={6} mdOffset={1} className="regulariza-altura">
                        <h2>Quem Somos</h2>
                        <p>
                            Somos um grupo de amigos bem heterogêneo e, a fim de
                            manter essa diversidade, não nos ligamos a nenhum tipo de
                            igreja, nem a partidos políticos, nem a nenhuma outra
                            instituição. Nossas crenças e ideais são tão diversas quanto os
                            participantes que integram este grupo.
                        </p>
                    </Col>
                    <Col md={5}>
                        <figure>
                            <img src={quemSomosFigure} alt="Somos um grupo de amigos"/>
                        </figure>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default QuemSomos;