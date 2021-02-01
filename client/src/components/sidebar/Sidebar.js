import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import Playlists from "./Playlists";
import AlbumList from "../main/lists/AlbumList";
import ArtistList from "../main/lists/ArtistList";
import TrackList from "../main/TrackList";

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <ul className="sidebar__main-links">
                <li>Browse</li>
                <li>Radio</li>
            </ul>
            <ul className="sidebar__music">
                <h2 className="sidebar__header">Your Music</h2>
                <li>Your Daily Mix</li>
                <li>
                    <Link to="/user/songs">Songs</Link>
                </li>
                <li>
                    <Link to="/user/albums">Albums</Link>
                </li>
                <li>
                    <Link to="/user/artists">Artists</Link>
                </li>
            </ul>
            <Playlists />

            <Switch>
                <Route path="user/albums">
                    <AlbumList />
                </Route>
                <Route path="user/artists">
                    <ArtistList />
                </Route>
                <Route path="user/songs">
                    <TrackList />
                </Route>
            </Switch>
        </aside>
    );
}

export default Sidebar;