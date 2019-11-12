import React, { Component } from 'react';


class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages : "about"
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
        about
      </div>
    )
  }
}

export default About;