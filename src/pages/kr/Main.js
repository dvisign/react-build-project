import React, { Component } from 'react';
import Mainslider from 'components/main/Mainslider';
import WorkLayout from 'components/main/WorkLayout';
import ContactLayout from 'components/main/ContactLayout'
import ScrollAnimation from 'react-animate-on-scroll';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'css/main.scss';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages : "main"
    }
  }
  componentDidMount() {
    this.callbackFunc();
    document.title = 'DBRAND';
  }
  callbackFunc = () => {
    this.props.addSomething(this.state.pages)
  }
  render() {
    const hostName = window.location.hostname;
    return (
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <Mainslider 
          bo_table="mainslider"
          status="main"
          host={hostName} 
        />
        <div className="paraSections"></div>
        <div className="indexContents">
        <WorkLayout 
          bo_table="work"
          status="list"
          titles="Work"
          host={hostName}
        />
        <ContactLayout />
        </div>
      </ScrollAnimation>
    )
  }
}
export default Main;