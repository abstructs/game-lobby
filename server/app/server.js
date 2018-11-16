require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/user', require('./users/routes'));
app.use('/player', require('./players/routes'));
app.use('/game', require('./games/routes'));

app.listen(port, () => console.log(`Now listening on port ${port}`));