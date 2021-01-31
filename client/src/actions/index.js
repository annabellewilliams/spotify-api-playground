import {
    ALBUMS_FETCH_REQUESTED,
    ARTISTS_FETCH_REQUESTED,
    PLAYLISTS_FETCH_REQUESTED,
    TRACKS_FETCH_REQUESTED,
    ALBUM_SELECTED_REQUESTED,
    ARTIST_SELECTED_REQUESTED,
    PLAYLIST_SELECTED_REQUESTED,
    TRACK_SELECTED_REQUESTED
} from "./types";

export const fetchAlbums = () => {
    return {
        type: ALBUMS_FETCH_REQUESTED,
        payload: null
    };
};

export const fetchArtists = () => {
    return {
        type: ARTISTS_FETCH_REQUESTED,
        payload: null
    };
};

export const fetchPlaylists = () => {
    return {
        type: PLAYLISTS_FETCH_REQUESTED,
        payload: null
    };
};

export const fetchTracks = () => {
    return {
        type: TRACKS_FETCH_REQUESTED,
        payload: null
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