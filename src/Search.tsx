import { useState } from "react"
import { useOutletContext } from "react-router"
import { fetchMoviesData } from "./api"
import MovieCard from "./MovieCard"

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

  const addToWatchList = (id: string) => {
    const movieToAdd = movies.find((movie) => movie.imdbID === id)
    if (movieToAdd) {
      setUserWatchList((prevWatchList) => [...prevWatchList, movieToAdd])
    }
  }

  const movieComponents = movies.map((movie) => (
    <MovieCard
      key={movie.imdbID}
      movie={movie}
      buttonText="Add to Watchlist"
      onButtonClick={addToWatchList}
    />
  ))

  return (
    <section className="pt-4">
      <form action={fetchMovies} className="flex w-11/12 mx-auto gap-4">
        <input
          type="text"
          name="search-input"
          id="search-input"
          placeholder="Search for a movie..."
          className="border border-slate-600 shadow rounded-md flex-1 p-1"
        />
        <button type="submit">Search</button>
      </form>
      <section id="movies-container">
        <div id="search-placeholder">
          {isLoading && <p>Loading...</p>}
          {error && <p style={{ color: "red" }}>Error: {error}</p>}
          {movies.length > 0 ? movieComponents : <p>Start exploring...</p>}
        </div>
      </section>
    </section>
  )
}

export default Search
