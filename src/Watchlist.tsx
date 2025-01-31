import { useOutletContext, NavLink } from "react-router"
import MovieCard from "./MovieCard"
import { FaFilm } from "react-icons/fa"

interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
  Runtime: string
  Genre: string
  imdbRating: string
  Country: string
  Director: string
  Actors: string
  Plot: string
}

const Watchlist = () => {
  const [userWatchList, setUserWatchList] =
    useOutletContext<[Movie[], React.Dispatch<React.SetStateAction<Movie[]>>]>()

  const removeFromWatchlist = (id: string) => {
    const newList = userWatchList.filter((movie) => movie.imdbID !== id)
    setUserWatchList(newList)
  }

  const clearWatchList = () => {
    setUserWatchList([])
  }

  const userMovieComponents = userWatchList.map((movie: Movie) => {
    return (
      <MovieCard
        key={movie.imdbID}
        movie={movie}
        isInWatchlist={true}
        onButtonClick={removeFromWatchlist}
      />
    )
  })

  return (
    <section className="pt-4 pb-8 px-4 sm:px-8 bg-gray-100">
      <h2 aria-live="polite" className="text-2xl font-bold text-center mb-6">
        My Watchlist
      </h2>
      <div id="watchlist-container" className="space-y-6">
        {userWatchList.length === 0 ? (
          <div className="flex flex-col items-center">
            <p className="text-center text-lg">
              Your watchlist is empty... Start adding movies!
            </p>
            <div className="flex justify-center p-2 text-7xl text-gray-500">
              <FaFilm />
            </div>
            <NavLink
              to="/"
              className="text-black font-bold text-sm p-2 bg-white border-2 border-yellow-400 rounded-md shadow hover:bg-yellow-400"
              role="link"
              aria-label="Navigate to search movies page"
            >
              Search for a movie!
            </NavLink>
          </div>
        ) : (
          userMovieComponents
        )}
      </div>

      {/* Clear Watchlist Button */}
      {userWatchList.length > 0 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={clearWatchList}
            className="p-2 text-red-800 bg-white border-2 border-red-800 rounded-md"
            aria-label="Clear Watchlist"
            id="clear-btn"
          >
            ❌ Clear Watchlist
          </button>
        </div>
      )}
    </section>
  )
}

export default Watchlist
