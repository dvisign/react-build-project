import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import WorkContain from 'components/work/WorkContain';
import "css/work.scss";

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages : "work",
      dataGroup : []
    }
  }
  componentDidMount() {
    this.callbackFunc();
  }
  callbackFunc = () => {
    this.props.addSomething(this.state.pages);
  }
  render() {
    return (
      // ScrollAnimation animateIn="fadeIn" animateOnce={true}
      <div>
        <div id="works">
          <div className="customContainer">
            <WorkContain
              data={this.props.props}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Work;