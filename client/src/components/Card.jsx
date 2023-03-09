import { Link } from "react-router-dom";
import style from "../styles/Card.module.css";

export default function Card({ id, image, name, genres }) {
  return (
    <Link to={`/games/${id}`}>
      <div className={style.container}>
        <img src={image} alt="videogame" />
        <h4>
          {genres && typeof genres === "object"
            ? genres.map((g) => g.name)
            : genres}
            
        </h4>
        <h3>{name}</h3>
      </div>
    </Link>
  );
}
