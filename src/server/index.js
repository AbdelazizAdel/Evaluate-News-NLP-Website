const port = 8081;
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const aylien = require('aylien_textapi');
const dotenv = require('dotenv');

dotenv.config();
const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});
const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.send('../../dist/index.html');
});

app.post('/sentiment', (req, res) => {
    textapi.sentiment({
        'url': req.body.url,
        'mode': 'document'
    }, (error, response) => {
        if (error) {
            console.log(error);
            res.send({
                error
            });
        } else {
            console.log(response);
            res.send(response);
        }

    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});