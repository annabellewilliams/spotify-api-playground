import { ALBUMS_FETCH_REQUESTED } from "./types";

export const fetchAlbums = () => {
    return {
        type: ALBUMS_FETCH_REQUESTED,
        payload: null
    }
}