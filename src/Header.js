import React, { Component } from 'react';
import header from './img/header.jpg';
import './Header.css';
const Nav = require('react-bootstrap').Nav;
const NavItem = require('react-bootstrap').NavItem;
const Navbar = require('react-bootstrap').Navbar;

const headerBg = {
    backgroundImage: 'url('+header+')'
};

class Header extends Component {
  render() {
      const menu = this._getMenu();
      return (
        <div className="Header" style={headerBg}>
            {menu}
        </div>
      );
  }

  _getMenu() {
      return (
          <Navbar>
              <Navbar.Collapse>
                  <Nav bsStyle="pills" pullRight>
                      {this._getMenuItems()}
                  </Nav>
              </Navbar.Collapse>
          </Navbar>
      );
  }

  _getMenuItems() {
    const menuItens = [{
        id: 1,
        title: 'Sobre',
        link: '#sobre'
    },{
        id: 2,
        title: 'Quem somos',
        link: '#quem-somos'
    },{
        id: 3,
        title: 'Colabore',
        link: '#colabore'
    }, {
        id: 4,
        title: 'Contato',
        link: 'mailto:projetotivefome@gmail.com'
    }];

    return menuItens.map((item)=> {
        return (<NavItem key={item.id} href={item.link}>{item.title}</NavItem>)
    })
  }
}

export default Header;
