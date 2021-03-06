import React from 'react';

import AlbumList from "./lists/AlbumList";
import PlaylistView from "./PlaylistView";
import Footer from "./footer/Footer";

const Main = () => {
    return (
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
                <h2>Featured Playlist</h2>
                <PlaylistView />
                <h2>Featured Lists</h2>
                <AlbumList />
            </section>
            {/*<Footer />*/}
        </main>
    );
}

export default Main;