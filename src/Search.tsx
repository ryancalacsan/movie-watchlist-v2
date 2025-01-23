import { useState } from "react"
import { useOutletContext } from "react-router"

// export default function Search() {
//   const [movies, setMovies] = useState([])
//   const [movieElements, setMovieElements] = useState([])

//   async function searchForMovie(formData: any) {
//     const searchInput: string = formData.get("search-input")
//     const res = await fetch(
//       `${baseURL}?s=${searchInput}&type=movie&apikey=${apiKey}`
//     )
//     const data = await res.json()
//     setMovies(data.Search)
//     console.log(movies)
//     setMovieElements(
//       movies.map((movie) => {
//         return <div>{movie.Title}</div>
//       })
//     )
//     console.log(movieElements)
//   }

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

  // fetch searched movies

  const fetchMovies = async (formData) => {
    setIsLoading(true)
    setError(null)
    setMovies([])

    try {
      const searchInput: string = formData.get("search-input")
      const apiKey = import.meta.env.VITE_OMDB_API_KEY
      const res = await fetch(
        `http://www.omdbapi.com/?s=${searchInput}&type=movie&apikey=${apiKey}`
      )
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`)
      }
      const data = await res.json()
      data.Search.forEach(async (movie) => {
        const res = await fetch(
          `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=${apiKey}`
        )
        const data = await res.json()
        setMovies((prevMovies) => {
          return [...prevMovies, data]
        })
      })
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setIsLoading(false)
    }
  }

  // map over api data to display movies

  const movieComponents = movies.map((movie) => (
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
            addToWachList(movie.imdbID)
          }}
          className="add-btn self-end"
          data-id="${movie.imdbID}"
        >
          Add to Watchlist
        </button>
      </div>
    </div>
  ))

  // add movie to userWatchList
  const addToWachList = (id) => {
    const movieToAdd = movies.find((movie) => movie.imdbID === id)
    setUserWatchList((prevWatchList) => {
      return [...prevWatchList, movieToAdd]
    })
    console.log(userWatchList)
  }

  return (
    <>
      <section className="pt-4">
        <form action={fetchMovies} className="flex w-11/12 mx-auto gap-4">
          <input
            type="text"
            name="search-input"
            id="search-input"
            placeholder="eg. batman"
            className="border border-slate-600 shadow rounded-md flex-1 p-1"
          />
          <button type="submit" id="search-btn">
            Search
          </button>
        </form>
        <section id="movies-container">
          <div id="search-placeholder">
            {!movies && <p>Start Exploring</p>}
            {isLoading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            {movieComponents}
          </div>
        </section>
      </section>
    </>
  )
}

export default Search
