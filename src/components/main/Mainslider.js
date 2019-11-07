import React, { Component } from 'react';
import axios from 'axios';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import 'css/main.css';

class Mainslider extends Component {
  state = {
    getData : []
  }
  UNSAFE_componentWillMount() {
    this.getSlideData();      
  }
  getSlideData = () => {
    if (this.props.host === "localhost") {
      this.setState({
        getData : [
          {
            "wr_subject": "\uba54\uc778\uc2ac\ub77c\uc774\ub4dc1",
            "wr_text": "\uba54\uc778\uc2ac\ub77c\uc774\ub4dc1 \uc124\uba85\r\n\ucd94\uac00\uc124\uba85",
            "wr_aligin": "left",
            "wr_img": "http:\/\/dbrandtest.com\/gnu\/data\/file\/mainslider\/1030043451_TKhfcNO4_ecb25311adbe8785904a24105dc79d9ecd2e7067.jpg",
            "wr_link": "http:\/\/dbrandtest.com\/",
            "titleColor": "fff",
            "textColor": "fff"
          }, {
            "wr_subject": "\uba54\uc778\uc2ac\ub77c\uc774\ub4dc2 \ud0c0\uc774\ud2c0",
            "wr_text": "\uba54\uc778\uc2ac\ub77c\uc774\ub4dc2 \uc124\uba85",
            "wr_aligin": "right",
            "wr_img": "http:\/\/dbrandtest.com\/gnu\/data\/file\/mainslider\/1030043451_GA9hkUIw_5ae7bd508679495acac3da099c6c82c3e3ed627c.jpg",
            "wr_link": "http:\/\/dbrandtest.com",
            "titleColor": "fff",
            "textColor": "fff"
          }, {
            "wr_subject": "\uba54\uc778\uc2ac\ub77c\uc774\ub4dc3 \ud0c0\uc774\ud2c0",
            "wr_text": "\uba54\uc778\uc2ac\ub77c\uc774\ub4dc3 \ud14d\uc2a4\ud2b8",
            "wr_aligin": "left",
            "wr_img": "http:\/\/dbrandtest.com\/gnu\/data\/file\/mainslider\/1030043451_uIJsCLy4_5ad4e89bdd407c60f758fa2b7ac74074db4f41ef.jpg",
            "wr_link": "http:\/\/dbrandtest.com",
            "titleColor": "fff",
            "textColor": "fff"
          }
        ]
      })
    } else {
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
          {this.state.getData.map((sliders, i) => (
            <div className="sliderItems" key={i}>
              <div className="sliderImgs" style={{backgroundImage : "url("+sliders.wr_img+")"}}>
                <div className="customContainer">
                  <div className={"slideContents slideAlign"+sliders.wr_aligin}>
                    <h1 className="sliderTitle" style={{color:"#"+sliders.titleColor}}>{sliders.wr_subject}</h1>
                    <p className="sliderText" style={{color:"#"+sliders.textColor}}>{sliders.wr_text}</p>
                    <Link className="sliderLink" to={sliders.wr_link}>+</Link>
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