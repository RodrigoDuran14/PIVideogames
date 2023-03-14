import CardsContainer from "../components/CardsContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getVideogames, getGenres, orderByName, orderByRating, filterByOrigin, filterByGenre, } from "../redux/actions/index";
import style from "../styles/Home.module.css"

export default function Home() {
  const dispatch = useDispatch();
  const genres = useSelector(state => state.genres);

  const [order, setOrder] = useState("");

  useEffect(() => {
    dispatch(getVideogames());
    dispatch(getGenres());
  }, [dispatch]);

  const handleClick = (e)=>{
    dispatch(getVideogames());
  }

  const handleOrderByname = (e) => {
    dispatch(orderByName(e.target.value));
    setOrder(e.target.value)
  };

  const handleOrderByRating = (e)=>{
    dispatch(orderByRating(e.target.value));
    setOrder(e.target.value);
  }

  const handleFilterByOrigin = (e)=>{
    dispatch(filterByOrigin(e.target.value));
    setOrder(e.target.value)
  }

const handleFilterByGenre = (e)=>{
  dispatch(filterByGenre(e.target.value));
  setOrder(e.target.value)
}


  return (
    <div>
      <header>
        <div className={style.header}>
          <button onClick={e=>handleClick(e)} className={style.btn} >Reload Videogames</button>
          <select onChange={(e) => handleOrderByname(e)} className={style.select} >
            <option disable>Alphabetical order</option>
            <option value="ASC">Ascendente</option>
            <option value="DESC">Descendente</option>
          </select>
          <select onChange={e=>handleOrderByRating(e)} className={style.select}>
            <option disable>Rating</option>
            <option value="ASC">Ascendente</option>
            <option value="DESC">Descendente</option>
          </select>
          <select onChange={e=>handleFilterByOrigin(e)} className={style.select}>
            <option disable>Created</option>
            <option value="All">All</option>
            <option value="Created">Created</option>
            <option value="Api">Api</option>
          </select>
          <select onChange={e=>handleFilterByGenre(e)} className={style.select}>
            <option disable>Genres</option>
            <option value="All">All</option>
            {genres && genres.map(g => (<option value={g}>{g}</option>))}
          </select>
        </div>
      </header>
      <main>
        <CardsContainer />
      </main>
    </div>
  );
}
