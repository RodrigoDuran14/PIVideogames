import { Link } from "react-router-dom";
import style from "../styles/Card.module.css";


export default function Card({ id,image, name, genres }) {
  return (
    <Link to={`/games/${id}`}>
      <div className={style.container}>
        <img src={image} alt="videogame" />
        <h3>{name}</h3>
        <h5>{genres}</h5>
      </div>
    </Link>
  );
}
