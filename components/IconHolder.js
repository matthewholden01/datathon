import utils from '../styles/utils.module.css'
import React from 'react'

export default class IconHolder extends React.Component{

    render() {
        return (
            <img className={utils.moving} src={this.props.icon}></img>
        );
    }
}