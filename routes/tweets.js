const express = require('express');
const Twit = require('twit');
require('dotenv').config();

const router = express.Router();

const T = new Twit({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

const getTweets = async (query, count = 10) => {
    return new Promise((resolve, reject) => {
        const params = {
            q: query,
            count: count,
            result_type: 'recent'
        }

        T.get('search/tweets', params, (err, data) => {
            if (err) {
                return reject(err)
            }

            resolve(data.statuses.map(tweet => tweet.text))
        });
    });
}

router.get('/', async (req, res) => {
    const userInput = req.query.query;
    if (userInput) {
        try {
            res.status(200).send({ 'tweets': await getTweets(userInput) });
        } catch (err) {
            res.status(500).send({ 'message': err });
        }
    } else {
        res.status(400).send({ 'message': 'Invalid query' });
    }
});


module.exports = router;