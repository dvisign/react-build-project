import React, { Component } from 'react';
import Nav from 'components/Nav';
import Footer from 'components/Footer';
import { Route } from 'react-router-dom';
import { Main, About, Work, Life, Contact } from 'pages/kr';
import "animate.css/animate.min.css";


class App extends Component {
  
  render() {
    return(
      <div className="wrapper">
        <Nav />
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
