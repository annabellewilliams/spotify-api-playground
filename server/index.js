const express = require('express');
const json = require('json');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const axios = require('axios');
const querystring = require('querystring');
const _ = require('lodash');

const app = express();

app.use(express.json());

let ACCESS_TOKEN;
let REFRESH_TOKEN;
let userId;

//
// LOGIN
//
app.get('/', (req, res) => {
   res.send({ status: 200 });
});

app.get('/home', (req, res) => {
    res.send({ status: 200, message: 'Welcome home'});
});

app.get('/login', (req, res) => {
    const scopes = 'user-read-private user-read-email user-follow-modify user-follow-read user-library-read';
    res.redirect('https://accounts.spotify.com/authorize' +
        '?response_type=code' +
        '&client_id=' + process.env.CLIENT_ID +
        (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
        '&redirect_uri=' + encodeURIComponent(process.env.REDIRECT_URI));
});

app.get('/callback', async (req, res) => {
    try {
        const token = await axios.post('https://accounts.spotify.com/api/token', querystring.stringify({
            'grant_type': 'authorization_code',
            'code': req.query.code,
            'redirect_uri': 'http://localhost:3000/callback/'
        }),{
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `Basic ${Buffer.from(process.env.CLIENT_ID + ':'
                    + process.env.CLIENT_SECRET).toString('base64')}`
            }
        });
        ACCESS_TOKEN = token.data.access_token;
        REFRESH_TOKEN = token.data.refresh_token;
        res.send({ status: 200, message: 'success', token: token.data });
    } catch (e) {
        res.send({ error: true, message: e.message, trace: e });
    }
});

//
// USER
//
app.get('/user', async (req, res) => {
    try {
        const me = await axios.get('https://api.spotify.com/v1/me', {
            headers: {
                "Authorization": `Bearer ${ACCESS_TOKEN}`
            }
        });
        userId = me.data.id;
        res.send(me.data);
    } catch (e) {
        res.send({ error: true, message: e.message, trace: e });
    }
});

app.get('/user/profile', async (req, res) => {
    try {
        const profile = await axios.get(`https://api.spotify.com/v1/users/${userId}`, {
            headers: {
                "Authorization": `Bearer ${ACCESS_TOKEN}`
            }
        });
        res.send(profile.data);
    } catch (e) {
        res.send({ error: true, message: e.message, trace: e });
    }
});

//
//  USER'S SAVED ARTISTS
//
app.get('/user/following/artists', async (req, res) => {
    try {
        const artists = await axios.get('https://api.spotify.com/v1/me/following', {
            params: {
                'type': 'artist'
            },
            headers: {
                "Authorization": `Bearer ${ACCESS_TOKEN}`
            }
        });
        res.send(artists.data);
    } catch (e) {
        res.send({ error: true, message: e.message, trace: e });
    }
});

//
// USER'S SAVED ALBUMS
//
app.get('/user/following/albums', async (req, res) => {
    try {
        const albums = await axios.get('https://api.spotify.com/v1/me/albums', {
            headers: {
                "Authorization": `Bearer ${ACCESS_TOKEN}`
            }
        });
        let albumData = _.pick(albums.data, ['href', 'items']);
        console.log(albumData.items[0]);
        albumData.items = _.map(albumData.items, item => {
            // console.log(_.pick(item, ['album']));
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
            console.log(currentAlbum);
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
});


app.listen(3000, () => {
    console.log('Listening on port 3000');
});
