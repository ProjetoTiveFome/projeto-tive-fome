import React, { Component } from 'react';
import './Sobre.css';
const Grid = require('react-bootstrap').Grid;
const Row = require('react-bootstrap').Row;
const Col = require('react-bootstrap').Col;
const sobreNosFigure = require('./img/sobrenos.svg');

class Sobre extends Component {
    render() {
        return (
            <Grid>
                <Row id="sobre" className="sobre-nos">
                    <Col md={7}>
                        <div className="responsive-video-container">
                            <iframe className="responsive-video" src="https://www.youtube.com/embed/MMwbkgjT8HI" frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </Col>
                    <Col md={5}>
                        <figure>
                            <img src={sobreNosFigure} alt="Somos amor"/>
                        </figure>
                        <h2>Sobre a gente</h2>
                        <p>
                            No dia 26 de julho de 2013, David reuniu um
                            pequeno grupo de amigos a fim de servir uma
                            sopa quentinha aos moradores de rua do
                            centro da cidade de Campinas.
                        </p>
                        <p>
                            Naquele dia nascia o Projeto Tive Fome.
                            Um projeto colaborativo que visa ajudar os
                            que mais precisam.
                        </p>
                    </Col>
                </Row>
                <span className="separator"></span>
            </Grid>
        )
    }
}

export default Sobre;