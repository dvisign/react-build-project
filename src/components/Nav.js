import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from 'img/dbrand_logo.png';
import LogoOn from 'img/dbrand_logo_on.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import jQuery from 'jquery';
class Nav extends Component {
  componentDidMount(){
    window.addEventListener('scroll', this.onScroll.bind(this));
    document.getElementById("mainLogo").getElementsByTagName("img")[0].setAttribute("src",Logo);
    document.getElementById("mainNavs").classList.remove("navScrollOn");
  }
  onScroll = (e) => {
    const nowPos = ('scroll', e.srcElement.scrollingElement.scrollTop);
    if (this.props.pages === "main") {
      if (nowPos > 0) {
        document.getElementById("mainLogo").getElementsByTagName("img")[0].setAttribute("src",LogoOn)
        document.getElementById("mainNavs").classList.add("navScrollOn")
      } else {
        document.getElementById("mainLogo").getElementsByTagName("img")[0].setAttribute("src",Logo)
        document.getElementById("mainNavs").classList.remove("navScrollOn")
      }
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
  };
  componentDidUpdate() {
    let btnEl = document.getElementById("hamburgersBtn");
    let slideNav = document.getElementById("fixNavs");
    let htmlDom = document.getElementsByTagName("html")[0];
    btnEl.classList.remove("mNavActive");
    slideNav.classList.remove("mNavActive");
    htmlDom.style.overflow = "auto";
    jQuery("html").stop().animate({
      "scrollTop":"0"
    }, 500)
    if (this.props.pages !== "main") {
      document.getElementById("mainLogo").getElementsByTagName("img")[0].setAttribute("src",LogoOn);
      document.getElementById("mainNavs").classList.add("navScrollOn");
    } else {
      document.getElementById("mainLogo").getElementsByTagName("img")[0].setAttribute("src",Logo);
      document.getElementById("mainNavs").classList.remove("navScrollOn");
    }
  }
  render() {
    const activeStyle = {
      color: '#ff2f92'
    };
    return (
      <div id="mainNavs">
        <div className="customContainer">
          <div className="clear">
            <div id="mainLogo">
              <Link to="/">
                <img src="" alt="DBRAND" />
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
              <NavLink activeStyle={activeStyle} to="/About">We Are</NavLink>
            </li>
            <li>
              <NavLink activeStyle={activeStyle} to="/Work">Work</NavLink>
            </li>
            <li>
              <NavLink activeStyle={activeStyle} to="/Life">Life</NavLink>
            </li>
            <li>
              <NavLink activeStyle={activeStyle} to="/Contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Nav;