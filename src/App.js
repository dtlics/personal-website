import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { enquireScreen } from 'enquire-js';
import { Header } from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

// import {
//   Nav31DataSource
//   // Footer00DataSource,
// } from "./components/NavBar/data.source.js";

class App extends Component {
  constructor(props) {
    super(props);
    let isMobile;
    enquireScreen((b) => {isMobile = !!b});
    this.state = {isMobile};
  }
  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
  }
  render() {
    // console.log(this.state.isMobile);
    return (
      <Router>
        <div>
          <Header isMobile={this.state.isMobile} />
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;