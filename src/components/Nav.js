import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/dbrand_logo.png';
import LogoOn from '../img/dbrand_logo_on.png';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addClass : false,
      logoImg : ""
    }
  }
  navEvent = () => {
    let btnEl = document.getElementById("hamburgersBtn");
    let slideNav = document.getElementById("fixNavs");
    if (this.state.addClass === false) {
      btnEl.classList.add("mNavActive");
      slideNav.classList.add("mNavActive")
      this.setState({
        addClass : true
      });
    } else {
      btnEl.classList.remove("mNavActive");
      slideNav.classList.remove("mNavActive");
      this.setState({
        addClass : false
      });
    }
  }
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
            <div id="mainMenu">
              <div id="langSelect"></div>
              <div id="searchBtn">
                <button><i class="fas fa-search"></i></button>
              </div>
              <div id="hamburgers">
                <button id="hamburgersBtn" onClick={this.navEvent}>
                  <span id="line1"></span>
                  <span id="line2"></span>
                  <span id="line3"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="fixNavs">
          <ul>
            <li>
              <Link to="/About">We Are</Link>
            </li>
            <li>
              <Link to="/Work">Work</Link>
            </li>
            <li>
              <Link to="/Life">Life</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Nav;