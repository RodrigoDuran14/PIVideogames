import CardsContainer from "../components/CardsContainer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {getVideogames} from "../redux/actions/index";

export default function Home(){
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getVideogames())
  }, [dispatch])

  return(
    <div>
      <CardsContainer />
    </div>
  )
}