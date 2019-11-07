import React, { Component } from 'react';
import Mainslider from '../../components/main/Mainslider';
import WorkLayout from '../../components/main/WorkLayout';
import ContactLayout from '../../components/main/ContactLayout'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'css/main.css';

class Main extends Component {
  UNSAFE_componentWillMount() {
    this.addHtmlClass();
  }
  componentWillUnmount() {
    this.removeHtmlClass();
  }
  addHtmlClass = () => {
    document.getElementsByTagName('html')[0].classList.add("main")
    console.log(this.props.match.url);
  }
  removeHtmlClass = () => {
    document.getElementsByTagName('html')[0].classList.remove("main")
  }
  render() {
    const hostName = window.location.hostname;
    return (
      <div>
        <Mainslider 
          bo_table="mainslider"
          status="main"
          host={hostName} 
        />
        <WorkLayout 
          bo_table="work"
          status="list"
          titles="Work"
          host={hostName}
        />
        <ContactLayout 
          
        />
      </div>
    )
  }
}
export default Main;