import React, { Component } from 'react'
import WorkContain from 'components/work/WorkContain';

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages : "work"
    }
  }
  componentDidMount() {
    this.callbackFunc();
  }
  callbackFunc = () => {
    this.props.addSomething(this.state)
  }
  render() {
    return (
      <div style={{paddingTop:"100px"}}>
        <WorkContain />
      </div>
    )
  }
}

export default Work;