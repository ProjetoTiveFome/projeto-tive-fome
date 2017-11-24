import React from 'react'

import Video from '../Video/'

import { blocoDeVideo } from '../../config/conteudo.js'
import getContent from '../../helpers.js'

import './videoContainer.css'

const VideoContainer = ({ id }) => (
	<div id={id} className='videoComponent wrapper'>

		<Video url={blocoDeVideo.url} />

		<div className='videoInfo'>
			<h2>{ blocoDeVideo.title }</h2>
			{ getContent(blocoDeVideo.content) }
		</div>

	</div>
)

export default VideoContainer
