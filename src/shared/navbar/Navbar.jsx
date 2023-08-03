import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = (
    <>
      <li className="uppercase font-semibold ">
        <a>Home</a>
      </li>
      <li className="uppercase font-semibold">
        <a>Contact Us</a>
      </li>
      <li className="uppercase font-semibold">
        <a>Dashbord</a>
      </li>
    </>
  );
  // fixed top-0 left-0 right-0
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-10"
      style={{ background: "rgba(21, 21, 21, 0.50)" }}
    >
      <div className="container mx-auto navbar p-0 text-white">
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
              {menuItems}
            </ul>
          </div>
          {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}

          <Link className="flex flex-col" to={"/"}>
            <span className="uppercase font-bold">Bistro Boss</span>
            <span className="font-semibold">Restaurant</span>
          </Link>
        </div>
        <div className="navbar-end">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{menuItems}</ul>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
