import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

class ContactLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points : [
        {
          pointTime : "00:00:00",
          pointName : "Songdo",
          pointAddress : "Incheon Yeonsu-gu Songdogwahak-ro32<br> Songdo Techno Park IT Center",
          pointTel : "02.1544.0218",
          let : "37.380596",
          lang : "126.6567071"
        },
        {
          pointTime : "00:00:00",
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
  render() {
    setInterval(() => {
      document.getElementById("timeZone0").innerHTML = this.timeCount(+9);
      document.getElementById("timeZone1").innerHTML = this.timeCount(+2);
    }, 1000);
    return (
      <div id="indexContact">
        <div className="customContainer">
          <div id="contactTitle">
            <h1 className="avenir_bold">Hello</h1>
            <p className="avenir_heavy">What brings you here?</p>
          </div>
          <div id="pointAdd" className="clear">
            {this.state.points.map((pointInfo, i) => (
              <div>
                <div className="times">
                  <span id={"timeZone"+ i } className="timeZone avenir_heavy">{pointInfo.pointTime}</span>
                </div>
                <div className="pointName">
                  <span class="pointLogo"></span><span class="avenir_heavy">{pointInfo.pointName}</span>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
export default ContactLayout;