const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const cors = require('cors');
const simonController = require('./modules/simonController.js');

require('dotenv').config();

const {
    SERVER_PORT,
    CONNECTION_STRING
} = process.env;

const app = express();

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
});

app.use( bodyParser.json());
app.use(cors());

//endpoints for simon
app.post('/sendscore', simonController.sendScore);
app.get('/highscores', simonController.getHighScores)


app.listen(SERVER_PORT, () => console.log(`listening on port: ${SERVER_PORT}`) )