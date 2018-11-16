const mongoose = require('mongoose');

// move to .env
const url = process.env.DB_URL;

mongoose.connect(url);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rank: {
        type: String,
        required: true
    },
    score: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    gamePlayed: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Player', playerSchema);