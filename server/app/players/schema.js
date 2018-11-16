const mongoose = require('mongoose');

// move to .env
const url = process.env.DB_URL;

mongoose.connect(url);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const playerSchema = new mongoose.Schema({
    playerName: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Player', playerSchema);