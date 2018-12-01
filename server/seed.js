const mongoose = require("mongoose");

// const bcrypt = require('bcrypt');
// const path = require('path');

const url = process.env.DB_URL;

mongoose.connect(url, { useNewUrlParser: true });

const User = require('./app/users/schema.js');
const Player = require('./app/players/schema.js');
const Game = require('./app/games/schema.js');

const users = [
    {
        username: "admin",
        password: "admin",
    }
];

const names = ["Zandra", "Tfue", "Faker", "Abstruct", "Shroud", "xXSniperXx", "tacoman123", "7733holly"];
const ranks = ["1", "2", "3", "4", "5"];
const times = ["1 minute", "5 minutes", "10 minutes", "30 minutes", "1 hour"];
const gamesPlayed = ["Diablo 3", "Black Desert Online", "League of Legends", "Counter Strike", "Starcraft 2", "Minecraft"];
const playerStatuses = ["Available", "Unavailable"];

const getRandom = (arr) => {
    return arr[Math.round(Math.random() * (arr.length - 1))];
}

const players = names.map((name => {
    return new Player({
        name,
        rank: getRandom(ranks),
        time: getRandom(times),
        gamePlayed: getRandom(gamesPlayed),
        status: getRandom(playerStatuses)
    });
}));

console.log(players);

// const players = [
//     {
//         name: "",
//         rank: "",
//         score: "",
//         time: "",
//         gamePlayed: "",
//         status: ""
//     }
// ];

const titles = ["Diablo 3", "Black Desert Online", "League of Legends", "Counter Strike", "Starcraft 2", "Minecraft", "Fortnite"];
const platforms = ["Xbox One", "PS4", "Nintendo Switch", "PC"];
const genres = ["RPG", "FPS", "Strategy", "Indie", "Sandbox", "Horror"];
const publishers = ["Blizzard", "Treyarch", "Riot Games", "Valve", "Epic Games"];
const releases = ["2010", "2012", "2014", "2016", "2018"];
const gameStatuses = ["Active", "Inactive"];

const games = titles.map((title => {
    return new Game({
        title,
        platform: getRandom(platforms),
        publisher: getRandom(publishers),
        release: getRandom(releases),
        status: getRandom(gameStatuses)
    });
}));

console.log(games)

// const games = [
//     {
//         title: "",
//         platform: "",
//         genre: "",
//         publisher: "",
//         release: "",
//         status: ""
//     }
// ]