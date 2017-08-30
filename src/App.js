import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './routes/Home'
import Movie from './routes/Movie'
import Actor from './routes/Actor'
import { getApiConfiguration } from './utils/api'

class App extends Component {
  constructor() {
    super()
    this.state = {
      imageConfig: {}
    }
  }

  componentWillMount() {
    getApiConfiguration().then(function(data){
      this.setState({imageConfig: data.images})
    }.bind(this))
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={(props) => <Home {...props} imageConfig={this.state.imageConfig} />} />
          <Route path="/movie/:movieId" component={(props) => <Movie {...props} imageConfig={this.state.imageConfig} />} />
          <Route path="/actor/:actorId" component={(props) => <Actor {...props} imageConfig={this.state.imageConfig} />} />
        </div>
      </Router>
    );
  }
}

export default App;
