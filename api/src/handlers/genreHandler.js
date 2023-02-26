const axios = require("axios");

const getAllGenres = (req, res, next) => {
  res.send("get all genres");
};

module.exports = { getAllGenres };
