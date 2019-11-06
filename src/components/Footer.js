import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import instarIcon from 'img/footer_instar.png';
import blogIcon from 'img/footer_blog.png';

class Footer extends Component {
  render() {
    return (
      <div id="footers">
        <div className="customContainer">
          <div id="footerHeader">
            <ul id="footerNav" className="clear">
              <li>
                <Link className="avenir_bold" to="/About">We Are</Link>
              </li>
              <li>
                <Link className="avenir_bold" to="/Work">Work</Link>
              </li>
              <li>
                <Link className="avenir_bold" to="/Life">Life</Link>
              </li>
              <li>
                <Link className="avenir_bold" to="/Contact">Contact</Link>
              </li>
            </ul>
            <ul id="footerSns" className="clear">
              <li>
                <a href="#">
                  <img src={instarIcon} alt="sns" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={blogIcon} alt="sns" />
                </a>
              </li>
            </ul>
          </div>
          <div id="footerBody">

          </div>
        </div>
      </div>
    )
  }
}

export default Footer;