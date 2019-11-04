import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Mnav from './Mnav';
import Logo from '../img/dbrand_logo.png';

class Nav extends Component {
  render() {
    return (
      <div id="mainNavs">
        <div className="customContainer">
          <div className="clear">
            <div id="mainLogo">
              <Link to="/">
                <img src={Logo} alt="DBRAND" />
              </Link>
            </div>
          </div>
        </div>
        <Mnav />
      </div>
    )
  }
}

export default Nav;