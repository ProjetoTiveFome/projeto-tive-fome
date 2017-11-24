import React from 'react'

import mainMenu from '../../config/menu.js'

import './menu.css'

const agrupaItens = item =>
  (<li key={item.titulo}><a href={item.url}>{item.titulo}</a></li>)

const Menu = () => (mainMenu)
  ? (<ul className='mainMenu'>{mainMenu.map(agrupaItens)}</ul>)
  : (<p className='mainMenu'>Sem menu no momento</p>)

export default Menu;
