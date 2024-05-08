import './App.css';

import React, { Component } from 'react'
import News  from './Components/News';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";


export default class App extends Component {
  pageSize = 16;
  apiKey = process.env.REACT_APP_NEWS_API

  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({
      progress: progress,
    });
  };
  render() {
    return (
      <div>
        <Router>
          <LoadingBar color="#f11946" progress={this.state.progress} />
          <Navbar />
          <Switch>
            <Route exact path="/">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="1"
                pageSize={this.pageSize}
                category="General"
                country="in"
              />
            </Route>
            <Route exact path="/business">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="Business"
                pageSize={this.pageSize}
                category="Business"
                country="in"
              />
            </Route>
            <Route exact path="/general">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="eneral1"
                pageSize={this.pageSize}
                category="General"
                country="in"
              />
            </Route>
            <Route exact path="/health">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="Health"
                pageSize={this.pageSize}
                category="Health"
                country="in"
              />
            </Route>
            <Route exact path="/science">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="Science"
                pageSize={this.pageSize}
                category="Science"
                country="in"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="entertainment"
                pageSize={this.pageSize}
                category="Entertainment"
                country="in"
              />
            </Route>
            <Route exact path="/sports">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="sports"
                pageSize={this.pageSize}
                category="Sports"
                country="in"
              />
            </Route>
            <Route exact path="/technology">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="technology"
                pageSize={this.pageSize}
                category="Technology"
                country="in"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}



