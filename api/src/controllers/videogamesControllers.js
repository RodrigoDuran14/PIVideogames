const axios = require("axios");
require("dotenv").config();
const { URL_API, API_KEY } = process.env;
const { Videogame, Genre } = require("../db");

const getApiVideogames = async () => {
  const allApiGames = [];

  let url = `${URL_API}/games?key=${API_KEY}`;

  for (let i = 1; i < 6; i++) {
    let pages = await axios.get(url);

    url = pages.data.next;

    pages.data.results.map((g) => {
      allApiGames.push({
        id: g.id,
        name: g.name,
        image: g.background_image,
        released: g.released,
        genres: g.genres.map((genre) => genre.name) + " ",
        rating: g.rating,
        platforms: g.platforms.map((p) => p.platform.name) + " ",
      });
    });
  }
  return allApiGames;
};

const getDbVideogames = async () => {
  const db = await Videogame.findAll({
    include: {
      model: Genre,
      attributes: ["name"],
      through: { attributes: [] },
    },
  });

  const dbfilter = db.map(g => {
    let a = []
    for(let i =0; i<g.genres.length;i++){
      a.push(g.genres[i].name)
    }
    return {
      id: g.id,
      name: g.name,
      image: g.image,
      rating: g.rating,
      platforms: g.platforms,
      genres: a,
    }
  })

  return dbfilter;
};

const getAllGames = async () => {
  const apiGames = await getApiVideogames();
  const dbGames = await getDbVideogames();
  const allGames = [...dbGames, ...apiGames];
  return allGames;
};

const getVideogameByName = async (name) => {
  const allGames = await getAllGames();

  const result = await allGames.filter((game) =>
    game.name.toLowerCase().includes(name.toLowerCase())
  );

  return result;
};

const getVideogameById = async (id) => {
  if (!/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(id)) {
    const result = await axios.get(`${URL_API}/games/${id}?key=${API_KEY}`);
    const gameDetail = {
      id: result.data.id,
      name: result.data.name,
      image: result.data.background_image,
      released: result.data.released,
      description: result.data.description_raw,
      genres: " " + result.data.genres.map((genre) => genre.name) + " ",
      rating: result.data.rating,
      platforms: " " + result.data.platforms.map((p) => p.platform.name) + " ",
    };
    return gameDetail;
  } else {
    const resultDb = await Videogame.findByPk(id, {
      include: {
        model: Genre,
        attributes: ["name"],
        through: { attributes: [] },
      },
    });

    const detailDb = {
      id: resultDb.id,
      name: resultDb.name,
      image: resultDb.image,
      released: resultDb.released,
      description: resultDb.description,
      rating: resultDb.rating,
      platforms: resultDb.platforms + " ",
      genres: resultDb.genres.map(g=>g.name) + " ",
    }

    return detailDb
  }
};


module.exports = {
  getApiVideogames,
  getDbVideogames,
  getAllGames,
  getVideogameByName,
  getVideogameById,
};
