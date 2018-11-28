const express = require('express');
const Player = require('./schema');
const Game = require('../games/schema');
const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');

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
    Player.find({}, (err, players) => {
        if(err) {
            console.trace(err);
            throw err;
        }

        res.status(200).send({ players });
    });
});

router.get('/search/:field/:value', (req, res) => {
    const { field, value } = req.params;

    const searchLikeRegex = new RegExp(`^${value}`, 'i');

    Player.find({ [field]: searchLikeRegex }, (err, players) => {
        if(err) {
            console.trace(err);
            throw err;
        }

        res.status(200).send({ players });
    })
});

router.post('/join-game', (req, res) => {
    const { gameId, playerId } = req.body;
    
    const insertPlayerPromise = Player.findOneAndUpdate({ _id: playerId }, { status: "Busy" }, (err, player) => {
        if(err) {
            console.trace(err);
            throw err;
        }
    });

    const insertGamePromise = Game.findOneAndUpdate({ _id: gameId }, { status: "Active" }, (err, game) => {
        if(err) {
            console.trace(err);
            throw err;
        }
    });

    Promise.all([insertPlayerPromise, insertGamePromise]).then(_ => {
        res.status(200).send({ success: "Successfully joined game." });
    }).catch(err => {
        if(err) {
            console.trace(err);
            throw err;
        }
    });
})

router.post('/add', (req, res) => {
    if(req.body.player) {
        const player = new Player(req.body.player);
        
        player.save(err => {
            if(err) {
                console.trace(err);
                throw err;
            }
    
            res.status(200).send({ success: "Successfully added player.", player });
        });
    } else {
        res.status(400).send({ errors: { player: "Expected a player." }});
    }
});

router.patch('/edit/:playerId', authenticateUser, (req, res) => {
    const player = req.body.player;
    const playerId = req.params.playerId;

    if(player) {
        Player.findOneAndUpdate({ _id: playerId }, player, (err, player) => {
            if(err) {
                console.trace(err);
                throw err;
            }
            
            res.status(200).send({ success: "Succesfully updated player." });
        });
    } else {
        res.status(400).send({ errors: { player: "Expected a player." }});
    }
});

router.delete('/delete/:id', authenticateUser, (req, res) => {
    const playerId = req.params.id;
    Player.findOneAndDelete({ _id: playerId }, (err, response) => {
        if(err) {
            console.trace(err);
            throw err;
        }

        res.status(200).send({ success: "Successfully deleted player." });
    });
});

module.exports = router;