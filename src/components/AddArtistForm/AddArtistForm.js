// App.js
import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../App/App.css';
import axios from 'axios';
import mapStoreToProps from '../../modules/mapStoreToProps';
import { getArtists, postArtist } from '../../modules/services/artists.service';

class AddArtistForm extends Component {
    
    state = {
        artistName: ''
    }
    
    handleChange = (event) =>  {
        this.setState({
            artistName: event.target.value
        })
        console.log(this.state.artistName);
    }
    
    postArtist = () => {
        //this.state.artistName
        console.log('HERE!!!! : ', this.state.artistName);
        postArtist(this.state.artistName)
            .then((response) => {
                getArtists()
                    .then((response) => {
                        this.props.dispatch({type: 'REFRESH_ARTISTS', payload: response.data});
                    });
            })
            .catch((error) => {
                console.log('ERROR POSTING', error)
            });
    }
  
    render() {
        
        return (
        <div className="AddArtistForm">
            <h1>Add Your Artist</h1>
            <input onChange={this.handleChange} type="text" placeholder="enter artist" />
        <button onClick={this.postArtist}>submit</button>
        </div>
        );
    }
}

export default connect(mapStoreToProps)(AddArtistForm);