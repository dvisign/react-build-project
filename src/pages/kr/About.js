import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css'
import 'css/about.css';


class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages : "about"
    }
  }
  componentDidMount() {
    this.callbackFunc();
  }
  callbackFunc = () => {
    this.props.addSomething(this.state.pages)
  }
  render() {
    return (
      <section>
        <article id="aboutBanner">
          <video id="aboutVideo" playsInline muted="muted" autoPlay>
            <source src="http://www.dbrand.co.kr/bbs/video/about/DBRAND3.mp4" />
          </video>
        </article>
        <article id="intro" className="articles">
          <div className="customContainer">
            <div className="titleWrapper">
              <h1 className="sectionTitles blueTxt avenir_bold">Hello</h1>
            </div>
            <div className="sectionText">
              <p>우리는 이렇게 생각합니다.</p>
              <p><span className="pointTxt">디자인</span>은 문제를 해결하는 <span className="pointTxt">솔루션</span>이며<br /><span className="pointTxt"> 브랜드</span>는 <span className="pointTxt">자기다움</span>을 만드는 일이라고.<br/>우리는 디자인과 브랜딩을 함께 고민합니다.</p>
            </div>
          </div>
        </article>
        <article id="missions" className="articles">
          <div className="customContainer">
            <div className="titleWrapper">
              <h1 className="sectionTitles avenir_bold blueTxt animateTarget" delay="0">DBRAND Mission</h1>
            </div>
            <div className="sectionText animateTarget" delay="300">
              <p className="pointTxt">우리는 디자인을 통해 강력한 무기를 만듭니다.</p>
              <p>시장을 상대해야 하는 고객들에게 기업 브랜딩을<br/> 통해 제품 및 서비스의 가치를 높일 수 있는<br/> 강력한 디자인 무기를 만듭니다.</p>
            </div>
            <div className="sectionBtns animateTarget" delay="300">
              <Link to="/work"><span className="btnTxt">Go to Work</span><span className="btnArr"><img src="http://www.dbrand.co.kr/bbs/img/btnArr.png" alt=""/></span></Link>
            </div>
          </div>
        </article>
        <article className="sliderImgs">
        <div className="fixedLayouts">
          <FixSlide1 />
        </div>
        <div className="viewLayouts"></div>
        </article>
      </section>
    )
  }
}
class FixSlide1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img : [
        {
          "imgUrl" : "http://www.dbrand.co.kr/bbs/img/slideImgs.jpg"
        },
        {
          "imgUrl" : "http://www.dbrand.co.kr/bbs/img/slideImgs.jpg"
        },
        {
          "imgUrl" : "http://www.dbrand.co.kr/bbs/img/slideImgs.jpg"
        }
      ]
    }
  }
  render() {
    return(
      <Swiper className="fixSlideImgs">
        {this.state.img.map((imgs, i)=> (
          <div className="fixSlideItems" key={i} style={{backgroundImage:"url("+imgs.imgUrl+")"}}></div>
        ))}
      </Swiper>
    )
  }
}
export default About;