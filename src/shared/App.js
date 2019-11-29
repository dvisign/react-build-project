import React, { Component } from 'react';
import Nav from 'components/Nav';
import Footer from 'components/Footer';
import { Route, withRouter, Switch } from 'react-router-dom';
import { Main, About, Work, Life, Contact } from 'pages/kr';
import "animate.css/animate.min.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props,
      pages : "main"
    }
  }    

  addSomething(stateValueFromChild) {
    if (this.state.pages !== stateValueFromChild) {
      this.setState({
        ...this.props,
        pages: stateValueFromChild
      });
    }
  }
  render() {
    return(
      <div className="wrapper">
        <Nav 
          pages={this.state}
        />
        {/* <div className="pageContents">
          <Route exact path="/" component={Main}/>
          <Route path="/About" component={About}/>
          <Switch>
            <Route path="/work/:cateogy" component={Work}/>
            <Route path="/work" component={Work}/>
          </Switch>
          <Route path="/contact" component={Contact}/>
        </div> */}
        <div className="pageContents" >
          <Switch>
            <Route exact path="/react/work" render={props => <Work addSomething={(stateValueFromChild) => this.addSomething(stateValueFromChild)} />} />
            <Route exact path="/react/work/:name" render={props => <Work addSomething={(stateValueFromChild) => this.addSomething(stateValueFromChild)} />} />
          </Switch>
          <Route exact path="/react" render={props => <Main addSomething={(stateValueFromChild) => this.addSomething(stateValueFromChild)} />} />
          <Route path="/react/about" render={props => <About addSomething={(stateValueFromChild) => this.addSomething(stateValueFromChild)} />} />   
          
          <Route path="/react/life" render={props => <Life addSomething={(stateValueFromChild) => this.addSomething(stateValueFromChild)} />} />
          <Route path="/react/contact" render={props => <Contact addSomething={(stateValueFromChild) => this.addSomething(stateValueFromChild)} />} />
        </div>
        <Footer 
        
        />
      </div>
    )
  }
}
export default withRouter(App);
