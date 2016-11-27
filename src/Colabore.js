import React, { Component } from 'react';
import './Colabore.css';
const Grid = require('react-bootstrap').Grid;
const Row = require('react-bootstrap').Row;
const Col = require('react-bootstrap').Col;
const colabore = require('./img/colabore.svg');

class ComoAjudamos extends Component {
    render() {
        return (
            <Grid>
                <Row id="colabore" className="colabore">
                    <Col md={6} mdOffset={1}>
                        <h2>Colabore!</h2>
                        <p>
                            Para continuarmos com nossas ações, contamos com a
                            colaboração de nossos amigos e familiares. Alguns doam seu
                            tempo ao projeto, ajudando na organização, na arrecadação de
                            doações, no preparo e na distribuição de alimentos e em outras
                            de nossas frentes de atuação. Há quem doe alimentos, roupas,
                            materiais de higiene pessoal e de limpeza geral.
                        </p>
                        <p>
                            Outros nos auxiliam na divulgação de nossas ações, curtindo
                            e/ou compartilhando o conteúdo de nossa página. E há também
                            aqueles que preferem fazer sua doação em dinheiro para
                            colaborar com o caixa do Projeto. Todo o dinheiro arrecado é
                            utilizado nas ações de caridade que mantemos.
                        </p>
                    </Col>
                    <Col md={5}>
                        <figure>
                            <img src={colabore} alt="Colabore conosco"/>
                        </figure>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default ComoAjudamos;