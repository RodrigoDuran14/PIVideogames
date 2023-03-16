import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getVideogamesById } from "../redux/actions";
import { useParams } from "react-router-dom";
import style from "../styles/Details.module.css";
import Spinner from "../components/spinner";

export default function Detail() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const gameDetails = useSelector((state) => state.gamesDetails);
  const display = useSelector((state) => state.display);

  useEffect(() => {
    dispatch(getVideogamesById(id));
  }, [dispatch, id]);

  return (
    <>
      {display ? (
        <Spinner />
      ) : (
        <div className={style.container}>
          <h2 className={style.title}>{`${gameDetails.name} Detail`}</h2>
          <div className={style.c}>
            <div className={style.imageContainer}>
              <img
                src={gameDetails.image}
                alt={gameDetails.name}
                className={style.img}
              />
            </div>
            <div className={style.infoContainer}>
              <div className={style.flex}>
                <p className={style.subtitles}>RELEASE DATE:</p>
                <p className={style.data}>{gameDetails.released}</p>
                <p className={style.subtitles}>RATING:</p>
                <p className={style.data}>{gameDetails.rating}</p>
              </div>
              <div className={style.infoContainer2}>
                <p className={style.subtitles}>DESCRIPTION:</p>
                <p className={style.description}>{gameDetails.description}</p>

                <p className={style.subtitles}>PLATFORMS:</p>
                <p className={style.array}>{gameDetails.platforms}</p>

                <p className={style.subtitles}>GENRES:</p>
                <p className={style.array}>{gameDetails.genres}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
