import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import gamingbg from "../../../images/gamingbg.jpg";
import Navbar from "../Home/Navbar/Navbar";
const Register = () => {
  const [isNewUser, setIsNewUser] = useState(false);
  const location = useLocation();
  const redirectUrl = location.state?.from?.pathname;
  const Navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const {
    authLoading,
    GoogleLogin,
    loginWithEmail,
    registerWithEmail,
    authError,
  } = useAuth();
  const onSubmit = (data) => {
    const {Email,Password,Name} = data;
    if(isNewUser){
      registerWithEmail(Email,Password,Navbar,Navigate)

    }else{
      loginWithEmail(Email,Password,Navigate)
    }
  };

  return (
    <section
      className="bg-blueGray-50 h-screen flex justify-center items-center w-full"
      style={{
        backgroundImage: `url(${gamingbg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        opacity: ".9",
        zIndex: "-2",
      }}
    >
      <div className="w-full lg:w-4/12 px-4 mx-auto pt-6 z- z-20 ">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-2xl bg-gray-200 rounded-lg bg-blueGray-200 border-0">
          <div className="py-4 flex justify-center">
            <Link to="/" className="primary-btn">
              Home page
            </Link>
          </div>
          <div className="rounded-t mb-0 px-6 py-6">
            <div className="text-center mb-3">
              <h6 className="text-blueGray-500 text-sm font-bold">
                Sign in with
              </h6>
            </div>
            <div className="btn-wrapper text-center">
              <button
                className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button"
                onClick={()=>GoogleLogin(Navigate,redirectUrl)}
              >
                <img
                  alt="..."
                  className="w-5 mr-1"
                  src="https://demos.creative-tim.com/notus-js/assets/img/google.svg"
                />
                Google{" "}
              </button>
            </div>
            <hr className="mt-6 border-b-1 border-blueGray-300" />
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div className="text-blueGray-400 text-center mb-3 font-bold">
              {isNewUser ? (
                <h3>Sign Up With Email</h3>
              ) : (
                <h3>Sign In With Email</h3>
              )}
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              {isNewUser && (
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Full-Name"
                    {...register("Name")}
                    required
                  />
                </div>
              )}

              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Email"
                  {...register("Email")}
                  required
                />
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Password"
                  {...register("Password")}
                  required
                />
              </div>
              <div className="text-center mt-6">
                {isNewUser ? (
                  <button className="primary-btn" type="submit">
                    Register
                  </button>
                ) : (
                  <button className="primary-btn" type="submit">
                    Login
                  </button>
                )}
              </div>
            </form>
            <div className="flex justify-center py-4">
              {!isNewUser ? (
                <h5>
                  New User ?
                  <button
                    className="text-red-700 font-bold"
                    onClick={() => setIsNewUser(true)}
                  >
                    Register Here
                  </button>
                </h5>
              ) : (
                <h5>
                  Already a User ?
                  <button
                    className="text-red-700 font-bold"
                    onClick={() => setIsNewUser(false)}
                  >
                    Login Here
                  </button>
                </h5>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
