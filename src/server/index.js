const port = 8081;
const path = require('path');
const express = require('express');
const aylien = require('aylien_textapi');
const dotenv = require('dotenv');

dotenv.config();
const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});
const app = express();

app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.send('../../dist/index.html');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});