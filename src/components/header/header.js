import React, { Component } from 'react';
import Menu from './menu.js';
import './estilo.css';

class Header extends Component {
  render () {
    return (
      <header className='header'>
        <div className="wrapper">
          <nav className='menu'>
            <Menu />
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
