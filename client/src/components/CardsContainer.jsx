import Card from "./Card";
import style from "../styles/CardsContainer.module.css";
import { useSelector} from "react-redux";

export default function CardsContainer() {
  const videogames = useSelector((state) => state.videogames);

  return (
    <div className={style.cardContainer}>
      {videogames.map((game) => {
        return (
          <Card
            id={game.id}
            name={game.name}
            image={game.image}
            genres={game.genres}
          />
        );
      })}
    </div>
  );
}
