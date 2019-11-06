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
            <div id="footerAddress">
              <p className="avenir_light">Incheon Yeonsu-gu Songdogwahak-ro 32 Songdo Techno Park IT Center</p>
            </div>
            <div id="footerInfos">
              <div className="infoLists clear">
                <div>
                  <span className="infoCates avenir_heavy">CEO.</span>
                  <span className="infoConts avenir_light">Lee Seung Jin</span>
                </div>
                <div>
                  <span className="infoCates avenir_heavy">Emaili.</span>
                  <span className="infoConts avenir_light">aline@thedbrand.com</span>
                </div>
              </div>
              <div className="infoLists clear">
                <div>
                  <span className="infoCates avenir_heavy">Tel.</span>
                  <span className="infoConts avenir_light">02.1544.0218</span>
                </div>
                <div>
                  <span className="infoCates avenir_heavy">Registration No.</span>
                  <span className="infoConts avenir_light">133-86-21907</span>
                </div>
              </div>
            </div>
            <div id="footerCopys"> 
              <p className="avenir_heavy">© 2019 DBRAND All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;
