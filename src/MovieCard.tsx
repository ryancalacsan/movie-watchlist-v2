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
  isInWatchlist: boolean
  onButtonClick: (id: string) => void
}

const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  isInWatchlist,
  onButtonClick,
}) => {
  return (
    <article
      key={movie.imdbID}
      className="movie-container flex flex-col sm:flex-row border-2 p-4 m-4 border-slate-700 rounded-md transition-transform transform hover:scale-105 hover:translate-y-[-4px] hover:shadow-lg overflow-hidden w-full"
      aria-labelledby={`movie-title-${movie.imdbID}`}
      aria-describedby={`movie-description-${movie.imdbID}`}
    >
      {/* Image Section */}
      <img
        src={movie.Poster}
        alt={`Poster for ${movie.Title}`}
        className="movie-thumbnail w-full sm:w-48 md:w-56 h-auto object-cover rounded-md mb-4 sm:mb-0 sm:mr-4"
        role="img"
        aria-hidden="false"
      />

      {/* Info Section */}
      <div className="movie-info flex flex-col justify-between p-4 sm:ml-4 w-full">
        <h2
          className="movie-title text-xl font-bold line-clamp-2"
          id={`movie-title-${movie.imdbID}`}
        >
          {movie.Title}
        </h2>
        <div className="movie-stats flex gap-4 text-sm">
          <p>{movie.Year}</p>
          <p>{movie.Runtime}</p>
          <p>{movie.Genre}</p>
        </div>
        <p>IMDb Rating: {movie.imdbRating}</p>
        <p id={`movie-description-${movie.imdbID}`} className="line-clamp-4">
          {movie.Plot}
        </p>

        {/* Button */}
        <button
          onClick={() => onButtonClick(movie.imdbID)}
          className="add-btn self-end sm:self-start mt-4 sm:mt-0 bg-blue-500 text-white rounded-md px-4 py-2"
          aria-label={
            isInWatchlist
              ? `Remove ${movie.Title} from Watchlist`
              : `Add ${movie.Title} to Watchlist`
          }
          title={
            isInWatchlist
              ? `Remove ${movie.Title} from Watchlist`
              : `Add ${movie.Title} to Watchlist`
          }
        >
          {isInWatchlist ? "Remove from Watchlist ❌" : "Add to Watchlist ✅"}
        </button>
      </div>
    </article>
  )
}

export default MovieCard
