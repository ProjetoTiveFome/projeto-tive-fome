import React from 'react'

import { Link } from 'react-scroll'

import mainMenu from '../../config/menu.js'

import './menu.css'

const agrupaItens = item => (
  <li key={item.titulo}>
    <Link to={item.url} smooth={true}>{item.titulo}</Link>
  </li>
)

const Menu = () => (mainMenu)
  ? (<ul className='mainMenu'>{mainMenu.map(agrupaItens)}</ul>)
  : (<p className='mainMenu'>Sem menu no momento</p>)

export default Menu;
