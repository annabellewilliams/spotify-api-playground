import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchAlbums } from "../../../actions";

const AlbumList = ({ albums, fetchAlbums }) => {
    useEffect(() => {
        fetchAlbums()
    }, [fetchAlbums]);

    const renderAlbum = (albums) => {
        return albums.items.map(({ album }) => {
            return (
                <div key={album.id} className="album-card">
                    <div>
                        <div className="album-card-image">
                            <img className="album-card-image-img" src={album.images[1].url} alt={album.name}/>
                        </div>
                        <div className="album-card-info">
                            <div className="album-card-info--name">{ album.name }</div>
                            <div className="album-card-info--type">{ album.artists[0].name }</div>
                        </div>
                    </div>
                </div>
            );
        });
    };

    if (albums) {
        return (
            <div className="album-list">
                { renderAlbum(albums) }
            </div>
        );
    } else {
        return (
            <div />
        );
    }
};

const mapStateToProps = (state) => {
    return {
        albums: state.albums
    };
}

export default connect(mapStateToProps, {
    fetchAlbums: fetchAlbums
})(AlbumList);