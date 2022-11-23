const mongoose = require("mongoose");

mongoose.connect(process.env.DB_CONNECTION);

const CharacterComment = require("./CharacterComment");

module.exports = {
  CharacterComment,
};
