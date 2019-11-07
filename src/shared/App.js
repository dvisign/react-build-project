import React, { Component } from 'react';
import Nav from 'components/Nav';
import Footer from 'components/Footer';
import { Route } from 'react-router-dom';
import { Main, About, Work, Life, Contact } from 'pages/kr';
import Logo from 'img/dbrand_logo.png';
import LogoOn from 'img/dbrand_logo_on.png';
import "animate.css/animate.min.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoImg : Logo,
      navActive : ""
    }
  }
  UNSAFE_componentWillMount(){
    window.addEventListener('scroll', this.onScroll);
  }
  onScroll = (e) => {
    const nowPos = ('scroll', e.srcElement.scrollingElement.scrollTop);
    const htmlClass = document.getElementsByTagName("html")[0].classList;
    if (htmlClass.contains('main')) {
      if (nowPos > 0) {
        this.setState({
          logoImg : LogoOn,
          navActive : "navScrollOn"
        })
      } else {
        this.setState({
          logoImg : Logo,
          navActive : ""
        })
      }
    } else {
      this.setState({
        logoImg : LogoOn,
        navActive : "navScrollOn"
      })
    }
  };
  render() {
    return(
      <div className="wrapper">
        <Nav 
          logo={this.state.logoImg} 
          navActive = {this.state.navActive}
        />
        <div className="pageContents">
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/life" component={Life} />
          <Route path="/contact" component={Contact} />
        </div>
        <Footer 
        
        />
      </div>
    )
  }
}

export default App;
