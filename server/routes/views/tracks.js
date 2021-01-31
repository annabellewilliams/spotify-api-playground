const axios = require("axios");
const _ = require('lodash');

exports.findTracks = async (req, res) => {
    try {
        const tracks = await axios.get('https://api.spotify.com/v1/me/tracks', {
            headers: {
                "Authorization": `Bearer ${process.env.ACCESS_TOKEN}`
            }
        });
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
                'track.artists'
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
        res.send(trackData);
    } catch (e) {
        res.send({ error: true, message: e.message, trace: e });
    }
};