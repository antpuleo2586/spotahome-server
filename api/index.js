const axios = require('axios');

const api = axios.create({
    baseURL: process.env.SPOTAHOME_API,
});

module.exports = api
