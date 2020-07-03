import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { enquireScreen } from "enquire-js";
import { Header } from "./components/Header";
import Home from "./components/Home";
import Loading from "./components/Loading";

import './App.css';

const NotFound = React.lazy(() => import("./components/NotFound"));
const Education = React.lazy(() => import("./components/Education"));
const Blog = React.lazy(() => import("./components/Blog"));
const Projects = React.lazy(() => import("./components/Projects"));
const Publications = React.lazy(() => import("./components/Publications"));

class App extends Component {
  constructor(props) {
    super(props);
    let isMobile;
    enquireScreen((b) => {
      isMobile = !!b;
    });
    this.state = { isMobile };
  }
  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
  }
  render() {
    return (
      <Router>
        <div>
          <Header isMobile={this.state.isMobile} />
          <div className="body-wrapper">
            <Suspense fallback={<Loading />}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/education" component={Education} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/publications" component={Publications} />
                <Route component={NotFound}></Route>
              </Switch>
            </Suspense>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
