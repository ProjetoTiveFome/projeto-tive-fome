import React from 'react';
import getContent from '../helpers.js';
import './text-image.css';

class TextImage extends React.Component {
  render() {
    return (
      <section className='wrapper text-image'>
        <div className='text-image-content'>
          <h2>{this.props.title}</h2>
          { getContent(this.props.content || '') }
        </div>

        <figure className='text-image-img'>
          <img src={this.props.img} alt={this.props.title} />
        </figure>
      </section>
    )
  }
}

export default TextImage;
