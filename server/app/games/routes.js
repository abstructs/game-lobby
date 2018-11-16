const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('got game get all');
});

router.post('/add', (req, res) => {
    res.send('got game add');
});

router.post('/edit', (req, res) => {
    res.send('got game edit');
});

router.delete('/delete', (req, res) => {
    res.send('got game delete');
});

module.exports = router;