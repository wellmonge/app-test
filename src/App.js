import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// using ES6 modules
import { BrowserRouter, Route, Link } from 'react-router-dom';

import clientScreen from "./components/clientScreen";
// import homeScreen from "./components/homeScreen";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Teste TJ</h1>
          <nav>
            {/* <Link to="/">Home</Link> */}
            <Link to="/client">Client</Link>
          </nav>
        </header>
      

        <div>
          <Route path="/client" component={clientScreen}/>
        </div>
        <div>

          {/* <Route path="/" component={homeScreen}/> */}
        </div>
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
