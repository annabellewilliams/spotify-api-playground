import { combineReducers } from "redux";

import { ALBUMS_FETCH_SUCCEEDED } from "../actions/types";
import { fetchAlbums } from "../actions";

export const albumsReducer = (albums= null, action) => {
    if (action.type === ALBUMS_FETCH_SUCCEEDED) {
        return action.payload;
    }
    return albums;
}

export default combineReducers({
    albums: albumsReducer
})