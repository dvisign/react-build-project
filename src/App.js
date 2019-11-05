import React, { Component } from 'react';
import Nav from './components/Nav';
import { Route } from 'react-router-dom';
import { Main, About, Work, Life, Contact } from 'pages';

class App extends Component {
  render() {
    return(
      <div className="wrapper">
        <Nav />
        <div className="pageContents">
          <Route exact path="/" component={Main} />
          <Route path="/About" component={About} />
          <Route path="/Work" component={Work} />
          <Route path="/Life" component={Life} />
          <Route path="/Contact" component={Contact} />
        </div>
      </div>
    )
  }
}

export default App;
