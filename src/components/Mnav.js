import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Mnav extends Component {
  render() {
    return (
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
    )
  }
}

export default Mnav;