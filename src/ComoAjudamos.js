import React, { Component } from 'react';
import './ComoAjudamos.css';
import ajudamosBg from './img/ajudamos.jpg';

const bgImg = {
    backgroundImage: 'url('+ajudamosBg+')'
};

class ComoAjudamos extends Component {
    render() {
        return (
            <div className="como-ajudamos" style={bgImg}></div>
        );
    }
}

export default ComoAjudamos;