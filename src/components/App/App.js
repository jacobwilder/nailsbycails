import React from 'react';
//import ReactRouter from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Home from '../Home';
import Contact from '../Contact';
import About from '../About';
import Portfolio from '../Portfolio';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route
              render={function() {
                return <p>Page Not Found</p>;
              }}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
