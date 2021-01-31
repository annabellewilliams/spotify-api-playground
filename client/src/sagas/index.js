import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { ALBUMS_FETCH_REQUESTED, ALBUMS_FETCH_SUCCEEDED, ALBUMS_FETCH_FAILED} from "../actions/types";

function* fetchAlbums() {
    try {
        const getAlbumsConfig = {
            method: 'get',
            url: 'http://localhost:3001/user/albums',
            headers: {}
        }
        const albums = yield call(axios, getAlbumsConfig);

        yield put({ type: ALBUMS_FETCH_SUCCEEDED, payload: albums.data });
    } catch (e) {
        yield put({ type: ALBUMS_FETCH_FAILED, action: e.message });
    }
}

function* rootSaga() {
    yield takeLatest(ALBUMS_FETCH_REQUESTED, fetchAlbums);
}

export default rootSaga;