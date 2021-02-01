import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchArtists } from "../../../actions";

const ArtistList = ({ artists, fetchArtists }) => {
    useEffect(() => {
        fetchArtists()
    }, [fetchArtists]);

    const renderArtist = ({ artists }) => {
        return artists.items.map(artist => {
            return (
                <div key={artist.id} className="artist-card">
                    <div>
                        <div className="artist-card-image">
                            <img className="artist-card-image-img" src={artist.images[1].url} alt={artist.name}/>
                        </div>
                        <div className="artist-card-info">
                            <div className="artist-card-info--name">{ artist.name }</div>
                            <div className="artist-card-info--type">{ artist.type }</div>
                        </div>
                    </div>
                </div>
            );
        });
    };
    
    if (artists) {
        return (
            <div className="artist-list">
                { renderArtist(artists) }
            </div>
        );
    } else {
        return (
            <div/>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        artists: state.artists
    };
}

export default connect(mapStateToProps, {
    fetchArtists: fetchArtists
})(ArtistList);