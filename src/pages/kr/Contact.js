import React, { Component } from 'react'

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages : "contact"
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
        contact
      </div>
    )
  }
}

export default Contact;