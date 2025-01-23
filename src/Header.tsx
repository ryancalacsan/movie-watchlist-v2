import { Link } from "react-router"

export default function Header() {
  return (
    <header>
      <h1>Find your film</h1>
      <Link to="/watchlist">My Watchlist</Link>
    </header>
  )
}
