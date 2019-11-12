import React, { Component } from 'react';
import Nav from 'components/Nav';
import Footer from 'components/Footer';
import { Route } from 'react-router-dom';
import { Main, About, Work, Life, Contact } from 'pages/kr';
import "animate.css/animate.min.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages : "main"
    }
  }
  addSomething(stateValueFromChild) {
    if (this.state.pages !== stateValueFromChild) {
      this.setState({
        pages: stateValueFromChild
      });
    }
    let btnEl = document.getElementById("hamburgersBtn");
    let slideNav = document.getElementById("fixNavs");
    let htmlDom = document.getElementsByTagName("html")[0];
    btnEl.classList.remove("mNavActive");
    slideNav.classList.remove("mNavActive");
    htmlDom.style.overflow = "auto";
  }
  render() {
    return(
      <div className="wrapper">
        <Nav 
          pages={this.state.pages}
        />
        <div className="pageContents" >
          <Route exact path="/" render={props => <Main addSomething={(stateValueFromChild) => this.addSomething(stateValueFromChild)} />} />
          <Route path="/about" render={props => <About addSomething={(stateValueFromChild) => this.addSomething(stateValueFromChild)} />} />
          <Route path="/work" render={props => <Work addSomething={(stateValueFromChild) => this.addSomething(stateValueFromChild)} />} />
          <Route path="/life" render={props => <Life addSomething={(stateValueFromChild) => this.addSomething(stateValueFromChild)} />} />
          <Route path="/contact" render={props => <Contact addSomething={(stateValueFromChild) => this.addSomething(stateValueFromChild)} />} />
        </div>
        <Footer 
        
        />
      </div>
    )
  }
}
export default App;
