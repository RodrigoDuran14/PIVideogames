const axios = require("axios");
const {Genre} = require("../db")
require("dotenv").config();
const { URL_API, API_KEY } = process.env;


const getApiGenres = async () =>{
  const allGenres = await axios.get(`${URL_API}/genres?key=${API_KEY}`)

    const fileteredGenres = allGenres.data.results.map(genre => {
      return {name: genre.name}
    })

    await Genre.bulkCreate(fileteredGenres);
}

const verifyDb = async () =>{
  const aux = await Genre.count();
  if(aux < 1) await getApiGenres();
}

const allGenres = async () =>{

    const allGenres = await Genre.findAll({attributes: ["name"]});

    const dbGenres = allGenres.map(g => g.name)

    return dbGenres;
}

module.exports = {getApiGenres, verifyDb, allGenres }