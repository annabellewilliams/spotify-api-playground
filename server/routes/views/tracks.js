const axios = require("axios");
const _ = require('lodash');

const mapTrackData = (tracks) => {
    let trackData = tracks.data;
    trackData.items = _.map(tracks.data.items, trackObj => {
        let trackDataItem = _.pick(trackObj, [
            'id',
            'name',
            'href',
            'external_urls',
            'track.album.id',
            'track.album.name',
            'track.album.images',
            'track.album.release_date',
            'track.album.total_tracks',
            'track.album.album_type',
            'track.album.external_urls',
            'track.album.href',
            'track.artists',
            'track.name',
            'track.duration_ms'
        ]);
        trackDataItem.track.artists = _.map(trackDataItem.track.artists, artist => {
            return _.pick(artist, [
                'id',
                'name',
                'href',
                'external_urls',
            ]);
        });
        return trackDataItem;
    });
    return trackData;
}

exports.getTracks = async (req, res) => {
    const container = req.params.container;
    const containerId = req.params.containerId;
    try {
        const tracks = await axios.get(`https://api.spotify.com/v1/${container}/${containerId}/tracks`, {
            headers: {
                "Authorization": `Bearer ${process.env.ACCESS_TOKEN}`
            }
        });
        res.send(mapTrackData(tracks));
    } catch (e) {
        res.send({ error: true, message: e.message, trace: e });
    }
}

exports.getUserTracks = async (req, res) => {
    try {
        const tracks = await axios.get('https://api.spotify.com/v1/me/tracks', {
            headers: {
                "Authorization": `Bearer ${process.env.ACCESS_TOKEN}`
            }
        });

        res.send(mapTrackData(tracks));
    } catch (e) {
        res.send({ error: true, message: e.message, trace: e });
    }
};