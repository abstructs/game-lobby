const express = require('express');
const Player = require('./schema');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const router = express.Router();

const authenticateUser = (req, res, next) => {
    const auth = req.get('Authorization');

    if(!auth) {
        return res.status(401).send({ errors: { auth: "No credentials sent." }});
    }

    const token = auth.split(' ')[1];
    const cert = fs.readFileSync('private.key');

    try {
        const decoded = jwt.verify(token, cert);
        next();
    } catch(err) {
        return res.status(403).send({ errors: { auth: "Invalid credential." }});
    }
}

router.get('/', (req, res) => {
    Player.find().exec((err, users) => {
        if(err) {
            console.trace(err);
            throw err;
        }

        res.status(200).send({ users });
    });
});

router.post('/add', authenticateUser, (req, res) => {
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