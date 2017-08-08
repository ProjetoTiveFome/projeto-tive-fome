import React from 'react';
import mainMenu from '../../config/menu.js'

class Menu extends React.Component {
  render() {
    return (
      <ul>
        {
          mainMenu
            .map(item => (
              <li key={item.titulo}><a href={item.url}>{item.titulo}</a></li>
            ))
        }
      </ul>
    )
  }
}

export default Menu;
