const mongoose = require('mongoose');

const url = process.env.DB_URL;

mongoose.connect(url, { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const gameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    platform: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    release: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Game', gameSchema);