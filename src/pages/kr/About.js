import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css'
import 'css/about.scss';
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
    document.title = 'DBRAND We Are';
  }
  componentWillUnmount() {
    window.removeEventListener('scroll',this.scrollEvent, false)
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
              <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                <div className="titleWrapper">
                  <h1 className="sectionTitles blueTxt avenir_bold">Hello</h1>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp" delay={300} animateOnce={true}>
                <div className="sectionText">
                  <p>우리는 이렇게 생각합니다.</p>
                  <p><span className="pointTxt">디자인</span>은 문제를 해결하는 <span className="pointTxt">솔루션</span>이며<br /><span className="pointTxt"> 브랜드</span>는 <span className="pointTxt">자기다움</span>을 만드는 일이라고.<br/>우리는 디자인과 브랜딩을 함께 고민합니다.</p>
                </div>
              </ScrollAnimation>
            </div>
          </article>
          <article id="missions" className="articles">
            <div className="customContainer">
              <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                <div className="titleWrapper">
                  <h1 className="sectionTitles blueTxt avenir_bold">DBRAND Mission</h1>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp" delay={300} animateOnce={true}>
                <div className="sectionText">
                  <p className="pointTxt">우리는 디자인을 통해 강력한 무기를 만듭니다.</p>
                  <p>시장을 상대해야 하는 고객들에게 기업 브랜딩을<br/> 통해 제품 및 서비스의 가치를 높일 수 있는<br/> 강력한 디자인 무기를 만듭니다.</p>
                </div>
                <div className="sectionBtns">
                  <Link to="/work"><span className="btnTxt">Go to Work</span><span className="btnArr"><img src="http://www.dbrand.co.kr/bbs/img/btnArr.png" alt=""/></span></Link>
                </div>
              </ScrollAnimation>
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
              <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                <div className="titleWrapper">
                  <h1 className="sectionTitles blueTxt avenir_bold">DBRAND Pro</h1>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp" delay={300} animateOnce={true}>
                <div className="sectionText">
                  <p><span className="pointTxt">수평적인 커뮤니케이션</span>을 위해 직급 구분없이<br /> 디브랜더의 프로페셔널한 정신을 의미하는<br /> Professional의 ‘Pro’를 사용합니다.<br /> 효율적인 디자인 협업 환경을 만들고자<br /> <span className="pointTxt">Smart work</span>를 통해 자유롭게 의견을 공유하고<br /> 즉각적으로 피드백을 수용합니다.</p>
                </div>
                <div className="sectionBtns">
                  <Link to="/life"><span className="btnTxt">Go to Life</span><span className="btnArr"><img src="http://www.dbrand.co.kr/bbs/img/btnArr.png" alt=""/></span></Link>
                </div>
              </ScrollAnimation>
            </div>
          </article>
          <article className="sliderImgs">
            <div className="fixedLayouts">
              <FixSlide2 />
            </div>
            <div className="viewLayouts"></div>
          </article>
          <article id="squads" className="articles">
            <div className="customContainer">
              <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                <div className="titleWrapper">
                  <h1 className="sectionTitles blueTxt avenir_bold">Squad</h1>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp" delay={300} animateOnce={true}>
                <div className="sectionText">
                  <p>최상의 결과를 위한 우리의 스쿼드는<br /><span className="pointTxt">각 분야의 전문가</span>들로 구성되어 있습니다.</p>
                </div>
                <SquadList />
              </ScrollAnimation>
            </div>
          </article>
          <article id="exp" className="articles">
            <div className="customContainer">
              <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                <div className="titleWrapper">
                  <h1 className="sectionTitles blueTxt avenir_bold">Experience</h1>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp" delay={300} animateOnce={true}>
                <div className="sectionText">
                  <p><span className="pointTxt">14년간 디자인과 브랜드 고민<br/>다양한 산업군 다양한 프로젝트 경험<br/></span>우리는 앞으로 더 많은것을 경험하고 싶습니다.</p>
                </div>
                <TimeCount />
                <div className="sectionBtns">
                  <Link to="/react/Work"><span className="btnTxt">Go to Work</span><span className="btnArr"><img src="http://www.dbrand.co.kr/bbs/img/btnArr.png" alt=""/></span></Link>
                </div>
              </ScrollAnimation>
            </div>
          </article>
          <article id="clients" className="articles">
            <div className="customContainer">
              <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                <div className="titleWrapper">
                  <h1 className="sectionTitles blueTxt avenir_bold">Clients</h1>
                </div>
              </ScrollAnimation>
            </div>
            <ScrollAnimation animateIn="fadeInUp" delay={300} animateOnce={true}>
              <Clients />
              <div className="customContainer">
                  <div className="sectionBtns">
                    <Link to="/react/Work"><span className="btnTxt">Go to Work by Industry</span><span className="btnArr"><img src="http://www.dbrand.co.kr/bbs/img/btnArr.png" alt=""/></span></Link>
                  </div>
              </div>
            </ScrollAnimation>
          </article>
          <Offices/>
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
      document.getElementsByClassName("wayTabBtn")[i].classList.add("tabActives");
      jQuery("#wayText").stop().animate({
        "opacity":"0"
      },500);
      setTimeout(
        function() {
          this.setState({
            ...this.state,
            propsText : this.state.wayText[i].text
          })
        }
        .bind(this),
        500
      )
    }
  }
  componentDidUpdate() {
    jQuery("#wayText").stop().animate({
      "opacity":"1"
    },500);
  }
  render() {
    return(
      <div className="customContainer">
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
          <div className="titleWrapper">
            <h1 className="sectionTitles blueTxt avenir_bold">DBRAND Way</h1>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={300} animateOnce={true}>
          <div className="sectionText">
            <p>우리는 <span className="pointTxt">이러한 방식</span>으로 일합니다.</p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={300} animateOnce={true}>
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
            <div id="wayText">
              <WayText 
                WayText={this.state.propsText}
              />
            </div>
          </div>
        </ScrollAnimation>
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
      jQuery("#wedoText").stop().animate({
        "opacity":"0"
      },500);
      setTimeout(
        function() {
          this.setState({
            ...this.state,
            propsText : this.state.wedoConts[i]
          })
        }
        .bind(this),
        500
      )
    }
  }
  componentDidUpdate() {
    jQuery("#wedoText").stop().animate({
      "opacity":"1"
    },500);
  }
  render() {
    const params = {
      slidesPerView: 3,
      freeMode: true,
    }
    return(
      <div className="customContainer">
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
          <div className="titleWrapper">
            <h1 className="sectionTitles blueTxt avenir_bold">What we do</h1>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={300} animateOnce={true}>
          <div className="sectionText">
            <p>우리는 <span className="pointTxt">기업의 가치</span>를 <span className="pointTxt">증대</span>시킬<br />강력한 무기를 만들어 내고 있습니다.</p>
          </div>
          <div className="sectionBtns">
            <Link to="/work"><span className="btnTxt">Go to Work</span><span className="btnArr"><img src="http://www.dbrand.co.kr/bbs/img/btnArr.png" alt=""/></span></Link>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={300} animateOnce={true}>
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
              <div id="wedoText">
                <WedoText 
                  wedoText={this.state.propsText}
                />
              </div>
            </div>
          </div>
        </ScrollAnimation>
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
class SquadList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squadInfo : 
      [
        {
          squads : "Service<br> Design",
          position : "PACO",
          nation : "Italy",
          url : "www.pacollaborative.com"
        },
        {
          squads : "Architecure /<br> Space Design",
          position : "CSMA",
          nation : "Italy",
          url : "centrostilemilano.it"
        },
        {
          squads : "Design<br> collaboration",
          position : "MJD Studio",
          nation : "Milan",
          url : "www.michijung.com"
        },
        {
          squads : "Vehicle Engineering<br> Design",
          position : "UGP",
          nation : "Korea",
          url : "ugpdesign.co.kr"
        },
        {
          squads : "Culture<br> Organazation",
          position : "Callia",
          nation : "Korea",
          url : "www.calliacm.com"
        },
        {
          squads : "Medical Market Analysis/<br> Product Analysis",
          position : "MEDMIX",
          nation : "Korea",
          url : "medmix.co.kr"
        },
        {
          squads : "Brand Strategy /<br> Brand Positioning",
          position : "Julian Whang",
          nation : "Korea / USA",
          url : ""
        },
        {
          squads : "Electric Vehicle<br> R&D",
          position : "Mj2",
          nation : "Korea",
          url : ""
        }
      ]
    }
  }
  render() {
    const params = {
      slidesPerView: 1,
      freeMode: true,
    } 
    const rows = [];
    for (var index = 0; index < this.state.squadInfo.length; index++) {
      rows.push(
        index % 2 === 0 ?
        <div key={index} className="squadItems">
          <div>
            <div className="squadPosition avenir_bold" dangerouslySetInnerHTML={{__html: this.state.squadInfo[index].squads}} />
            <div className="squadName avenir_medium">
              {this.state.squadInfo[index].position}
            </div>
            <div className="squadNation avenir_nomal">
              {this.state.squadInfo[index].nation}
            </div>
            {this.state.squadInfo[index].url !== "" ?
            <div className="sectionBtns">
              <a href={"http://"+this.state.squadInfo[index].url} target="_blank" rel="noopener noreferrer">
                <span className="btnTxt">{this.state.squadInfo[index].url}</span>
                <span className="btnArr"><img src="http://www.dbrand.co.kr/bbs/img/btnArr.png" alt=""/></span>
              </a>
            </div>
            :
            <div><br/><br/></div>
            }
          </div>
          <div>
            <div className="squadPosition avenir_bold" dangerouslySetInnerHTML={{__html: this.state.squadInfo[index+1].squads}} />
            <div className="squadName avenir_light">
              {this.state.squadInfo[index+1].position}
            </div>
            <div className="squadNation avenir_nomal">
              {this.state.squadInfo[index+1].nation}
            </div>
            {this.state.squadInfo[index+1].url !== "" ? 
            <div className="sectionBtns">
              <a href={"http://"+this.state.squadInfo[index+1].url} target="_blank" rel="noopener noreferrer">
                <span className="btnTxt">{this.state.squadInfo[index+1].url}</span>
                <span className="btnArr"><img src="http://www.dbrand.co.kr/bbs/img/btnArr.png" alt=""/></span>
              </a>
            </div>
            :
            <div><br/><br/></div>
            }
          </div>
        </div>
        :
        ""
      ) 
    }
    return(
      <Swiper {...params}>
        <div id="squadLists" className="clear">
          {rows}
        </div>
      </Swiper>
    )
  }
}
class TimeCount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expTime : "<span>00000</span>:<span>00</span>:<span>00</span>:<span>000</span>"
    }
  }
  date_format = (n, digits) => {
    var zero = '';
    n = n.toString();
    if (n.length < digits) {
      zero += '0';
    }
    return zero + n;
  }
  setTimes = () => {
    var targetTime = new Date("4/30/2005");
    var today = new Date();
    var resY = Math.abs((today.getFullYear() - targetTime.getFullYear()) * 8760);
    var resMon = Math.abs((today.getMonth() - targetTime.getMonth()) * 30 * 24);
    var resD = Math.abs((today.getDate() - targetTime.getDate()) * 24);
    var resH = Math.abs(today.getHours() - targetTime.getHours());
    var resM = Math.abs(today.getMinutes() - targetTime.getMinutes());
    var resS = Math.abs(today.getSeconds() - targetTime.getSeconds());
    var resMS = Math.abs(today.getMilliseconds() - targetTime.getMilliseconds());
    var result = "<span>"+ parseInt(resY + resMon + resD + resH) +"</span>:";
    result += "<span>"+this.date_format(resM, 2)+"</span>:";
    result += "<span>"+this.date_format(resS, 2)+"</span><span id='hidden'>:";
    result += "<span>"+this.date_format(resMS, 3)+"</span></span>";
    return result;
  }
  timeInit = () => {
    this.interval = setInterval(()=>{
      this.setState({
        expTime : this.setTimes()
      })
    })
  }
  componentDidMount() {
    this.timeInit();
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div>
        <p id="timeIsSet" dangerouslySetInnerHTML={{__html: this.state.expTime}} />
      </div>
    )
  }
}
class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgArr : [ 
        {
          "logos1":"5678", 
          "logos2":"aceluxe", 
          "logos3":"agenell",
          "logos4":"allthatcoffee",
        },
        {
          "logos1":"AON",
          "logos2":"asiangame", 
          "logos3":"Audi", 
          "logos4":"Benz",
        },
        {
          "logos1":"blue",
          "logos2":"BMW",
          "logos3":"callia",
          "logos4":"CLESON",
        },
        {
          "logos1":"cosmetic",
          "logos2":"cptape",
          "logos3":"CTR",
          "logos4":"cymetal",
        },
        {
          "logos1":"designcamp",
          "logos2":"DLF",
          "logos3":"EDA",
          "logos4":"edujoy",
        },
        {
          "logos1":"foodworld",
          "logos2":"GABA",
          "logos3":"Greenk",
          "logos4":"groon",
        },
        {
          "logos1":"GWGP",
          "logos2":"han",
          "logos3":"himbook",
          "logos4":"idfa",
        },
        {
          "logos1":"incheon",
          "logos2":"imberry",
          "logos3":"incheonosealforum",
          "logos4":"incheonT",
        },
        {
          "logos1":"innertron",
          "logos2":"iworks",
          "logos3":"king",
          "logos4":"korass",
        },
        {
          "logos1":"KT",
          "logos2":"L7",
          "logos3":"maxboard",
          "logos4":"MINI",
        },
        {
          "logos1":"Mlink",
          "logos2":"mnf24",
          "logos3":"movata",
          "logos4":"myspeech",
        },
        {
          "logos1":"neost",
          "logos2":"Next",
          "logos3":"nuvovo",
          "logos4":"NYnexmo",
        },
        {
          "logos1":"Park61",
          "logos2":"Peugeot",
          "logos3":"PI",
          "logos4":"PKB",
        },
        {
          "logos1":"plainbiz",
          "logos2":"PnP",
          "logos3":"provision",
          "logos4":"queens",
        },
        {
          "logos1":"RIPC",
          "logos2":"ris",
          "logos3":"SAMSUNG",
          "logos4":"sekwang",
        },
        {
          "logos1":"shinilled",
          "logos2":"snc",
          "logos3":"SnG",
          "logos4":"spawin",
        },
        {
          "logos1":"store7",
          "logos2":"sugarberry",
          "logos3":"sungli",
          "logos4":"sunny",
        },
        {
          "logos1":"the",
          "logos2":"tiffany",
          "logos3":"tom",
          "logos4":"wallitaly",
        },
        {
          "logos1":"wiz",
          "logos2":"youngdonggagu",
          "logos3":"",
          "logos4":""
        }
      ]
    }
  }
  render() {
    const params = {
      slidesPerView: 8,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      freeMode: true,
    } 
    return(
      <div>
        <Swiper {...params}>
        {this.state.imgArr.map((imgArrs, i)=>(
          <div key={i}>
            {imgArrs.logos1 !== "" ?
            <div className="logoImgs">
              <img src={"http://www.dbrand.co.kr/bbs/img/client/"+imgArrs.logos1+".png"} alt=""/>
            </div>
            :
            ""
            }            
            {imgArrs.logos2 !== "" ?
            <div className="logoImgs">
              <img src={"http://www.dbrand.co.kr/bbs/img/client/"+imgArrs.logos2+".png"} alt=""/>
            </div>
            :
            ""
            }
            {imgArrs.logos3 !== "" ?
            <div className="logoImgs">
              <img src={"http://www.dbrand.co.kr/bbs/img/client/"+imgArrs.logos3+".png"} alt=""/>
            </div>
            :
            ""
            }
            {imgArrs.logos4 !== "" ?
            <div className="logoImgs">
              <img src={"http://www.dbrand.co.kr/bbs/img/client/"+imgArrs.logos4+".png"} alt=""/>
            </div>
            :
            ""
            }
          </div>
        ))}
        </Swiper>
      </div>
    )
  }
}
class Offices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgrounds : [
        "officeImg.jpg",
        "slideImgs2.jpg",
        "officeImg.jpg"
      ],
      backgroundPos : "kr",
      point : [
        {
          value : "kr",
          pointName : "Songdo",
          pointAddress : "Incheon Yeonsu-gu Songdogwahak-ro32<br> Songdo Techno Park IT Center",
          pointTel : "+82 2.1544.0218"
        },
        {
          value : "it",
          pointName : "Milano",
          pointAddress : "Via Giuseppe Ripamonti 137.<br> OPIFICIO. 20141. MILAN. ITALY",
          pointTel : "+39-339528172"
        }
      ]
    }
  }
  backChange = (pos) => {
    jQuery("#officeSlider").stop().animate({
      "opacity":"0"
    },500);
    jQuery(".officeInfoItems").removeClass("officeActive");
    document.getElementById("point_"+pos).classList.add("officeActive")
    setTimeout(
      function() {
        if (pos === "kr") {
          if (this.state.backgroundPos !== "kr") {
            this.setState({
              ...this.state,
              backgrounds : [
                "officeImg.jpg",
                "slideImgs2.jpg",
                "officeImg.jpg"
              ],
              backgroundPos : "kr"
            })
          }
        }
        if (pos === "it") {
          if (this.state.backgroundPos !== "it") {
            this.setState({
              ...this.state,
              backgrounds : [
                "slideImgs2.jpg",
                "slideImgs.jpg",
                "officeImg.jpg",
                "slideImgs.jpg"
              ],
              backgroundPos : "it"
            })
          }
        }
      }
      .bind(this),
      500
    )
  }
  componentDidUpdate() {
    jQuery("#officeSlider").stop().animate({
      "opacity":"1"
    },500);
  }
  render() {
    const params = {
      slidesPerView: 1,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      }
    }
    return(
      <article id="offices" className="sliderImgs">
        <div id="officeSlider">
          <div className="viewLayouts"></div>
          <div className="fixedLayouts">
            <Swiper {...params}>
            {this.state.backgrounds.map((backImg,i)=>(
              <div className="officeSlideItems" key={i} style={{backgroundImage:"url(http://www.dbrand.co.kr/bbs/img/"+backImg+")"}}></div>
            ))}
            </Swiper>
          </div>
        </div>
        <div className="customContainer">
          <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
            <div className="titleWrapper">
              <h1 className="sectionTitles pinkTxt avenir_bold">Office</h1>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={300} animateOnce={true}>
            <ul id="officeInfo">
            {this.state.point.map((points, i)=>(
              <li key={i}>
                <button className={points.value === "kr" ? "officeInfoItems officeActive" : "officeInfoItems"} id={"point_"+points.value} onClick={e => this.backChange(points.value)}>
                  <div>
                    <p className="officePoint avenir_heavy">{points.pointName}</p>
                  </div>
                  <div>
                    <p className="officeAddress avenir_light" dangerouslySetInnerHTML={{__html: points.pointAddress}}/>
                  </div>
                  <div>
                    <p className="officeTell">{points.pointTel}</p>
                  </div>
                </button>
              </li>
            ))}
            </ul>
            <div className="sectionBtns">
              <Link to="/react/Contact"><span className="btnTxt">Go to Contact</span><span className="btnArr"><img src="http://www.dbrand.co.kr/bbs/img/btnArr_w.png" alt=""/></span></Link>
            </div>
          </ScrollAnimation>
        </div>
      </article>
    )
  }
}
export default About;