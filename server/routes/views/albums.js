const axios = require("axios");
const _ = require('lodash');

exports.getUserAlbums = async (req, res) => {
    try {
        const albums = await axios.get('https://api.spotify.com/v1/me/albums', {
            headers: {
                "Authorization": `Bearer ${process.env.ACCESS_TOKEN}`
            }
        });
        let albumData = _.pick(albums.data, ['href', 'items']);
        albumData.items = _.map(albumData.items, item => {
            let currentAlbum = _.pick(item, [
                'album.album_type',
                'album.artists',
                'album.external_urls',
                'album.href',
                'album.id',
                'album.images',
                'album.name',
                'album.release_date',
                'album.tracks.href',
                'album.tracks.items',
            ]);
            currentAlbum.album.tracks.items = _.map(currentAlbum.album.tracks.items, item => {
                return _.pick(item, [
                    'id',
                    'name',
                    'artist',
                    'disc_number',
                    'duration_ms',
                    'external_urls',
                    'href',
                    'track_number'
                ]);
            });
            return currentAlbum;
        });
        res.send(albumData);
    } catch (e) {
        res.send({ error: true, message: e.message, trace: e });
    }
};

exports.getAlbumTracks = async (req, res) => {
    const albumId = req.params.id;
    try {
        const tracks = await axios.get(`https://api.spotify.com/v1/albums/${albumId}/tracks`, {
            headers: {
                "Authorization": `Bearer ${process.env.ACCESS_TOKEN}`
            },
            params: {
                market: 'from_token'
            }
        });
        res.send(tracks.data);
    } catch (e) {
        res.send({ error: true, message: e.message, trace: e });
    }
};