const axios = require("axios");

exports.getUser =  async (req, res) => {
    try {
        const me = await axios.get('https://api.spotify.com/v1/me', {
            headers: {
                "Authorization": `Bearer ${process.env.ACCESS_TOKEN}`
            }
        });
        process.env.USER_ID = me.data.id;
        res.send(me.data);
    } catch (e) {
        res.send({ error: true, message: e.message, trace: e });
    }
};

exports.getUserProfile = async (req, res) => {
    try {
        const profile = await axios.get(`https://api.spotify.com/v1/users/${userId}`, {
            headers: {
                "Authorization": `Bearer ${process.env.ACCESS_TOKEN}`
            }
        });
        res.send(profile.data);
    } catch (e) {
        res.send({ error: true, message: e.message, trace: e });
    }
};