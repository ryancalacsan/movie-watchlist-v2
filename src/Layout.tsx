import { NavLink, Outlet } from "react-router"

export default function Layout() {
  return (
    <div className="site-wrapper flex flex-col h-screen">
      <header className="p-8 flex items-center justify-between bg-header-image bg-cover">
        <h1 className=" tracking-widest text-4xl text-white shadow-md bg-black p-4 rounded-lg  font-limelight border-4 border-dotted border-yellow-400">
          CineList
        </h1>
        <nav>
          <NavLink
            to="/"
            className={
              "text-black p-2 font-limelight bg-white border-2 border-dotted border-yellow-400 rounded-md"
            }
          >
            Search
          </NavLink>
          <NavLink
            className={
              "text-black p-2 ml-4 font-limelight bg-white border-2 border-dotted border-yellow-400 rounded-md"
            }
            to="/watchlist"
          >
            My Watchlist
          </NavLink>
        </nav>
      </header>
      <main className="">
        <Outlet />
      </main>
      <footer className="mt-auto text-center bg-black text-white p-2">
        coded by Ryan Calacsan
      </footer>
    </div>
  )
}
