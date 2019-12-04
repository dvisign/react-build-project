import React, { Component } from 'react'
// import ScrollAnimation from 'react-animate-on-scroll';
import WorkList from 'components/board/WorkList';
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
  render() {
    const query = queryString.parse(this.props.props.location.search);
    return (
      // ScrollAnimation animateIn="fadeIn" animateOnce={true}
      <div id="works">
        <div className="customContainer">
          <WorkNav 
            tabData = {query}
          />
          <WorkList
            tabData = {query}
          />
        </div>
      </div>
    )
  }
}
class WorkNav extends Component {
  render() {
    const isActive = this.props.tabData.category;
    return(
      <ul id="workNavs" className="clear">
        <li>
          <Link className={isActive === "all" ? "tabActive avenir_medium" : "avenir_medium"} to="/react/Work/?status=work&category=all">All Project</Link>
        </li>
        <li>
          <Link className={isActive === "work" ? "tabActive avenir_medium" : "avenir_medium"} to="/react/Work/?status=work&category=work">Type of Work</Link>
        </li>
        <li>
          <Link className={isActive === "industry" ? "tabActive avenir_medium" : "avenir_medium"} to="/react/Work/?status=work&category=industry">Type of Industry</Link>
        </li>
      </ul>
    )
  }
}

export default Work;