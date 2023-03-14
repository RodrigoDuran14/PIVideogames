import Card from "./Card";
import style from "../styles/CardsContainer.module.css";
import { useSelector} from "react-redux";
import { useState, useEffect } from "react";
import Paginado from "./Paginado";
import Spinner from "./spinner";

export default function CardsContainer() {
  const videogames = useSelector((state) => state.videogames);

  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage] = useState(15);
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = videogames.slice(indexOfFirstGame, indexOfLastGame);

  const paginado = (PageNumber) => {
    setCurrentPage(PageNumber);
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div> 
      <div className={style.cardContainer}>
        {currentGames.map((game) => {
          return (
            <Card
              key={game.id}
              id={game.id}
              name={game.name}
              image={game.image}
              genres={game.genres}
            />
          );
        })}
      </div>
      <div className={style.paginado}>
        <Paginado
          gamesPerPage={gamesPerPage}
          videogames={videogames.length}
          paginado={paginado}
        />
      </div>
    </div>
  );
}
