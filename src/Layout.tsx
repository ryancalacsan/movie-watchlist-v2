import { NavLink, Outlet } from "react-router"
import { useState } from "react"

export default function Layout() {
  const [userWatchList, setUserWatchList] = useState([])

  return (
    <div className="site-wrapper flex flex-col h-screen">
      <header className="p-8 flex items-center justify-between bg-header-image bg-cover">
        <h1 className=" tracking-widest text-4xl text-white shadow-md bg-black p-4 rounded-lg  font-limelight border-4 border-dotted border-yellow-400">
          CineList
        </h1>
        <nav className="flex flex-col items-center gap-2">
          <NavLink
            to="/"
            className={
              "text-black text-sm p-1 font-limelight bg-white border-2 border-dotted border-yellow-400 rounded-md"
            }
          >
            Search
          </NavLink>
          <NavLink
            className={
              "text-black text-sm  p-1 font-limelight bg-white border-2 border-dotted border-yellow-400 rounded-md"
            }
            to="/watchlist"
          >
            My Watchlist
          </NavLink>
        </nav>
      </header>
      <main className="">
        <Outlet context={[userWatchList, setUserWatchList]} />
      </main>
      <footer className="mt-auto text-center bg-black text-white p-2">
        coded by Ryan Calacsan
      </footer>
    </div>
  )
}
