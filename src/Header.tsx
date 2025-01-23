import { Link } from "react-router"
import { useOutletContext } from "react-router"

export default function Header() {
  const [userWatchList, setUserWatchList] = useOutletContext()

  return (
    <header>
      <h1>Find your film</h1>
      <Link to="/watchlist">My Watchlist</Link>
    </header>
  )
}
