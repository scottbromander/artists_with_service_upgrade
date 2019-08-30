// ArtistList.js

import React, { Component } from 'react';
import {connect} from 'react-redux'
import ArtistListItem from '../ArtistListItem/ArtistListItem';

class ArtistList extends Component {
    createArtistList() {
        let artistListForDom = [];
        console.log(this.props.store.artistReducer);
        
        for(let i = 0; i < this.props.store.artistReducer.length; i += 1) {
            let artist = this.props.store.artistReducer[i];
            let artistRow = (<ArtistListItem key={i} refreshArtists={this.props.refreshArtists} artist={artist} />);
            artistListForDom.push(artistRow);
        }
        return artistListForDom;
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        {this.createArtistList()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStoreToProps = (store) => {
    return {
        store
    }
}

export default connect(mapStoreToProps)(ArtistList);