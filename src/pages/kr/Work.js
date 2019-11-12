import React, { Component } from 'react'

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
    this.props.addSomething(this.state.pages)
  }
  render() {
    return (
      <div>
        work
      </div>
    )
  }
}

export default Work;