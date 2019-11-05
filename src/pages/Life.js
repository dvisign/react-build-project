import React, { Component } from 'react'

class Life extends Component {
  componentDidMount() {
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