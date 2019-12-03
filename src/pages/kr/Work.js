import React, { Component } from 'react'
// import ScrollAnimation from 'react-animate-on-scroll';
import WorkContain from 'components/work/WorkContain';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import "css/work.scss";

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages : "work"
    };
  }
  componentDidMount() {
    this.callbackFunc();
  }
  callbackFunc = () => {
    this.props.addSomething(this.state.pages);
  }
  querys = () => {
    const query = queryString.parse(this.props.props.location.search);
    return query;
  }
  render() {
    return (
      // ScrollAnimation animateIn="fadeIn" animateOnce={true}
      <div id="works">
        <div className="customContainer">
          <WorkNav 
            tabData = {this.querys()}
          />
          <WorkContain
            tabData = {this.querys()}
          />
        </div>
      </div>
    )
  }
}
class WorkNav extends Component {
  render() {
    const isActive = this.props.tabData.bo_table;
    return(
      <ul id="workNavs" className="clear">
        <li>
          <Link className={isActive === "all" ? "tabActive avenir_medium" : "avenir_medium"} to="/react/Work/?status=work&bo_table=all">All Project</Link>
        </li>
        <li>
          <Link className={isActive === "work" ? "tabActive avenir_medium" : "avenir_medium"} to="/react/Work/?status=work&bo_table=work">Type of Work</Link>
        </li>
        <li>
          <Link className={isActive === "industry" ? "tabActive avenir_medium" : "avenir_medium"} to="/react/Work/?status=work&bo_table=industry">Type of Industry</Link>
        </li>
      </ul>
    )
  }
}

export default Work;