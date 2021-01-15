import React, { Component } from 'react'
import GridDemo from './components/GridDemo/GridDemo';
import Home from './pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Search from './pages/Search/Search';

interface Props {
  
}

interface State {
  
}

export default class App extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div className="app">
        {/* <GridDemo /> */}
        {/* Home page the one you search*/}
        {/*SearchPage (the results page)*/}


        <Router>
          <Switch>
            
            <Route exact path="/search">
              <Search />
            </Route>
            
            <Route exact path="/">
              <Home />
            </Route>

          </Switch>
        </Router>
        
      </div>
    )
  }
}

