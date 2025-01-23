import { useOutletContext } from "react-router"

export default function Watchlist() {
  const [userWatchList, setUserWatchList] = useOutletContext()

  const userMovieComponents = userWatchList.map((movie) => (
    <div
      key={movie.imdbID}
      className="movie-container overflow-hidden flex border-2 p-4 m-4 border-slate-700 shadow rounded-md"
    >
      <img
        className="movie-thumbnail h-60 my-auto max-w-40"
        src={movie.Poster}
      />
      <div className="movie-info p-4 flex flex-col gap-2">
        <h2 className="movie-title text-xl font-bold line-clamp-2">
          {movie.Title}
        </h2>
        <div className="movie-stats flex gap-4 text-sm">
          <p>{movie.Year}</p>
          <p>{movie.Runtime}</p>
          <p>{movie.Genre}</p>
        </div>
        <p>imdb Rating {movie.imdbRating}</p>
        <p className="line-clamp-4">{movie.Plot}</p>
        <button
          onClick={() => {
            removeFromWatchlist(movie.imdbID)
          }}
          className="add-btn self-end"
          data-id="${movie.imdbID}"
        >
          Remove from Watchlist
        </button>
      </div>
    </div>
  ))

  const removeFromWatchlist = (id) => {
    const newList = userWatchList.filter((movie) => movie.imdbID !== id)
    setUserWatchList(newList)
  }

  return <>{userMovieComponents}</>
}
