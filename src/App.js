import React, { Component } from 'react';
import SearchBar from './components/Search-bar';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './routes/Home'
import Movie from './routes/Movie'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <SearchBar />
          <Route path="/" component={Home} exact/>
          <Route path="/movie/:movieId" component={Movie}/>
        </div>
      </Router>
    );
  }
}

export default App;
