import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <Link className="text-lg mx-2" href="/">
              <li>Home</li>
            </Link>
            <li>
              Motherboard
              <ul className="p-2">
                <li className="text-lg mx-2">
                  <Link href="/category/Processor">Processor</Link>
                </li>
                <li className="text-lg mx-2">
                  <Link href="/category/Motherboard">Motherboard</Link>
                </li>
                <li className="text-lg mx-2">
                  <Link href="/category/RAM">RAM</Link>
                </li>
                <li className="text-lg mx-2">
                  <Link href="/category/Power%20Supply%20Unit">
                    Power Supply Unit
                  </Link>
                </li>
                <li className="text-lg mx-2">
                  <Link href="/category/Storage%20Device">Storage Device</Link>
                </li>
                <li className="text-lg mx-2">
                  <Link href="/category/Monitor">Monitor</Link>
                </li>
                <li className="text-lg mx-2">
                  <Link href="/category/GPU">GPU</Link>
                </li>
                <li className="text-lg mx-2">
                  <Link href="/category/Mouse">Mouse</Link>
                </li>
                <li className="text-lg mx-2">
                  <Link href="/category/Keyboard">Keyboard</Link>
                </li>
              </ul>
            </li>
            <Link className="text-lg mx-2" href="/">
              <li>About</li>
            </Link>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Computer Bazar
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <Link className="text-lg mx-2" href="/">
            <li>Home</li>
          </Link>

          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className=" my-1 mx-2 text-lg ">
              Categories
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="text-lg mx-2">
                <Link href="/category/Processor">Processor</Link>
              </li>
              <li className="text-lg mx-2">
                <Link href="/category/Motherboard">Motherboard</Link>
              </li>
              <li className="text-lg mx-2">
                <Link href="/category/RAM">RAM</Link>
              </li>
              <li className="text-lg mx-2">
                <Link href="/category/Power%20Supply%20Unit">
                  Power Supply Unit
                </Link>
              </li>
              <li className="text-lg mx-2">
                <Link href="/category/Storage%20Device">Storage Device</Link>
              </li>
              <li className="text-lg mx-2">
                <Link href="/category/Monitor">Monitor</Link>
              </li>
              <li className="text-lg mx-2">
                <Link href="/category/GPU">GPU</Link>
              </li>
              <li className="text-lg mx-2">
                <Link href="/category/Mouse">Mouse</Link>
              </li>
              <li className="text-lg mx-2">
                <Link href="/category/Keyboard">Keyboard</Link>
              </li>
            </ul>
          </div>
          <Link className="text-lg mx-2" href="/">
            <li>About</li>
          </Link>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          className="btn bg-emerald-500 hover:bg-emerald-500 text-white hover:text-white "
          href="/pcbuilder"
        >
          PC Builder
        </Link>

        <button
          className="btn ml-2 bg-emerald-500 hover:bg-emerald-500 text-white hover:text-white "
          href="/register"
        >
          Log Out
        </button>

        <Link
          className="btn ml-2 bg-emerald-500 hover:bg-emerald-500 text-white hover:text-white "
          href="/register"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
