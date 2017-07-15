import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import axios from 'axios';
import Home from '../Home/';
import Albums from '../Albums/';
import AlbumDetail from '../AlbumDetail/';
import Nav from '../Nav/';
import './App.css';

class App extends Component {
  state = {
    albums: [],
  };

  componentDidMount = () => {
    this.fetchAlbums();
  }

  fetchAlbums = () => {
    axios.get('/api/albums')
    .then((response) => {
      this.setState({
        albums: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    const { albums } = this.state;
    return (
      <Router >
        <div className="container">
          <Nav albums={albums} />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/albums" render={(...props) => <Albums {...props} albums={albums} />} />
            <Route path="/albums/:id" component={AlbumDetail} />
            <Route render={() => (<p>Not Found</p>)} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
