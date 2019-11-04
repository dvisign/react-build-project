import React, { Component } from 'react';
import Mainslider from '../components/Mainslider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Main extends Component {
  render() {
    return (
      <div>
        <Mainslider bo_table="mainslider" />
      </div>
    )
  }
}

export default Main;