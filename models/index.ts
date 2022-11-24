const mongoose = require("mongoose");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const connURL = `mongodb://mongodb:27017/rickandmorty-db`;

mongoose.connect(connURL);

const CharacterComment = require("./CharacterComment");

module.exports = {
  CharacterComment,
};
