const { getApiVideogames } = require("../controllers/videogamesControllers");
const { Videogame, Genre } = require("../db");
const axios = require("axios")

const getAllVideoGames = async (req,res,next) =>{
  try {
    const allgames = await getApiVideogames()
    res.send(allgames)
  } catch (error) {
    next(error)
  }


}

const getVideogamesById = (req, res, next) => {
  res.send("get videogame by id");
};

const postVideogames = (req, res, next) => {
  res.send("create videogames");
};

module.exports = {
  getAllVideoGames,
  getVideogamesById,
  postVideogames,
};
