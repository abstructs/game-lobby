const mongoose = require('mongoose');

// move to .env
const url = process.env.DB_URL;

mongoose.connect(url);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const gameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Game', gameSchema);