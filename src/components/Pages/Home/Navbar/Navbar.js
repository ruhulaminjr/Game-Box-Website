import React, { useState } from "react";
import logo from "../../../../images/tv.png";
import menuicon from "../../../../images/Menu.png";
import Menu from "./Menu/Menu";
import { Link } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {user} = useAuth()
  return (
    <div className=" py-2 absolute top-2 left-0 z-10 w-full">
      <div className="container mx-auto">
        <div className="flex items-center justify-between ">
          <Link to="/" className="flex  items-center gap-2">
            <img src={logo} alt="" />
            <h1 className="text-white font-bold text-2xl">Game Box</h1>
          </Link>
          <div className="hidden md:block">
            <form>
              <input
                type="text"
                placeholder="What do you Want ?"
                className="font-bold px-4 py-2 text-white bg-transparent border-2 rounded-md"
              />
            </form>
          </div>
          <div className=" items-center gap-5 hidden md:flex">
            <Link to="/register" className="text-white text-md font-bold">
              {user.displayName}
            </Link>
            <button onClick={() => setMenuOpen(true)}>
              <img src={menuicon} alt="" />
            </button>
          </div>
          <div className="block md:hidden">
            <button onClick={() => setMenuOpen(true)}>
              <img src={menuicon} alt="" />
            </button>
          </div>
        </div>
      </div>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
};

export default Navbar;
