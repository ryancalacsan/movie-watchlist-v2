import { useEffect, useState } from "react"
import { useOutletContext, useSearchParams } from "react-router"
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
  const [searchParams, setSearchParams] = useSearchParams()
  const [page, setPage] = useState<number>(
    Number(searchParams.get("page") || 1)
  )
  const [query, setQuery] = useState(searchParams.get("query") || "")
  const [userWatchList, setUserWatchList] =
    useOutletContext<[Movie[], React.Dispatch<React.SetStateAction<Movie[]>>]>()

  // Fetch movies based on the query and page number
  const fetchMovies = async (query: string, page: number) => {
    setIsLoading(true)
    setError(null)
    console.log(query, page)

    try {
      const fetchedMovies = await fetchMoviesData(query, page)
      setMovies(fetchedMovies)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error")
    } finally {
      setIsLoading(false)
    }
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Update URL search params for query
    setSearchParams((params) => {
      params.set("query", query)
      return params
    })
    setPage(1) // Reset page number to 1 on new search
    fetchMovies(query, 1) // Fetch movies for the first page
  }

  // Handle next page button click
  const handleNext = () => {
    const nextPage = page + 1
    setPage(nextPage)
    setSearchParams((params) => {
      params.set("page", nextPage.toString())
      return params
    })
    fetchMovies(query, nextPage)
  }

  // Handle previous page button click
  const handlePrev = () => {
    if (page > 1) {
      const prevPage = page - 1
      setPage(prevPage)
      setSearchParams((params) => {
        params.set("page", prevPage.toString())
        return params
      })
      fetchMovies(query, prevPage)
    }
  }
  // Scroll to top of the page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [page])

  // Toggle movie in/out of the watchlist
  const toggleWatchList = (id: string) => {
    const movieToToggle = movies.find((movie) => movie.imdbID === id)
    if (!movieToToggle) return

    const isAlreadyInWatchlist = userWatchList.some(
      (movie: Movie) => movie.imdbID === id
    )

    if (isAlreadyInWatchlist) {
      setUserWatchList((prevWatchList) =>
        prevWatchList.filter((movie) => movie.imdbID !== id)
      )
    } else {
      setUserWatchList((prevWatchList) => [...prevWatchList, movieToToggle])
    }
  }

  // Render movie components
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
    <section className="pt-4 pb-8 px-4 sm:px-8 bg-gray-100">
      <div className="flex flex-wrap w-full justify-center gap-2 sm:justify-between">
        {movies.length > 0 && (
          <button
            onClick={handlePrev}
            disabled={isLoading || page === 1}
            className={`${
              page === 1 || isLoading
                ? "bg-gray-200 cursor-not-allowed opacity-50"
                : "bg-white hover:bg-yellow-500"
            } px-4 py-2 border-2 border-yellow-400 rounded-md sm:order-none order-2`}
          >
            Prev
          </button>
        )}

        <form
          onSubmit={handleSubmit}
          className="flex justify-center flex-[0_0_100%] sm:flex-[0_0_60%] w-full sm:order-none order-1 mx-auto"
        >
          <label htmlFor="search-input" className="sr-only">
            Search for a movie
          </label>
          <input
            type="text"
            name="search-input"
            id="search-input"
            placeholder="eg. batman"
            className="border border-slate-600 shadow rounded-md p-2 w-100 grow"
            aria-label="Movie search input"
            required
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="submit"
            id="search-btn"
            aria-label="Search for movies"
            className="bg-white px-4 py-2 border-2 border-yellow-400 rounded-md text-sm hover:bg-yellow-400 transition-all duration-200 ml-2"
          >
            Search
          </button>
        </form>

        {movies.length > 0 && (
          <button
            onClick={handleNext}
            disabled={isLoading}
            className={`${
              isLoading
                ? "bg-gray-200 cursor-not-allowed opacity-50"
                : "bg-white hover:bg-yellow-500"
            } px-4 py-2 border-2 border-yellow-400 rounded-md sm:order-none order-3`}
          >
            Next
          </button>
        )}
      </div>

      <section id="movies-container" className="mt-6">
        <div id="search-placeholder">
          {isLoading && (
            <p role="status" aria-live="polite" className="text-center">
              Loading...
            </p>
          )}
          {error && <p style={{ color: "red" }}>Error: {error}</p>}
          {movies.length > 0 ? (
            <>
              <div className="space-y-6">{movieComponents}</div>
              <div className="flex justify-center gap-2 mt-6">
                <button
                  onClick={handlePrev}
                  disabled={isLoading || page === 1}
                  className={`${
                    page === 1 || isLoading
                      ? "bg-gray-200 cursor-not-allowed opacity-50"
                      : "bg-white hover:bg-yellow-500"
                  } px-4 py-2 border-2 border-yellow-400 rounded-md`}
                >
                  Prev
                </button>

                <button
                  onClick={handleNext}
                  disabled={isLoading}
                  className={`${
                    isLoading
                      ? "bg-gray-200 cursor-not-allowed opacity-50"
                      : "bg-white hover:bg-yellow-500"
                  } px-4 py-2 border-2 border-yellow-400 rounded-md`}
                >
                  Next
                </button>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-xl text-center p-8 font-limelight">
                Search for a movie
              </h2>
              <div className="flex justify-center p-2 text-7xl text-black">
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
