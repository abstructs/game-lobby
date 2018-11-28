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
    Game.find({}, (err, games) => {
        if(err) {
            console.trace(err);
            throw err;
        }

        res.status(200).send({ games });
    });
});

router.get('/search/:field/:value', (req, res) => {
    const { field, value } = req.params;

    const searchLikeRegex = new RegExp(`^${value}`);

    Game.find({ [field]: searchLikeRegex }, (err, games) => {
        if(err) {
            console.trace(err);
            throw err;
        }

        res.status(200).send({ games });
    })
});

router.post('/add', (req, res) => {
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

router.patch('/edit/:gameId', authenticateUser, (req, res) => {
    const game = req.body.game;
    const gameId = req.params.gameId;

    if(game) {
        Game.findOneAndUpdate({ _id: gameId }, game, (err, game) => {
            if(err) {
                console.trace(err);
                throw err;
            }
            
            res.status(200).send({ success: "Succesfully updated game." });
        });
    } else {
        res.status(400).send({ errors: { player: "Expected a game." }});
    }
});

router.delete('/delete/:id', authenticateUser, (req, res) => {
    const gameId = req.params.id;
    Game.findOneAndDelete({ _id: gameId }, (err, response) => {
        if(err) {
            console.trace(err);
            throw err;
        }

        res.status(200).send({ success: "Successfully deleted game." });
    });
});

module.exports = router;