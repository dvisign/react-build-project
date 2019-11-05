import React, { Component } from 'react'

class Contact extends Component {
  componentDidMount() {
    this.addHtmlClass();
  }
  componentWillUnmount() {
    this.removeHtmlClass();
  }
  addHtmlClass = () => {
    document.getElementsByTagName('html')[0].classList.add("contact")
  }
  removeHtmlClass = () => {
    document.getElementsByTagName('html')[0].classList.remove("contact")
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