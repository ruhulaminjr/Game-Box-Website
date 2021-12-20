import React, { useState } from "react";
import logo from "../../../../images/tv.png";
import menuicon from "../../../../images/Menu.png";
import Menu from "./Menu/Menu";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  if (open) {
    document.body.style.overflowY = "hidden";
  }
  return (
    <div className=" py-2 absolute top-2 left-0 z-10 w-full">
      <div className="container mx-auto">
        <div className="flex items-center justify-between ">
          <div className="flex  items-center gap-2">
            <img src={logo} alt="" />
            <h1 className="text-white font-bold text-2xl">Game Box</h1>
          </div>
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
            <button className="text-white text-md font-bold">Sign In</button>
            <button onClick={() => setOpen(true)}>
              <img src={menuicon} alt="" />
            </button>
          </div>
          <div className="block md:hidden">
            <button onClick={() => setOpen(true)}>
              <img src={menuicon} alt="" />
            </button>
          </div>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default Navbar;
