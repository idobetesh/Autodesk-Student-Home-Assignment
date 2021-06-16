const express = require('express');
require('dotenv').config();

const app = express();
PORT = process.env.PORT || 3000;

const tweetsRoute = require('./routes/tweets');
const healthRoute = require('./routes/health');

app.use('/health', healthRoute);
app.use('/tweets', tweetsRoute);

app.all('/*', (req, res) => {
    res.status(404).send({ 'message': 'Nothing in here..🧐' });
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
