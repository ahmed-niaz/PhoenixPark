import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/FirebaseProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "border-2 rounded-xl border-[#d90429] bg-none text-sm font-bold"
              : "text-sm font-bold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/category"
          className={({ isActive }) =>
            isActive
              ? "border-2 rounded-xl border-[#d90429] bg-none text-sm font-bold text-[#d90429]"
              : "text-sm font-bold hover:"
          }
        >
          Category
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive
              ? "border-2 rounded-xl border-[#d90429] bg-none text-sm font-bold text-[#d90429]"
              : "text-sm font-bold hover:"
          }
        >
          Register
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "border-2 rounded-xl border-[#d90429] bg-none text-sm font-bold text-[#d90429]"
              : "text-sm font-bold hover:"
          }
        >
          About
        </NavLink>
      </li>
    </>
  );
  return (
    <main className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow  rounded-box w-52 z"
            >
              {links}
            </ul>
          </div>
          <Link className="btn btn-ghost text-3xl font-jersey text-[#d90429] tracking-wide">
            PhoenixPark
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          ></div>
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={
                      user?.photoURL ||
                      "https://i.ibb.co/8jzLLB4/438036378-984851046398483-5226497363877099275-n.jpg"
                    }
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button className="btn btn-sm  btn-ghost">
                    {user?.displayName || "user name not found"}
                  </button>
                </li>
                <li>
                  <button onClick={logOut} className="btn btn-sm  btn-ghost">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn glass bg-[#d90249] text-white">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </main>
  );
};

export default Navbar;
