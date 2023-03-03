import Card from "./Card";
import style from "../styles/CardContainer.module.css";
import {useSelector} from "react-redux";

export default function CardContainer(){
  //const videogames = useSelector(state => state.videogames);

  const videogames = [
    {
        "id": 3498,
        "name": "Grand Theft Auto V",
        "image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
        "released": "2013-09-17",
        "genres": [
            "Action",
            "Adventure"
        ],
        "rating": 4.47,
        "platforms": [
            "PlayStation 5",
            "Xbox Series S/X",
            "PlayStation 4",
            "PC",
            "PlayStation 3",
            "Xbox 360",
            "Xbox One"
        ]
    },
    {
        "id": 3328,
        "name": "The Witcher 3: Wild Hunt",
        "image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        "released": "2015-05-18",
        "genres": [
            "Action",
            "Adventure",
            "RPG"
        ],
        "rating": 4.66,
        "platforms": [
            "Xbox Series S/X",
            "PlayStation 4",
            "Nintendo Switch",
            "PC",
            "Xbox One",
            "PlayStation 5"
        ]
    },
    {
        "id": 4200,
        "name": "Portal 2",
        "image": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
        "released": "2011-04-18",
        "genres": [
            "Shooter",
            "Puzzle"
        ],
        "rating": 4.62,
        "platforms": [
            "Xbox 360",
            "Linux",
            "macOS",
            "PlayStation 3",
            "PC",
            "Xbox One"
        ]
    },
    {
        "id": 5286,
        "name": "Tomb Raider (2013)",
        "image": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
        "released": "2013-03-05",
        "genres": [
            "Action",
            "Adventure"
        ],
        "rating": 4.06,
        "platforms": [
            "PlayStation 4",
            "macOS",
            "PC",
            "Xbox One",
            "Xbox 360",
            "PlayStation 3"
        ]
    },
    {
        "id": 4291,
        "name": "Counter-Strike: Global Offensive",
        "image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
        "released": "2012-08-21",
        "genres": [
            "Action",
            "Shooter"
        ],
        "rating": 3.56,
        "platforms": [
            "PC",
            "Xbox 360",
            "PlayStation 3"
        ]
    },
    {
        "id": 13536,
        "name": "Portal",
        "image": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
        "released": "2007-10-09",
        "genres": [
            "Adventure",
            "Puzzle"
        ],
        "rating": 4.51,
        "platforms": [
            "Android",
            "PlayStation 3",
            "Xbox 360",
            "Linux",
            "macOS",
            "PC",
            "Nintendo Switch"
        ]
    },
    {
        "id": 12020,
        "name": "Left 4 Dead 2",
        "image": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        "released": "2009-11-17",
        "genres": [
            "Action",
            "Shooter"
        ],
        "rating": 4.09,
        "platforms": [
            "macOS",
            "Linux",
            "PC",
            "Xbox 360"
        ]
    }]
  return(
    <div className={style.cardContainer}>
      {videogames.map(game => {
        return <Card 
        id={game.id}
        name={game.name}
        image={game.image}
        genres={game.genres} />
      })}
    </div>
  )
}