import React, { Component } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Route } from 'react-router-dom';
import { Main, About, Work, Life, Contact } from 'pages';
import Logo from './img/dbrand_logo.png';
import LogoOn from './img/dbrand_logo_on.png';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoImg : Logo,
      navActive : ""
    }
  }
  componentDidMount(){
    // 스크롤 이벤트 적용
    window.addEventListener('scroll', this.onScroll);
  }
  onScroll = (e) => {
    // 스크롤 할때마다 state에 scroll한 만큼 scrollTop 값 증가하므로 이를 업데이트해줌, 
    //따라서 스크롤 시점에 따라 특정액션을 추후에 state를 활용하여 구현 가능
    const nowPos = ('scroll', e.srcElement.scrollingElement.scrollTop);
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
          <Route path="/About" component={About} />
          <Route path="/Work" component={Work} />
          <Route path="/Life" component={Life} />
          <Route path="/Contact" component={Contact} />
        </div>
        <Footer 
        
        />
      </div>
    )
  }
}

export default App;
