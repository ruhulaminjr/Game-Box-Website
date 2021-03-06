import React, { useState } from "react";
import logo from "../../../../images/tv.png";
import menuicon from "../../../../images/Menu.png";
import Menu from "./Menu/Menu";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { fetchGameSearch } from "../../../../Redux/GameSlice/Fetch/Fetch";
const Navbar = ({ isbg }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()
  const { user } = useAuth();
  const dispatch = useDispatch();
  const onsubmit = (data) => {
    const searchText = data.search;
    dispatch(fetchGameSearch(searchText));
    navigate(`/seemore/search-result`);
    
  };
  return (
    <div
      className={`py-2 absolute top-2 left-0 z-10 w-full ${
        isbg ? "bg-gray-700" : ""
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between ">
          <Link to="/" className="flex  items-center gap-2">
            <img src={logo} alt="" />
            <h1 className="text-white font-bold text-2xl">Game Box</h1>
          </Link>
          <div className="hidden md:block">
            <form onSubmit={handleSubmit(onsubmit)}>
              <input
                type="text"
                placeholder="What do you Want ?"
                className="font-bold px-4 py-2 text-white bg-transparent border-2 rounded-md"
                {...register("search")}
                required
              />
            </form>
          </div>
          <div className=" items-center gap-5 hidden md:flex">
            <span className="text-white text-md font-bold">
              {user.displayName}
            </span>
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
