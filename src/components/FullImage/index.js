import React from 'react'

const style = {
	backgroundSize: 'cover',
	height: '395px',
}

const FullImage = ({ backgroundImage }) => {
	style.backgroundImage = `url(${backgroundImage})`
	return (<section style={style}></section>)
}

export default FullImage;
