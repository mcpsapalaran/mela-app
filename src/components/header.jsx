import React, { Component } from 'react';
import '../css/header.css';

class Header extends Component {
    render() {
        return (
            <div className = "Header">
            <h1>Hello!!!</h1>
            <p>{this.props.date}</p>
            </div>
        )
    }
}
class Header2 extends Component {
    render() {
        return (
            <div className = "Header2">
            <h1>Hello Header2!!!</h1>
            </div>
        )
    }
}   
export{
    Header,
    Header2
};