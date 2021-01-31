import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchAlbums } from "../../actions";

const AlbumGrid = ({ albums, fetchAlbums }) => {
    useEffect(() => {
        fetchAlbums();
    }, [fetchAlbums]);

    const renderAlbums = (albums) => {
        return albums.map((item) => {
            const bgImage = item.album.images[1].url;
            const listStyle = {
                backgroundImage: `url(${bgImage}), linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85))`,
                opacity: 0.9,
                width: 300
            }
            return (
                <li key={item.album.id} className="music__list-item" style={listStyle}>
                    <span className="song__title">{ item.album.name }</span>
                    <span className="song__creator">{ item.album.artists[0].name }</span>
                </li>
            );
        });
    }

    if (albums) {
        return (
            <ul className="music__list">
                { renderAlbums(albums.items) }
            </ul>
        );
    } else {
        return (
            <ul className="music__list">
                <li className="music__list-item">
                    <span className="song__title">Song Title</span>
                    <span className="song__creator">Artist</span>
                </li>
            </ul>
        )
    }


}

const mapStateToProps = (state) => {
    return { albums: state.albums };
};

export default connect(mapStateToProps, {
    fetchAlbums: fetchAlbums
})(AlbumGrid);
