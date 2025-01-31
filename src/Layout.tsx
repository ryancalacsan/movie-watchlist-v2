import { NavLink, Outlet } from "react-router"
import { useState, useEffect } from "react"

const useUserWatchList = () => {
  const [userWatchList, setUserWatchList] = useState(() => {
    const savedList = localStorage.getItem("userWatchList")
    return savedList ? JSON.parse(savedList) : []
  })

  useEffect(() => {
    localStorage.setItem("userWatchList", JSON.stringify(userWatchList))
  }, [userWatchList])

  return [userWatchList, setUserWatchList] as const
}

export default function Layout() {
  const [userWatchList, setUserWatchList] = useUserWatchList()
  const navButtonStyle =
    "text-black text-sm p-1 font-limelight bg-white border-2 border-dotted border-yellow-400 rounded-md"

  return (
    <div className="site-wrapper flex flex-col h-screen">
      <header
        className="p-8 flex items-center justify-between lg:justify-start sm:px-8 bg-header-image bg-cover"
        role="banner"
      >
        <h1
          className="text-4xl text-white shadow-md bg-black p-4 rounded-lg font-limelight border-4 border-dotted border-yellow-400"
          aria-label="CineList"
        >
          CineList
        </h1>

        <nav className="flex flex-col sm:flex-row md:ml-8 items-center gap-2">
          <NavLink
            to="/"
            className={navButtonStyle}
            role="link"
            aria-label="Navigate to search movies page"
          >
            Search
          </NavLink>
          <NavLink
            to="/watchlist"
            className={navButtonStyle}
            role="link"
            aria-label="Navigate to watchlist page"
          >
            My Watchlist
          </NavLink>
        </nav>
      </header>

      {/* Main content area with max width applied */}
      <main className="flex-grow bg-gray-100 px-4 sm:px-8">
        <div className="max-w-screen-xl mx-auto">
          {" "}
          {/* Max-width container */}
          <Outlet context={[userWatchList, setUserWatchList]} />
        </div>
      </main>

      <footer className="mt-auto text-center bg-black text-white p-2">
        coded by Ryan Calacsan
      </footer>
    </div>
  )
}
