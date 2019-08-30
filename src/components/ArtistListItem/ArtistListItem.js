// ArtistListItem.js

import React, { Component } from 'react';
import axios from 'axios';
import { deleteArtist, getArtists } from '../../modules/services/artists.service';
import mapStoreToProps from '../../modules/mapStoreToProps';
import { connect } from 'react-redux';

class ArtistListItem extends Component {
    deleteArtist = () => {
        deleteArtist(this.props.artist.id)
            .then((response) => {
                getArtists().then((response) => {
                    this.props.dispatch({type: 'REFRESH_ARTISTS', payload: response.data});
                  });
            });
    }

    render() {
        return (
            <tr>
                <td>{this.props.artist.name}</td>
                <td><button onClick={this.deleteArtist}>DELETE</button></td>
            </tr>
        );
    }
}

export default connect(mapStoreToProps)(ArtistListItem);