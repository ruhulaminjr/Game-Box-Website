import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import adminbg from "../../../../../images/makeadminbg.jpg";
const MakeAdmin = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()
  const onSubmit = (data) => {
    console.log(data);
    axios
      .get(`http://localhost:5000/makeadmin/${data.email}`)
      .then((result) => {
        if(result.data.acknowledged){
          navigate("/")
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className="container mx-auto h-screen w-screen flex justify-center items-center"
      style={{ background: `url(${adminbg})`, backgroundSize: "cover" }}
    >
      <div className="py-8 px-4 bg-white w-full lg:w-1/2 md:w-2/3 shadow-lg rounded-md">
        <div className="py-4 flex justify-center">
          <Link to="/" className="primary-btn">
            Home page
          </Link>
        </div>
        <h1 className="text-center font-bold text-2xl ">Make A User Admin</h1>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative w-full mb-3">
              <input
                type="email"
                className="text-white border-0 px-2 py-4 placeholder-neutral-100 text-blueGray-600 bg-gray-600 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Enter Your Email"
                {...register("email")}
                required
              />
            </div>
            <div className="flex justify-center">
              <button type="submit" className="primary-btn">
                Make Admin
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
