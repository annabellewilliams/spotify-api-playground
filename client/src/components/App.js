import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import './App.scss';
import Sidebar from "./sidebar/Sidebar";
import Main from "./main/Main";

import AlbumList from "./main/lists/AlbumList";
import ArtistList from "./main/lists/ArtistList";
import TrackList from "./main/TrackList";
import Playlists from "./sidebar/Playlists";
import PlaylistView from "./main/PlaylistView";
import AlbumView from "./main/AlbumView";

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <h2>Home</h2>
    },
    {
        path: "/user/albums",
        main: () => <AlbumList />
    },
    {
        path: "/user/artists",
        main: () => <ArtistList />
    },
    {
        path: "/user/songs",
        main: () => <AlbumView />
    }
];

const App = () => {
    return (
        <Router>
            <div className="wrapper">
                <aside className="sidebar">
                    <ul className="sidebar__main-links">
                        <li>Browse</li>
                        <li>Radio</li>
                    </ul>
                    <ul className="sidebar__music">
                        <h2 className="sidebar__header">Your Music</h2>
                        <li>Your Daily Mix</li>
                        <li>
                            <Link to="/user/songs" className="list-item-link">Songs</Link>
                        </li>
                        <li>
                            <Link to="/user/albums" className="list-item-link">Albums</Link>
                        </li>
                        <li>
                            <Link to="/user/artists" className="list-item-link">Artists</Link>
                        </li>
                    </ul>
                    <Playlists />
                </aside>
                <main>
                    <header className="main__header">
                        <h1>Browse</h1>
                    </header>
                    <nav className="main__nav">
                        <a href="#" className="link is-active">Overview</a>
                        <a href="#" className="link">Charts</a>
                        <a href="#" className="link">Genres and Moods</a>
                        <a href="#" className="link">New Releases</a>
                        <a href="#" className="link">Discover</a>
                        <a href="#" className="link">More</a>
                    </nav>
                    <section className="main__playlists">
                        <Switch>
                            {routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    children={<route.main />}
                                />
                            ))}
                        </Switch>
                        {/*<h2>Featured Playlist</h2>*/}
                        {/*<PlaylistView />*/}
                        {/*<h2>Featured Lists</h2>*/}
                        {/*<AlbumGrid />*/}
                    </section>
                </main>
            </div>
        </Router>
    );
}

export default App;
