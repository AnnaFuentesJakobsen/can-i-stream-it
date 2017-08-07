import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './routes/Home'
import Movie from './routes/Movie'
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
        <div className="container">
          <Route path="/" exact component={(props) => <Home {...props} imageConfig={this.state.imageConfig} />} />
          <Route path="/movie/:movieId" component={(props) => <Movie {...props} imageConfig={this.state.imageConfig} />} />
        </div>
      </Router>
    );
  }
}

export default App;
