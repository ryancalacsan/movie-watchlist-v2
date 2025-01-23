import React from "react"

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

interface MovieCardProps {
  movie: Movie
  buttonText: string
  isInWatchlist: boolean
  onButtonClick: (id: string) => void
}

const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  buttonText,
  isInWatchlist,
  onButtonClick,
}) => {
  return (
    <div
      key={movie.imdbID}
      className="movie-container flex border-2 p-4 m-4 border-slate-700 shadow rounded-md"
    >
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="movie-thumbnail h-60 my-auto max-w-40"
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
          onClick={() => onButtonClick(movie.imdbID)}
          className="add-btn self-end"
        >
          {isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
        </button>
      </div>
    </div>
  )
}

export default MovieCard
