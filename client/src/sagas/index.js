import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import {
    SAVED_ALBUMS_FETCH_REQUESTED, SAVED_ALBUMS_FETCH_SUCCEEDED, SAVED_ALBUMS_FETCH_FAILED,
    SAVED_ARTISTS_FETCH_REQUESTED, SAVED_ARTISTS_FETCH_SUCCEEDED, SAVED_ARTISTS_FETCH_FAILED,
    SAVED_PLAYLISTS_FETCH_REQUESTED, SAVED_PLAYLISTS_FETCH_SUCCEEDED, SAVED_PLAYLISTS_FETCH_FAILED,
    SAVED_TRACKS_FETCH_REQUESTED, SAVED_TRACKS_FETCH_SUCCEEDED, SAVED_TRACKS_FETCH_FAILED,
    TRACKS_FETCH_REQUESTED, TRACKS_FETCH_SUCCEEDED, TRACKS_FETCH_FAILED,
    ALBUM_SELECTED_REQUESTED, ALBUM_SELECTED_SUCCEEDED, ALBUM_SELECTED_FAILED,
    ARTIST_SELECTED_REQUESTED, ARTIST_SELECTED_SUCCEEDED, ARTIST_SELECTED_FAILED,
    PLAYLIST_SELECTED_REQUESTED, PLAYLIST_SELECTED_SUCCEEDED, PLAYLIST_SELECTED_FAILED,
    TRACK_SELECTED_REQUESTED, TRACK_SELECTED_SUCCEEDED, TRACK_SELECTED_FAILED
} from "../actions/types";
import {trackSelectedReducer} from "../reducers";

function* fetchSavedAlbums() {
    try {
        const getAlbumsConfig = {
            method: 'get',
            url: 'http://localhost:3001/user/albums',
            headers: {}
        };
        const albums = yield call(axios, getAlbumsConfig);

        yield put({ type: SAVED_ALBUMS_FETCH_SUCCEEDED, payload: albums.data });
    } catch (e) {
        yield put({ type: SAVED_ALBUMS_FETCH_FAILED, action: e.message });
    }
}

function* fetchSavedArtists() {
    try {
        const getArtistsConfig = {
            method: 'get',
            url: 'http://localhost:3001/user/artists'
        }
        const artists = yield call(axios, getArtistsConfig);

        yield put({ type: SAVED_ARTISTS_FETCH_SUCCEEDED, payload: artists.data });
    } catch (e) {
        yield put({ type: SAVED_ARTISTS_FETCH_FAILED, action: e.message });
    }
}

function* fetchSavedPlaylists() {
    try {
        const getPlaylistsConfig = {
            method: 'get',
            url: 'http://localhost:3001/user/playlists'
        }
        const playlists = yield call(axios, getPlaylistsConfig);

        yield put({ type: SAVED_PLAYLISTS_FETCH_SUCCEEDED, payload: playlists.data });
    } catch (e) {
        yield put({ type: SAVED_PLAYLISTS_FETCH_FAILED, action: e.message });
    }
}

function* fetchSavedTracks() {
    try {
        const getTracksConfig = {
            method: 'get',
            url: `http://localhost:3001/user/tracks`
        };
        const tracks = yield call(axios, getTracksConfig);

        yield put({ type: SAVED_TRACKS_FETCH_SUCCEEDED, payload: tracks.data });
    } catch (e) {
        yield put({ type: SAVED_TRACKS_FETCH_FAILED, action: e.message });
    }
}

function* fetchTracks({ payload }) {
    try {
        const getTracksConfig = {
            method: 'get',
            url: `http://localhost:3001/user/${payload.container}/${payload.id}/tracks`
        };
        const tracks = yield call(axios, getTracksConfig);

        yield put({ type: SAVED_TRACKS_FETCH_SUCCEEDED, payload: tracks.data });
    } catch (e) {
        yield put({ type: SAVED_TRACKS_FETCH_FAILED, action: e.message });
    }
}

function* selectAlbum(id) {
    try {
        const getAlbumConfig = {
            method: 'get',
            url: `http://localhost:3001/albums/${id}`
        }
        const album = yield call(axios, getAlbumConfig);

        yield put({ type: ALBUM_SELECTED_SUCCEEDED, payload: album.data });
    } catch (e) {
        yield put({ type: ALBUM_SELECTED_FAILED, payload: e.message });
    }
}

function* selectArtist(id) {
    try {
        const getArtistConfig = {
            method: 'get',
            url: `http://localhost:3001/artists/${id}`
        }
        const artist = yield call(axios, getArtistConfig);

        yield put({ type: ARTIST_SELECTED_SUCCEEDED, payload: artist.data });
    } catch (e) {
        yield put({ type: ARTIST_SELECTED_FAILED, payload: e.message });
    }
}

function* selectPlaylist(id) {
    try {
        const getPlaylistConfig = {
            method: 'get',
            url: `http://localhost:3001/playlists/${id}`
        }
        const playlist = yield call(axios, getPlaylistConfig);

        yield put({ type: PLAYLIST_SELECTED_SUCCEEDED, payload: playlist.data });
    } catch (e) {
        yield put({ type: PLAYLIST_SELECTED_FAILED, payload: e.message });
    }
}

function* selectTrack(id) {
    try {
        const getTrackConfig = {
            method: 'get',
            url: `http://localhost:3001/tracks/${id}`
        }
        const track = yield call(axios, getTrackConfig);

        yield put({ type: TRACK_SELECTED_SUCCEEDED, payload: track.data });
    } catch (e) {
        yield put({ type: TRACK_SELECTED_FAILED, payload: e.message });
    }
}

function* rootSaga() {
    yield takeLatest(SAVED_ALBUMS_FETCH_REQUESTED, fetchSavedAlbums);
    yield takeLatest(SAVED_ARTISTS_FETCH_REQUESTED, fetchSavedArtists);
    yield takeLatest(SAVED_PLAYLISTS_FETCH_REQUESTED, fetchSavedPlaylists);
    yield takeLatest(SAVED_TRACKS_FETCH_REQUESTED, fetchSavedTracks);
    yield takeLatest(TRACKS_FETCH_REQUESTED, fetchTracks);
    yield takeLatest(ALBUM_SELECTED_REQUESTED, selectAlbum);
    yield takeLatest(ARTIST_SELECTED_REQUESTED, selectArtist);
    yield takeLatest(PLAYLIST_SELECTED_REQUESTED, selectPlaylist);
    yield takeLatest(TRACK_SELECTED_REQUESTED, selectTrack);
}


export default rootSaga;