function Navbar({ children }: { children: React.ReactNode}) {
  
  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar bg-gray-700">
            <div className="navbar-start">
              <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </label>
              </div>
              <div className="flex-1 px-2 mx-2">FlixHq</div>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                {/* Navbar menu content here */}
                <li><a>Movies</a></li>
                <li><a>Tv Shows</a></li>
                <li><a>Trending</a></li>
              </ul>
            </div>
            <div className="navbar-end">
              <a className="btn bg-yellow-500 text-black hover:bg-blue-500 focus">Get Started</a>
            </div>
          </div>
          {/* Page content here*/}
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            <li><a>Movies</a></li>
            <li><a>Tv Shows</a></li>
            <li><a>Trending</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar