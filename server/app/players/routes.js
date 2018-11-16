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
    const query = Player.find();
    query.exec((err, docs) => {
        console.log(docs);
    });
    
    res.send('got player get all');
});

router.post('/add', authenticateUser, (req, res) => {
    // const player = new Player(req.body.player);

    // player.save(err => {
    //     if(err) throw err;
    // });

    res.send('got player add');
});

router.post('/edit', (req, res) => {
    res.send('got player edit');
});

router.delete('/delete', (req, res) => {
    res.send('got player delete');
});

module.exports = router;