import React, { Component } from 'react';
import Mainslider from '../../components/main/Mainslider';
import WorkLayout from '../../components/main/WorkLayout';
import ContactLayout from '../../components/main/ContactLayout'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'css/main.css';

class Main extends Component {
  componentWillMount() {
    this.addHtmlClass();
  }
  componentWillUnmount() {
    this.removeHtmlClass();
  }
  addHtmlClass = () => {
    document.getElementsByTagName('html')[0].classList.add("main")
  }
  removeHtmlClass = () => {
    document.getElementsByTagName('html')[0].classList.remove("main")
  }
  render() {
    return (
      <div>
        <Mainslider 
          bo_table="mainslider"
          status="main" 
        />
        <WorkLayout 
          bo_table="work"
          status="list"
          titles="Work"
        />
        <ContactLayout 
          
        />
      </div>
    )
  }
}
export default Main;