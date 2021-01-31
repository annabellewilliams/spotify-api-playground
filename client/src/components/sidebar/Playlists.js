import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchPlaylists } from "../../actions";

const Playlists = ({ playlists, fetchPlaylists }) => {
    useEffect(() => {
        fetchPlaylists()
    }, [fetchPlaylists]);

    const renderPlaylistTitles = (playlists) => {
        return playlists.items.map(playlist => {
            return (
                <li key={playlist.id}>{ playlist.name }</li>
            );
        });
    };

    if (playlists) {
        return (
            <ul className="sidebar__playlists">
                <h2 className="sidebar__header">Playlists</h2>
                { renderPlaylistTitles(playlists) }
            </ul>
        );
    } else {
        return (
            <ul className="sidebar__playlists">
                <h2 className="sidebar__header">Playlists</h2>
                <li>Liked from Radio</li>
                <li>Indie Pop</li>
                <li>Roadtrip</li>
                <li>Release Radar</li>
                <li>Focus</li>
                <li>Piano Mood</li>
                <li>Your Summer Rewind</li>
                <li>Inspire</li>
                <li>Alternative Faves</li>
                <li>Chill Pop</li>
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return { playlists: state.playlists };
}

export default connect(mapStateToProps, {
    fetchPlaylists: fetchPlaylists
})(Playlists);