const auth = require('./routes/auth');
const albums = require('./routes/views/albums');
const artists = require('./routes/views/artists');
const playlists = require('./routes/views/playlists');
const tracks = require('./routes/views/tracks');
const user = require('./routes/views/user');

const express = require('express');
const json = require('json');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();

const app = express();

app.use(express.json());

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//
// LOGIN
//
app.get('/', (req, res) => {
    res.send({ status: 200 });
});

app.get('/login', auth.login);

app.get('/callback', auth.callback);

//
// USER
//
app.get('/user', user.getUser);

app.get('/user/profile', user.getUserProfile);

//
//  USER'S SAVED ARTISTS
//
app.get('/user/artists', artists.getUserArtists);

//
// USER'S SAVED ALBUMS
//
app.get('/user/albums', albums.getUserAlbums);
app.get('/user/albums/:id/tracks', albums.getAlbumTracks);

//
// USER'S SAVED TRACKS
//
app.get('/user/tracks', tracks.getUserTracks);

//
// USER'S SAVED PLAYLISTS
//
app.get('/user/playlists', playlists.getUserPlaylists);

app.get('/user/playlists/:id', playlists.getPlaylistById);

app.get('/user/playlists/:id/tracks', playlists.getPlaylistTracks);

app.post('/user/playlists/new', playlists.createPlaylist);

app.put('/user/playlists/:id', playlists.modifyPlaylist);


app.listen(3001, () => {
    console.log('Listening on port 3001');
});