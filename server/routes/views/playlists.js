const axios = require("axios");
const _ = require('lodash');

exports.getUserPlaylists = async (req, res) => {
    try {
        const playlists = await axios(`https://api.spotify.com/v1/me/playlists`, {
            headers: {
                "Authorization": `Bearer ${process.env.ACCESS_TOKEN}`
            }
        });
        res.send(playlists.data);
    } catch (e) {
        res.send({ error: true, message: e.message, trace: e });
    }
};

exports.getPlaylistById = async (req, res) => {
    const playlistId = req.params.id;
    try {
        const playlist = axios(`https://api.spotify.com/v1/playlists/${playlistId}`, {
            headers: {
                "Authorization": `Bearer ${process.env.ACCESS_TOKEN}`
            }
        });
        res.send(playlist.data);
    } catch (e) {
        res.send({ error: true, message: e.message, trace: e });
    }
};

exports.getPlaylistTracks = async (req, res) => {
    const playlistId = req.params.id;
    try {
        const tracks = await axios.get(` `, {
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

exports.createPlaylist = async (req, res) => {
    try {
        await axios.post(`https://api.spotify.com/v1/users/${userId}/playlists`, {
            name: 'placeholder',  // TODO: req.body.name
            public: false,
            collaborative: false,
            description: 'this is the description'
        }, {
            headers: {
                "Authorization": `Bearer ${process.env.ACCESS_TOKEN}`
            }
        });
        res.sendStatus(201);
    } catch (e) {
        res.send({ error: true, message: e.message, trace: e });
    }
};

exports.modifyPlaylist = async (req, res) => {
    const playlistId = req.params.id;
    try {
        await axios.put(`https://api.spotify.com/v1/playlists/${playlistId}`, {
            name: req.body.name,
            public: req.body.public,
            collaborative: req.body.collaborative,
            description: req.body.description
        }, {
            headers: {
                "Authorization": `Bearer ${process.env.ACCESS_TOKEN}`,
                "Content-Type": "application/json"
            }
        });
        res.sendStatus(200);
    } catch (e) {
        res.send({ error: true, message: e.message, trace: e });
    }
};