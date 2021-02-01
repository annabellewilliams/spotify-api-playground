import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchTracks } from "../../actions";


const Tracklist = ({ tracks, fetchTracks, container, id }) => {
    useEffect(() => {
        fetchTracks(container, id);
    }, [fetchTracks, container, id]);

    const formatDuration = (ms) => {
        const minutes = Math.floor(ms / 60000);
        const seconds = ((ms % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    if (tracks) {
        const renderTrackList = (tracks) => {
            return tracks.items.map(({ track }, index) => {
                return (
                    <li key={track.id} className="tracklist">
                        <div className="tracklist-row">
                            <div>
                                { index + 1 }
                            </div>
                            <div className="tracklist-row-title">
                                <div>
                                    <img src={track.album.images[2].url} alt={track.album.name}/>
                                </div>
                                <div>
                                    <div>{ track.name }</div>
                                    <div>{ track.artists[0].name }</div>
                                </div>
                            </div>
                            <div>
                                { track.album.name }
                            </div>
                            <div>
                                { formatDuration(track.duration_ms) }
                            </div>
                        </div>
                    </li>
                );
            });
        };

        return (
            <div>
                <ul>
                    <li className="tracklist">
                        <div className="tracklist-row tracklist-row-header">
                            <div>#</div>
                            <div className="tracklist-row-title">Title</div>
                            <div>Album</div>
                            <div>Time</div>
                        </div>
                    </li>
                    { renderTrackList(tracks) }
                </ul>
            </div>
        );
    } else {
        return (
            <div>No tracks available.</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tracks: state.tracks
    };
};

export default connect(mapStateToProps, {
    fetchTracks: fetchTracks
})(Tracklist);