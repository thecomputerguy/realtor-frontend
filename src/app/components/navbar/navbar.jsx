

const Navbar = () => {
  return (
<nav className="bg-sky-950 flex items-center justify-between flex-wrap py-4 lg:px-12 shadow">
        <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 pb-5 lg:pb-0">
            <div className="flex items-center flex-shrink-0 text-white mr-16">
                <span className="font-semibold text-xl tracking-tight">My Navbar</span>
            </div>
            <div className="block lg:hidden ">
                <button
                    id="nav"
                    className="flex items-center px-3 py-2 rounded text-white hover:text-slate-700">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
        </div>
    
        <div className="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
            <div className="text-md font-bold text-white lg:flex-grow">
                <a href="#responsive-header"
                   className="block mt-4 lg:inline-block lg:mt-0 hover:text-slate-700 px-4 py-2 rounded mr-2">
                    Menu 1
                </a>
                <a href="#responsive-header"
                   className=" block mt-4 lg:inline-block lg:mt-0 hover:text-slate-700 px-4 py-2 rounded mr-2">
                    Menu 2
                </a>
                <a href="#responsive-header"
                   className="block mt-4 lg:inline-block lg:mt-0 hover:text-slate-700 px-4 py-2 rounded mr-2">
                    Menu 3
                </a>
            </div>
            
            <div className="relative mx-auto text-gray-600 lg:block hidden">
                <input className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
                    type="search" name="search" placeholder="Search" />
                <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
                    
                </button>
            </div>
            <div className="flex ">
                <a href="#"
                   className="block text-md px-4 py-2 rounded text-white ml-2 font-bold hover:text-slate-700 mt-4 lg:mt-0">Sign
                    in</a>
    
                <a href="#"
                   className=" block text-md px-4  ml-2 py-2 rounded text-white font-bold hover:text-slate-700 mt-4 lg:mt-0">Sign Up</a>
            </div>
        </div>
    
    </nav>
  )
}

export default Navbar