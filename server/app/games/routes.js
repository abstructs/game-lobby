const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const Game = require('./schema');

const router = express.Router();

const authenticateUser = (req, res, next) => {
    const auth = req.get('Authorization');

    if(!auth) {
        return res.status(401).send({ errors: { auth: "No credentials sent." }});
    }

    const token = auth.split(' ')[1];
    const cert = fs.readFileSync(path.resolve(__dirname) + '/../../private.key');

    try {
        const decoded = jwt.verify(token, cert);
        next();
    } catch(err) {
        console.trace(err);
        return res.status(403).send({ errors: { auth: "Invalid credential." }});
    }
}

router.get('/', (req, res) => {
    Game.find().exec((err, games) => {
        if(err) {
            console.trace(err);
            throw err;
        }

        res.status(200).send({ games });
    });
});

router.post('/add', authenticateUser, (req, res) => {
    if(req.body.game) {
        const game = new Game(req.body.game);
        
        game.save(err => {
            if(err) {
                console.trace(err);
                throw err;
            }
    
            res.status(200).send({ success: "Successfully added game.", game });
        });
    } else {
        res.status(400).send({ errors: { game: "Expected a game." }});
    }
});

// router.post('/edit', (req, res) => {
//     res.send('got game edit');
// });

// router.delete('/delete', (req, res) => {
//     res.send('got game delete');
// });

module.exports = router;