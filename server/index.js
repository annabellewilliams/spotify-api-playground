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
app.get('/user/artists', artists.getArtists);

//
// USER'S SAVED ALBUMS
//
app.get('/user/albums', albums.getAlbums);

//
// USER'S SAVED TRACKS
//
app.get('/user/tracks', tracks.findTracks);

//
// USER'S SAVED PLAYLISTS
//
app.get('/user/playlists', playlists.getPlaylists);

app.get('/user/playlists/:id', playlists.getPlaylistById);

app.get('/user/playlists/:id/tracks', playlists.getPlaylistTracks);

app.post('/user/playlists/new', playlists.createPlaylist);

app.put('/user/playlists/:id', playlists.modifyPlaylist);


app.listen(3000, () => {
    console.log('Listening on port 3000');
});