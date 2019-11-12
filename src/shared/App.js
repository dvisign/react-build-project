import React, { Component } from 'react';
import Nav from 'components/Nav';
import Footer from 'components/Footer';
import { Route, Switch } from 'react-router-dom';
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
          <Switch>
            <Route exact path="/work" render={props => <Work addSomething={(stateValueFromChild) => this.addSomething(stateValueFromChild)} />} />
            <Route path="/work/:abs" render={props => <Work addSomething={(stateValueFromChild) => this.addSomething(stateValueFromChild)} />} />
          </Switch>          
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
