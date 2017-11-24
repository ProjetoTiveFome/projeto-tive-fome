import React from 'react'

import './video.css'

const Video = ({ url }) => (
	<div className='videoContainer'>
		<div className='responsive-video-container'>
			<iframe className='responsive-video' src={url} frameBorder='0' allowFullScreen></iframe>
		</div>
	</div>
)

export default Video