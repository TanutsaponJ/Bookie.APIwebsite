import { Link } from "react-router-dom";
import { FaSearch, FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const menuList = [
    { title: "Books", path: "/" },
    { title: "Categories", path: "/" },
    { title: "Authors", path: "/" },
    { title: "About", path: "/" },
    { title: "Contact", path: "/" },
  ];

  const [search, setSearch] = useState("");
  const [openMenu, SetOpenMenu] = useState(false);

  const searchBook = (e) => {
    if (e.key === "Enter") {
      console.log("Enter");
    }
  };

  const toggleMenu = () => {
    SetOpenMenu(!openMenu);
  };

  const closeMenu = () => {
    SetOpenMenu(false);
  };

  return (
    <header className="max-w-screen-2xl xl:px-28 px-4 top-0 right-0 left-0 mx-auto absolute bg-backgroundColor">
      <nav className="flex justify-between items-center container md:py-4 p-2">
        <div>
          <a href="/" className="text-2xl font-extrabold font-bodoni">
            Bookie.
          </a>
        </div>

        <div>
          <ul className="lg:flex items-center justify-between text-textColor hidden gap-4 font-semibold text-xl">
            {menuList.map((menuItem, i) => (
              <li key={i} className="hover:text-accentColor">
                <Link>{menuItem.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            name="book-search"
            onKeyDown={searchBook}
            className="border border-textColor rounded-md px-4 py-1 text-xl focus:outline-none"
            placeholder="Search..."
          />
          <button>
            <FaSearch className="w-5 h-5 text-textColor" />
          </button>
        </div>

        {/* nav icons for sm devices */}

        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            {openMenu ? (
              <FaTimes className="w-5 h-5 text-textColor" />
            ) : (
              <FaBars className="w-5 h-5 text-textColor" />
            )}
          </button>
        </div>
      </nav>

      {/* mobile menu devices */}

      <div>
        <ul
          className={`bg-backgroundColor text-black px-4 py-2 rounded ${
            openMenu ? "" : "hidden"
          }`}
        >
          {menuList.map((title, i) => (
            <li
              key={i}
              className="hover:text-accentColor text-center m-2 md:hidden"
              onClick={closeMenu}
            >
              <Link>{title.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div></div>
    </header>
  );
};

export default Navbar;
