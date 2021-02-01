import {
    SAVED_ALBUMS_FETCH_REQUESTED,
    SAVED_ARTISTS_FETCH_REQUESTED,
    SAVED_PLAYLISTS_FETCH_REQUESTED,
    SAVED_TRACKS_FETCH_REQUESTED,
    ALBUM_SELECTED_REQUESTED,
    ARTIST_SELECTED_REQUESTED,
    PLAYLIST_SELECTED_REQUESTED,
    TRACK_SELECTED_REQUESTED
} from "./types";

export const fetchAlbums = () => {
    return {
        type: SAVED_ALBUMS_FETCH_REQUESTED,
        payload: null
    };
};

export const fetchArtists = () => {
    return {
        type: SAVED_ARTISTS_FETCH_REQUESTED,
        payload: null
    };
};

export const fetchPlaylists = () => {
    return {
        type: SAVED_PLAYLISTS_FETCH_REQUESTED,
        payload: null
    };
};

export const fetchTracks = (container, id) => {
    return {
        type: SAVED_TRACKS_FETCH_REQUESTED,
        payload: {
            container,
            id
        }
    };
};

export const selectAlbum = (album) => {
    return {
        type: ALBUM_SELECTED_REQUESTED,
        payload: album
    };
};

export const selectArtist = (artist) => {
    return {
        type: ARTIST_SELECTED_REQUESTED,
        payload: artist
    };
};

export const selectPlaylist = (playlist) => {
    return {
        type: PLAYLIST_SELECTED_REQUESTED,
        payload: playlist
    }
};

export const selectTrack = (track) => {
    return {
        type: TRACK_SELECTED_REQUESTED,
        payload: track
    }
};