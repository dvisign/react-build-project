import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import ScrollAnimation from 'react-animate-on-scroll';

class ContactLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points : [
        {
          pointTime : "",
          pointName : "Songdo",
          pointAddress : "Incheon Yeonsu-gu Songdogwahak-ro32<br> Songdo Techno Park IT Center",
          pointTel : "02.1544.0218",
          let : "37.380596",
          lang : "126.6567071"
        },
        {
          pointTime : "",
          pointName : "Milano",
          pointAddress : "Incheon Yeonsu-gu Songdogwahak-ro32<br> Songdo Techno Park IT Center",
          pointTel : "02.1544.0218",
          let : "37.380596",
          lang : "126.6567071"
        }
      ]
    }
  }
  timeCount = (offset) => {
    const now = new Date();
    const tz = now.getTime() + (now.getTimezoneOffset() * 60000) + (offset * 3600000);
    now.setTime(tz);
    var times = this.date_format(now.getHours(), 2) + ":";
    times += this.date_format(now.getMinutes(), 2) + ":";
    times += this.date_format(now.getSeconds(), 2);
    return times;
  }
  date_format = (n, digits) => {
    var zero = '';
    n = n.toString();
    if (n.length < digits) {
      zero += '0';
    }
    return zero + n;
  }
  timeInit() {
    this.setState({
      points : [
        {
          pointTime : this.timeCount(+9)
        },
        {
          pointTime : this.timeCount(+2)
        }
      ]
    })
  }
  componentDidMount() {
    setInterval(() => {
      this.timeInit();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(() => {
      this.timeInit();
    })
  }
  render() {
    return (
      <div id="indexContact">
        <div className="customContainer">
          <div id="contactTitle">
            <ScrollAnimation animateIn="fadeInUp">
              <h1 className="avenir_bold">Hello</h1>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay={250}>
              <p className="avenir_heavy">What brings you here?</p>
            </ScrollAnimation>
          </div>
          <div id="pointAdd" className="clear">
            {this.state.points.map((pointInfo, index) => (
              <ScrollAnimation animateIn="fadeInUp" delay={index*500} key={index}>
                <div className="times">
                  <span id={"timeZone"+ index } className="timeZone avenir_heavy">{pointInfo.pointTime}</span>
                </div>
                <div className="pointName">
                  <span className="pointLogo"></span><span className="avenir_heavy">{pointInfo.pointName}</span>
                </div>
                <div className="pointAddress">
                  <span className="avenir_light" dangerouslySetInnerHTML={{__html: pointInfo.pointAddress}}></span>
                </div>
                <div className="pointTel">
                  <span className="avenir_light">{pointInfo.pointTel}</span>
                </div>
                <div className="pointMap">
                  <a href={"https://www.google.com/maps/place/(%EC%A3%BC)%EB%94%94%EB%B8%8C%EB%9E%9C%EB%93%9C/@"+pointInfo.let+","+pointInfo.lang+"z/data=!3m1!4b1!4m5!3m4!1s0x357b7bdcffffffff:0x409a33f70cc51b6e!8m2!3d37.3814779!4d126.6631831?hl=ko"} target="blank"><FontAwesomeIcon icon={faMapMarkerAlt} />구글맵에서 보기</a>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
export default ContactLayout;