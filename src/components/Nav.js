import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from 'img/dbrand_logo.png';
import LogoOn from 'img/dbrand_logo_on.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoImg : Logo,
      navActive : ""
    }
  }
  componentDidMount(){
    window.addEventListener('scroll', this.onScroll.bind(this));
  }
  onScroll = (e) => {
    const nowPos = ('scroll', e.srcElement.scrollingElement.scrollTop);
    if (nowPos > 0) {
      this.setState({
        logoImg : LogoOn,
        navActive : "navScrollOn"
      })
    } else {
      this.setState({
        logoImg : Logo,
        navActive : ""
      })
    }
  };
  navOnClickEvent = () => {
    let btnEl = document.getElementById("hamburgersBtn");
    let slideNav = document.getElementById("fixNavs");
    let htmlDom = document.getElementsByTagName("html")[0];
    if (btnEl.classList.contains("mNavActive")) {
      btnEl.classList.remove("mNavActive");
      slideNav.classList.remove("mNavActive");
      htmlDom.style.overflow = "auto";
    } else {
      btnEl.classList.add("mNavActive");
      slideNav.classList.add("mNavActive");
      htmlDom.style.overflow = "hidden";
    }
  }
  render() {
    return (
      <div id="mainNavs" className={this.state.navActive}>
        <div className="customContainer">
          <div className="clear">
            <div id="mainLogo">
              <Link to="/">
                <img src={this.state.logoImg} alt="DBRAND" />
              </Link>
            </div>
            <div id="mainMenu">
              <div id="langSelect"></div>
              <div id="searchBtn">
                <button><FontAwesomeIcon icon={faSearch} /></button>
              </div>
              <div id="hamburgers">
                <button id="hamburgersBtn" onClick={this.navOnClickEvent}>
                  <span id="line1"></span>
                  <span id="line2"></span>
                  <span id="line3"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="fixNavs">
          <ul className="m_menu">
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