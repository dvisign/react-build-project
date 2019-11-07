import React, { Component } from 'react'

class About extends Component {
  UNSAFE_componentWillMount() {
    this.addHtmlClass();
  }
  componentWillUnmount() {
    this.removeHtmlClass();
  }
  addHtmlClass = () => {
    document.getElementsByTagName('html')[0].classList.add("about")
  }
  removeHtmlClass = () => {
    document.getElementsByTagName('html')[0].classList.remove("about")
  }
  render() {
    return (
      <div>
        we are
      </div>
    )
  }
}

export default About;