import React, { Component } from 'react';
import Nav from './components/Nav';
import { Route } from 'react-router-dom';
import { Main, About, Work, Life, Contact } from 'pages';

class App extends Component {
  render() {
    return(
      <div className="wrapper">
        <Nav />
        <div>
          <Route exact path="/" component={Main} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Work" component={Work} />
          <Route exact path="/Life" component={Life} />
          <Route exact path="/Contact" component={Contact} />
        </div>
      </div>
    )
  }
}

export default App;
