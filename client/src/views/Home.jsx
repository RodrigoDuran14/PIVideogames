import CardsContainer from "../components/CardsContainer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {getVideogames, getGenres} from "../redux/actions/index";

export default function Home(){
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getVideogames())
    dispatch(getGenres());
  }, [dispatch])

  return(
    <div>
      <CardsContainer />
    </div>
  )
}