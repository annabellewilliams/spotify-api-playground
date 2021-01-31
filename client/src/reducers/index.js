import { combineReducers } from "redux";

import {
    ALBUMS_FETCH_SUCCEEDED,
    ARTISTS_FETCH_SUCCEEDED,
    PLAYLISTS_FETCH_SUCCEEDED,
    TRACKS_FETCH_SUCCEEDED,
    ALBUM_SELECTED_SUCCEEDED,
    ARTIST_SELECTED_SUCCEEDED,
    PLAYLIST_SELECTED_SUCCEEDED,
    TRACK_SELECTED_SUCCEEDED
} from "../actions/types";
import { fetchAlbums } from "../actions";

export const albumsReducer = (albums= null, action) => {
    if (action.type === ALBUMS_FETCH_SUCCEEDED) {
        return action.payload;
    }
    return albums;
};

export const artistsReducer = (artists = null, action) => {
    if (action.type === ARTISTS_FETCH_SUCCEEDED) {
        return action.payload;
    }
    return artists;
};

export const playlistsReducer = (playlists = null, action) => {
    if (action.type === PLAYLISTS_FETCH_SUCCEEDED) {
        return action.payload;
    }
    return playlists;
};

export const tracksReducer = (tracks = null, action) => {
    if (action.type === TRACKS_FETCH_SUCCEEDED) {
        return action.payload;
    }
    return tracks;
};

export const albumSelectedReducer = (album = null, action) => {
    if (action.type === ALBUM_SELECTED_SUCCEEDED) {
        return action.payload;
    }
    return album;
};

export const artistSelectedReducer = (artist = null, action) => {
    if (action.type === ARTIST_SELECTED_SUCCEEDED) {
        return action.payload;
    }
    return artist;
};

export const playlistSelectedReducer = (playlist = null, action) => {
    if (action.type === PLAYLIST_SELECTED_SUCCEEDED) {
        return action.payload;
    }
    return playlist;
};

export const trackSelectedReducer = (track = null, action) => {
    if (action.type === TRACK_SELECTED_SUCCEEDED) {
        return action.payload;
    }
    return track;
};

export default combineReducers({
    albums: albumsReducer,
    artists: artistsReducer,
    playlists: playlistsReducer,
    tracks: tracksReducer,
    selectedAlbum: albumSelectedReducer,
    selectedArtist: artistSelectedReducer,
    selectedPlaylist: playlistSelectedReducer,
    selectedTrack: trackSelectedReducer
});