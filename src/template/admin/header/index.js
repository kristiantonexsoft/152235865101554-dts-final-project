import React, { Component } from 'react';
import logo from '../../../logo.png';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="topbar">
            <div className="topbar-left">
              <a className="logo">
                <span>
                  <img src={logo} height="65"/>
                </span>
              </a>
            </div>
            <nav className="navbar-custom">
              <ul className="navbar-right d-flex list-inline float-right mb-0">
                <li></li>
                
              </ul>
              <ul className="list-inline menu-left mb-0">
                <li className="float-left">
                  <button className="button-menu-mobile open-left waves-effect waves-light">
                    <i className="mdi mdi-menu" />
                  </button>
                </li>                        
                <li className="d-none d-sm-block">
                </li>
              </ul>
            </nav>
          </div>
        );
    }
}

export default Header;