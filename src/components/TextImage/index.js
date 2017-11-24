import React from 'react'

import getContent from '../../helpers.js'

import './text-image.css'

const TextImage = ({ id, title, img, content }) => (
  <section id={id} className='wrapper text-image'>

    <div className='text-image-content'>
      <h2>{title}</h2>
      { getContent(content || '') }
    </div>

    <figure className='text-image-img'>
      <img src={img} alt={title} />
    </figure>

  </section>
)

export default TextImage;
