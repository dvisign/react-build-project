import React, { Component } from 'react'

class Work extends Component {
  componentDidMount() {
    this.addHtmlClass();
  }
  componentDidUnMount() {
    this.removeHtmlClass();
  }
  addHtmlClass = () => {
    document.getElementsByTagName('html')[0].classList.add("work")
  }
  removeHtmlClass = () => {
    document.getElementsByTagName('html')[0].classList.remove("work")
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