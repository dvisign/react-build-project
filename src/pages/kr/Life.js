import React, { Component } from 'react'

class Life extends Component {
  UNSAFE_componentWillMount() {
    this.addHtmlClass();
  }
  componentWillUnmount() {
    this.removeHtmlClass();
  }
  addHtmlClass = () => {
    document.getElementsByTagName('html')[0].classList.add("life")
  }
  removeHtmlClass = () => {
    document.getElementsByTagName('html')[0].classList.remove("life")
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