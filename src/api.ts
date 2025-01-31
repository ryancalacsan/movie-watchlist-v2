export const fetchMoviesData = async (searchInput: string) => {
  const apiKey = import.meta.env.VITE_OMDB_API_KEY
  const res = await fetch(
    `https://www.omdbapi.com/?s=${searchInput}&type=movie&apikey=${apiKey}`
  )
  if (!res.ok) throw new Error(`Error: ${res.status}`)
  const data = await res.json()
  const movieDetailsPromises = data.Search.map((movie: { imdbID: string }) =>
    fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${apiKey}`).then(
      (res) => res.json()
    )
  )
  const movies = await Promise.all(movieDetailsPromises)
  return movies
}
