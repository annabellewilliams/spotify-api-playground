const axios = require("axios");

exports.getUserArtists = async (req, res) => {
    try {
        const artists = await axios.get('https://api.spotify.com/v1/me/following', {
            params: {
                'type': 'artist'
            },
            headers: {
                "Authorization": `Bearer ${process.env.ACCESS_TOKEN}`
            }
        });
        res.send(artists.data);
    } catch (e) {
        res.send({ error: true, message: e.message, trace: e });
    }
};

