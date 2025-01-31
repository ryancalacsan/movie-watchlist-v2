import { NavLink, Outlet } from "react-router"
import { useState, useEffect } from "react"
import { FaGithub, FaCode, FaLaptop } from "react-icons/fa"
import { CgWebsite } from "react-icons/cg"

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
    "text-black text-sm p-1 font-limelight bg-white border-2 border-dotted border-yellow-400 rounded-md hover:bg-yellow-400"

  return (
    <div className="site-wrapper flex flex-col h-screen">
      <header
        className="p-8 flex items-center justify-between lg:justify-start sm:px-8 bg-header-image bg-cover mb-2"
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
      <main className="flex-grow bg-gray-100 px-4 sm:px-8">
        <div className="max-w-screen-xl mx-auto">
          {" "}
          <Outlet context={[userWatchList, setUserWatchList]} />
        </div>
      </main>

      <footer className="mt-auto text-center bg-black text-white p-4 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <FaLaptop className="text-lg" />
          <p className="mb-4 sm:mb-0">Coded by Ryan Calacsan</p>
        </div>
        <div className="site-icons text-xl flex space-x-4 sm:space-x-6">
          <a
            href="https://github.com/ryancalacsan/movie-watchlist-v2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCode aria-label="Github Repo" />
          </a>
          <a
            href="https://github.com/ryancalacsan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub aria-label="Github profile" />
          </a>
          <a
            href="https://ryancalacsan.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CgWebsite aria-label="ryan calacsan's website" />
          </a>
        </div>
      </footer>
    </div>
  )
}
