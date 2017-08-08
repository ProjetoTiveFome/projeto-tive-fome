import React from 'react';
import * as conteudo from '../config/conteudo.js';
import getContent from '../helpers.js';
import './video.css';

class Video extends React.Component {
  render () {
    return (
      <div className='videoComponent wrapper'>
        <div className='videoContainer'>
          <div className="responsive-video-container">
            <iframe className="responsive-video" src={conteudo.blocoDeVideo.url} frameBorder='0' allowFullScreen></iframe>
          </div>
        </div>

        <div className='videoInfo'>
          <h2>{ conteudo.blocoDeVideo.title }</h2>
          { getContent(conteudo.blocoDeVideo.content) }
        </div>
      </div>
    )
  }
}

export default Video;
