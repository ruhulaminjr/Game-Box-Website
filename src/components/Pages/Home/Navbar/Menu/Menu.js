import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../../../hooks/useAuth";
import "./menu.css";
const Menu = ({ menuOpen, setMenuOpen }) => {
  const { user, Logout } = useAuth();
  return (
    <div>
      <nav
        className={`${
          menuOpen ? "menu-open" : "menu-close"
        } menu-close flex flex-col bg-gray-900 w-64 h-screen px-4 tex-gray-900 border border-gray-900 scroll-auto fixed top-0 right-0`}
      >
        <div className="mt-10 mb-4">
          <div className="flex items-center justify-center mb-8">
            <button onClick={() => setMenuOpen(false)}>
              <i class="fas fa-times text-white text-3xl hover:scale-150 transition-transform"></i>
            </button>
          </div>

          <ul className="ml-4">
            <Link
              to="dashboard"
              className="flex items-center mb-2 px-4 py-4 text-gray-100 flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg"
            >
              <span>
                <svg className="fill-current h-5 w-5 " viewBox="0 0 24 24">
                  <path
                    d="M16 20h4v-4h-4m0-2h4v-4h-4m-6-2h4V4h-4m6
                        4h4V4h-4m-6 10h4v-4h-4m-6 4h4v-4H4m0 10h4v-4H4m6
                        4h4v-4h-4M4 8h4V4H4v4z"
                  ></path>
                </svg>
              </span>
              <span>
                <span className="ml-2">Dashboard</span>
              </span>
            </Link>
            {!user.email ? (
              <Link
                to="register"
                className="flex items-center mb-2 px-4 py-4 text-gray-100 flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg"
              >
                <span>
                  <i class="fas fa-sign-in-alt"></i>
                </span>
                <span>
                  <span className="ml-2">Sign In</span>
                </span>
              </Link>
            ) : (
              <button
                onClick={Logout}
                className="flex items-center mb-2 px-4 py-4 text-gray-100 flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg"
              >
                <span>
                  <i class="fas fa-sign-in-alt"></i>
                </span>
                <span>
                  <span className="ml-2">Log Out</span>
                </span>
              </button>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
