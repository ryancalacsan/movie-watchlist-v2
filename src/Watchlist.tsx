import { useOutletContext } from "react-router"
import MovieCard from "./MovieCard"

const Watchlist = () => {
  const [userWatchList, setUserWatchList] = useOutletContext()

  const removeFromWatchlist = (id: string) => {
    const newList = userWatchList.filter((movie) => movie.imdbID !== id)
    setUserWatchList(newList)
  }

  const userMovieComponents = userWatchList.map((movie) => (
    <MovieCard
      key={movie.imdbID}
      movie={movie}
      buttonText="Remove from Watchlist"
      onButtonClick={removeFromWatchlist}
    />
  ))

  return <>{userMovieComponents}</>
}

export default Watchlist
