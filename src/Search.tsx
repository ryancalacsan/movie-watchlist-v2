import { useState } from "react"
import { useOutletContext } from "react-router"
import { fetchMoviesData } from "./api"
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

const Search: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [userWatchList, setUserWatchList] = useOutletContext()

  const fetchMovies = async (formData: FormData) => {
    setIsLoading(true)
    setError(null)

    try {
      const searchInput = formData.get("search-input")
      const fetchedMovies = await fetchMoviesData(searchInput)
      setMovies(fetchedMovies)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error")
    } finally {
      setIsLoading(false)
    }
  }

  const toggleWatchList = (id: string) => {
    const movieToToggle = movies.find((movie) => movie.imdbID === id)
    if (!movieToToggle) return

    const isAlreadyInWatchlist = userWatchList.some(
      (movie) => movie.imdbID === id
    )

    if (isAlreadyInWatchlist) {
      setUserWatchList((prevWatchList) =>
        prevWatchList.filter((movie) => movie.imdbID !== id)
      )
    } else {
      setUserWatchList((prevWatchList) => [...prevWatchList, movieToToggle])
    }
  }

  const movieComponents = movies.map((movie) => {
    const isInWatchlist = userWatchList.some(
      (movieInList) => movieInList.imdbID === movie.imdbID
    )
    return (
      <MovieCard
        key={movie.imdbID}
        movie={movie}
        isInWatchlist={isInWatchlist}
        onButtonClick={toggleWatchList}
      />
    )
  })
  return (
    <section className="pt-4">
      <form action={fetchMovies} className="flex w-11/12 mx-auto gap-4">
        <input
          type="text"
          name="search-input"
          id="search-input"
          placeholder="eg. batman"
          className="border border-slate-600 shadow rounded-md flex-1 p-1"
        />
        <button type="submit">Search</button>
      </form>
      <section id="movies-container">
        <div id="search-placeholder">
          {isLoading && <p>Loading...</p>}
          {error && <p style={{ color: "red" }}>Error: {error}</p>}
          {movies.length > 0 ? (
            movieComponents
          ) : (
            <>
              <h2 className="text-xl text-center p-8">Search for a movie 👆🏼</h2>
              <div className="flex justify-center p-2 text-7xl">
                <FaFilm />
              </div>
            </>
          )}
        </div>
      </section>
    </section>
  )
}

export default Search
