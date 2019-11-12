import React, { Component } from 'react'

class Life extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages : "life"
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
        life
      </div>
    )
  }
}

export default Life;