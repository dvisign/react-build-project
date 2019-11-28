import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css'
import 'css/about.css';
import jQuery from 'jquery';
import ScrollAnimation from 'react-animate-on-scroll';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages : "about"
    };
    this.scrollEvent.bind(this);
  }
  componentDidMount() {
    this.callbackFunc();
    window.addEventListener('scroll',this.scrollEvent, false)  
    jQuery(".pageContents").stop().fadeIn(500);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll',this.scrollEvent, false)
    jQuery(".pageContents").stop().fadeOut(500);
  }
  callbackFunc = () => {
    this.props.addSomething(this.state.pages)
  }
  scrollEvent = (e) => {
    const nowPos = ('scroll', e.srcElement.scrollingElement.scrollTop);
    const target = jQuery('.sliderImgs');
    const targetArr = {};
    target.each(function(i){
      targetArr[i] = jQuery(this).prev().offset().top;
      if (nowPos > targetArr[i]) {
        jQuery(this).css("z-index","1")
      } else {
        jQuery(this).css("z-index","0")
      }
    });
  }
  render() {
    return (
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
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
                <h1 className="sectionTitles blueTxt avenir_bold">DBRAND Mission</h1>
              </div>
              <div className="sectionText">
                <p className="pointTxt">우리는 디자인을 통해 강력한 무기를 만듭니다.</p>
                <p>시장을 상대해야 하는 고객들에게 기업 브랜딩을<br/> 통해 제품 및 서비스의 가치를 높일 수 있는<br/> 강력한 디자인 무기를 만듭니다.</p>
              </div>
              <div className="sectionBtns">
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
          <article id="ways" className="articles">
            <Way />
          </article>
          <article id="we-do" className="articles">
            <Wedo />
          </article>
          <article id="pros" className="articles">
            <div className="customContainer">
              <div className="titleWrapper">
                <h1 className="sectionTitles blueTxt avenir_bold">DBRAND Pro</h1>
              </div>
              <div className="sectionText">
                <p><span className="pointTxt">수평적인 커뮤니케이션</span>을 위해 직급 구분없이<br /> 디브랜더의 프로페셔널한 정신을 의미하는<br /> Professional의 ‘Pro’를 사용합니다.<br /> 효율적인 디자인 협업 환경을 만들고자<br /> <span className="pointTxt">Smart work</span>를 통해 자유롭게 의견을 공유하고<br /> 즉각적으로 피드백을 수용합니다.</p>
              </div>
              <div className="sectionBtns">
                <Link to="/life"><span className="btnTxt">Go to Life</span><span className="btnArr"><img src="http://www.dbrand.co.kr/bbs/img/btnArr.png" alt=""/></span></Link>
              </div>
            </div>
          </article>
          <article className="sliderImgs">
            <div className="fixedLayouts">
              <FixSlide2 />
            </div>
            <div className="viewLayouts"></div>
          </article>
        </section>
      </ScrollAnimation>
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
class FixSlide2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img : [
        {
          "imgUrl" : "http://www.dbrand.co.kr/bbs/img/slideImgs2.jpg"
        },
        {
          "imgUrl" : "http://www.dbrand.co.kr/bbs/img/slideImgs2.jpg"
        },
        {
          "imgUrl" : "http://www.dbrand.co.kr/bbs/img/slideImgs2.jpg"
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
class Way extends Component {
  constructor(props) {
    super(props);
    this.textHandle= this.textHandle.bind(this);
    this.state = {
      wayTitle : [
        {
          title : "Understand"
        },
        {
          title : "Innovation"
        },
        {
          title : "Creative"
        },
        {
          title : "Solution"
        }
      ],
      wayText : [
        {
          text:"기업의 제품 및 서비스를 이해하여<br> 목적 및 목표를 위해 전략을 실행합니다."
        },
        {          
          text:"우아한 단순성, 재미와 협업, 감정과 논리<br> 호기심을 가지고 혁신을 통해 디자인합니다."
        },
        {          
          text:"협력을 통하여 창출된 창의적 사고를<br> 바탕으로 새로운 길을 찾도록 돕습니다."
        },
        {
          text:"전문적이고 객관적인 시각으로 문제를 분석,<br> 디자인 솔루션을 제시하며 실행합니다."
        }
      ],
      propsText: "기업의 제품 및 서비스를 이해하여<br> 목적 및 목표를 위해 전략을 실행합니다."
    }
  }
  textHandle(i) {
    let classActive = document.getElementsByClassName("wayTabBtn")[i].classList.contains("tabActives");
    if (!classActive) {
      jQuery(".wayTabBtn").removeClass("tabActives");
      document.getElementsByClassName("wayTabBtn")[i].classList.add("tabActives")
      this.setState({
        ...this.state,
        propsText : this.state.wayText[i].text
      })
    }
  }
  render() {
    return(
      <div className="customContainer">
        <div className="titleWrapper">
          <h1 className="sectionTitles blueTxt avenir_bold">DBRAND Way</h1>
        </div>
        <div className="sectionText">
          <p>우리는 <span className="pointTxt">이러한 방식</span>으로 일합니다.</p>
        </div>
        <div className="sectionTabSection">
          <ul className="sectionTabBtnList clear">
          {this.state.wayTitle.map((wayTitles, i)=>(
            <li className="sectionTabBtnItems" key={i}>
              <button
                className={i === 0 ? "sectionTabButton wayTabBtn tabActives" : "sectionTabButton wayTabBtn"}
                onClick={(e) => this.textHandle(i)}
              ><span>{wayTitles.title}</span></button>
            </li>
          ))}
          </ul>
          <WayText 
            WayText={this.state.propsText}
          />
        </div>
      </div>
    )
  }
}
class WayText extends Component {
  render() {
    return (
      <div className="tabText">
        <p className="tabTextConts" dangerouslySetInnerHTML={{__html: this.props.WayText}}></p>
      </div>
    )
  }
}
class Wedo extends Component {
  constructor(props) {
    super(props);
    this.textHandle= this.textHandle.bind(this);
    this.state = {
      wedoTitle : [
        {
          title : "브랜드다움<br> 만들기",
          sub : "Identity",
          text : "아이덴티티 지향이미지 시각화<br><br>"
        },
        {
          title : "브랜드경험<br> 통합디자인",
          sub : "Brand eXperience",
          text : "일관된 디자인으로<br> 온/오프라인 통합적 브랜딩"
        },
        {
          title : "브랜드<br> 유지관리",
          sub : "Design Quality Control",
          text : "전사적 BX관리<br><br>"
        }
      ],
      wedoConts : [
        [
          {
            category : "아이덴티티 디자인",
            subCategory : "Identity Design"
          },
          {
            category : "아이덴티티 활성화",
            subCategory : "Identity Revitalization"
          },
          {
            category : "아이덴티티 가이드라인",
            subCategory : "Identity Manual & Guideline"
          },
          {
            category : "브랜드 네이빙 및 정체성",
            subCategory : "Naming & Varbal Identity"
          },
          {
            category : "브랜드 정체성",
            subCategory : "Brand Identity"
          },
          {
            category : "기업 정체성",
            subCategory : "Corporate Identity"
          },
          {
            category : "미션 및 비전",
            subCategory : "Mission & vision"
          },
          {
            category : "혁신적인 아이디어",
            subCategory : "Innovation Idea"
          }
        ],
        [
          {
            category : "웹 사이트 / 모바일",
            subCategory : "Website / Mobile"
          },
          {
            category : "사용자 인터페이스",
            subCategory : "UI / UX"
          },
          {
            category : "아이덴티티 어플리케이션",
            subCategory : "Identity Application"
          },
          {
            category : "편집 디자인",
            subCategory : "Editorial Design"
          },
          {
            category : "패키지 디자인",
            subCategory : "Package Design"
          },
          {
            category : "제품 디자인",
            subCategory : "Product Design"
          },
          {
            category : "광고 디자인",
            subCategory : "Advertising Design"
          },
          {
            category : "공간 디자인 / 전시 디자인",
            subCategory : "Space Design / Exhibition Design"
          },
          {
            category : "서비스 디자인",
            subCategory : "Service Design"
          },
          {
            category : "인터랙티브 및 새로운 미디어",
            subCategory : "Interactive & New Media"
          }
          
        ],
        [
          {
            category : "브랜드 유지 보수",
            subCategory : "Brand Maintenance"
          },
          {
            category : "캠페인",
            subCategory : "Campaign"
          },
          {
            category : "사보",
            subCategory : "House organ"
          },
          {
            category : "인쇄 서비스",
            subCategory : "Print Service"
          },
          {
            category : "인하우스 디자인 롤",
            subCategory : "In house Design roll"
          },
          {
            category : "디자인 전략",
            subCategory : "Design Strategy"
          }
        ]
      ],
      propsText: [
        {
          category : "아이덴티티 디자인",
          subCategory : "Identity Design"
        },
        {
          category : "아이덴티티 활성화",
          subCategory : "Identity Revitalization"
        },
        {
          category : "아이덴티티 가이드라인",
          subCategory : "Identity Manual & Guideline"
        },
        {
          category : "브랜드 네이빙 및 정체성",
          subCategory : "Naming & Varbal Identity"
        },
        {
          category : "브랜드 정체성",
          subCategory : "Brand Identity"
        },
        {
          category : "기업 정체성",
          subCategory : "Corporate Identity"
        },
        {
          category : "미션 및 비전",
          subCategory : "Mission & vision"
        },
        {
          category : "혁신적인 아이디어",
          subCategory : "Innovation Idea"
        }
      ]
    }
  }
  textHandle(i) {
    let classActive = document.getElementsByClassName("weDoTabBtn")[i].classList.contains("tabActives");
    if (!classActive) {
      jQuery(".weDoTabBtn").removeClass("tabActives");
      document.getElementsByClassName("weDoTabBtn")[i].classList.add("tabActives");
      this.setState({
        ...this.state,
        propsText : this.state.wedoConts[i]
      })
    }
  }
  render() {
    const params = {
      slidesPerView: 3
    }
    return(
      <div className="customContainer">
        <div className="titleWrapper">
          <h1 className="sectionTitles blueTxt avenir_bold">What we do</h1>
        </div>
        <div className="sectionText">
          <p>우리는 <span className="pointTxt">기업의 가치</span>를 <span className="pointTxt">증대</span>시킬<br />강력한 무기를 만들어 내고 있습니다.</p>
        </div>
        <div className="sectionBtns">
          <Link to="/work"><span className="btnTxt">Go to Work</span><span className="btnArr"><img src="http://www.dbrand.co.kr/bbs/img/btnArr.png" alt=""/></span></Link>
        </div>
        <div className="sectionTabSection">
          <div className="sectionTabBtnList">
            <Swiper className="clear" {...params}>
            {this.state.wedoTitle.map((wedoTitles, i)=>(
              <div className="sectionTabBtnItems" key={i}>
                <button
                  className={i === 0 ? "sectionTabButton weDoTabBtn tabActives" : "sectionTabButton weDoTabBtn"}
                  onClick={(e) => this.textHandle(i)}
                >
                  <div>
                    <span className="sectionTabTitle" dangerouslySetInnerHTML={{__html: wedoTitles.title}} />
                    <span className="sectionTabCate" dangerouslySetInnerHTML={{__html: wedoTitles.sub}} />
                    <span className="sectionTabCateTxt" dangerouslySetInnerHTML={{__html: wedoTitles.text}} />
                  </div>
                </button>
              </div>
            ))}
            </Swiper>
            <WedoText 
              wedoText={this.state.propsText}
            />
          </div>
        </div>
      </div>
    )
  }
}
class WedoText extends Component {
  render() {
    return(
      <div className="tabText">
        <div className="tabTextConts">
          <div className="tabTextContLists clear">
          {this.props.wedoText.map((wedos, i) => (
            <div className="tabtextContsItems" key={i}>
              <p>{wedos.category}</p>
              <span>{wedos.subCategory}</span>
            </div>
          ))}
          </div>
        </div>
      </div>
    )
  }
}
export default About;