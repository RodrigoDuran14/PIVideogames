import { Link } from "react-router-dom";
import style from "../styles/Card.module.css";

export default function Card({ id, image, name, genres }) {

  return (
    <Link to={`/games/${id}`} className={style.link}>
      <div className={style.container}>
        <img src={image} alt="videogame" className={style.img}  />
        <h3 className={style.name}>{name}</h3>
        <h5 className={style.genres}>{genres}</h5>
      </div>
    </Link>
  );
}
