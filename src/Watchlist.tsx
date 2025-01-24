import { useOutletContext } from "react-router"
import MovieCard from "./MovieCard"
import { FaFilm } from "react-icons/fa"

const Watchlist = () => {
  const [userWatchList, setUserWatchList] = useOutletContext()

  const removeFromWatchlist = (id: string) => {
    const newList = userWatchList.filter((movie) => movie.imdbID !== id)
    setUserWatchList(newList)
  }

  const clearWatchList = () => {
    setUserWatchList([])
  }

  const userMovieComponents = userWatchList.map((movie) => {
    return (
      <MovieCard
        key={movie.imdbID}
        movie={movie}
        buttonText="Remove from Watchlist"
        isInWatchlist={true}
        onButtonClick={removeFromWatchlist}
      />
    )
  })

  return (
    <section className="pt-4">
      <h2 aria-live="polite" className="text-2xl font-bold text-center mb-4">
        My Watchlist
      </h2>
      <div id="watchlist-container" role="list">
        {userWatchList.length === 0 ? (
          <>
            <p className="text-center">
              Your watchlist is empty 😢 Start adding movies!
            </p>
            <div className="flex justify-center p-2 text-7xl">
              <FaFilm />
            </div>
          </>
        ) : (
          userMovieComponents
        )}
      </div>
      {userWatchList.length > 0 && (
        <div className="flex justify-center">
          <button
            onClick={clearWatchList}
            className="p-2 text-red-800"
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
