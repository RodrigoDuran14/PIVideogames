import axios from "axios";
import {
  GET_VIDEOGAMES,
  GET_VIDEOGAME_BY_ID,
  GET_VIDEOGAME_BY_NAME,
  GET_GENRES,
  FILTER_BY_GENRE,
  FILTER_BY_ORIGIN,
  ORDER_BY_NAME,
  ORDER_BY_RATING,
  LOADING,
  READY,
} from "./action_types";

export const getVideogames = () => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      const allVideogames = await axios.get("http://localhost:3001/games");
      dispatch({
        type: GET_VIDEOGAMES,
        payload: allVideogames.data,
      });
      dispatch(ready());
    } catch (error) {
      console.log("Error in action GET_VIDEOGAMES ", error);
    }
  };
};

export const getVideogamesById = (id) => {
  return async (dispatch) => {
    dispatch(loading())
    try {
      const gameDetail = await axios.get(`http://localhost:3001/games/${id}`);
      dispatch({
        type: GET_VIDEOGAME_BY_ID,
        payload: gameDetail.data,
      });
      dispatch(ready())
    } catch (error) {
      console.log("Error in action GET_VIDEOGAME_BY_ID ", error);
    }
  };
};

export const getVideogameByName = (name) => {
  return async (dispatch) => {
    try {
      const videogameName = await axios.get(
        `http://localhost:3001/games?name=${name}`
      );
      return dispatch({
        type: GET_VIDEOGAME_BY_NAME,
        payload: videogameName.data,
      });
    } catch (error) {
      console.log("Error in action GET_VIDEOGAME_BY_NAME ", error);
    }
  };
};

export const postVideogame = (payload) => {
  return async (dispatch) => {
    try {
      var newVideogame = await axios.post(
        "http://localhost:3001/games",
        payload
      );
      return newVideogame;
    } catch (error) {
      console.log("Error in action POST_VIDEOGAME ", error);
    }
  };
};

export const getGenres = () => {
  return async (dispatch) => {
    try {
      const allGenres = await axios.get("http://localhost:3001/genres");
      return dispatch({
        type: GET_GENRES,
        payload: allGenres.data,
      });
    } catch (error) {
      console.log("Error in action GET_GENRES ", error);
    }
  };
};

export const filterByGenre = (payload) => {
  return {
    type: FILTER_BY_GENRE,
    payload,
  };
};

export const filterByOrigin = (payload) => {
  return {
    type: FILTER_BY_ORIGIN,
    payload,
  };
};

export const orderByName = (payload) => {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
};

export const orderByRating = (payload) => {
  return {
    type: ORDER_BY_RATING,
    payload,
  };
};

export const loading = () => {
  return {
    type: LOADING,
  }
}

export const ready = () =>{
  return {
    type: READY,
  }
}