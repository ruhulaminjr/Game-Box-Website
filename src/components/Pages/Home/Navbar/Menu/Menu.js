import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../../../hooks/useAuth";
import "./menu.css";
const Menu = ({ menuOpen, setMenuOpen }) => {
  const { user, Logout, admin } = useAuth();
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
              <i className="fas fa-times text-white text-3xl hover:scale-150 transition-transform"></i>
            </button>
          </div>

          <ul className="ml-4">
            {/* admin link  */}
            {user.email && (
              <>
                {" "}
                {admin ? (
                  <>
                    <Link
                      to="makeadmin"
                      className="flex items-center mb-2 px-4 py-4 text-gray-100 flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg"
                    >
                      <i className="fas fa-users-cog"></i>
                      <span>
                        <span className="ml-2">Make Admin</span>
                      </span>
                    </Link>
                    <Link
                      to="manageorders"
                      className="flex items-center mb-2 px-4 py-4 text-gray-100 flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg"
                    >
                      <i className="fas fa-cart-arrow-down"></i>
                      <span>
                        <span className="ml-2">Manage Orders</span>
                      </span>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to="/pay"
                      className="flex items-center mb-2 px-4 py-4 text-gray-100 flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg"
                    >
                      <i className="fab fa-paypal"></i>
                      <span>
                        <span className="ml-2">Pay</span>
                      </span>
                    </Link>
                    <Link
                      to="/mycarts"
                      className="flex items-center mb-2 px-4 py-4 text-gray-100 flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg"
                    >
                      <i className="fas fa-cart-plus"></i>
                      <span>
                        <span className="ml-2">My Carts</span>
                      </span>
                    </Link>
                    {/* <Link
                      to="/addreview"
                      className="flex items-center mb-2 px-4 py-4 text-gray-100 flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg"
                    >
                      <i className="fas fa-star-half-alt"></i>
                      <span>
                        <span className="ml-2">Add Review</span>
                      </span>
                    </Link> */}
                  </>
                )}
              </>
            )}
            {!user.email ? (
              <Link
                to="register"
                className="flex items-center mb-2 px-4 py-4 text-gray-100 flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg"
              >
                <span>
                  <i className="fas fa-sign-in-alt"></i>
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
                  <i className="fas fa-sign-in-alt"></i>
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
