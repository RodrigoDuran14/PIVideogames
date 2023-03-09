import style from "../styles/Paginado.module.css"

export default function paginado({gamesPerPage, videogames, paginado}){
  const pageNumbers = []

  for(let i = 1; i<=Math.ceil(videogames/gamesPerPage); i++){
    pageNumbers.push(i);
  }

  return(
    <div className={style.paginado}>
      <ul>
        {pageNumbers && pageNumbers.map(number => {
          return( 
            <li key={number} className={style.pages} >
              <a onClick={()=> paginado(number)} className={style.numbers} >{number}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}