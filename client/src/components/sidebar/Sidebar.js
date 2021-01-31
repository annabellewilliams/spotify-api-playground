import React from 'react';

import Playlists from "./Playlists";

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
                <li>Songs</li>
                <li>Albums</li>
                <li>Artists</li>
            </ul>
            <Playlists />
        </aside>
    );
}

export default Sidebar;