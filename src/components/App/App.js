// App.js

import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import axios from 'axios';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import ArtistList from './../ArtistList/ArtistList.js';
import AddArtistForm from '../AddArtistForm/AddArtistForm';
import {AppBar} from '@material-ui/core';
import mapStoreToProps from '../../modules/mapStoreToProps';

import {getArtists, postArtist} from '../../modules/services/artists.service';

class App extends Component {
  // Called when the (App) component is created
  state = {
    artists: [],
  }
  
  // DOM is ready
  componentDidMount() { // react Component method
    this.refreshArtists();
  }

  refreshArtists = () => {
    getArtists().then((response) => {
      this.props.dispatch({type: 'REFRESH_ARTISTS', payload: response.data});
    });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <header className="App-header">
            <AppBar>
            <Link to="/">See Artist List</Link>
            <Link to="/addArtistForm">Add Artist</Link>
            <h1 className="App-title">Famous Artists</h1>
            </AppBar>
          </header>
          <br/>
          <div className="container">
            <Route exact path="/" component={ArtistList}/>
            <Route exact path="/addArtistForm" component={AddArtistForm}/>
          </div>
        </Router>
      </div>
    );
  }
}


export default connect(mapStoreToProps)(App);
