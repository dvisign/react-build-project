import React, { Component } from 'react';
import axios from 'axios';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import '../../css/main.css';

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
      slidesToScroll: 1,
      afterChange: function(currentSlide) {
        console.log(currentSlide + 1);
        document.getElementById("sliderCounter").innerHTML = currentSlide + 1;
      }
    }
    return (
      <div className="sliderComponents">
        <Slider className="sliderWrapper" {...slideSettings}>
          {this.state.getData.map(sliders => (
            <div className="sliderItems">
              <div className="sliderImgs" style={{backgroundImage : "url("+sliders.wr_img+")"}}>
                <div className="customContainer">
                  <div className={"slideContents slideAlign"+sliders.wr_aligin}>
                    <h1 className="sliderTitle" style={{color:"#"+sliders.titleColor}}>{sliders.wr_subject}</h1>
                    <p className="sliderText" style={{color:"#"+sliders.textColor}}>{sliders.wr_text}</p>
                    <Link className="sliderLink" href="#">+</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="sliderCounter">
          <span id="sliderCounter">1</span>/<span id="sliderAllCounter">{this.state.getData.length}</span>
        </div>
      </div>
    )
  }
}

export default Mainslider;