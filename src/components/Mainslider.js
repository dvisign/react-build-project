import React, { Component } from 'react';
import axios from 'axios';

class Mainslider extends Component {
  componentDidMount() {
    let sliderImg = () => {
      axios.get("/api",{
        params : {bo_table : this.props.bo_table}
      })
      .then(response => {console.log(response.data)})
      .catch(response => {console.log(response.data)});
    }
    sliderImg();
  }
  render() {
    return (
      <div>
        메인슬라이더
      </div>
    )
  }
}

export default Mainslider;