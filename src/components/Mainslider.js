import React, { Component } from 'react';
import axios from 'axios';
import Slider from "react-slick";
import Link from 'react-router-dom';
import '../css/main.css';

class Mainslider extends Component {
  state = {
    getData : []
  }
  componentDidMount() {
    this.getSlideData();      
  }
  getSlideData = () => {
    axios.get("/api",{
      params : {
        bo_table : this.props.bo_table,
        status : this.props.status
      }
    })
    .then(response => {
      console.log(response.data)
      this.setState({
        getData: response.data
      })
    })
    .catch(response => {
      console.log(response.data)
    });
  }
  render() {
    const slideSettings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <div>
        <Slider className="sliderWrapper" {...slideSettings}>
          {this.state.getData.map(sliders => (
            <div className="sliderItems">
              <div className="sliderImgs" style={{backgroundImage : "url("+sliders.wr_img+")"}}>
                <div className="customContainer">
                  <div className="slideContents" style={{textAlign:sliders.wr_aligin}}>
                    <h1 className="sliderTitle">{sliders.wr_subject}</h1>
                    <p className="sliderText">{sliders.wr_text}</p>
                    <a className="sliderLink" href="#">+</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}

export default Mainslider;