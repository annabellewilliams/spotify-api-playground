const axios = require("axios");
const querystring = require("querystring");

exports.login = (req, res) => {
    const scopes = 'user-read-private user-read-email user-follow-modify user-follow-read user-library-read ' +
        'playlist-read-private playlist-read-collaborative playlist-modify-public playlist-modify-private';
    res.redirect('https://accounts.spotify.com/authorize' +
        '?response_type=code' +
        '&client_id=' + process.env.CLIENT_ID +
        (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
        '&redirect_uri=' + encodeURIComponent(process.env.REDIRECT_URI));
};

exports.callback = async (req, res) => {
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
        process.env.ACCESS_TOKEN = token.data.access_token;
        process.env.REFRESH_TOKEN = token.data.refresh_token;
        res.send({ status: 200, message: 'success', token: token.data });
    } catch (e) {
        res.send({ error: true, message: e.message, trace: e });
    }
};